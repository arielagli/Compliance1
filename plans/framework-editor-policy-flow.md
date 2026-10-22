# Framework editor and policy enforcement flow

## Goal

Replace the current nested-drawer experience with a clear two-level Administration flow:

1. The Compliance Catalog remains a normal Administration page.
2. Selecting a framework opens a full framework editor page inside the existing Administration shell.
3. Creating or editing a rule policy opens a single bottom sheet over that editor page.

The result must make rule availability and policy enforcement distinct:

- The rule switch controls whether the rule is available.
- `Enforce` creates an optional policy for an enabled rule.
- A rule may have multiple policies.

## Confirmed UX decisions

### Framework navigation

- Keep the existing Administration sidebar and global top navigation visible.
- Clicking a framework card replaces the catalog content area with a full editor page; it must not open an overlay or drawer.
- The editor has:
  - A breadcrumb ending in the framework name.
  - A visible back arrow next to `Edit {framework.name}`.
  - The framework logo, description, and existing published/unpublished toggle.
- The back arrow and the `Compliance Catalog` breadcrumb segment both return to the catalog.
- Navigating to another Administration item or changing the top-level tab naturally unmounts the editor and closes any transient editor UI.

### Rule rows

- Disabled rule:
  - Shows the existing switch and Replace behavior.
  - Does not show `Enforce`.
- Enabled rule:
  - Shows `Enforce` persistently on the right; it must not depend on hover.
  - Keeps the existing Replace/Reset and description interactions.
- `Enforce` remains available after policies exist so that multiple policies can be created.
- Existing policies appear in a compact list below the rule row.
- Each policy row shows its scope and its `Fail` or `Warning` action.
- Clicking a policy opens the same bottom sheet in edit mode.

### Policy bottom sheet

- The sheet opens from the bottom over the full framework editor and covers roughly 90% of the viewport.
- A dim overlay remains behind it.
- Create and edit use the same component and layout.
- The form contains only:
  - Scope: Global Organisation, Projects, or Applications.
  - Action: Fail or Warning.
- Do not show Waivers or the removed `Not allowed`, `Manual approval`, or `Automatic approval` options.
- Create mode:
  - Header communicates `Enforce`.
  - Primary action is `Create policy`.
  - If policies already exist, explain that another policy will be added.
- Edit mode:
  - Header communicates `Edit policy`.
  - Primary action is `Save policy`.
  - Include a destructive `Delete policy` action in the footer.
- Closing via Cancel, close/back control, overlay, or Escape discards unsaved changes.
- Saving or deleting closes the sheet and returns to the same selected control and scroll context.

### Policy deletion and rule disabling

- Deleting a policy is only available from the edit-policy sheet.
- `Delete policy` opens a short confirmation dialog before making the destructive change.
- If a rule has one or more policies, switching the rule off is blocked.
- Instead of opening the normal Disable Reason flow, show a clear blocking message explaining that all policies must be deleted first.
- After the final policy is deleted, the existing Disable Reason flow is available again.
- Blocking a disable must not modify the switch, policies, or disable reason.

## Current implementation findings

- All implementation is in `src/app/App.tsx`.
- `ComplianceCatalog` currently owns `openFrameworkId`, drawer animation state, and a close timer.
- `FrameworkDrawer` is a fixed bottom drawer with an overlay; its internal two-column Controls/Requirements content is reusable.
- `DrawerRuleRow` currently owns policies locally, so policies disappear when its component unmounts.
- `PolicyDrawer` already supports create/edit Scope and Action and already omits Waivers.
- `App` owns framework rule/publish state, which already survives catalog/editor navigation.
- The project has no route-level page router for Administration; screens are selected through React state in `App`.

## Implementation plan

### 1. Move policy data to durable application state

- Keep `RulePolicy` as the policy model, with a stable ID, `scope`, and `action`.
- Add `policiesByRuleId: Record<string, RulePolicy[]>` state in `App`.
- Add explicit immutable callbacks in `App` for:
  - Creating a policy for a rule ID.
  - Updating a policy by rule ID and policy ID.
  - Deleting a policy by rule ID and policy ID.
- Pass the policy map and callbacks through `ComplianceCatalog` to the editor and rule rows.
- Address policies by stable policy ID rather than array index so deletion and editing cannot target the wrong policy.
- Keep this state in `App` so policies survive back-navigation to the catalog, reopening a framework, and switching between Administration and Platform during the prototype session.

### 2. Convert the framework drawer into a page component

- Replace `FrameworkDrawer` with a page-oriented component such as `FrameworkEditorScreen`.
- Remove its fixed positioning, overlay, transform animation, `isOpen`, close timer dependency, and drawer-only rounded/shadow shell.
- Preserve and adapt the existing editor internals:
  - Controls search and selected-control state.
  - Expandable control descriptions.
  - Requirements cards and rule rows.
  - Framework publish toggle.
- Add the editor breadcrumb:
  - Selected project.
  - AppTrust Settings.
  - Compliance Catalog as a clickable return target.
  - Current framework name as the final segment.
