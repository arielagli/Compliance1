# Plan: Global Admin Lock — Toggle Visual Redesign (Follow-up)

## Context

The Global Admin Lock (Step 2 rules) is already implemented. User feedback asks to refine the locked-state visuals:

1. **No double lock icon** — remove the lock icon sitting next to the toggle; the sub-label "Set by Global Administrator" already conveys the reason.
2. **Bright "active-disabled" color** — instead of the regular dark green `#2a8553`, use a vivid lighter green that clearly reads as "ON but you can't touch it." The Figma-imported Switch component gives us `#d9fad2` for `on=on, state=disabled`; the user wants something more saturated — propose `#86efac` (a vivid mint, between pale and full green) which is clearly ON but visually distinct from the interactive state.
3. **Tooltip on hover** — instead of the always-visible sub-label, explain the lock reason in a hover tooltip above the toggle. Cleaner row; explanation surfaces only when needed.
4. **Remove sub-label from the row** — the "Set by Global Administrator" text under the rule name moves entirely into the tooltip.

---

## File to modify

**`src/app/App.tsx`** — only the locked rule row rendering block (~lines 2565–2610).  
No changes to `WizardConfig`, state, or toggle handler — those are already correct.

---

## Changes to the locked rule row

### Toggle pill
- Remove the wrapping `<div className="flex items-center gap-1 ...">` + the `<Lock size={11} />` next to the toggle.
- Replace with a single `relative group/locked` wrapper `<div>` so hover on the pill triggers the tooltip.
- Pill color when `isOn && isLocked`: `bg-[#86efac]` (vivid mint — "active disabled"). If `!isOn && isLocked`: keep `bg-[#eaeef5]` (greyed, same as the Figma off-disabled state).
- `cursor-not-allowed` on the wrapper.

### Tooltip
Render a floating tooltip on `group-hover/locked`:
```tsx
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] bg-[#1e2533] text-white text-[11px] rounded-md px-3 py-2 leading-[16px] opacity-0 group-hover/locked:opacity-100 pointer-events-none transition-opacity z-50 text-center">
  Set by Global Administrator.<br/>This rule cannot be modified from a specific project.
  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#1e2533]" />
</div>
```

### Sub-label removal
Remove the `{isLocked && <span>...<Lock size={9} />Set by Global Administrator</span>}` block entirely from under the rule label.

### Warn/Fail radios
No change — already disabled and greyed when `isLocked`.

### Row dimming
No change — row does not dim when locked (`!isOn && !isLocked` condition stays as-is).

---

## Color rationale

| State | Color | Meaning |
|---|---|---|
| ON, interactive | `#2a8553` | Active, editable |
| ON, locked | `#86efac` | Active, admin-enforced (vivid but lighter) |
| OFF, locked | `#eaeef5` | Inactive, admin-enforced |
| OFF, interactive | `#999db4` | Inactive, editable |

---

## Verification

1. All Projects → Step 2 → toggle ON a rule → Done.  
2. Switch to specific project → Step 2 → same app/rule.  
3. Toggle shows **vivid mint pill** (`#86efac`), no lock icon beside it, Warn/Fail greyed.  
4. Hover the toggle → dark tooltip appears with explanation text.  
5. Rule label row is clean — no sub-label below rule name.  
6. Off-state locked rule shows `#eaeef5` pill with tooltip on hover.  
7. Unlock path: All Projects → toggle OFF → switch back to project → rule is now interactive and grey.