- Add a back arrow beside the editor title that calls the same catalog-return handler.
- Lay out the Controls and Requirements columns as a normal bounded content panel inside the main page, using the available content height rather than fixed viewport positioning.

### 3. Change Compliance Catalog from drawer state to page state

- Replace `openFrameworkId`, `isDrawerOpen`, and the close timer with a single selected framework ID.
- When no framework is selected, render the current catalog header and cards.
- When a framework is selected, render `FrameworkEditorScreen` in the content area.
- Framework-card clicks set the selected framework ID.
- Back arrow and the catalog breadcrumb clear the selected framework ID.
- Preserve the existing framework publish and rule-toggle mutations against `frameworks`.

### 4. Make Enforce and policy rows explicit

- Refactor `DrawerRuleRow` into a neutral page/editor row name if useful, while preserving existing Replace, Reset, description, and disable behaviors.
- Remove local `policies` state.
- Receive the rule’s policies and create/edit/delete callbacks through props.
- Render `Enforce` persistently whenever `rule.enabled` is true; keep other secondary hover actions unchanged unless layout requires them to remain accessible.
- Render policy summaries below the rule using stable policy IDs as keys.
- Open create mode from `Enforce`.
- Open edit mode from a policy summary.
- Keep bottom-sheet open state local to the rule/editor because it is transient, while policy data remains in `App`.

### 5. Complete the policy sheet behavior

- Keep `PolicyDrawer` as the only overlay sheet in this flow.
- Position it below the global header at approximately 90% viewport height, with the existing dim overlay and bottom-entry visual treatment.
- Initialize create mode from defaults and edit mode from the selected policy.
- Ensure local draft state resets when opening a different policy, either by keying the sheet with rule/policy/mode or explicitly resetting state.
- Route the primary action to create or update by stable IDs.
- Add `onDelete` only in edit mode.
- Add a small destructive confirmation dialog consistent with the existing Replace/Disable/Reset confirmation patterns.
- Confirmed deletion removes the policy, closes both confirmation and sheet, and reveals the updated list underneath.
- Overlay, Escape, Cancel, and close/back controls only close the sheet and never persist draft changes.

### 6. Block disabling rules that still have policies

- Before invoking the existing disable confirmation, check the policy count for the rule.
- If policies exist:
  - Keep the switch on.
  - Do not open Disable Reason.
  - Open a blocking informational dialog/message with copy such as: `Delete all policies before disabling this rule.`
  - Provide a single dismiss action.
- If no policies exist, preserve the existing Disable Reason flow unchanged.

## State and behavior boundaries

- Framework `published` and rule `enabled` continue to live in `frameworks`.
- Policies live separately in `policiesByRuleId`; no framework data-shape migration is required.
- Editor-only state such as search, selected control, expanded control descriptions, and scroll position stays mounted while the policy sheet is open.
- Returning to the catalog may reset editor-only search/control selection when the framework is reopened; durable rule, replacement, and policy data should not depend on those transient selections.
- Scope selector dropdown internals remain at the current prototype fidelity unless separately requested; this change focuses on hierarchy, policy creation/editing, and lifecycle behavior.

## Acceptance criteria

1. Clicking NIST SSDF in Compliance Catalog opens a normal full editor page with breadcrumb and back arrow; no framework overlay appears.
2. Back arrow and Compliance Catalog breadcrumb return to the cards.
3. Enabling a rule makes a persistent `Enforce` button appear.
4. Clicking `Enforce` opens one bottom sheet over the editor, not a drawer over another drawer.
5. The policy form shows Scope and Action only; no Waivers content exists.
6. Creating two policies for the same rule produces two separate policy rows.
7. Clicking either policy opens its own values in edit mode.
8. Saving edits updates the correct policy without changing the other policy.
9. Cancel, overlay click, Escape, and close/back discard unsaved edits.
10. Delete policy is available only in edit mode and requires confirmation.
11. Attempting to disable a rule with policies is blocked and does not mutate state.
12. After deleting the final policy, the normal Disable Reason flow works.
13. Returning to the catalog and reopening the framework preserves created policies.
14. Existing Replace, Reset, publish toggle, control search, control selection, and rule descriptions continue to work.

## Verification

- Run `pnpm build`.
- Manually exercise the complete NIST SSDF path in the existing supervised preview:
  1. Catalog → editor → back.
  2. Enable a rule.
  3. Create Global/Fail and Applications/Warning policies.
  4. Edit each policy and verify stable targeting.
  5. Cancel an edit and confirm no state change.
  6. Attempt to disable with policies and verify the blocking message.
  7. Delete policies through edit mode, then disable the rule through the existing Disable Reason dialog.
  8. Reopen the framework and confirm policy persistence before deletion.
- Check representative EU CRA and DORA/framework cards to ensure the page conversion is generic rather than NIST-specific.
- Confirm keyboard Escape closes the policy sheet and that clickable controls have accessible labels.
