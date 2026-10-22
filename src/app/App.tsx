import { useState, useRef, useEffect } from "react";
import doraLogo from "@/imports/image-2.png";
import { createPortal } from "react-dom";
import { ChevronDown, RefreshCw, ArrowLeftRight, X, Search, ExternalLink, Lock } from "lucide-react";
import Radio from "@/imports/Radio/index";
import svgPaths from "@/imports/AdminComplaince/svg-tdo8h4nnsl";
import Impact from "@/imports/Impact/index";
import svgPaths1 from "@/imports/AdminComplaince-1/svg-td628oidch";
import svgPathsPlatform from "@/imports/PlatformComplaince/svg-ikian8ffl8";
import svgPathsP6 from "@/imports/PlatformComplaince-6/svg-zbn0f43zk8";
import NoSearchResultsMedium from "@/imports/NoSearchResultsMedium/index";
import svgPathsEmptyState from "@/imports/PlatformComplaince-8/svg-v9esxaw9gv";
import CanbanEvaluationCreateRequest from "@/imports/CanbanEvaluationCreateRequest/index";
import GateDetails from "@/imports/GateDetails-2/index";
import svgPathsCompliance9 from "@/imports/PlatformComplaince-9/svg-e5yrrdvv48";

// ─── Types ───────────────────────────────────────────────────────────────────

type SidebarItemId =
  | "all-projects" | "stages-lifecycle" | "repositories" | "user-management"
  | "user-authentication" | "security" | "general-management" | "monitoring"
  | "topology" | "artifactory-settings" | "apptrust-settings" | "xray-settings"
  | "curation-settings" | "runtime" | "connect" | "worker";

type AppTrustSubItemId =
  | "compliance-catalog" | "integrations" | "packages-settings"
  | "repository-imp-exp" | "repositories-layouts" | "property-sets"
  | "maven-indexer" | "retention-policies";

interface RuleItem {
  id: string;
  label: string;
  iconType: "shield" | "lock";
  enabled: boolean;
  description?: string;
}

interface RequirementItem {
  id: string;
  title: string;
  rules: RuleItem[];
}

interface ControlItem {
  id: string;
  tag: string;
  title: string;
  requirements: RequirementItem[];
  description?: string;
}

interface Framework {
  id: string;
  abbr: string;
  color: string;
  logo?: string;
  name: string;
  category: string;
  description: string;
  published: boolean;
  totalRules: number;
  baseEnabledRules: number;
  controls: ControlItem[];
}

// ─── Initial data ─────────────────────────────────────────────────────────────

const INITIAL_FRAMEWORKS: Framework[] = [
  {
    id: "nist-ssdf", abbr: "NIST", color: "#1a1a1a", name: "NIST SSDF", category: "Security",
    description: "The NIST Secure Software Development Framework provides a set of fundamental, sound practices for developing more secure software.",
    published: true, totalRules: 168, baseEnabledRules: 0,
    controls: [
      {
        id: "nist-c6", tag: "PW.5.1", title: "Secure coding practices",
        description: "Follow all secure coding practices that are appropriate to the development languages and environment to meet the organization's requirements.",
        requirements: [
          { id: "nist-c6-r1", title: "SDLC Policy Document - when and how to perform code review and code analysis, methods selection per SDLC stage.", rules: [
            { id: "nist-c6-r1-1", label: "SDLC Policy Document available and valid", iconType: "shield", enabled: false, description: "An SDLC policy document must exist and be kept current, specifying when and how code review and code analysis are performed, and which methods are selected at each SDLC stage." },
          ]},
          { id: "nist-c6-r2", title: "Code Review Records - developers reviewed their own code, and an additional review by a person or an automated tool was also performed.", rules: [
            { id: "nist-c6-r2-1", label: "Verify PR evidence - at least one approver that isn't the committer", iconType: "shield", enabled: false, description: "Every pull request must have at least one approval from a reviewer who is not the committer, confirmed by PR records, ensuring both self-review and independent review took place." },
          ]},
          { id: "nist-c6-r3", title: "Vulnerability analysis is performed before production promotion.", rules: [
            { id: "nist-c6-r3-1", label: "Critical CVE with CVSS score between 9.0 and 10.0 (skip if not applicable) + VEX Generated", iconType: "shield", enabled: false, description: "Vulnerability analysis must be completed before any production promotion. Any critical CVE (CVSS 9.0–10.0) must be addressed or documented as not applicable, and a VEX document must be generated." },
          ]},
          { id: "nist-c6-r4", title: "Issue tracking records for code review findings - root causes, remediations, lessons learned accessible to developers.", rules: [
            { id: "nist-c6-r4-1", label: "Verify Jira Evidence", iconType: "shield", enabled: false, description: "Issue tracking records (e.g., Jira tickets) for code review findings must document root causes, remediations, and lessons learned, and must be accessible to all developers on the team." },
          ]},
          { id: "nist-c6-r5", title: "Secure Coding Standards Document - secure coding practices for the development languages in use, including input validation, output encoding, unsafe functions, error handling, and logging.", rules: [
            { id: "nist-c6-r5-1", label: "Secure Coding Standards Document available and valid", iconType: "shield", enabled: false, description: "A Secure Coding Standards document must exist for every development language in use, covering input validation, output encoding, handling of unsafe functions, error handling, and logging practices." },
          ]},
        ]
      },
      {
        id: "nist-c1", tag: "PO.1.1", title: "Define Security Requirements",
        description: "Ensures all security requirements are formally specified, documented, and approved before development begins, reducing the risk of missing critical security properties in the final product.",
        requirements: [
          { id: "nist-c1-r1", title: "Software Security Policy", rules: [
            { id: "nist-c1-r1-1", label: "Security requirements documented and approved before development begins", iconType: "shield", enabled: false, description: "Security requirements must be captured in a formal requirements document and signed off by the security team prior to sprint planning. This ensures security is a first-class concern rather than an afterthought." },
            { id: "nist-c1-r1-2", label: "Threat modeling performed for all new features and major changes", iconType: "shield", enabled: false, description: "A structured threat modeling exercise (e.g., STRIDE or PASTA) must be completed for every new feature and significant architectural change, with findings tracked in the issue tracker." },
          ]},
          { id: "nist-c1-r2", title: "Compliance Scope Definition", rules: [
            { id: "nist-c1-r2-1", label: "Regulatory and compliance requirements identified per product line", iconType: "shield", enabled: false, description: "Each product line must have a documented compliance scope identifying applicable regulations (e.g., GDPR, SOC 2, HIPAA) and the controls required to meet them." },
          ]},
        ]
      },
      {
        id: "nist-c2", tag: "PO.3.2", title: "Secure Development Environment",
        description: "Verifies that toolchain security controls are in place including SAST, secret scanning, dependency analysis, and enforced code review processes to prevent vulnerabilities from reaching production.",
        requirements: [
          { id: "nist-c2-r1", title: "Toolchain Security", rules: [
            { id: "nist-c2-r1-1", label: "SAST (Static Application Security Testing) integrated into CI pipeline", iconType: "shield", enabled: false, description: "SAST tools must run automatically on every pull request and block merge if critical findings are detected. Results must be reviewed by a developer before dismissal." },
            { id: "nist-c2-r1-2", label: "Secrets scanning enabled on all repositories to prevent credential leaks", iconType: "shield", enabled: false, description: "Automated secret scanning must be active on all repositories to detect API keys, passwords, and tokens before they are committed to version control history." },
            { id: "nist-c2-r1-3", label: "Dependency vulnerability scanning runs automatically on every pull request", iconType: "shield", enabled: false, description: "All third-party dependencies must be scanned against known vulnerability databases (NVD, OSV) on every PR, blocking merge if critical CVEs are introduced." },
          ]},
          { id: "nist-c2-r2", title: "Access & Integrity Controls", rules: [
            { id: "nist-c2-r2-1", label: "All code changes reviewed and approved by a second developer before merge", iconType: "shield", enabled: false, description: "Mandatory peer review ensures a second developer validates security implications, logic correctness, and adherence to coding standards before any code reaches the main branch." },
            { id: "nist-c2-r2-2", label: "Branch protection rules enforced on all production branches", iconType: "shield", enabled: false, description: "Branch protection prevents direct pushes to production branches, requires passing CI checks, and enforces signed commits to maintain a tamper-evident commit history." },
          ]},
        ]
      },
      {
        id: "nist-c3", tag: "PS.2.1", title: "Third-Party Component Integrity",
        description: "Validates that all third-party components are tracked via an SBOM, sourced from verified registries, and free of known critical vulnerabilities before use in production systems.",
        requirements: [
          { id: "nist-c3-r1", title: "SBOM & Provenance", rules: [
            { id: "nist-c3-r1-1", label: "Software Bill of Materials (SBOM) maintained for all production components", iconType: "shield", enabled: false, description: "A complete, machine-readable SBOM (CycloneDX or SPDX format) must be generated and updated with every release, listing all direct and transitive dependencies with version and license information." },
            { id: "nist-c3-r1-2", label: "Third-party packages sourced only from approved, verified registries", iconType: "shield", enabled: false, description: "Package managers must be configured to use only approved internal mirrors or verified public registries. Direct inclusion of unvetted packages from arbitrary sources is prohibited." },
          ]},
          { id: "nist-c3-r2", title: "Dependency Risk Controls", rules: [
            { id: "nist-c3-r2-1", label: "No critical CVEs (CVSS ≥ 9.0) present in production dependencies", iconType: "shield", enabled: false, description: "Continuous dependency monitoring must alert and block deployments when a critical-severity CVE (CVSS score 9.0 or above) is detected in any direct or transitive dependency." },
            { id: "nist-c3-r2-2", label: "Deprecated or unmaintained dependencies flagged and scheduled for replacement", iconType: "shield", enabled: false, description: "Dependencies with no upstream releases in over 24 months, or that are officially deprecated, must be flagged in the backlog and replaced within the next two sprint cycles." },
          ]},
        ]
      },
      {
        id: "nist-c4", tag: "RV.1.1", title: "Vulnerability Identification & Response",
        description: "Ensures timely identification, public disclosure, and remediation of security vulnerabilities throughout the software lifecycle in accordance with coordinated vulnerability disclosure best practices.",
        requirements: [
          { id: "nist-c4-r1", title: "Vulnerability Disclosure", rules: [
            { id: "nist-c4-r1-1", label: "Coordinated vulnerability disclosure (CVD) policy publicly documented", iconType: "shield", enabled: false, description: "A CVD policy must be published on the organization's website, providing clear instructions for external security researchers to report vulnerabilities, including expected response timelines." },
            { id: "nist-c4-r1-2", label: "Security advisories published within 72 hours of confirmed vulnerability", iconType: "shield", enabled: false, description: "Once a vulnerability is confirmed, a security advisory must be drafted and published within 72 hours, including affected versions, CVSS score, and recommended mitigation steps." },
          ]},
          { id: "nist-c4-r2", title: "Remediation SLA", rules: [
            { id: "nist-c4-r2-1", label: "Critical vulnerabilities patched within 24 hours of discovery", iconType: "shield", enabled: false, description: "Critical-severity vulnerabilities (CVSS ≥ 9.0) require an emergency patch cycle with a maximum 24-hour remediation window from confirmed discovery to production deployment." },
            { id: "nist-c4-r2-2", label: "High-severity vulnerabilities resolved within 7 days", iconType: "shield", enabled: false, description: "High-severity vulnerabilities (CVSS 7.0–8.9) must be triaged, scheduled, and deployed to production within 7 calendar days of initial discovery." },
          ]},
        ]
      },
      {
        id: "nist-c5", tag: "RV.3.2", title: "Infrastructure-as-Code Security",
        description: "Validates that infrastructure configurations are scanned for misconfigurations, container images are free of critical CVEs, and all deployments follow immutable infrastructure principles.",
        requirements: [
          { id: "nist-c5-r1", title: "IaC Policy Enforcement", rules: [
            { id: "nist-c5-r1-1", label: "IaC templates scanned for misconfigurations before deployment", iconType: "shield", enabled: false, description: "All Terraform, CloudFormation, and Helm templates must be scanned using policy-as-code tools (e.g., OPA, Checkov) in CI to detect insecure configurations before provisioning." },
            { id: "nist-c5-r1-2", label: "Container images scanned for critical CVEs prior to registry push", iconType: "shield", enabled: false, description: "Container images must be scanned by an image vulnerability scanner (e.g., Trivy, Grype) before being pushed to the registry, blocking images with critical-severity CVEs." },
            { id: "nist-c5-r1-3", label: "Immutable infrastructure enforced — no manual changes to production", iconType: "shield", enabled: false, description: "All production infrastructure changes must flow through the IaC pipeline. Direct SSH access, console modifications, or manual configuration changes to production systems are prohibited and audited." },
          ]},
        ]
      },
    ]
  },
  {
    id: "eu-cra", abbr: "CRA", color: "#003399", name: "EU CRA", category: "Industry",
    description: "The EU Cyber Resilience Act mandates cybersecurity requirements for all products with digital elements sold in the European Union.",
    published: true, totalRules: 168, baseEnabledRules: 107,
    controls: [
      {
        id: "cra-c1", tag: "VH.7", title: "Code review and security testing - Annex I, Part II, point 3 + Annex VII, point 6",
        description: "Apply effective and regular tests and reviews of the security of the product, and include in the technical documentation the reports of the tests carried out to verify conformity of the product and of the vulnerability handling processes with the applicable essential cybersecurity requirements.",
        requirements: [
          { id: "cra-c1-r1", title: "Security test results - effective and regular security tests are carried out on the product.", rules: [
            { id: "cra-c1-r1-1", label: "Evidence slug:sonar-sonarqube, from:Sonar, version:1 , exist on evaluated resource", iconType: "shield", enabled: false },
            { id: "cra-c1-r1-2", label: "Evidence slug:cyclonedx-vex, from:JFrog, version:1.6, exist on evaluated resource", iconType: "shield", enabled: false },
            { id: "cra-c1-r1-3", label: "Evidence of NightVision DAST scans are evaluated in the resource", iconType: "shield", enabled: false },
          ]},
          { id: "cra-c1-r2", title: "Security review records - effective and regular security reviews are carried out on the product.", rules: [
            { id: "cra-c1-r2-1", label: "Evidence of GitHub Pull Request approvals by at least one non-committer are evaluated in the resource", iconType: "shield", enabled: false },
            { id: "cra-c1-r2-2", label: "Evidence of Jira issues are evaluated on each commit in the resource", iconType: "shield", enabled: false },
          ]},
          { id: "cra-c1-r4", title: "Reports of the tests carried out on the product and on the vulnerability handling processes are in the technical file.", rules: [
            { id: "cra-c1-r4-1", label: "This requirement is automatically supported by JFrog.", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "cra-c2", tag: "VH.8", title: "Security update lifecycle - Annex I, Part II, point 4 + Annex VII, point 7",
        description: "Ensure that security updates are made available without delay after a vulnerability is addressed and distributed in a way that guarantees rapid uptake by users.",
        requirements: [
          { id: "cra-c2-r1", title: "Security updates are released promptly and made freely available.", rules: [
            { id: "cra-c2-r1-1", label: "Security updates released within defined SLA after a fix is confirmed and tested", iconType: "shield", enabled: false },
            { id: "cra-c2-r1-2", label: "Security patches provided free of charge and separate from feature updates", iconType: "shield", enabled: false },
            { id: "cra-c2-r1-3", label: "All software updates cryptographically signed and verified before installation", iconType: "shield", enabled: false },
          ]},
          { id: "cra-c2-r2", title: "Users are notified and updates are delivered automatically where feasible.", rules: [
            { id: "cra-c2-r2-1", label: "Automatic security update delivery enabled by default with documented opt-out mechanism", iconType: "shield", enabled: false },
            { id: "cra-c2-r2-2", label: "Evidence of update delivery notifications sent to affected users within 72 hours of release", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "cra-c3", tag: "VH.9", title: "Incident notification & reporting - Annex I, Part II, point 5 + Annex VII, point 8",
        description: "Notify relevant authorities and affected users without undue delay upon becoming aware of a severe incident having an impact on the security of the product.",
        requirements: [
          { id: "cra-c3-r1", title: "Severe incidents are reported to ENISA within regulatory deadlines.", rules: [
            { id: "cra-c3-r1-1", label: "Actively exploited vulnerabilities reported to ENISA within 24 hours of awareness", iconType: "shield", enabled: false },
            { id: "cra-c3-r1-2", label: "Early warning followed by a detailed incident notification within 72 hours", iconType: "shield", enabled: false },
            { id: "cra-c3-r1-3", label: "Final incident report submitted to ENISA within 14 days of initial notification", iconType: "shield", enabled: false },
          ]},
          { id: "cra-c3-r2", title: "Affected users are informed of incidents and available mitigations.", rules: [
            { id: "cra-c3-r2-1", label: "Security advisories published within 72 hours of confirmed vulnerability with recommended mitigations", iconType: "shield", enabled: false },
            { id: "cra-c3-r2-2", label: "Incident communication covers affected versions, severity, and remediation steps", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "cra-c4", tag: "VH.10", title: "End-of-life security obligations - Annex I, Part II, point 6",
        description: "Specify and communicate the support period during which security updates will be provided, and ensure users are informed before end-of-support.",
        requirements: [
          { id: "cra-c4-r1", title: "Support period is clearly defined and communicated.", rules: [
            { id: "cra-c4-r1-1", label: "Product support period documented and publicly accessible at time of market placement", iconType: "shield", enabled: false },
            { id: "cra-c4-r1-2", label: "End-of-support notification provided to users at least 12 months before support ends", iconType: "shield", enabled: false },
          ]},
          { id: "cra-c4-r2", title: "Security updates remain available throughout the declared support period.", rules: [
            { id: "cra-c4-r2-1", label: "Security patches provided without charge for the full declared support lifecycle", iconType: "shield", enabled: false },
            { id: "cra-c4-r2-2", label: "Archive of security advisories and patches maintained and accessible after product discontinuation", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "cra-c5", tag: "VH.11", title: "SBOM & software composition transparency - Annex I, Part II, point 1 + Annex VII, point 2",
        description: "Identify and document vulnerabilities and components contained in the product, including by drawing up a software bill of materials in a commonly used and machine-readable format.",
        requirements: [
          { id: "cra-c5-r1", title: "A machine-readable SBOM is produced and maintained for each product release.", rules: [
            { id: "cra-c5-r1-1", label: "Evidence slug:cyclonedx-sbom, from:JFrog, version:1.6, exist on evaluated resource", iconType: "shield", enabled: false },
            { id: "cra-c5-r1-2", label: "SBOM covers all direct and transitive dependencies with name, version, and license metadata", iconType: "shield", enabled: false },
            { id: "cra-c5-r1-3", label: "SBOM updated with every release and made available to market surveillance authorities on request", iconType: "shield", enabled: false },
          ]},
          { id: "cra-c5-r2", title: "Known vulnerabilities in components are tracked and disclosed.", rules: [
            { id: "cra-c5-r2-1", label: "Evidence slug:cyclonedx-vex, from:JFrog, version:1.6, exist on evaluated resource", iconType: "shield", enabled: false },
            { id: "cra-c5-r2-2", label: "Vulnerability exploitability exchange (VEX) document maintained and updated per release", iconType: "shield", enabled: false },
          ]},
        ]
      },
    ]
  },
  {
    id: "iso-27001", abbr: "ISO", color: "#1d4ed8", name: "ISO 27001", category: "Security",
    description: "ISO/IEC 27001 is the international standard for managing information security, specifying requirements for an ISMS.",
    published: false, totalRules: 168, baseEnabledRules: 40,
    controls: [
      {
        id: "iso-c1", tag: "A.8.8", title: "Technical Vulnerability Management",
        requirements: [
          { id: "iso-c1-r1", title: "Vulnerability Assessment", rules: [
            { id: "iso-c1-r1-1", label: "Automated vulnerability scans performed at least monthly on all systems", iconType: "shield", enabled: false},
            { id: "iso-c1-r1-2", label: "Critical and high severity patches applied within defined SLA periods", iconType: "shield", enabled: false},
          ]},
          { id: "iso-c1-r2", title: "Risk-Based Patching", rules: [
            { id: "iso-c1-r2-1", label: "Patch management process documented with severity-based prioritization", iconType: "shield", enabled: false },
            { id: "iso-c1-r2-2", label: "Compensating controls documented for systems that cannot be patched immediately", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "iso-c2", tag: "A.8.25", title: "Secure Development Lifecycle",
        requirements: [
          { id: "iso-c2-r1", title: "Development Security Standards", rules: [
            { id: "iso-c2-r1-1", label: "Secure coding guidelines published and followed by all developers", iconType: "shield", enabled: false},
            { id: "iso-c2-r1-2", label: "Security training completed by all developers at least annually", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "iso-c3", tag: "A.8.29", title: "Security Testing in Development",
        requirements: [
          { id: "iso-c3-r1", title: "Pre-Release Testing", rules: [
            { id: "iso-c3-r1-1", label: "Penetration testing conducted at least annually by certified professionals", iconType: "shield", enabled: false},
            { id: "iso-c3-r1-2", label: "DAST (Dynamic Application Security Testing) executed before each major release", iconType: "shield", enabled: false },
            { id: "iso-c3-r1-3", label: "Security test results reviewed and tracked through to remediation closure", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "iso-c4", tag: "A.5.23", title: "Information Security for Cloud Services",
        requirements: [
          { id: "iso-c4-r1", title: "Cloud Provider Security", rules: [
            { id: "iso-c4-r1-1", label: "Cloud service provider security certifications verified before onboarding", iconType: "shield", enabled: false},
            { id: "iso-c4-r1-2", label: "Shared responsibility model documented per cloud service used", iconType: "shield", enabled: false },
          ]},
        ]
      },
    ]
  },
  {
    id: "soc2", abbr: "SOC", color: "#6d28d9", name: "SOC 2", category: "Compliance",
    description: "SOC 2 defines criteria for managing customer data based on five Trust Service Criteria: security, availability, processing integrity, confidentiality, and privacy.",
    published: false, totalRules: 168, baseEnabledRules: 0,
    controls: [
      {
        id: "soc-c1", tag: "CC6.1", title: "Logical Access Security",
        requirements: [
          { id: "soc-c1-r1", title: "Access Provisioning & Deprovisioning", rules: [
            { id: "soc-c1-r1-1", label: "Access to production systems restricted to authorized personnel only", iconType: "shield", enabled: false },
            { id: "soc-c1-r1-2", label: "User access reviews conducted quarterly for all critical systems", iconType: "shield", enabled: false },
            { id: "soc-c1-r1-3", label: "Terminated employee access revoked within 24 hours of offboarding", iconType: "shield", enabled: false },
          ]},
          { id: "soc-c1-r2", title: "Privileged Access Management", rules: [
            { id: "soc-c1-r2-1", label: "Just-in-time (JIT) access enforced for all privileged operations", iconType: "shield", enabled: false },
            { id: "soc-c1-r2-2", label: "Privileged access sessions recorded and available for audit review", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "soc-c2", tag: "CC7.2", title: "System Monitoring & Anomaly Detection",
        requirements: [
          { id: "soc-c2-r1", title: "Logging & Alerting", rules: [
            { id: "soc-c2-r1-1", label: "All system access attempts logged and retained for a minimum of 90 days", iconType: "shield", enabled: false },
            { id: "soc-c2-r1-2", label: "Automated alerts configured for unauthorized access attempts and anomalies", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "soc-c3", tag: "CC9.2", title: "Third-Party Risk Management",
        requirements: [
          { id: "soc-c3-r1", title: "Vendor Security Assessments", rules: [
            { id: "soc-c3-r1-1", label: "Security assessments completed for all critical third-party vendors annually", iconType: "shield", enabled: false },
            { id: "soc-c3-r1-2", label: "Data processing agreements (DPAs) in place with all vendors handling customer data", iconType: "shield", enabled: false },
            { id: "soc-c3-r1-3", label: "Third-party SOC 2 reports reviewed as part of vendor onboarding", iconType: "shield", enabled: false },
          ]},
        ]
      },
    ]
  },
  {
    id: "pci-dss", abbr: "PCI", color: "#92400e", name: "PCI DSS", category: "Industry",
    description: "PCI DSS (Payment Card Industry Data Security Standard) sets technical and operational requirements to protect cardholder data.",
    published: false, totalRules: 168, baseEnabledRules: 0,
    controls: [
      {
        id: "pci-c1", tag: "Req 6.3", title: "Vulnerability Management",
        requirements: [
          { id: "pci-c1-r1", title: "Known Vulnerabilities", rules: [
            { id: "pci-c1-r1-1", label: "All known exploitable vulnerabilities addressed within one month of identification", iconType: "shield", enabled: false },
            { id: "pci-c1-r1-2", label: "Anti-malware software deployed on all systems susceptible to malicious software", iconType: "shield", enabled: false },
          ]},
          { id: "pci-c1-r2", title: "Security Awareness", rules: [
            { id: "pci-c1-r2-1", label: "Security policies and operational procedures kept up-to-date and acknowledged by staff", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "pci-c2", tag: "Req 6.4", title: "Web Application Security",
        requirements: [
          { id: "pci-c2-r1", title: "Application-Layer Protections", rules: [
            { id: "pci-c2-r1-1", label: "Web Application Firewall (WAF) deployed in front of all public-facing web applications", iconType: "shield", enabled: false },
            { id: "pci-c2-r1-2", label: "Public-facing applications reviewed for OWASP Top 10 vulnerabilities annually", iconType: "shield", enabled: false },
            { id: "pci-c2-r1-3", label: "Payment page scripts inventoried and integrity verified on every page load", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "pci-c3", tag: "Req 11.3", title: "Penetration Testing",
        requirements: [
          { id: "pci-c3-r1", title: "Testing Scope & Frequency", rules: [
            { id: "pci-c3-r1-1", label: "Internal and external penetration tests completed at least annually", iconType: "shield", enabled: false },
            { id: "pci-c3-r1-2", label: "Penetration tests conducted after any significant infrastructure or application change", iconType: "shield", enabled: false },
          ]},
          { id: "pci-c3-r2", title: "Segmentation Testing", rules: [
            { id: "pci-c3-r2-1", label: "Network segmentation controls validated to confirm cardholder data environment isolation", iconType: "shield", enabled: false },
          ]},
        ]
      },
    ]
  },
  {
    id: "hipaa", abbr: "HIP", color: "#065f46", name: "HIPAA", category: "Regulatory",
    description: "HIPAA establishes national standards to protect individuals' medical records and personal health information (PHI).",
    published: false, totalRules: 168, baseEnabledRules: 0,
    controls: [
      {
        id: "hip-c1", tag: "§164.312(a)", title: "Access Control",
        requirements: [
          { id: "hip-c1-r1", title: "PHI Access Restrictions", rules: [
            { id: "hip-c1-r1-1", label: "PHI access limited to minimum necessary for each user's specific job function", iconType: "shield", enabled: false },
            { id: "hip-c1-r1-2", label: "Unique user identifiers assigned to every individual accessing PHI systems", iconType: "shield", enabled: false },
            { id: "hip-c1-r1-3", label: "Automatic logoff implemented after a defined period of inactivity", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "hip-c2", tag: "§164.312(b)", title: "Audit Controls",
        requirements: [
          { id: "hip-c2-r1", title: "Audit Logging Requirements", rules: [
            { id: "hip-c2-r1-1", label: "All access to PHI logged with user identity, timestamp, and action performed", iconType: "shield", enabled: false },
            { id: "hip-c2-r1-2", label: "Audit logs reviewed regularly and retained for a minimum of 6 years", iconType: "shield", enabled: false },
          ]},
          { id: "hip-c2-r2", title: "Audit Integrity", rules: [
            { id: "hip-c2-r2-1", label: "Audit logs stored in tamper-evident storage separate from application systems", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "hip-c3", tag: "§164.312(e)", title: "Transmission Security",
        requirements: [
          { id: "hip-c3-r1", title: "Encryption in Transit", rules: [
            { id: "hip-c3-r1-1", label: "All PHI transmitted over public or untrusted networks encrypted with TLS 1.2+", iconType: "shield", enabled: false },
            { id: "hip-c3-r1-2", label: "Email containing PHI prohibited unless end-to-end encryption is in place", iconType: "shield", enabled: false },
          ]},
          { id: "hip-c3-r2", title: "Integrity Controls", rules: [
            { id: "hip-c3-r2-1", label: "Mechanisms in place to verify PHI has not been altered or destroyed in transit", iconType: "shield", enabled: false },
          ]},
        ]
      },
    ]
  },
  {
    id: "eu-ai-act", abbr: "DORA", color: "#003399", logo: doraLogo, name: "DORA", category: "Regulatory",
    description: "EU Digital Operational Resilience Act (DORA) (Regulation (EU) 2022/2554) - ICT risk management, incident reporting, and resilience across financial entities.",
    published: true, totalRules: 89, baseEnabledRules: 0,
    controls: [
      {
        id: "aia-c1", tag: "Art. 9", title: "Risk Management System",
        requirements: [
          { id: "aia-c1-r1", title: "Risk Identification & Assessment", rules: [
            { id: "aia-c1-r1-1", label: "Continuous risk management process documented and maintained throughout the AI system lifecycle", iconType: "shield", enabled: false },
            { id: "aia-c1-r1-2", label: "Residual risks evaluated against benefits and accepted only when risks are reduced to an acceptable level", iconType: "shield", enabled: false },
            { id: "aia-c1-r1-3", label: "Testing performed under real-world conditions to identify risks before market placement", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "aia-c2", tag: "Art. 10", title: "Data & Data Governance",
        requirements: [
          { id: "aia-c2-r1", title: "Training Data Quality", rules: [
            { id: "aia-c2-r1-1", label: "Training, validation, and test datasets subject to documented data governance practices", iconType: "shield", enabled: false },
            { id: "aia-c2-r1-2", label: "Datasets examined for possible biases that could affect health, safety, or fundamental rights", iconType: "shield", enabled: false },
            { id: "aia-c2-r1-3", label: "Data quality criteria defined covering relevance, representativeness, and completeness", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "aia-c3", tag: "Art. 12", title: "Record-Keeping & Logging",
        requirements: [
          { id: "aia-c3-r1", title: "Automatic Event Logging", rules: [
            { id: "aia-c3-r1-1", label: "Automatic logging of events enabled to support post-market monitoring and incident investigation", iconType: "lock", enabled: false },
            { id: "aia-c3-r1-2", label: "Logs retained for a minimum of 6 months and made available to competent authorities on request", iconType: "lock", enabled: false },
            { id: "aia-c3-r1-3", label: "Log integrity protected against unauthorised modification or deletion", iconType: "lock", enabled: false },
          ]},
        ]
      },
      {
        id: "aia-c4", tag: "Art. 13", title: "Transparency & Information",
        requirements: [
          { id: "aia-c4-r1", title: "User-Facing Documentation", rules: [
            { id: "aia-c4-r1-1", label: "Instructions for use provided describing purpose, performance metrics, and known limitations", iconType: "shield", enabled: false },
            { id: "aia-c4-r1-2", label: "AI-generated content and synthetic media clearly labelled so end users can identify AI involvement", iconType: "shield", enabled: false },
          ]},
          { id: "aia-c4-r2", title: "Technical Documentation", rules: [
            { id: "aia-c4-r2-1", label: "Technical documentation maintained per Annex IV and kept up to date with each significant change", iconType: "shield", enabled: false },
            { id: "aia-c4-r2-2", label: "EU Declaration of Conformity drawn up and kept available for 10 years after market placement", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "aia-c5", tag: "Art. 14", title: "Human Oversight",
        requirements: [
          { id: "aia-c5-r1", title: "Oversight Measures", rules: [
            { id: "aia-c5-r1-1", label: "Natural persons able to fully understand AI system capabilities, limitations, and output confidence levels", iconType: "shield", enabled: false },
            { id: "aia-c5-r1-2", label: "Human operators can intervene, override, or halt the AI system at any point during operation", iconType: "shield", enabled: false },
            { id: "aia-c5-r1-3", label: "System designed to alert operators when output may be unreliable, out of distribution, or otherwise suspicious", iconType: "shield", enabled: false },
          ]},
        ]
      },
      {
        id: "aia-c6", tag: "Art. 15", title: "Accuracy, Robustness & Cybersecurity",
        requirements: [
          { id: "aia-c6-r1", title: "Performance & Resilience", rules: [
            { id: "aia-c6-r1-1", label: "Declared accuracy levels validated across a representative population before deployment", iconType: "shield", enabled: false },
            { id: "aia-c6-r1-2", label: "System resilient against adversarial inputs designed to alter outputs or deceive users", iconType: "lock", enabled: false },
            { id: "aia-c6-r1-3", label: "Technical redundancy and fallback mechanisms implemented to maintain safe operation under failure", iconType: "shield", enabled: false },
          ]},
        ]
      },
    ]
  },
];

function getEnabledRules(fw: Framework): number {
  return fw.controls.flatMap(c => c.requirements.flatMap(r => r.rules)).filter(r => r.enabled).length;
}

// ─── SVG Icons ───────────────────────────────────────────────────────────────

function IconProjects() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0883 17.604"><path d={svgPaths.p12d2a080} fill="#EAEEF5" /></svg>; }
function IconEnvironments() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.5799 23.8127"><g><path d={svgPaths.pf482c80} fill="#EAEEF5" /><path d={svgPaths.pd187f0} fill="#EAEEF5" /><path d={svgPaths.p3eff3570} fill="#EAEEF5" /><path d={svgPaths.p1f783900} fill="#EAEEF5" /><path d={svgPaths.p2dc8bb80} fill="#EAEEF5" /><path d={svgPaths.p1edf6c30} fill="#EAEEF5" /></g></svg>; }
function IconRepositories() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 14"><path clipRule="evenodd" d={svgPaths.p198c580} fill="#EAEEF5" fillRule="evenodd" /></svg>; }
function IconUser() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 13.231"><path d={svgPaths.p114fd400} fill="#EAEEF5" /></svg>; }
function IconUserCheck() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.31 13.231"><path d={svgPaths.p377f900} fill="#EAEEF5" /></svg>; }
function IconSecurity() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20"><g><path clipRule="evenodd" d={svgPaths.p15404000} fill="#EAEEF5" fillRule="evenodd" /><path clipRule="evenodd" d={svgPaths.p2aac0dc0} fill="#EAEEF5" fillRule="evenodd" /></g></svg>; }
function IconNote() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20"><g><path d={svgPaths.p2e5b4300} fill="#EAEEF5" /><path d={svgPaths.p1332f180} fill="#EAEEF5" /><path clipRule="evenodd" d={svgPaths.p3ef19df0} fill="#EAEEF5" fillRule="evenodd" /></g></svg>; }
function IconMonitoring() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 16"><g><path clipRule="evenodd" d={svgPaths.p28318680} fill="#EAEEF5" fillRule="evenodd" /><path clipRule="evenodd" d={svgPaths.p19ce880} fill="#EAEEF5" fillRule="evenodd" /></g></svg>; }
function IconTopology() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 20"><path clipRule="evenodd" d={svgPaths.p10ce7600} fill="#EAEEF5" fillRule="evenodd" /></svg>; }
function IconArtifactorySettings() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20"><g><path clipRule="evenodd" d={svgPaths.p3fb9ae80} fill="#EAEEF5" fillRule="evenodd" /><path clipRule="evenodd" d={svgPaths.p1812a040} fill="#EAEEF5" fillRule="evenodd" /><path d={svgPaths.p13eb3f80} fill="#EAEEF5" /><path d={svgPaths.p40c8180} fill="#EAEEF5" /></g></svg>; }
function IconAppTrust() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 19.4971"><g><path d={svgPaths.p2ce8f0f0} fill="#EAEEF5" /><path d={svgPaths.p6cb1700} fill="#EAEEF5" /></g></svg>; }
function IconXray() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.0001 18.9998"><g><path clipRule="evenodd" d={svgPaths.p26ef8300} fill="#EAEEF5" fillRule="evenodd" /><path clipRule="evenodd" d={svgPaths.p3a78ed80} fill="#EAEEF5" fillRule="evenodd" /><path d={svgPaths.p102ca600} fill="#EAEEF5" /><path d={svgPaths.p28550ff0} fill="#EAEEF5" /><path clipRule="evenodd" d={svgPaths.p210a0880} fill="#EAEEF5" fillRule="evenodd" /></g></svg>; }
function IconCuration() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.5 20"><g><path d={svgPaths.p278197f1} fill="#EAEEF5" /><path clipRule="evenodd" d={svgPaths.p29247ec0} fill="#EAEEF5" fillRule="evenodd" /><path clipRule="evenodd" d={svgPaths.p2720eb80} fill="#EAEEF5" fillRule="evenodd" /><path d={svgPaths.p236ab800} fill="#EAEEF5" /></g></svg>; }
function IconRuntime() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.9998 19.21"><g><path d={svgPaths.p1a7d800} fill="#EAEEF5" /><path d={svgPaths.p22220bf0} fill="#EAEEF5" /><path clipRule="evenodd" d={svgPaths.p178aa800} fill="#EAEEF5" fillRule="evenodd" /><path clipRule="evenodd" d={svgPaths.p2716fe00} fill="#EAEEF5" fillRule="evenodd" /><path clipRule="evenodd" d={svgPaths.p2195b80} fill="#EAEEF5" fillRule="evenodd" /><path d={svgPaths.p105eb00} fill="#EAEEF5" /></g></svg>; }
function IconConnect() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6269 17.9995"><g><path clipRule="evenodd" d={svgPaths.p7588200} fill="#EAEEF5" fillRule="evenodd" /><path d={svgPaths.p3678d580} fill="#EAEEF5" /><path clipRule="evenodd" d={svgPaths.p170f8d40} fill="#EAEEF5" fillRule="evenodd" /><path clipRule="evenodd" d={svgPaths.p29cf5a00} fill="#EAEEF5" fillRule="evenodd" /><path d={svgPaths.p32598f00} fill="#EAEEF5" /><path d={svgPaths.p2bf8a600} fill="#EAEEF5" /><path d={svgPaths.p317faa00} fill="#EAEEF5" /></g></svg>; }
function IconWorker() { return <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.1038 19.0197"><g><path d={svgPaths.p16ffae00} fill="#EAEEF5" /><path clipRule="evenodd" d={svgPaths.p26c0ed00} fill="#EAEEF5" fillRule="evenodd" /></g></svg>; }

function IconShieldCheck({ color = "#414857" }: { color?: string }) {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
      <path clipRule="evenodd" d={svgPaths1.p367f0240} fill={color} fillRule="evenodd" />
    </svg>
  );
}

function IconLock({ color = "#414857" }: { color?: string }) {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.6667 15">
      <path d={svgPaths1.p1adf5200} fill={color} />
      <path clipRule="evenodd" d={svgPaths1.p25d98600} fill={color} fillRule="evenodd" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5738 10.5738">
      <path d={svgPaths1.p264a7200} fill="#414857" />
    </svg>
  );
}

function IconSearch() {
  return (
    <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.5534 12.7848">
      <path clipRule="evenodd" d={svgPaths1.p9cd5e00} fill="#5E6D81" fillRule="evenodd" />
    </svg>
  );
}

// ─── Sidebar Item ─────────────────────────────────────────────────────────────

interface SidebarItemProps {
  id: SidebarItemId;
  label: string;
  icon: React.ReactNode;
  active: boolean;
  onClick: (id: SidebarItemId) => void;
}

function SidebarItem({ id, label, icon, active, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={() => onClick(id)}
      className={`w-full flex flex-row items-center transition-colors relative ${active ? "bg-[#152033]" : "bg-[#1f2f4a] hover:bg-[#243757]"}`}
    >
      {active && <div className="absolute left-0 top-[50%] -translate-y-1/2 w-[3px] h-5 bg-[#3eb065] rounded-r-[3px]" />}
      <div className="flex gap-3 items-center px-5 py-3 w-full">
        <div className="relative shrink-0 size-6">
          <div className="absolute inset-[8.33%]">{icon}</div>
        </div>
        <span className="flex-1 text-left font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[22px]" style={{ fontVariationSettings: '"wdth" 100', color: "rgba(255,255,255,0.78)" }}>
          {label}
        </span>
      </div>
    </button>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

interface SidebarProps {
  activeItem: SidebarItemId;
  activeSubItem: AppTrustSubItemId;
  appTrustExpanded: boolean;
  collapsed: boolean;
  selectedProject: string;
  onItemClick: (id: SidebarItemId) => void;
  onSubItemClick: (id: AppTrustSubItemId) => void;
  onToggleCollapse: () => void;
  onProjectChange: (name: string) => void;
}

const PROJECT_LIST = [
  "All Projects",
  "BTC Wallet",
  "Catalina Checkout Service",
  "Green Pizza Inventory Service",
  "Napa Burger Infrastructure",
  "quotopia Application",
];

function Sidebar({ activeItem, activeSubItem, appTrustExpanded, collapsed, selectedProject, onItemClick, onSubItemClick, onToggleCollapse, onProjectChange }: SidebarProps) {
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [projectSearch, setProjectSearch] = useState("");
  const [dropdownAnchor, setDropdownAnchor] = useState<{ left: number; top: number } | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!projectDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setProjectDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [projectDropdownOpen]);

  const subItems: { id: AppTrustSubItemId; label: string }[] = [
    { id: "compliance-catalog", label: "Compliance Catalog" },
    { id: "integrations", label: "Integrations" },
  ];

  const iconItems: { id: SidebarItemId; icon: React.ReactNode }[] = [
    { id: "all-projects", icon: <div className="absolute inset-[13.32%_12.28%_13.32%_12.36%]"><IconProjects /></div> },
    { id: "stages-lifecycle", icon: <div className="absolute inset-[-0.01%_1.75%_0.79%_0]"><IconEnvironments /></div> },
    { id: "repositories", icon: <div className="absolute inset-[20.83%_12.5%]"><IconRepositories /></div> },
    { id: "user-management", icon: <div className="absolute inset-[22.44%_20.83%]"><IconUser /></div> },
    { id: "user-authentication", icon: <div className="absolute inset-[22.44%_7.04%_22.44%_8.33%]"><IconUserCheck /></div> },
    { id: "security", icon: <div className="absolute inset-[8.33%_12.5%]"><IconSecurity /></div> },
    { id: "general-management", icon: <div className="absolute inset-[8.33%]"><IconNote /></div> },
    { id: "monitoring", icon: <div className="absolute inset-[16.67%_8.33%]"><IconMonitoring /></div> },
    { id: "topology", icon: <div className="absolute inset-[8.33%]"><IconTopology /></div> },
  ];

  const iconItemsBottom: { id: SidebarItemId; icon: React.ReactNode }[] = [
    { id: "artifactory-settings", icon: <div className="absolute inset-[8.33%_10.42%]"><IconArtifactorySettings /></div> },
    { id: "apptrust-settings", icon: <div className="absolute inset-[9.38%_12.5%]"><IconAppTrust /></div> },
    { id: "xray-settings", icon: <div className="absolute inset-[10.42%_8.33%]"><IconXray /></div> },
    { id: "curation-settings", icon: <div className="absolute inset-[8.33%_10.42%_8.33%_8.33%]"><IconCuration /></div> },
    { id: "runtime", icon: <div className="absolute inset-[8.33%_8.33%_11.62%_8.33%]"><IconRuntime /></div> },
    { id: "connect", icon: <div className="absolute inset-[12.5%_18.22%_12.5%_20.83%]"><IconConnect /></div> },
    { id: "worker", icon: <div className="absolute inset-[10.38%_6.03%]"><IconWorker /></div> },
  ];

  if (collapsed) {
    return (
      <div className="bg-[#1f2f4a] flex flex-col h-full items-center justify-between shrink-0 w-[72px] transition-all duration-300">
        {/* Scrollable nav */}
        <div className="flex flex-col flex-1 w-full min-h-0 items-center" style={{ overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }}>
          {/* Logo */}
          <div className="h-[72px] shrink-0 w-full border-b border-[#2d4264] flex items-center justify-center">
            <div className="relative size-9 shrink-0">
              <div className="absolute inset-[7.81%_4.69%_6.25%_4.69%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.625 30.9375"><path d={svgPaths.p1c3cb000} fill="#3EB065" /></svg></div>
            </div>
          </div>
          {/* Project badge */}
          <div className="pt-4 flex items-center justify-center w-full">
            <div className="bg-[#152033] flex items-center justify-center p-2 rounded-[4px] border border-[#d2dfed]">
              <div className="bg-[#b0d8fe] flex items-center p-1 rounded-full">
                <div className="relative size-4"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0588 11.736"><path d={svgPaths.pc737900} fill="#414857" /></svg></div>
              </div>
            </div>
          </div>
          {/* Icon nav */}
          <nav className="flex flex-col pt-3 w-full">
            {iconItems.map(({ id, icon }) => (
              <button key={id} onClick={() => onItemClick(id)} className={`flex items-center justify-center py-3 w-full transition-colors ${activeItem === id ? "bg-[#152033]" : "bg-[#1f2f4a] hover:bg-[#243757]"}`}>
                <div className="relative size-6">{icon}</div>
              </button>
            ))}
            <div className="px-5 py-1.5"><div className="h-px bg-[#c9d0e3] rounded-[1px]" /></div>
            {iconItemsBottom.map(({ id, icon }) => (
              <button key={id} onClick={() => onItemClick(id)} className={`flex items-center justify-center py-3 w-full transition-colors ${activeItem === id ? "bg-[#152033]" : "bg-[#1f2f4a] hover:bg-[#243757]"}`}>
                <div className="relative size-6">{icon}</div>
              </button>
            ))}
          </nav>
        </div>
        {/* Footer collapsed */}
        <div className="bg-[#1f2f4a] shrink-0 w-full border-t border-[#708cb2] flex items-center justify-end py-3">
          <button onClick={onToggleCollapse} className="bg-[#2d4264] flex items-center justify-center rounded-l-[4px] size-8 hover:bg-[#364f6b] transition-colors">
            <div className="relative size-6">
              <div className="absolute inset-[29.17%_33.33%]">
                <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
                  <path d={svgPaths.p3afd0c00} fill="#B4BACC" style={{ transform: "scaleX(-1)", transformOrigin: "center" }} />
                </svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1f2f4a] flex flex-col h-full items-start justify-between shrink-0 w-[240px] transition-all duration-300">
      <div className="flex flex-col flex-1 w-full min-h-0" style={{ overflowY: "auto", overflowX: "hidden", scrollBehavior: "smooth", scrollbarWidth: "thin", scrollbarColor: "#2d4264 transparent" }}>
        {/* Logo */}
        <div className="h-[72px] shrink-0 w-full border-b border-[#2d4264] flex items-center justify-center px-6">
          <div className="flex items-center gap-1">
            <div className="h-[17px] w-[46px] relative shrink-0">
              <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.4502 17.1738">
                <path d={svgPaths.p2f23a200} fill="#3EB065" /><path d={svgPaths.p1a3dd600} fill="#3EB065" /><path d={svgPaths.p1019b2c0} fill="#3EB065" /><path d={svgPaths.pef0000} fill="#3EB065" /><path d={svgPaths.p33b0d980} fill="#3EB065" />
              </svg>
            </div>
            <span className="font-['Open_Sans',sans-serif] font-normal text-white text-[16px] leading-[22px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Platform</span>
          </div>
        </div>

        {/* Project dropdown */}
        <div className="px-4 pt-3">
          <button
            ref={triggerRef}
            onClick={() => {
              if (triggerRef.current) {
                const r = triggerRef.current.getBoundingClientRect();
                setDropdownAnchor({ left: r.left, top: r.bottom + 4 });
              }
              setProjectDropdownOpen(p => !p);
              setProjectSearch("");
            }}
            className="bg-[#152033] rounded-[4px] w-full border border-[#d2dfed] flex items-center gap-2 p-2 hover:bg-[#1a2a40] transition-colors"
          >
            <div className="bg-[#b0d8fe] flex items-center p-1 rounded-full shrink-0">
              <div className="relative size-4"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0588 11.736"><path d={svgPaths.pc737900} fill="#414857" /></svg></div>
            </div>
            <span className="flex-1 font-['Open_Sans',sans-serif] font-semibold text-white text-[14px] leading-[19px] overflow-hidden text-ellipsis whitespace-nowrap text-left" style={{ fontVariationSettings: '"wdth" 100' }}>{selectedProject}</span>
            <div className={`size-5 relative shrink-0 transition-transform duration-200 ${projectDropdownOpen ? "rotate-180" : ""}`}><svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.99476 13.3337C9.87183 13.3337 9.75841 13.3123 9.6545 13.2696C9.5506 13.2267 9.44879 13.1524 9.34907 13.0466L4.33858 7.71969C4.23163 7.60619 4.17454 7.46691 4.16731 7.30183C4.15989 7.13695 4.21698 6.98997 4.33858 6.8609C4.45999 6.73163 4.59463 6.66699 4.74249 6.66699C4.89036 6.66699 5.02499 6.73163 5.1464 6.8609L9.99476 12.0148L14.8431 6.8609C14.9499 6.7472 15.0809 6.68651 15.2362 6.67883C15.3913 6.67094 15.5295 6.73163 15.6509 6.8609C15.7725 6.98997 15.8333 7.1331 15.8333 7.29029C15.8333 7.44749 15.7725 7.59062 15.6509 7.71969L10.6404 13.0466C10.5407 13.1524 10.4389 13.2267 10.335 13.2696C10.2311 13.3123 10.1177 13.3337 9.99476 13.3337Z" fill="white"/></svg></div>
          </button>
          {projectDropdownOpen && dropdownAnchor && (
            <div ref={dropdownRef} className="fixed z-[9999] bg-white rounded-[8px] flex flex-col overflow-hidden border border-[#c9d0e3]" style={{ left: dropdownAnchor.left, top: dropdownAnchor.top, width: 340, boxShadow: "0 16px 48px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.30)" }}>
              {/* Header */}
              <div className="px-5 pt-5 pb-3">
                <p className="font-['Open_Sans',sans-serif] font-semibold text-[#1f2f4a] text-[18px] leading-[25px] mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>Projects</p>
                {/* Search */}
                <div className="flex items-center gap-2 border-2 border-[#2a8553] rounded-[20px] px-3 py-2 bg-white">
                  <input
                    autoFocus
                    value={projectSearch}
                    onChange={e => setProjectSearch(e.target.value)}
                    placeholder="Search for a project"
                    className="flex-1 font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[14px] leading-[22px] outline-none bg-transparent"
                    style={{ fontVariationSettings: '"wdth" 100' }}
                  />
                  <Search size={18} color="#414857" />
                </div>
              </div>
              {/* List */}
              <div className="overflow-y-auto" style={{ maxHeight: 280 }}>
                {PROJECT_LIST.filter(n => n.toLowerCase().includes(projectSearch.toLowerCase())).map((name) => {
                  const isSelected = selectedProject === name;
                  return (
                    <button
                      key={name}
                      onClick={() => { onProjectChange(name); setProjectDropdownOpen(false); }}
                      className="w-full text-left flex items-center gap-3 px-5 py-3 hover:bg-[#f5f7fa] transition-colors"
                    >
                      <span className={`font-['Open_Sans',sans-serif] text-[15px] leading-[22px] ${isSelected ? "font-semibold text-[#2a8553]" : "font-normal text-[#1f2f4a]"}`} style={{ fontVariationSettings: '"wdth" 100' }}>{name}</span>
                    </button>
                  );
                })}
              </div>
              {/* Footer */}
              <div className="border-t border-[#eaeef5] flex items-center gap-6 px-5 py-3">
                <button className="flex items-center gap-1.5 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] hover:text-[#1f2f4a]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <span className="text-[18px] leading-none">+</span> Add Project
                </button>
                <button className="flex items-center gap-1.5 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] hover:text-[#1f2f4a]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <svg viewBox="0 0 20 20" fill="none" className="size-4 shrink-0">
                    <rect x="2" y="2" width="16" height="4" rx="1" fill="#414857" opacity="0.5" />
                    <rect x="2" y="8" width="16" height="4" rx="1" fill="#414857" opacity="0.75" />
                    <rect x="2" y="14" width="16" height="4" rx="1" fill="#414857" />
                  </svg>
                  Browse Projects
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex flex-col pt-3 w-full">
          <SidebarItem id="all-projects" label="All projects overview" active={activeItem === "all-projects"} onClick={onItemClick} icon={<div className="absolute inset-[13.32%_12.28%_13.32%_12.36%]"><IconProjects /></div>} />
          <SidebarItem id="stages-lifecycle" label="Stages & Lifecycle" active={activeItem === "stages-lifecycle"} onClick={onItemClick} icon={<div className="absolute inset-[-0.01%_1.75%_0.79%_0]"><IconEnvironments /></div>} />
          <SidebarItem id="repositories" label="Repositories" active={activeItem === "repositories"} onClick={onItemClick} icon={<div className="absolute inset-[20.83%_12.5%]"><IconRepositories /></div>} />
          <SidebarItem id="user-management" label="User Management" active={activeItem === "user-management"} onClick={onItemClick} icon={<div className="absolute inset-[22.44%_20.83%]"><IconUser /></div>} />
          <SidebarItem id="user-authentication" label="User Authentication" active={activeItem === "user-authentication"} onClick={onItemClick} icon={<div className="absolute inset-[22.44%_7.04%_22.44%_8.33%]"><IconUserCheck /></div>} />
          <SidebarItem id="security" label="Security" active={activeItem === "security"} onClick={onItemClick} icon={<div className="absolute inset-[8.33%_12.5%]"><IconSecurity /></div>} />
          <SidebarItem id="general-management" label="General Management" active={activeItem === "general-management"} onClick={onItemClick} icon={<div className="absolute inset-[8.33%]"><IconNote /></div>} />
          <SidebarItem id="monitoring" label="Monitoring" active={activeItem === "monitoring"} onClick={onItemClick} icon={<div className="absolute inset-[16.67%_8.33%]"><IconMonitoring /></div>} />
          <SidebarItem id="topology" label="Topology" active={activeItem === "topology"} onClick={onItemClick} icon={<div className="absolute inset-[8.33%]"><IconTopology /></div>} />
          <div className="px-6 py-1.5"><div className="h-px bg-[#c9d0e3] rounded-[1px]" /></div>
          <SidebarItem id="artifactory-settings" label="Artifactory Settings" active={activeItem === "artifactory-settings"} onClick={onItemClick} icon={<div className="absolute inset-[8.33%_10.42%]"><IconArtifactorySettings /></div>} />
          <SidebarItem id="apptrust-settings" label="AppTrust Settings" active={activeItem === "apptrust-settings"} onClick={onItemClick} icon={<div className="absolute inset-[9.38%_12.5%]"><IconAppTrust /></div>} />
          {appTrustExpanded && (
            <div className="flex flex-col w-full">
              {subItems.map((sub) => (
                <button key={sub.id} onClick={() => onSubItemClick(sub.id)} className={`w-full text-left flex items-center relative pl-[56px] pr-3 py-2 transition-colors ${activeSubItem === sub.id ? "bg-[#152033]" : "bg-[#152033] hover:bg-[#1a2a40]"}`}>
                  {activeSubItem === sub.id && <div className="absolute left-[42px] top-[11.5px] w-[2px] h-3 bg-[#3eb065] rounded-tr-[4px] rounded-br-[4px]" />}
                  <span className={`font-['Open_Sans',sans-serif] text-[14px] leading-[19px] ${activeSubItem === sub.id ? "font-semibold text-[#3eb065]" : "font-normal text-[#eaeef5]"}`} style={{ fontVariationSettings: '"wdth" 100' }}>{sub.label}</span>
                </button>
              ))}
            </div>
          )}
          <SidebarItem id="xray-settings" label="Xray Settings" active={activeItem === "xray-settings"} onClick={onItemClick} icon={<div className="absolute inset-[10.42%_8.33%]"><IconXray /></div>} />
          <SidebarItem id="curation-settings" label="Curation Settings" active={activeItem === "curation-settings"} onClick={onItemClick} icon={<div className="absolute inset-[8.33%_10.42%_8.33%_8.33%]"><IconCuration /></div>} />
          <SidebarItem id="runtime" label="Runtime" active={activeItem === "runtime"} onClick={onItemClick} icon={<div className="absolute inset-[8.33%_8.33%_11.62%_8.33%]"><IconRuntime /></div>} />
          <SidebarItem id="connect" label="Connect" active={activeItem === "connect"} onClick={onItemClick} icon={<div className="absolute inset-[12.5%_18.22%_12.5%_20.83%]"><IconConnect /></div>} />
          <SidebarItem id="worker" label="Worker" active={activeItem === "worker"} onClick={onItemClick} icon={<div className="absolute inset-[10.38%_6.03%]"><IconWorker /></div>} />
        </nav>
      </div>

      {/* Footer */}
      <div className="bg-[#1f2f4a] shrink-0 w-full border-t border-[#708cb2] px-6 pt-3 pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="relative size-9 shrink-0">
            <div className="absolute inset-[7.81%_4.69%_6.25%_4.69%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.625 30.9375"><path d={svgPaths.p1c3cb000} fill="#3EB065" /></svg></div>
          </div>
          <button onClick={onToggleCollapse} className="bg-[#2d4264] flex items-center justify-center rounded-l-[4px] size-8 hover:bg-[#364f6b] transition-colors">
            <div className="relative size-6">
              <div className="absolute inset-[29.17%_33.33%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10"><path d={svgPaths.p3afd0c00} fill="#B4BACC" /></svg></div>
            </div>
          </button>
        </div>
        <p className="font-['Open_Sans',sans-serif] font-normal text-[12px] leading-[16px] whitespace-pre-wrap" style={{ fontVariationSettings: '"wdth" 100', color: "rgba(255,255,255,0.78)" }}>{"Enterprise Plus 7.38.8 rev 73808900 Licensed to Jfrog © Copyright 2024 "}<br />JFrog Ltd</p>
      </div>
    </div>
  );
}

// ─── Top Nav Bar ─────────────────────────────────────────────────────────────

function TopNavBar({ activeTab, onTabChange }: { activeTab: "platform" | "administration"; onTabChange: (t: "platform" | "administration") => void }) {
  return (
    <div className="bg-[#1f2f4a] flex h-[72px] items-center justify-between pl-12 pr-4 py-4 w-full shrink-0">
      <div className="flex gap-4 items-end">
        <div className="flex gap-4 h-10 items-start">
          <button
            onClick={() => onTabChange("platform")}
            className={`flex flex-col h-10 items-center justify-center relative transition-colors ${activeTab === "platform" ? "" : "hover:opacity-80"}`}
          >
            {activeTab === "platform" && <div aria-hidden className="absolute border-[#3eb065] border-b-2 border-solid inset-0 pointer-events-none" />}
            <span className={`font-['Open_Sans',sans-serif] text-[14px] leading-[22px] tracking-[0.14px] whitespace-nowrap ${activeTab === "platform" ? "font-semibold text-[#3eb065]" : "font-normal"}`} style={{ fontVariationSettings: '"wdth" 100', color: activeTab === "platform" ? "#3eb065" : "rgba(255,255,255,0.78)" }}>Platform</span>
          </button>
          <button
            onClick={() => onTabChange("administration")}
            className={`flex flex-col h-10 items-center justify-center relative transition-colors ${activeTab === "administration" ? "" : "hover:opacity-80"}`}
          >
            {activeTab === "administration" && <div aria-hidden className="absolute border-[#3eb065] border-b-2 border-solid inset-0 pointer-events-none" />}
            <span className={`font-['Open_Sans',sans-serif] text-[14px] leading-[19px] tracking-[0.14px] whitespace-nowrap ${activeTab === "administration" ? "font-semibold text-[#3eb065]" : "font-normal"}`} style={{ fontVariationSettings: '"wdth" 100', color: activeTab === "administration" ? "#3eb065" : "rgba(255,255,255,0.78)" }}>Administration</span>
          </button>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <div className="bg-white h-10 rounded-[4px] w-[364px] border border-[#c9d0e3] flex items-center overflow-hidden">
          <div className="flex gap-2 h-[34px] items-center px-2 border-r border-[#eaeef5]">
            <div className="relative size-6"><div className="absolute inset-[12.9%_16.67%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 17.8075"><path d={svgPaths.p11146f00} fill="#C9D0E3" /></svg></div></div>
            <div className="relative size-[18px]"><div className="absolute inset-[33.33%_20.83%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5 6"><path d={svgPaths.p2c3eb00} fill="#414857" /></svg></div></div>
          </div>
          <div className="flex flex-1 items-center gap-2 pl-3 pr-2">
            <span className="flex-1 font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[14px] leading-[22px] tracking-[0.14px]" style={{ fontVariationSettings: '"wdth" 100' }}>Search Packages</span>
          </div>
        </div>
        <div className="flex gap-2 h-10 items-center">
          <div className="h-[34px] w-px bg-[#eaeef5] rounded-[1px]" />
          <button className="flex gap-1 h-10 items-center justify-center px-3 py-2 rounded-[8px] w-[90px]" style={{ backgroundImage: "linear-gradient(243.105deg, rgb(255, 196, 1) 1.0452%, rgb(158, 226, 158) 100%)" }}>
            <div className="relative size-5"><div className="absolute inset-[12.5%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15"><path d={svgPaths.p3e339f00} fill="#414857" /><path d={svgPaths.p2d597700} fill="#414857" /></svg></div></div>
            <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Ask AI</span>
          </button>
        </div>
        <div className="flex gap-5 items-center">
          <div className="relative size-6"><div className="absolute inset-[6.33%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.9602 20.9608"><path d={svgPaths.p210d8200} fill="white" /><path d={svgPaths.p1a9bec00} fill="white" /><path clipRule="evenodd" d={svgPaths.p22839880} fill="white" fillRule="evenodd" /></svg></div></div>
          <div className="relative size-6"><div className="absolute inset-[12.5%_20.83%_10.9%_20.83%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 18.3846"><path d={svgPaths.p3f0e0900} fill="white" /></svg></div></div>
          <div className="bg-[#eef3f8] flex items-center justify-center rounded-full size-7 border border-[#708cb2]">
            <span className="font-['Open_Sans',sans-serif] font-semibold text-[#708cb2] text-[14px] tracking-[0.14px]" style={{ fontVariationSettings: '"wdth" 100' }}>G</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Shared: Toggle ───────────────────────────────────────────────────────────

function Toggle({ published, onChange, size = "sm" }: { published: boolean; onChange: () => void; size?: "sm" | "md" }) {
  const trackCls = size === "md"
    ? "relative rounded-[12px] w-[59.5px] h-[28px]"
    : "relative rounded-[12px] w-full h-[18px]";
  return (
    <button onClick={onChange} className={`${trackCls} transition-colors ${published ? "bg-[#2a8553]" : "bg-[#999db4]"}`}>
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex items-center relative size-full m-[2px] px-[0px] py-[2px]">
          <div
            className="relative shrink-0 size-[14px] transition-transform duration-200 ease-in-out"
            style={{ transform: published ? `translateX(${size === "md" ? 41 : 42}px)` : "translateX(0)" }}
          >
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" fill="white" r="7" />
            </svg>
          </div>
        </div>
      </div>
    </button>
  );
}

// ─── Toggle with Tooltip ─────────────────────────────────────────────────────

function ToggleWithTooltip({ published, onChange }: { published: boolean; onChange: () => void }) {
  return (
    <div className="flex flex-col gap-[6px] items-center w-[60px] relative group" onClick={(e) => e.stopPropagation()}>
      <Toggle published={published} onChange={onChange} />
      <span
        className={`font-['Open_Sans',sans-serif] font-semibold text-[12px] leading-[16px] text-center whitespace-nowrap block w-[75px] ${published ? "text-[#2a8553]" : "text-[#999db4]"}`}
        style={{ fontVariationSettings: '"wdth" 100' }}
      >
        {published ? "Published" : "Unpublished"}
      </span>
      {/* Tooltip */}
      <div className="absolute bottom-full mb-2 right-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-150 pointer-events-none w-[220px]">
        <div className="bg-[#152033] rounded-[4px] px-3 py-2 shadow-lg">
          <p className="font-['Open_Sans',sans-serif] text-[12px] leading-[18px] text-white" style={{ fontVariationSettings: '"wdth" 100' }}>
            <span className="font-semibold">{published ? "Published" : "Unpublished"}</span>
            {published
              ? "- project admins can configure this framework under Compliance."
              : "- hidden from project admins. Publish to make it available under Compliance."}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Shared: CoverageBar ──────────────────────────────────────────────────────

function CoverageBar({ enabled, total }: { enabled: number; total: number }) {
  const pct = total > 0 ? Math.min(enabled / total, 1) : 0;
  const hasRules = enabled > 0;
  return (
    <div className="flex flex-col gap-1 w-full">
      <span className="font-['Open_Sans',sans-serif] font-semibold text-[12px] leading-[16px]" style={{ color: hasRules ? "#414857" : "#999db4", fontVariationSettings: '"wdth" 100' }}>
        {hasRules ? "Active rules" : "No rules"}
      </span>
      <div className="flex gap-2 items-center w-full">
        <div className="flex-1 bg-[#d2dfed] h-2 rounded-full overflow-hidden">
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${pct * 100}%`, backgroundColor: "#415980" }} />
        </div>
        <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[12px] leading-[16px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
          <span className="font-semibold">{enabled}</span>/{total} rules
        </span>
      </div>
    </div>
  );
}

// ─── Breadcrumb ───────────────────────────────────────────────────────────────

function ChevronRight() {
  return (
    <div className="relative size-4 overflow-clip">
      <div className="absolute inset-[20.83%_33.33%]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 9.33333">
          <path d={svgPaths.p2a1d9600} fill="#414857" />
        </svg>
      </div>
    </div>
  );
}

// ─── Framework Card ───────────────────────────────────────────────────────────

interface FrameworkCardProps {
  framework: Framework;
  onToggle: (id: string) => void;
  onClick: (id: string) => void;
}

function FrameworkCard({ framework, onToggle, onClick }: FrameworkCardProps) {
  const enabled = getEnabledRules(framework);
  return (
    <div
      className="bg-[#f8fafb] rounded-[4px] border border-[#eaeef5] cursor-pointer hover:border-[#b4bacc] hover:shadow-sm transition-all"
      onClick={() => onClick(framework.id)}
    >
      <div className="flex flex-col gap-4 p-6">
        <div className="flex gap-3 items-start w-full">
          <div className="flex items-center justify-center rounded-[4px] shrink-0 size-8 overflow-clip" style={{ backgroundColor: framework.color }}>
            {framework.logo ? <img src={framework.logo} alt={framework.abbr} className="w-full h-full object-cover" /> : <span className="font-['Open_Sans',sans-serif] font-semibold text-white text-[12px] leading-[16px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>{framework.abbr}</span>}
          </div>
          <div className="flex flex-col flex-1 gap-[2px] min-w-0">
            <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[16px] leading-[22px] truncate" style={{ fontVariationSettings: '"wdth" 100' }}>{framework.name}</span>
            <span className="font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[12px] leading-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{framework.category}</span>
          </div>
          <ToggleWithTooltip published={framework.published} onChange={() => onToggle(framework.id)} />
        </div>
        <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[22px] overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", fontVariationSettings: '"wdth" 100' }}>{framework.description}</p>
        <CoverageBar enabled={enabled} total={framework.totalRules} />
      </div>
    </div>
  );
}

// ─── Framework Detail Drawer ──────────────────────────────────────────────────

interface RuleRowProps {
  rule: RuleItem;
  policies: RulePolicy[];
  onToggle: () => void;
  onCreatePolicy: (policy: Omit<RulePolicy, "id">) => void;
  onUpdatePolicy: (policyId: string, policy: Omit<RulePolicy, "id">) => void;
  onDeletePolicy: (policyId: string) => void;
}

const MOCK_REPLACEMENT_RULES = [
  "Evidence type {cyclonedx-vex} exist on application version to target stage",
  "SBOM attestation present and signed for all container images",
  "No critical CVE with CVSS score between 9.0 and 10.0 in runtime dependencies",
  "Code signing certificate valid and not expired for all binaries",
  "All secrets scanned and no credentials found in repository history",
  "Dependency license compatible with project license policy",
  "Static analysis scan completed with zero critical findings",
  "Container image built from approved base image with pinned digest",
];

interface ReplaceModalProps {
  rule: RuleItem;
  onClose: () => void;
  onConfirm: (reason: string, newRuleLabel: string) => void;
}

function CRABadge() {
  return (
    <div className="bg-[#eaeef5] flex items-center gap-1.5 px-2 py-1 rounded-[2px] shrink-0">
      <div className="bg-[#003399] rounded-[4px] size-4 flex items-center justify-center shrink-0">
        <span className="font-['Open_Sans',sans-serif] font-semibold text-white leading-none" style={{ fontSize: "6px", fontVariationSettings: '"wdth" 100' }}>CRA</span>
      </div>
      <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px] leading-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>EU CRA</span>
    </div>
  );
}

const MODAL_CONTROLS = [
  { id: "mc1", tag: "PO.3.2", title: "Configuration & Attack Surface Minimization", description: "Verifies that products and services use secure default configurations and expose only the functionality required for operation. By reducing unnecessary components and access points, this control helps minimize security risks." },
  { id: "mc2", tag: "PO.3.2", title: "Configuration & Attack Surface Minimization", description: "Verifies that products and services use secure default configurations and expose only the functionality required for operation. By reducing unnecessary components and access points, this control helps minimize security risks." },
];

function ReplaceModal({ rule, onClose, onConfirm }: ReplaceModalProps) {
  const [step, setStep] = useState<"initial" | "choose">("initial");
  const [reason, setReason] = useState("");
  const [selectedRule, setSelectedRule] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedControls, setExpandedControls] = useState<Set<string>>(new Set());
  const [expandedRules, setExpandedRules] = useState<Set<number>>(new Set());

  const toggleControl = (id: string) => setExpandedControls(prev => {
    const next = new Set(prev);
    next.has(id) ? next.delete(id) : next.add(id);
    return next;
  });

  const toggleRule = (i: number) => setExpandedRules(prev => {
    const next = new Set(prev);
    next.has(i) ? next.delete(i) : next.add(i);
    return next;
  });

  const filtered = MOCK_REPLACEMENT_RULES.filter(r =>
    r.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const font = { fontVariationSettings: '"wdth" 100' };

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[rgba(65,72,87,0.4)]" onClick={onClose} />
      <div
        className="relative bg-white rounded-[6px] w-[667px] flex flex-col shadow-[0px_4px_10px_2px_rgba(112,140,178,0.15)]"
        style={{ maxHeight: "90vh" }}
      >
        {/* Header */}
        <div className="relative shrink-0">
          <div className="flex items-start justify-between px-6 pt-4 pb-2 gap-4">
            <div className="flex items-center gap-2 py-0.5">
              <ArrowLeftRight size={20} color="#414857" />
              <h2 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[18px] leading-[25px]" style={font}>Replace Rule?</h2>
            </div>
            <button onClick={onClose} className="flex items-center justify-center size-10 rounded-[4px] hover:bg-[#eaeef5] transition-colors shrink-0">
              <X size={16} color="#414857" />
            </button>
          </div>
          {step === "choose" && <div className="h-px bg-[#eaeef5] mx-6 mb-2" />}
        </div>

        {step === "initial" ? (
          <>
            <div className="flex flex-col gap-5 px-6 py-5 overflow-y-auto flex-1" style={{ scrollbarWidth: "thin", scrollbarColor: "#e8ecf2 transparent" }}>
              {/* On Controls */}
              <div className="flex flex-col gap-2">
                <p className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px] leading-[16px]" style={font}>On Controls</p>
                {MODAL_CONTROLS.slice(0, 1).map(ctrl => {
                  const isExpanded = expandedControls.has(ctrl.id);
                  return (
                    <div key={ctrl.id} className="bg-white border border-[#eaeef5] rounded-[4px]">
                      <button
                        onClick={() => toggleControl(ctrl.id)}
                        className="w-full flex items-center justify-between px-3 py-3 text-left hover:bg-[#f8fafb] transition-colors rounded-[4px]"
                      >
                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                          <div className="flex items-center gap-3">
                            <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px]" style={font}>{ctrl.tag}</span>
                            <CRABadge />
                          </div>
                          <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap" style={font}>{ctrl.title}</span>
                        </div>
                        <ChevronDown size={16} color="#414857" className={`shrink-0 ml-2 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                      </button>
                      {isExpanded && (
                        <div className="px-3 pb-3 border-t border-[#eaeef5]">
                          <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px] leading-[20px] pt-2" style={font}>{ctrl.description}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Reason */}
              <div className="flex flex-col gap-1">
                <p className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[12px] leading-[16px]" style={font}>
                  <span className="font-semibold">Reason</span>{" "}
                  <span className="text-[#999db4]">(optional)</span>
                </p>
                <div className="relative border border-[#c9d0e3] rounded-[4px] bg-white">
                  <textarea
                    value={reason}
                    onChange={e => { if (e.target.value.length <= 100) setReason(e.target.value); }}
                    placeholder="Why this change required?"
                    className="w-full px-3 pt-3 pb-7 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[12px] leading-[16px] resize-none outline-none rounded-[4px] h-[126px] placeholder:text-[#999db4]"
                    style={font}
                  />
                  <span className="absolute bottom-2 left-3 font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[12px]">{reason.length}/100</span>
                </div>
              </div>
            </div>

            {/* Footer step 1 */}
            <div className="relative shrink-0 border-t border-[#eaeef5]">
              <div className="flex items-center justify-end gap-4 px-6 py-3">
                <button onClick={onClose} className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#eaeef5] transition-colors" style={font}>Cancel</button>
                <button
                  onClick={() => setStep("choose")}
                  className="bg-[#3eb065] font-['Open_Sans',sans-serif] font-semibold text-white text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#2a8553] transition-colors"
                  style={font}
                >
                  Next
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Search + filter */}
            <div className="flex gap-2 px-6 py-3 shrink-0">
              <div className="flex-1 border border-[#c9d0e3] rounded-[4px] flex items-center gap-2 px-2 h-[34px] bg-white">
                <Search size={14} color="#5e6d81" className="shrink-0" />
                <input
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search rules"
                  className="flex-1 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] outline-none bg-transparent"
                  style={font}
                  autoFocus
                />
              </div>
              <div className="border border-[#c9d0e3] rounded-[4px] flex items-center gap-2 px-3 h-[34px] min-w-[110px] bg-white cursor-pointer">
                <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px]" style={font}>All types</span>
                <ChevronDown size={14} color="#5e6d81" />
              </div>
            </div>

            {/* Rule list */}
            <div className="flex flex-col flex-1 min-h-0 overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#e8ecf2 transparent", maxHeight: "380px" }}>
              {filtered.length === 0 && searchQuery && (
                <EmptySearch message="No rules found" />
              )}
              {filtered.map((r, i) => {
                const isRuleExpanded = expandedRules.has(i);
                const mockDesc = "Verifies that all components meet the required security standards and are compliant with the applicable framework controls.";
                return (
                  <div key={i} className="bg-white border border-[#eaeef5] rounded-[4px] mx-6 mb-1 hover:border-[#c9d0e3] transition-colors">
                    <div className="flex items-center gap-3 px-3 py-3 group">
                      <div
                        className={`size-4 rounded-full border-2 shrink-0 flex items-center justify-center transition-colors cursor-pointer ${selectedRule === r ? "border-[#3eb065]" : "border-[#c9d0e3]"}`}
                        onClick={() => setSelectedRule(r)}
                      >
                        {selectedRule === r && <div className="size-2 bg-[#3eb065] rounded-full" />}
                      </div>
                      <div className="relative shrink-0 size-5"><IconShieldCheck color="#5e6d81" /></div>
                      <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap flex-1 cursor-pointer" style={font} onClick={() => setSelectedRule(r)}>{r}</span>
                      <button
                        onClick={() => toggleRule(i)}
                        className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 flex items-center justify-center size-6 rounded hover:bg-[#f0f2f5]"
                      >
                        <ChevronDown size={14} color="#5e6d81" className={`transition-transform duration-200 ${isRuleExpanded ? "rotate-180" : ""}`} />
                      </button>
                    </div>
                    {isRuleExpanded && (
                      <div className="px-3 pb-3 border-t border-[#eaeef5]">
                        <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px] leading-[20px] pt-2" style={font}>{mockDesc}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Footer step 2 */}
            <div className="relative shrink-0 border-t border-[#eaeef5]">
              <div className="flex items-center justify-between px-6 py-3">
                <div className="flex items-center gap-1">
                  <span className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px]" style={font}>{"Can't find the rule you need? "}</span>
                  <button className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[13px] flex items-center gap-0.5 hover:underline" style={font}>
                    Build Your Own Rule
                    <ExternalLink size={12} color="#414857" />
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <button onClick={() => setStep("initial")} className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#eaeef5] transition-colors" style={font}>Back</button>
                  <button
                    onClick={() => { if (selectedRule) onConfirm(reason, selectedRule); }}
                    disabled={!selectedRule}
                    className={`font-['Open_Sans',sans-serif] font-semibold text-[14px] px-4 h-[34px] rounded-[4px] transition-colors ${selectedRule ? "bg-[#3eb065] text-white hover:bg-[#2a8553]" : "bg-[#eaeef5] text-[#999db4] cursor-not-allowed"}`}
                    style={font}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body
  );
}

function EmptySearch({ message = "No results found" }: { message?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-6 gap-2">
      <div className="relative w-[160px] h-[100px]">
        <NoSearchResultsMedium />
      </div>
      <p className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] leading-[19px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>{message}</p>
      <p className="font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[12px] leading-[16px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>Try a different search term</p>
    </div>
  );
}

function ResetConfirmModal({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) {
  const font = { fontVariationSettings: '"wdth" 100' };
  const [controlExpanded, setControlExpanded] = useState(false);
  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[rgba(65,72,87,0.4)]" onClick={onClose} />
      <div className="relative bg-white rounded-[6px] w-[500px] flex flex-col shadow-[0px_4px_10px_2px_rgba(112,140,178,0.15)]">
        {/* Header */}
        <div className="flex items-start justify-between px-6 pt-4 pb-3 gap-4">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
              <path d="M12 2L2 20h20L12 2z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" fill="#FEF3C7" />
              <path d="M12 9v5M12 16.5v.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <h2 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[18px] leading-[25px]" style={font}>Reset Rule?</h2>
          </div>
          <button onClick={onClose} className="flex items-center justify-center size-8 rounded-[4px] hover:bg-[#eaeef5] transition-colors shrink-0">
            <X size={14} color="#414857" />
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-3 px-6 pb-5">
          <p className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px] leading-[16px]" style={font}>On Control</p>
          <div className="bg-white border border-[#eaeef5] rounded-[4px]">
            <button
              onClick={() => setControlExpanded(p => !p)}
              className="w-full flex items-center justify-between px-3 py-3 text-left hover:bg-[#f8fafb] transition-colors rounded-[4px]"
            >
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px]" style={font}>PO.3.2</span>
                  <CRABadge />
                </div>
                <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px]" style={font}>Configuration &amp; Attack Surface Minimization</span>
              </div>
              <ChevronDown size={16} color="#414857" className={`shrink-0 ml-2 transition-transform duration-200 ${controlExpanded ? "rotate-180" : ""}`} />
            </button>
            {controlExpanded && (
              <div className="px-3 pb-3 border-t border-[#eaeef5]">
                <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px] leading-[20px] pt-2" style={font}>Verifies that products and services use secure default configurations and expose only the functionality required for operation.</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="relative border-t border-[#eaeef5]">
          <div className="flex items-center justify-end gap-3 px-6 py-3">
            <button onClick={onClose} className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#eaeef5] transition-colors" style={font}>Cancel</button>
            <button onClick={onConfirm} className="bg-[#3eb065] font-['Open_Sans',sans-serif] font-semibold text-white text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#2a8553] transition-colors" style={font}>Yes, Reset</button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function DisableConfirmModal({ onClose, onConfirm }: { onClose: () => void; onConfirm: (reason: string) => void }) {
  const font = { fontVariationSettings: '"wdth" 100' };
  const [reason, setReason] = useState("");
  const [controlExpanded, setControlExpanded] = useState(false);
  const canDisable = reason.trim().length > 0;

  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[rgba(65,72,87,0.4)]" onClick={onClose} />
      <div className="relative bg-white rounded-[6px] w-[660px] flex flex-col shadow-[0px_4px_10px_2px_rgba(112,140,178,0.15)]">
        {/* Header */}
        <div className="relative shrink-0 border-b border-[#eaeef5]">
          <div className="flex items-start justify-between px-6 pt-4 pb-2 gap-4">
            <div className="flex items-center gap-2 py-0.5">
              <div className="relative shrink-0 size-[33px]">
                <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 33 33">
                  <circle cx="16.5" cy="16.5" r="12" stroke="#E93838" strokeWidth="1.5" />
                  <path d="M10 10L23 23" stroke="#E93838" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[18px] leading-[25px]" style={font}>Disable Rule?</h2>
            </div>
            <button onClick={onClose} className="flex items-center justify-center size-10 rounded-[4px] hover:bg-[#eaeef5] transition-colors shrink-0">
              <X size={16} color="#414857" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex flex-col gap-4 px-6 py-5">
          {/* On Control */}
          <div className="flex flex-col gap-2">
            <p className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px] leading-[16px]" style={font}>On Control</p>
            <div className="bg-white border border-[#eaeef5] rounded-[4px]">
              <button
                onClick={() => setControlExpanded(p => !p)}
                className="w-full flex items-center justify-between px-3 py-3 text-left hover:bg-[#f8fafb] transition-colors rounded-[4px]"
              >
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div className="flex items-center gap-3">
                    <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px]" style={font}>PO.3.2</span>
                    <CRABadge />
                  </div>
                  <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px]" style={font}>Configuration &amp; Attack Surface Minimization</span>
                </div>
                <ChevronDown size={16} color="#414857" className={`shrink-0 ml-2 transition-transform duration-200 ${controlExpanded ? "rotate-180" : ""}`} />
              </button>
              {controlExpanded && (
                <div className="px-3 pb-3 border-t border-[#eaeef5]">
                  <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px] leading-[20px] pt-2" style={font}>Verifies that products and services use secure default configurations and expose only the functionality required for operation.</p>
                </div>
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#eaeef5]" />

          {/* Disable Reason */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <span className="font-['Open_Sans',sans-serif] font-semibold text-[#5e6d81] text-[14px] leading-[19px]" style={font}>Disable Reason</span>
              <span className="font-['Open_Sans',sans-serif] font-semibold text-[#E93838] text-[14px] leading-[19px]">*</span>
            </div>
            <div className="relative border border-[#c9d0e3] rounded-[4px] bg-white">
              <textarea
                value={reason}
                onChange={e => { if (e.target.value.length <= 100) setReason(e.target.value); }}
                placeholder={"Why can't this rule be enforced for this framwork?"}
                className="w-full px-3 pt-3 pb-7 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] resize-none outline-none rounded-[4px] h-[126px] placeholder:text-[#999db4]"
                style={font}
              />
              <span className="absolute bottom-2 left-3 font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[14px]">{reason.length}/100</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative shrink-0 border-t border-[#eaeef5]">
          <div className="flex items-center justify-end gap-4 px-6 py-3">
            <button onClick={onClose} className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#eaeef5] transition-colors" style={font}>Cancel</button>
            <button
              onClick={() => canDisable && onConfirm(reason)}
              className={`font-['Open_Sans',sans-serif] font-semibold text-[14px] px-4 h-[34px] rounded-[4px] transition-colors ${canDisable ? "bg-[#E93838] text-white hover:bg-[#c42d2d]" : "bg-[#f8fafb] text-[#c9d0e3] cursor-not-allowed"}`}
              style={font}
            >
              Disable
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

interface RulePolicy {
  id: string;
  scope: "global" | "projects" | "applications";
  action: "fail" | "warning";
  applicationLabels?: string[];
  projectLabels?: string[];
  projectNames?: string[];
  applicationNames?: string[];
}

interface PolicyDrawerProps {
  rule: RuleItem;
  policy?: RulePolicy;
  policyCount: number;
  onClose: () => void;
  onSave: (policy: Omit<RulePolicy, "id">) => void;
  onDelete?: () => void;
}

function PolicyRadio({ checked, onClick, label, icon }: { checked: boolean; onClick: () => void; label: string; icon?: React.ReactNode }) {
  return (
    <button onClick={onClick} className="flex items-center gap-2 text-left">
      <span className={`flex size-[18px] items-center justify-center rounded-full border ${checked ? "border-[#2a8553]" : "border-[#c9d0e3]"}`}>
        {checked && <span className="size-2 rounded-full bg-[#2a8553]" />}
      </span>
      {icon}
      <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px]" style={{ fontVariationSettings: '"wdth" 100' }}>{label}</span>
    </button>
  );
}

function PolicyScopeIcon({ scope }: { scope: RulePolicy["scope"] }) {
  if (scope === "global") {
    return (
      <svg aria-hidden className="size-4 shrink-0" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#5e6d81" strokeWidth="1.3" />
        <path d="M2.5 10h15M10 2c2.2 2.2 3.3 4.9 3.3 8S12.2 15.8 10 18M10 2C7.8 4.2 6.7 6.9 6.7 10S7.8 15.8 10 18" stroke="#5e6d81" strokeWidth="1.1" />
      </svg>
    );
  }

  if (scope === "projects") {
    return (
      <svg aria-hidden className="size-4 shrink-0" viewBox="0 0 20 20" fill="none">
        <path d="M3 6.2L10 3l7 3.2-7 3.2-7-3.2ZM3 10l7 3.2 7-3.2M3 13.8l7 3.2 7-3.2" stroke="#5e6d81" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }

  return (
    <svg aria-hidden className="size-4 shrink-0" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="3" width="5" height="5" rx="1" stroke="#5e6d81" strokeWidth="1.2" />
      <rect x="12" y="3" width="5" height="5" rx="1" stroke="#5e6d81" strokeWidth="1.2" />
      <rect x="3" y="12" width="5" height="5" rx="1" stroke="#5e6d81" strokeWidth="1.2" />
      <rect x="12" y="12" width="5" height="5" rx="1" stroke="#5e6d81" strokeWidth="1.2" />
    </svg>
  );
}

function PolicyActionIcon({ action }: { action: RulePolicy["action"] }) {
  if (action === "fail") {
    return (
      <span aria-hidden className="flex size-3.5 shrink-0 items-center justify-center rounded-full border border-current text-[10px] leading-none">×</span>
    );
  }

  return (
    <svg aria-hidden className="size-3.5 shrink-0" viewBox="0 0 18 18" fill="none">
      <path d="M9 2.5l7 12H2l7-12Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 6.5v4M9 12.7v.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function getPolicyScopeSelection(policy: RulePolicy) {
  if (policy.scope === "global") return "Global Organisation";
  if (policy.scope === "projects") {
    if (policy.projectNames?.length) return policy.projectNames.join(", ");
    if (policy.projectLabels?.length) return "Projects matching labels";
    return "All projects";
  }
  if (policy.applicationNames?.length) return policy.applicationNames.join(", ");
  return "All applications";
}

function PolicyLabelChip({ label }: { label: string }) {
  return (
    <span className="inline-flex max-w-full items-center gap-1 rounded-[3px] border border-[#b4bacc] bg-[#eef3f8] px-1.5 py-0.5 font-['Open_Sans',sans-serif] text-[11px] font-semibold leading-[14px] text-[#414857]" style={{ fontVariationSettings: '"wdth" 100' }}>
      <svg aria-hidden className="size-2.5 shrink-0" viewBox="0 0 14 14" fill="none">
        <path d="M2 3.2V7l4.8 4.8 5-5L7 2H3.2C2.54 2 2 2.54 2 3.2Z" stroke="#5e6d81" strokeWidth="1.1" strokeLinejoin="round" />
        <circle cx="4.6" cy="4.6" r=".8" fill="#5e6d81" />
      </svg>
      <span className="truncate">{label}</span>
    </span>
  );
}

function PolicyScopeSummary({ policy }: { policy: RulePolicy }) {
  const [isOverflowing, setIsOverflowing] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);
  const measurementRef = useRef<HTMLSpanElement>(null);
  const labels = policy.scope === "global" ? policy.applicationLabels ?? [] : policy.scope === "projects" ? policy.projectLabels ?? [] : [];
  const selectedNames = policy.scope === "projects" ? policy.projectNames ?? [] : policy.scope === "applications" ? policy.applicationNames ?? [] : [];
  const scopeType = policy.scope === "projects" ? "projects" : "applications";
  const scopeSummary = getPolicyScopeSelection(policy);
  const condensedScopeSummary = selectedNames.length === 0
    ? `All ${scopeType}`
    : `${selectedNames.length} ${selectedNames.length === 1 ? scopeType.slice(0, -1) : scopeType}`;
  const tooltipParts = [
    selectedNames.length > 0 ? selectedNames.join(", ") : scopeSummary,
    labels.length > 0 ? `Labels: ${labels.join(", ")}` : "",
  ].filter(Boolean);

  useEffect(() => {
    const updateOverflow = () => {
      setIsOverflowing((measurementRef.current?.scrollWidth ?? 0) > (containerRef.current?.clientWidth ?? 0));
    };
    updateOverflow();
    const observer = new ResizeObserver(updateOverflow);
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [policy]);

  const labelIcon = (
    <svg aria-hidden className="size-3 shrink-0" viewBox="0 0 14 14" fill="none">
      <path d="M2 3.2V7l4.8 4.8 5-5L7 2H3.2C2.54 2 2 2.54 2 3.2Z" stroke="#5e6d81" strokeWidth="1.1" strokeLinejoin="round" />
      <circle cx="4.6" cy="4.6" r=".8" fill="#5e6d81" />
    </svg>
  );

  return (
    <span ref={containerRef} className="group/policy-summary relative flex min-w-0 flex-1 items-center gap-2 font-['Open_Sans',sans-serif] text-[12px] font-semibold leading-[16px] text-[#414857]" style={{ fontVariationSettings: '"wdth" 100' }}>
      <PolicyScopeIcon scope={policy.scope} />
      {isOverflowing ? (
        <span className="flex min-w-0 items-center gap-3 whitespace-nowrap">
          <span>{policy.scope === "global" ? "Global Organisation" : condensedScopeSummary}</span>
          {labels.length > 0 && (
            <span className="flex items-center gap-1">
              {labelIcon}
              <span>{labels.length} labels</span>
            </span>
          )}
        </span>
      ) : (
        <span className="flex min-w-0 items-center gap-2 whitespace-nowrap">
          <span>{scopeSummary}</span>
          {labels.map(label => <PolicyLabelChip key={label} label={label} />)}
        </span>
      )}
      {isOverflowing && (
        <span className="pointer-events-none absolute bottom-full left-0 z-40 mb-2 hidden max-w-[420px] rounded-[4px] bg-[#1f2f4a] px-3 py-2 font-['Open_Sans',sans-serif] text-[12px] font-normal leading-[18px] text-white shadow-lg group-hover/policy-summary:block group-focus-within/policy-summary:block">
          {tooltipParts.join(" · ")}
        </span>
      )}
      <span ref={measurementRef} aria-hidden className="pointer-events-none absolute invisible inline-flex w-max items-center gap-2 whitespace-nowrap">
        <PolicyScopeIcon scope={policy.scope} />
        <span>{scopeSummary}</span>
        {labels.map(label => <PolicyLabelChip key={label} label={label} />)}
      </span>
    </span>
  );
}

function PolicyMultiSelect({
  placeholder,
  options,
  selected,
  selectionType,
  displayAsTags = false,
  isOpen,
  onToggleOpen,
  onClose,
  onChange,
}: {
  placeholder: string;
  options: string[];
  selected: string[];
  selectionType: "projects" | "applications" | "labels";
  displayAsTags?: boolean;
  isOpen: boolean;
  onToggleOpen: () => void;
  onClose: () => void;
  onChange: (selected: string[]) => void;
}) {
  const [search, setSearch] = useState("");
  const [isOverflowing, setIsOverflowing] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const measurementRef = useRef<HTMLSpanElement>(null);
  const font = { fontVariationSettings: '"wdth" 100' };
  const filteredOptions = options.filter(option => option.toLowerCase().includes(search.toLowerCase()));
  const summary = selected.length === 0 ? placeholder : selected.join(", ");
  const isCondensed = selected.length > 0 && isOverflowing;

  const toggleOption = (option: string) => {
    onChange(selected.includes(option)
      ? selected.filter(item => item !== option)
      : [...selected, option]);
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleOutsideClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen, onClose]);

  useEffect(() => {
    const updateOverflow = () => {
      const availableWidth = (triggerRef.current?.clientWidth ?? 0) - 44;
      const contentWidth = measurementRef.current?.scrollWidth ?? 0;
      setIsOverflowing(contentWidth > availableWidth);
    };
    updateOverflow();
    const observer = new ResizeObserver(updateOverflow);
    if (triggerRef.current) observer.observe(triggerRef.current);
    return () => observer.disconnect();
  }, [displayAsTags, selected]);

  return (
    <div ref={containerRef} className="relative w-full">
      <button
        ref={triggerRef}
        onClick={onToggleOpen}
        className={`group/selection relative flex min-h-[40px] w-full items-center justify-between gap-3 rounded-[4px] border bg-white px-3 py-1.5 text-left transition-colors ${isOpen ? "border-[#415980]" : "border-[#c9d0e3] hover:border-[#999db4]"}`}
        aria-expanded={isOpen}
      >
        {isCondensed ? (
          <span className="relative flex min-w-0 flex-1 items-center gap-2 font-['Open_Sans',sans-serif] text-[13px] font-semibold text-[#414857]" style={font}>
            {selectionType === "labels" ? (
              <svg aria-hidden className="size-4 shrink-0" viewBox="0 0 14 14" fill="none">
                <path d="M2 3.2V7l4.8 4.8 5-5L7 2H3.2C2.54 2 2 2.54 2 3.2Z" stroke="#5e6d81" strokeWidth="1.1" strokeLinejoin="round" />
                <circle cx="4.6" cy="4.6" r=".8" fill="#5e6d81" />
              </svg>
            ) : (
              <PolicyScopeIcon scope={selectionType} />
            )}
            <span>{selected.length} {selectionType}</span>
            <span className="pointer-events-none absolute bottom-full left-0 z-40 mb-2 hidden max-w-[420px] rounded-[4px] bg-[#1f2f4a] px-3 py-2 font-['Open_Sans',sans-serif] text-[12px] font-normal leading-[18px] text-white shadow-lg group-hover/selection:block group-focus-visible/selection:block" style={font}>
              {selected.join(", ")}
            </span>
          </span>
        ) : displayAsTags && selected.length > 0 ? (
          <span className="flex min-w-0 flex-1 flex-wrap gap-1.5">
            {selected.map(item => (
              <PolicyLabelChip key={item} label={item} />
            ))}
          </span>
        ) : (
          <span className={`min-w-0 flex-1 overflow-hidden whitespace-nowrap font-['Open_Sans',sans-serif] text-[14px] ${selected.length > 0 ? "text-[#414857]" : "text-[#999db4]"}`} style={font}>{summary}</span>
        )}
        <ChevronDown size={14} color="#5e6d81" className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`} />
        <span ref={measurementRef} aria-hidden className="pointer-events-none absolute invisible inline-flex w-max items-center gap-1.5 whitespace-nowrap">
          {displayAsTags && selected.length > 0
            ? selected.map(item => <PolicyLabelChip key={item} label={item} />)
            : summary}
        </span>
      </button>
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-30 mt-1 overflow-hidden rounded-[4px] border border-[#c9d0e3] bg-white shadow-[0_8px_24px_rgba(65,72,87,0.16)]">
          <div className="border-b border-[#eaeef5] p-2">
            <div className="flex h-[34px] items-center gap-2 rounded-[4px] border border-[#c9d0e3] px-2 focus-within:border-[#415980]">
              <Search size={14} color="#5e6d81" className="shrink-0" />
              <input
                value={search}
                onChange={event => setSearch(event.target.value)}
                placeholder={`Search ${placeholder.toLowerCase()}`}
                className="min-w-0 flex-1 bg-transparent font-['Open_Sans',sans-serif] text-[13px] text-[#414857] outline-none placeholder:text-[#999db4]"
                style={font}
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-[220px] overflow-y-auto py-1">
            {filteredOptions.map(option => {
              const checked = selected.includes(option);
              return (
                <button
                  key={option}
                  onClick={() => toggleOption(option)}
                  className="flex w-full items-center gap-2 px-3 py-2 text-left hover:bg-[#f8fafb]"
                >
                  <span className={`flex size-4 shrink-0 items-center justify-center rounded-[2px] border ${checked ? "border-[#2a8553] bg-[#2a8553]" : "border-[#c9d0e3] bg-white"}`}>
                    {checked && <svg aria-hidden width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </span>
                  <span className="min-w-0 flex-1 truncate font-['Open_Sans',sans-serif] text-[13px] text-[#414857]" style={font}>{option}</span>
                </button>
              );
            })}
            {filteredOptions.length === 0 && (
              <p className="px-3 py-4 text-center font-['Open_Sans',sans-serif] text-[13px] text-[#999db4]" style={font}>No results found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function DeletePolicyConfirmModal({ onClose, onConfirm }: { onClose: () => void; onConfirm: () => void }) {
  const font = { fontVariationSettings: '"wdth" 100' };
  return createPortal(
    <div className="fixed inset-0 z-[210] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="delete-policy-title">
      <div className="absolute inset-0 bg-[rgba(65,72,87,0.4)]" onClick={onClose} />
      <div className="relative flex w-[480px] flex-col rounded-[6px] bg-white shadow-[0px_4px_10px_2px_rgba(112,140,178,0.15)]">
        <div className="flex items-start justify-between gap-4 px-6 pb-3 pt-5">
          <div className="flex flex-col gap-1">
            <h2 id="delete-policy-title" className="font-['Open_Sans',sans-serif] text-[18px] font-semibold leading-[25px] text-[#414857]" style={font}>Delete policy?</h2>
            <p className="font-['Open_Sans',sans-serif] text-[14px] font-normal leading-[22px] text-[#5e6d81]" style={font}>This policy will be permanently removed from the rule.</p>
          </div>
          <button onClick={onClose} className="flex size-8 shrink-0 items-center justify-center rounded-[4px] hover:bg-[#eaeef5]" aria-label="Close confirmation">
            <X size={16} color="#414857" />
          </button>
        </div>
        <div className="flex items-center justify-end gap-3 border-t border-[#eaeef5] px-6 py-3">
          <button onClick={onClose} className="h-[36px] rounded-[4px] px-4 font-['Open_Sans',sans-serif] text-[14px] font-semibold text-[#414857] hover:bg-[#eaeef5]" style={font}>Cancel</button>
          <button onClick={onConfirm} className="h-[36px] rounded-[4px] bg-[#e93838] px-4 font-['Open_Sans',sans-serif] text-[14px] font-semibold text-white hover:bg-[#c42d2d]" style={font}>Delete policy</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function PolicyDrawer({ rule, policy, policyCount, onClose, onSave, onDelete }: PolicyDrawerProps) {
  const [scope, setScope] = useState<RulePolicy["scope"]>(policy?.scope ?? "global");
  const [action, setAction] = useState<RulePolicy["action"]>(policy?.action ?? "fail");
  const [applicationLabels, setApplicationLabels] = useState<string[]>(policy?.applicationLabels ?? []);
  const [projectLabels, setProjectLabels] = useState<string[]>(policy?.projectLabels ?? []);
  const [projectNames, setProjectNames] = useState<string[]>(policy?.projectNames ?? []);
  const [applicationNames, setApplicationNames] = useState<string[]>(policy?.applicationNames ?? []);
  const [openSelector, setOpenSelector] = useState<"labels" | "project-labels" | "projects" | "applications" | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const font = { fontVariationSettings: '"wdth" 100' };
  const projectOptions = PROJECT_LIST.filter(project => project !== "All Projects");
  const applicationOptions = MOCK_APPS.map(application => application.name);
  const labelOptions = Array.from(new Set(MOCK_APPS.flatMap(application => application.labels))).sort();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (deleteConfirmOpen) setDeleteConfirmOpen(false);
      else if (openSelector) setOpenSelector(null);
      else onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [deleteConfirmOpen, onClose, openSelector]);

  return createPortal(
    <>
      <div className="policy-sheet-overlay fixed inset-0 z-[190] bg-[rgba(65,72,87,0.45)]" onClick={onClose} />
      <div
        className="policy-sheet-panel fixed bottom-0 left-0 right-0 z-[191] flex flex-col overflow-hidden rounded-t-[8px] bg-white shadow-[0_-4px_24px_rgba(112,140,178,0.24)]"
        style={{ maxHeight: "min(680px, calc(100vh - 96px))" }}
      >
        <div className="relative shrink-0 border-b border-[#eaeef5]">
          <div className="relative w-full px-6 py-4 sm:px-8">
            <button onClick={onClose} className="absolute left-6 top-8 flex size-7 items-center justify-center rounded-[4px] hover:bg-[#eaeef5] sm:left-8" aria-label="Back">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.5 3L5.5 8l5 5" stroke="#5e6d81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <div className="min-w-0 px-10 sm:px-12">
              <span className="font-['Open_Sans',sans-serif] font-semibold uppercase tracking-[0.7px] text-[#999db4] text-[11px] leading-[16px]" style={font}>
                {policy ? "Edit policy" : "Enforce"}
              </span>
              <h2 className="mt-1 truncate whitespace-nowrap font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[18px] leading-[25px]" title={rule.label} style={font}>{rule.label}</h2>
            </div>
          </div>
          <button onClick={onClose} className="absolute right-6 top-4 flex size-8 items-center justify-center rounded-[4px] hover:bg-[#eaeef5] sm:right-8" aria-label="Close">
            <X size={17} color="#414857" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="flex w-full flex-col gap-5 px-16 py-5 sm:px-20">
            {!policy && policyCount > 0 && (
              <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[22px]" style={font}>
                This rule already has {policyCount} {policyCount === 1 ? "policy" : "policies"}. This adds another one.
              </p>
            )}

            <section className="flex flex-col gap-5">
              <div>
                <h3 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] leading-[19px]" style={font}>Scope</h3>
                <p className="mt-1 font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[22px]" style={font}>Select Global for the whole organisation or specific Projects and/or Applications.</p>
              </div>
              <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
              <PolicyRadio
                checked={scope === "global"}
                onClick={() => setScope("global")}
                label="Global Organisation"
                icon={<svg width="17" height="17" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#5e6d81" strokeWidth="1.3" /><path d="M2.5 10h15M10 2c2.2 2.2 3.3 4.9 3.3 8S12.2 15.8 10 18M10 2C7.8 4.2 6.7 6.9 6.7 10S7.8 15.8 10 18" stroke="#5e6d81" strokeWidth="1.1" /></svg>}
              />
              {scope === "global" && (
                <div className="ml-6 flex flex-col gap-2">
                  <span className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[22px]" style={font}>Application labels (Optional)</span>
                  <PolicyMultiSelect
                    placeholder="Select labels"
                    options={labelOptions}
                    selected={applicationLabels}
                    selectionType="labels"
                    displayAsTags
                    isOpen={openSelector === "labels"}
                    onToggleOpen={() => setOpenSelector(current => current === "labels" ? null : "labels")}
                    onClose={() => setOpenSelector(null)}
                    onChange={setApplicationLabels}
                  />
                </div>
              )}
              </div>
              <div className="flex flex-col gap-2">
              <PolicyRadio
                checked={scope === "projects"}
                onClick={() => setScope("projects")}
                label="Projects"
                icon={<svg width="17" height="17" viewBox="0 0 20 20" fill="none"><path d="M3 6.2L10 3l7 3.2-7 3.2-7-3.2ZM3 10l7 3.2 7-3.2M3 13.8l7 3.2 7-3.2" stroke="#708cb2" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>}
              />
              {scope === "projects" && (
                <div className="ml-6 flex flex-col gap-3">
                  <PolicyMultiSelect
                    placeholder="Select projects"
                    options={projectOptions}
                    selected={projectNames}
                    selectionType="projects"
                    isOpen={openSelector === "projects"}
                    onToggleOpen={() => setOpenSelector(current => current === "projects" ? null : "projects")}
                    onClose={() => setOpenSelector(null)}
                    onChange={setProjectNames}
                  />
                  <div className="flex flex-col gap-2">
                    <span className="font-['Open_Sans',sans-serif] text-[14px] font-normal leading-[22px] text-[#5e6d81]" style={font}>Project labels (Optional)</span>
                    <PolicyMultiSelect
                      placeholder="Select project labels"
                      options={labelOptions}
                      selected={projectLabels}
                      selectionType="labels"
                      displayAsTags
                      isOpen={openSelector === "project-labels"}
                      onToggleOpen={() => setOpenSelector(current => current === "project-labels" ? null : "project-labels")}
                      onClose={() => setOpenSelector(null)}
                      onChange={setProjectLabels}
                    />
                  </div>
                </div>
              )}
              </div>
              <div className="flex flex-col gap-2">
              <PolicyRadio
                checked={scope === "applications"}
                onClick={() => setScope("applications")}
                label="Applications"
                icon={<svg width="17" height="17" viewBox="0 0 20 20" fill="none"><rect x="3" y="3" width="5" height="5" rx="1" stroke="#708cb2" strokeWidth="1.2" /><rect x="12" y="3" width="5" height="5" rx="1" stroke="#708cb2" strokeWidth="1.2" /><rect x="3" y="12" width="5" height="5" rx="1" stroke="#708cb2" strokeWidth="1.2" /><rect x="12" y="12" width="5" height="5" rx="1" stroke="#708cb2" strokeWidth="1.2" /></svg>}
              />
              {scope === "applications" && (
                <div className="ml-6">
                  <PolicyMultiSelect
                    placeholder="Select applications"
                    options={applicationOptions}
                    selected={applicationNames}
                    selectionType="applications"
                    isOpen={openSelector === "applications"}
                    onToggleOpen={() => setOpenSelector(current => current === "applications" ? null : "applications")}
                    onClose={() => setOpenSelector(null)}
                    onChange={setApplicationNames}
                  />
                </div>
              )}
              </div>
              </div>
            </section>

            <section className="mt-3 flex flex-col gap-3">
              <div>
                <h3 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] leading-[19px]" style={font}>Actions</h3>
                <p className="mt-1 font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[22px]" style={font}>Select the response for a violation</p>
              </div>
              <div className="flex items-center gap-7">
                <PolicyRadio checked={action === "fail"} onClick={() => setAction("fail")} label="Fail" icon={<span className="flex size-4 items-center justify-center rounded-full border border-[#e93838] text-[#e93838] text-[12px] leading-none">×</span>} />
                <PolicyRadio checked={action === "warning"} onClick={() => setAction("warning")} label="Warning" icon={<svg width="17" height="17" viewBox="0 0 18 18" fill="none"><path d="M9 2.5l7 12H2l7-12Z" stroke="#f0a43c" strokeWidth="1.3" strokeLinejoin="round" /><path d="M9 6.5v4M9 12.7v.2" stroke="#f0a43c" strokeWidth="1.3" strokeLinecap="round" /></svg>} />
              </div>
            </section>

          </div>
        </div>

        <div className="shrink-0 border-t border-[#eaeef5] bg-white">
          <div className="flex w-full items-center justify-between gap-3 py-3 pl-16 pr-6 sm:pl-20 sm:pr-8">
            <div>
              {policy && onDelete && (
                <button onClick={() => setDeleteConfirmOpen(true)} className="h-[36px] rounded-[4px] px-4 font-['Open_Sans',sans-serif] text-[14px] font-semibold text-[#c42d2d] hover:bg-[#fde8e8]" style={font}>Delete policy</button>
              )}
            </div>
            <div className="flex items-center gap-3">
            <button onClick={onClose} className="h-[36px] rounded-[4px] px-4 font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] hover:bg-[#eaeef5]" style={font}>Cancel</button>
            <button
              onClick={() => onSave({ scope, action, applicationLabels, projectLabels, projectNames, applicationNames })}
              className="h-[36px] rounded-[4px] bg-[#2a8553] px-4 font-['Open_Sans',sans-serif] font-semibold text-white text-[14px] hover:bg-[#226f45]"
              style={font}
            >
              {policy ? "Save policy" : "Create policy"}
            </button>
            </div>
          </div>
        </div>
      </div>
      {deleteConfirmOpen && onDelete && (
        <DeletePolicyConfirmModal
          onClose={() => setDeleteConfirmOpen(false)}
          onConfirm={onDelete}
        />
      )}
    </>,
    document.body
  );
}

function DisableBlockedModal({ onClose }: { onClose: () => void }) {
  const font = { fontVariationSettings: '"wdth" 100' };
  return createPortal(
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-labelledby="disable-blocked-title">
      <div className="absolute inset-0 bg-[rgba(65,72,87,0.4)]" onClick={onClose} />
      <div className="relative flex w-[500px] flex-col rounded-[6px] bg-white shadow-[0px_4px_10px_2px_rgba(112,140,178,0.15)]">
        <div className="flex items-start justify-between gap-4 px-6 pb-3 pt-5">
          <div className="flex flex-col gap-1">
            <h2 id="disable-blocked-title" className="font-['Open_Sans',sans-serif] text-[18px] font-semibold leading-[25px] text-[#414857]" style={font}>Rule cannot be disabled</h2>
            <p className="font-['Open_Sans',sans-serif] text-[14px] font-normal leading-[22px] text-[#5e6d81]" style={font}>Delete all policies before disabling this rule.</p>
          </div>
          <button onClick={onClose} className="flex size-8 shrink-0 items-center justify-center rounded-[4px] hover:bg-[#eaeef5]" aria-label="Close message">
            <X size={16} color="#414857" />
          </button>
        </div>
        <div className="flex justify-end border-t border-[#eaeef5] px-6 py-3">
          <button onClick={onClose} className="h-[36px] rounded-[4px] bg-[#2a8553] px-4 font-['Open_Sans',sans-serif] text-[14px] font-semibold text-white hover:bg-[#226f45]" style={font}>Got it</button>
        </div>
      </div>
    </div>,
    document.body
  );
}

function RuleRow({ rule, policies, onToggle, onCreatePolicy, onUpdatePolicy, onDeletePolicy }: RuleRowProps) {
  const [expanded, setExpanded] = useState(false);
  const [replaceState, setReplaceState] = useState<{ newRuleLabel: string; reason: string } | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [disableConfirmOpen, setDisableConfirmOpen] = useState(false);
  const [disableBlockedOpen, setDisableBlockedOpen] = useState(false);
  const [disableReason, setDisableReason] = useState<string | null>(null);
  const [policyDrawer, setPolicyDrawer] = useState<{ mode: "create" } | { mode: "edit"; policyId: string } | null>(null);

  const handleToggleClick = () => {
    if (rule.enabled) {
      if (policies.length > 0) setDisableBlockedOpen(true);
      else setDisableConfirmOpen(true);
    } else {
      setDisableReason(null);
      onToggle();
    }
  };

  const handlePolicyClick = () => {
    if (policies.length > 0) {
      setPolicyDrawer({ mode: "edit", policyId: policies[0].id });
      return;
    }
    if (!rule.enabled) {
      setDisableReason(null);
      onToggle();
    }
    setPolicyDrawer({ mode: "create" });
  };

  const isReplaced = replaceState !== null;

  const [resetConfirmOpen, setResetConfirmOpen] = useState(false);
  const handleReset = () => setResetConfirmOpen(true);

  return (
    <>
      <div className="flex flex-col group hover:bg-[#f8fafb] transition-colors rounded-[4px]">
        <div className="flex items-center gap-3 px-4 py-3">
          {/* Toggle */}
          <button onClick={handleToggleClick} className={`relative rounded-[12px] w-8 h-[18px] shrink-0 transition-colors ${rule.enabled ? "bg-[#2a8553]" : "bg-[#999db4]"}`} aria-label={`${rule.enabled ? "Disable" : "Enable"} ${rule.label}`} aria-pressed={rule.enabled}>
            <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
              <div className={`flex items-center py-[2px] relative size-full transition-all ${rule.enabled ? "justify-end pl-4 pr-0.5" : "justify-start pl-0.5 pr-4"}`}>
                <div className="relative shrink-0 size-[14px]">
                  <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <circle cx="7" cy="7" fill="white" r="7" />
                  </svg>
                </div>
              </div>
            </div>
          </button>

          {/* Icon + Label + replaced badge */}
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div className="relative shrink-0 size-5">
              {rule.iconType === "shield" ? <IconShieldCheck /> : <IconLock />}
            </div>
            <span
              className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap text-[#414857]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              {isReplaced ? replaceState.newRuleLabel : rule.label}
            </span>
            {isReplaced && (
              <div className="flex items-center gap-1 bg-[#D7EDFE] border border-[#1D6CE2] px-2 py-0.5 rounded-[4px] shrink-0">
                <ArrowLeftRight size={10} color="#414857" />
                <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px] leading-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>replaced</span>
              </div>
            )}
          </div>

          {/* Secondary actions */}
          <div className="flex items-center gap-1 shrink-0">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
            {isReplaced && (
              <button
                onClick={handleReset}
                className="bg-[#c9d0e3] flex gap-1.5 h-7 items-center pl-2 pr-3 rounded-[4px] hover:bg-[#b4bacc] transition-colors"
              >
                <RefreshCw size={12} color="#414857" />
                <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>Reset</span>
              </button>
            )}
            <button
              onClick={() => setModalOpen(true)}
              className="group/replace relative flex size-7 items-center justify-center rounded-[4px] bg-[#eaeef5] transition-colors hover:bg-[#d2dfed]"
              aria-label="Replace Rule"
            >
              <ArrowLeftRight size={12} color="#414857" />
              <span className="pointer-events-none absolute bottom-full right-0 z-20 mb-2 whitespace-nowrap rounded-[4px] bg-[#1f2f4a] px-2 py-1 font-['Open_Sans',sans-serif] text-[12px] font-semibold text-white opacity-0 shadow-md transition-opacity group-hover/replace:opacity-100 group-focus-visible/replace:opacity-100" style={{ fontVariationSettings: '"wdth" 100' }}>Replace Rule</span>
            </button>
            </div>
            <button
              onClick={handlePolicyClick}
              className="flex h-7 items-center rounded-[4px] bg-[#2a8553] px-3 opacity-0 transition-all hover:bg-[#226f45] group-hover:opacity-100 group-focus-within:opacity-100 focus-visible:opacity-100"
            >
              <span className="font-['Open_Sans',sans-serif] font-semibold text-white text-[13px]" style={{ fontVariationSettings: '"wdth" 100' }}>{policies.length > 0 ? "Edit policy" : "Create policy"}</span>
            </button>
            {rule.description && (
              <button
                onClick={() => setExpanded(p => !p)}
                className="ml-2 flex size-6 shrink-0 items-center justify-center rounded hover:bg-[#f0f2f5]"
                aria-label={expanded ? "Collapse rule description" : "Expand rule description"}
                aria-expanded={expanded}
              >
                <ChevronDown size={14} color="#5e6d81" className={`transition-transform duration-200 ${expanded ? "rotate-180" : ""}`} />
              </button>
            )}
          </div>
        </div>

        {/* Replaced reason */}
        {isReplaced && replaceState.reason && (
          <div className="px-4 pb-2 pl-[72px]">
            <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[12px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <span className="font-semibold text-[#414857]">Replace reason:</span> {replaceState.reason}
            </p>
          </div>
        )}

        {/* Disable reason */}
        {!rule.enabled && disableReason && (
          <div className="px-4 pb-2 pl-[72px] flex items-start gap-1.5">
            <svg viewBox="0 0 16 16" fill="none" className="size-4 shrink-0 mt-0.5">
              <circle cx="8" cy="8" r="7" stroke="#999db4" strokeWidth="1.2" />
              <path d="M8 7v4M8 5.5v.5" stroke="#999db4" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[12px] leading-[18px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              <span className="font-semibold text-[#414857]">Disable reason:</span> {disableReason}
            </p>
          </div>
        )}

        {expanded && rule.description && (
          <div className="px-4 pb-3 pl-[72px]">
            <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
              {rule.description}
            </p>
          </div>
        )}

        {policies.length > 0 && (
          <div className="flex flex-col gap-1 px-4 pb-3">
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => setPolicyDrawer({ mode: "edit", policyId: policy.id })}
                className="flex items-center justify-between gap-3 rounded-[4px] border border-[#d2dfed] bg-[#f8fafb] px-3 py-2 text-left hover:border-[#708cb2] hover:bg-[#eef3f8] transition-colors"
              >
                <PolicyScopeSummary policy={policy} />
                <span className="flex shrink-0 items-center gap-1.5 font-['Open_Sans',sans-serif] text-[13px] font-semibold leading-[18px] text-[#414857]" style={{ fontVariationSettings: '"wdth" 100' }}>
                  <span className={policy.action === "fail" ? "text-[#e93838]" : "text-[#f0a43c]"}>
                    <PolicyActionIcon action={policy.action} />
                  </span>
                  <span>{policy.action === "fail" ? "Fail" : "Warning"}</span>
                </span>
              </button>
            ))}
          </div>
        )}
      </div>

      {modalOpen && (
        <ReplaceModal
          rule={rule}
          onClose={() => setModalOpen(false)}
          onConfirm={(reason, newRuleLabel) => {
            setReplaceState({ newRuleLabel, reason });
            setModalOpen(false);
          }}
        />
      )}
      {disableConfirmOpen && (
        <DisableConfirmModal
          onClose={() => setDisableConfirmOpen(false)}
          onConfirm={(reason) => { onToggle(); setDisableReason(reason); setDisableConfirmOpen(false); }}
        />
      )}
      {disableBlockedOpen && (
        <DisableBlockedModal onClose={() => setDisableBlockedOpen(false)} />
      )}
      {resetConfirmOpen && (
        <ResetConfirmModal
          onClose={() => setResetConfirmOpen(false)}
          onConfirm={() => { setReplaceState(null); setResetConfirmOpen(false); }}
        />
      )}
      {policyDrawer && (
        <PolicyDrawer
          key={`${rule.id}-${policyDrawer.mode}-${policyDrawer.mode === "edit" ? policyDrawer.policyId : "new"}`}
          rule={rule}
          policy={policyDrawer.mode === "edit" ? policies.find(policy => policy.id === policyDrawer.policyId) : undefined}
          policyCount={policies.length}
          onClose={() => setPolicyDrawer(null)}
          onSave={(draft) => {
            if (policyDrawer.mode === "edit") {
              onUpdatePolicy(policyDrawer.policyId, draft);
            } else {
              onCreatePolicy(draft);
            }
            setPolicyDrawer(null);
          }}
          onDelete={policyDrawer.mode === "edit" ? () => {
            onDeletePolicy(policyDrawer.policyId);
            setPolicyDrawer(null);
          } : undefined}
        />
      )}
    </>
  );
}

interface FrameworkEditorScreenProps {
  framework: Framework;
  selectedProject: string;
  policiesByRuleId: Record<string, RulePolicy[]>;
  onBack: () => void;
  onBreadcrumbClick: (item: SidebarItemId) => void;
  onTogglePublished: () => void;
  onToggleRule: (controlId: string, reqId: string, ruleId: string) => void;
  onCreatePolicy: (ruleId: string, policy: Omit<RulePolicy, "id">) => void;
  onUpdatePolicy: (ruleId: string, policyId: string, policy: Omit<RulePolicy, "id">) => void;
  onDeletePolicy: (ruleId: string, policyId: string) => void;
}

function FrameworkEditorScreen({
  framework,
  selectedProject,
  policiesByRuleId,
  onBack,
  onBreadcrumbClick,
  onTogglePublished,
  onToggleRule,
  onCreatePolicy,
  onUpdatePolicy,
  onDeletePolicy,
}: FrameworkEditorScreenProps) {
  const [controlSearch, setControlSearch] = useState("");
  const visibleControls = framework.controls
    .filter(ctrl => ctrl.requirements.some(r => r.rules.length > 0))
    .filter(ctrl => ctrl.title.toLowerCase().includes(controlSearch.toLowerCase()) || ctrl.tag.toLowerCase().includes(controlSearch.toLowerCase()));
  const [selectedControlId, setSelectedControlId] = useState(visibleControls[0]?.id ?? null);
  const [expandedControlIds, setExpandedControlIds] = useState<Set<string>>(new Set());
  const selectedControl = visibleControls.find(c => c.id === selectedControlId) ?? visibleControls[0];
  const reqCount = selectedControl?.requirements.filter(r => r.rules.length > 0).length ?? 0;

  const toggleControlExpand = (e: React.MouseEvent, ctrlId: string) => {
    e.stopPropagation();
    setExpandedControlIds(prev => {
      const next = new Set(prev);
      next.has(ctrlId) ? next.delete(ctrlId) : next.add(ctrlId);
      return next;
    });
  };

  return (
    <div className="framework-editor w-full min-w-0">
      <div className="framework-editor-page flex min-h-[calc(100vh-72px)] w-full min-w-0 flex-col bg-white">
        {/* Breadcrumb */}
        <div className="flex min-h-[62px] shrink-0 items-center gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          <button onClick={() => onBreadcrumbClick("all-projects")} className="flex shrink-0 items-center gap-1.5 hover:opacity-70">
            <div className="relative size-5">
              <div className="absolute inset-0 rounded-full bg-[#b0d8fe]" />
              <div className="absolute inset-[10%]"><div className="absolute inset-[13.32%_12.28%_13.32%_12.36%]"><svg className="absolute inset-0 block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0588 11.736"><path d={svgPaths.pc737900} fill="#414857" /></svg></div></div>
            </div>
            <span className="font-['Open_Sans',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.14px] text-[#414857]" style={{ fontVariationSettings: '"wdth" 100' }}>{selectedProject}</span>
          </button>
          <ChevronRight />
          <button onClick={() => onBreadcrumbClick("apptrust-settings")} className="shrink-0 hover:opacity-70">
            <span className="font-['Open_Sans',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.14px] text-[#414857]" style={{ fontVariationSettings: '"wdth" 100' }}>AppTrust Settings</span>
          </button>
          <ChevronRight />
          <button onClick={onBack} className="shrink-0 hover:opacity-70">
            <span className="font-['Open_Sans',sans-serif] text-[14px] font-normal leading-[22px] tracking-[0.14px] text-[#414857]" style={{ fontVariationSettings: '"wdth" 100' }}>Compliance Catalog</span>
          </button>
          <ChevronRight />
          <span className="shrink-0 font-['Open_Sans',sans-serif] text-[14px] font-semibold leading-[19px] tracking-[0.14px] text-[#415980]" style={{ fontVariationSettings: '"wdth" 100' }}>{framework.name}</span>
        </div>

        {/* Editor header */}
        <div className="flex shrink-0 items-start justify-between gap-4 px-4 pb-5 sm:px-6">
          <div className="flex min-w-0 items-start gap-3 sm:gap-4">
            <div className="flex items-center justify-center rounded-[4px] size-[46px] overflow-clip shrink-0" style={{ backgroundColor: framework.color }}>
              {framework.logo ? <img src={framework.logo} alt={framework.abbr} className="w-full h-full object-cover" /> : <span className="font-['Open_Sans',sans-serif] font-semibold text-white text-[12px] leading-[16px] text-center" style={{ fontVariationSettings: '"wdth" 100' }}>{framework.abbr}</span>}
            </div>
            <div className="flex min-w-0 flex-col gap-1">
              <div className="flex min-w-0 items-center gap-2">
                <button onClick={onBack} className="flex size-7 items-center justify-center rounded-[4px] hover:bg-[#eaeef5]" aria-label="Back to Compliance Catalog">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.5 3L5.5 8l5 5" stroke="#5e6d81" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <h1 className="min-w-0 font-['Open_Sans',sans-serif] text-[20px] font-semibold leading-[28px] text-[#414857] sm:text-[24px] sm:leading-[33px]" style={{ fontVariationSettings: '"wdth" 100' }}>Edit {framework.name}</h1>
              </div>
              <p className="break-words font-['Open_Sans',sans-serif] text-[14px] font-normal leading-[20px] text-[#5e6d81] sm:text-[16px] sm:leading-[22px]" style={{ fontVariationSettings: '"wdth" 100' }}>{framework.description.split(" text text")[0]}</p>
            </div>
          </div>
          <div className="flex items-center gap-5 pt-1">
            <ToggleWithTooltip published={framework.published} onChange={onTogglePublished} />
          </div>
        </div>

        {/* Editor body */}
        <div className="flex min-h-0 flex-1 px-4 pb-6 sm:px-6">
          <div className="framework-editor-layout relative flex min-h-0 flex-1 flex-col overflow-visible rounded-[4px] border border-[#eaeef5] bg-white">
          {/* Left: Control list */}
          <div className="framework-editor-controls flex max-h-[360px] w-full shrink-0 flex-col overflow-y-auto border-b border-[#eaeef5]" style={{ scrollbarWidth: "thin", scrollbarColor: "#e8ecf2 transparent" }}>
            {/* Search header */}
            <div className="px-4 pb-4 pt-3 sm:px-6">
              <div className="flex flex-col gap-2">
                <p className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[16px] leading-[22px]" style={{ fontVariationSettings: '"wdth" 100' }}>Controls</p>
                <p className="font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[14px] leading-[22px]" style={{ fontVariationSettings: '"wdth" 100' }}>Select a control to edit rules</p>
              </div>
              <div className="mt-3 bg-white border border-[#c9d0e3] rounded-[4px] flex items-center px-2 h-[43px] focus-within:border-[#415980] transition-colors">
                <div className="relative size-5 shrink-0">
                  <div className="absolute inset-[17.29%_14.17%_18.78%_18.06%]"><IconSearch /></div>
                </div>
                <input
                  value={controlSearch}
                  onChange={e => setControlSearch(e.target.value)}
                  placeholder="Search Controls"
                  className="flex-1 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] ml-2 outline-none bg-transparent placeholder:text-[#999db4]"
                  style={{ fontVariationSettings: '"wdth" 100' }}
                />
                {controlSearch && (
                  <button onClick={() => setControlSearch("")} className="flex items-center justify-center size-5 shrink-0 hover:bg-[#eaeef5] rounded transition-colors">
                    <X size={12} color="#999db4" />
                  </button>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col px-0.5">
              {visibleControls.length === 0 && controlSearch && (
                <EmptySearch message="No controls found" />
              )}
              {visibleControls.map((ctrl) => {
                const ctrlEnabled = ctrl.requirements.flatMap(r => r.rules).filter(r => r.enabled).length;
                const ctrlTotal = ctrl.requirements.flatMap(r => r.rules).length;
                const isActive = ctrl.id === selectedControlId;
                const isExpanded = expandedControlIds.has(ctrl.id);
                return (
                  <div key={ctrl.id}>
                    <div className={`group rounded-[4px] border-l-[3px] transition-colors hover:bg-[#f0f2f5] ${isActive ? "bg-[#f8fafb] border-[#415980]" : "bg-white border-transparent"}`}>
                      <button
                        onClick={() => setSelectedControlId(ctrl.id)}
                        className="w-full text-left flex items-center gap-2 px-4 py-3"
                      >
                        <div className="flex flex-col gap-2 flex-1 min-w-0">
                          <div className="flex flex-col gap-2">
                            <div className="bg-[#eef3f8] border border-[#b4bacc] rounded-[2px] px-2 py-0.5 inline-flex self-start">
                              <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px] leading-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{ctrl.tag}</span>
                            </div>
                            <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] overflow-hidden text-ellipsis whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{ctrl.title}</span>
                          </div>
                          <CoverageBar enabled={ctrlEnabled} total={Math.max(ctrlTotal, 1)} />
                        </div>
                        {ctrl.description && (
                          <div
                            onClick={(e) => toggleControlExpand(e, ctrl.id)}
                            className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0 flex items-center justify-center size-6 rounded hover:bg-[#e8ecf2]"
                          >
                            <ChevronDown size={14} color="#5e6d81" className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                          </div>
                        )}
                      </button>
                      {isExpanded && ctrl.description && (
                        <div className="px-4 pt-0 pb-6">
                          <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px] leading-[20px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                            {ctrl.description}
                          </p>
                        </div>
                      )}
                    </div>
                    <div className="bg-[#eaeef5] h-px w-full shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>


          {/* Right: Requirements */}
          <div className="framework-editor-requirements flex min-w-0 flex-1 flex-col px-2 sm:px-4" style={{ scrollbarWidth: "thin", scrollbarColor: "#e8ecf2 transparent" }}>
            {selectedControl && (
              <div className="flex flex-col px-1 pb-5 sm:px-3">
                <div className="py-5 px-3">
                  <p className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[16px] leading-[22px]" style={{ fontVariationSettings: '"wdth" 100' }}>
                    Requirements ({reqCount})
                  </p>
                </div>
                <div className="flex flex-col gap-4">
                  {selectedControl.requirements.filter(req => req.rules.length > 0).map((req, reqIdx) => (
                    <div key={req.id} className="bg-white relative rounded-[4px]" style={{ boxShadow: "0 0 0 1px #eaeef5" }}>
                      {/* Req header */}
                      <div className="relative flex items-center rounded-tl-[4px] rounded-tr-[4px] bg-[#eef3f8] px-3 py-3 sm:px-6">
                        <div aria-hidden className="absolute border-[#eaeef5] border-b border-solid inset-0 pointer-events-none rounded-tl-[4px] rounded-tr-[4px]" />
                        <div className="flex min-w-0 flex-1 items-center gap-3">
                          <div className="bg-[#eaeef5] border border-[#b4bacc] rounded-[2px] px-2 py-0.5 shrink-0">
                            <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px] leading-[16px]" style={{ fontVariationSettings: '"wdth" 100' }}>{`${visibleControls.indexOf(selectedControl) + 1}.${reqIdx + 1}`}</span>
                          </div>
                          <span className="min-w-0 flex-1 overflow-hidden text-ellipsis whitespace-nowrap font-['Open_Sans',sans-serif] text-[14px] font-semibold leading-[19px] text-[#414857]" style={{ fontVariationSettings: '"wdth" 100' }}>{req.title}</span>
                          <span className="font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[12px] leading-[16px] whitespace-nowrap shrink-0" style={{ fontVariationSettings: '"wdth" 100' }}>{req.rules.length} {req.rules.length === 1 ? "rule" : "rules"}</span>
                        </div>
                      </div>
                      {/* Rules */}
                      <div className="flex flex-col divide-y divide-[#eaeef5]">
                        {req.rules.map((rule) => (
                          <RuleRow
                            key={rule.id}
                            rule={rule}
                            policies={policiesByRuleId[rule.id] ?? []}
                            onToggle={() => onToggleRule(selectedControl.id, req.id, rule.id)}
                            onCreatePolicy={(policy) => onCreatePolicy(rule.id, policy)}
                            onUpdatePolicy={(policyId, policy) => onUpdatePolicy(rule.id, policyId, policy)}
                            onDeletePolicy={(policyId) => onDeletePolicy(rule.id, policyId)}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Compliance Catalog Screen ────────────────────────────────────────────────

interface ComplianceCatalogProps {
  onBreadcrumbClick: (item: SidebarItemId) => void;
  frameworks: Framework[];
  setFrameworks: React.Dispatch<React.SetStateAction<Framework[]>>;
  policiesByRuleId: Record<string, RulePolicy[]>;
  onCreatePolicy: (ruleId: string, policy: Omit<RulePolicy, "id">) => void;
  onUpdatePolicy: (ruleId: string, policyId: string, policy: Omit<RulePolicy, "id">) => void;
  onDeletePolicy: (ruleId: string, policyId: string) => void;
  selectedProject?: string;
}

function ComplianceCatalog({
  onBreadcrumbClick,
  frameworks,
  setFrameworks,
  policiesByRuleId,
  onCreatePolicy,
  onUpdatePolicy,
  onDeletePolicy,
  selectedProject = "Apptrust Demos",
}: ComplianceCatalogProps) {
  const [selectedFrameworkId, setSelectedFrameworkId] = useState<string | null>(null);

  const togglePublished = (fwId: string) => {
    setFrameworks(prev => prev.map(f => f.id === fwId ? { ...f, published: !f.published } : f));
  };

  const toggleRule = (fwId: string, controlId: string, reqId: string, ruleId: string) => {
    setFrameworks(prev => prev.map(fw => {
      if (fw.id !== fwId) return fw;
      return {
        ...fw,
        controls: fw.controls.map(ctrl => {
          if (ctrl.id !== controlId) return ctrl;
          return {
            ...ctrl,
            requirements: ctrl.requirements.map(req => {
              if (req.id !== reqId) return req;
              return {
                ...req,
                rules: req.rules.map(rule => rule.id === ruleId ? { ...rule, enabled: !rule.enabled } : rule)
              };
            })
          };
        })
      };
    }));
  };

  const selectedFramework = frameworks.find(f => f.id === selectedFrameworkId) ?? null;

  if (selectedFramework) {
    return (
      <FrameworkEditorScreen
        framework={selectedFramework}
        selectedProject={selectedProject}
        policiesByRuleId={policiesByRuleId}
        onBack={() => setSelectedFrameworkId(null)}
        onBreadcrumbClick={onBreadcrumbClick}
        onTogglePublished={() => togglePublished(selectedFramework.id)}
        onToggleRule={(ctrlId, reqId, ruleId) => toggleRule(selectedFramework.id, ctrlId, reqId, ruleId)}
        onCreatePolicy={onCreatePolicy}
        onUpdatePolicy={onUpdatePolicy}
        onDeletePolicy={onDeletePolicy}
      />
    );
  }

  return (
    <div className="flex flex-col items-start w-full">
      {/* Header */}
      <div className="flex flex-col gap-6 items-start px-6 py-5 w-full">
        <div className="flex gap-2 items-center h-[22px]">
          <button onClick={() => onBreadcrumbClick("all-projects")} className="flex gap-1.5 items-center hover:opacity-70 transition-opacity">
            <div className="relative size-5">
              <div className="absolute bg-[#b0d8fe] inset-0 rounded-full" />
              <div className="absolute inset-[10%]"><div className="absolute inset-[13.32%_12.28%_13.32%_12.36%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.0588 11.736"><path d={svgPaths.pc737900} fill="#414857" /></svg></div></div>
            </div>
            <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>{selectedProject}</span>
          </button>
          <ChevronRight />
          <button onClick={() => onBreadcrumbClick("apptrust-settings")} className="hover:opacity-70 transition-opacity">
            <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>AppTrust Settings</span>
          </button>
          <ChevronRight />
          <span className="font-['Open_Sans',sans-serif] font-semibold text-[#415980] text-[14px] leading-[19px] tracking-[0.14px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>Compliance Catalog</span>
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[24px] leading-[33px] tracking-[0.24px]" style={{ fontVariationSettings: '"wdth" 100' }}>Compliance Catalog</h1>
          <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[16px] leading-[22px]" style={{ fontVariationSettings: '"wdth" 100' }}>Choose which frameworks are available for project admins to configure under Compliance.<br />Only published frameworks appear in project workspaces.</p>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-5 pb-6 pt-4 px-6 w-full">
        {frameworks.filter(fw => fw.id === "nist-ssdf" || fw.id === "eu-cra" || fw.id === "eu-ai-act").map((fw) => (
          <FrameworkCard
            key={fw.id}
            framework={fw}
            onToggle={togglePublished}
            onClick={setSelectedFrameworkId}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Platform View ────────────────────────────────────────────────────────────

const PLATFORM_TOP_ITEMS = [
  { label: "Artifactory", iconEl: <div className="absolute inset-[8.33%_10.42%]"><IconArtifactorySettings /></div> },
  { label: "Xray", iconEl: <div className="absolute inset-[10.42%_8.33%]"><IconXray /></div> },
  { label: "Curation", iconEl: <div className="absolute inset-[8.33%_10.42%_8.33%_8.33%]"><IconCuration /></div> },
  { label: "Runtime", iconEl: <div className="absolute inset-[8.33%_8.33%_11.62%_8.33%]"><IconRuntime /></div> },
  { label: "Catalog", iconEl: <div className="absolute inset-[8.33%]"><IconNote /></div> },
  { label: "Distribution", iconEl: <div className="absolute inset-[16.67%_8.33%]"><IconMonitoring /></div> },
  { label: "ML", iconEl: <div className="absolute inset-[8.33%]"><IconTopology /></div> },
];

function PlatformSidebar({ collapsed, onToggleCollapse, activePlatformNav, onApplicationsClick, onComplianceClick, selectedProject = "Apptrust Demos", onProjectChange }: { collapsed: boolean; onToggleCollapse: () => void; activePlatformNav?: "compliance" | "applications"; onApplicationsClick?: () => void; onComplianceClick?: () => void; selectedProject?: string; onProjectChange?: (name: string) => void }) {
  const font = { fontVariationSettings: '"wdth" 100' };
  const [projectDropdownOpen, setProjectDropdownOpen] = useState(false);
  const [projectSearch, setProjectSearch] = useState("");
  const [dropdownAnchor, setDropdownAnchor] = useState<{ left: number; top: number } | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!projectDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setProjectDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [projectDropdownOpen]);
  if (collapsed) {
    return (
      <div className="bg-[#1f2f4a] flex flex-col h-full items-center justify-between shrink-0 w-[72px]">
        <div className="flex flex-col w-full min-h-0" style={{ overflowY: "auto", overflowX: "hidden", scrollbarWidth: "none" }}>
          {/* Logo */}
          <div className="h-[72px] shrink-0 flex items-center justify-center w-full border-b border-[#2d4264]">
            <div className="relative size-9"><div className="absolute inset-[7.81%_4.69%_6.25%_4.69%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.625 30.9375"><path d={svgPaths.p1c3cb000} fill="#3EB065" /></svg></div></div>
          </div>
          {/* Project badge */}
          <div className="flex items-center justify-center py-4">
            <div className="bg-[#152033] flex items-center justify-center p-2 rounded-[4px] border border-[#d2dfed]">
              <div className="bg-[#1d6ce2] flex items-center p-1 rounded-full">
                <div className="relative size-4 overflow-clip"><div className="absolute inset-[16.02%_16.67%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.8736"><path d={svgPathsPlatform.p30ca0800} fill="white" /></svg></div></div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className="px-4 pb-1.5"><div className="h-px bg-[#c9d0e3] rounded-[1px]" /></div>
          {/* Top-level icons only */}
          {PLATFORM_TOP_ITEMS.map(item => (
            <button key={item.label} className="flex items-center justify-center py-[12px] w-full bg-[#1f2f4a] hover:bg-[#243757] transition-colors">
              <div className="relative size-6">{item.iconEl}</div>
            </button>
          ))}
        </div>
        {/* Footer */}
        <div className="flex items-center justify-end w-full border-t border-[#708cb2] py-3 shrink-0">
          <button onClick={onToggleCollapse} className="bg-[#2d4264] flex items-center justify-center rounded-l-[4px] size-8 hover:bg-[#364f6b] transition-colors">
            <div className="relative size-6"><div className="absolute inset-[29.17%_33.33%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10"><path d={svgPaths.p3afd0c00} fill="#B4BACC" style={{ transform: "scaleX(-1)", transformOrigin: "center" }} /></svg></div></div>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#1f2f4a] flex flex-col h-full items-start justify-between shrink-0 w-[240px]">
      <div className="flex flex-col flex-1 w-full min-h-0" style={{ overflowY: "auto", overflowX: "hidden", scrollBehavior: "smooth", scrollbarWidth: "thin", scrollbarColor: "#2d4264 transparent" }}>
        {/* Logo */}
        <div className="h-[72px] shrink-0 w-full border-b border-[#2d4264] flex items-center justify-center px-6">
          <div className="flex items-center gap-1">
            <div className="h-[17px] w-[46px] relative shrink-0"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46.4502 17.1738"><path d={svgPaths.p2f23a200} fill="#3EB065" /><path d={svgPaths.p1a3dd600} fill="#3EB065" /><path d={svgPaths.p1019b2c0} fill="#3EB065" /><path d={svgPaths.pef0000} fill="#3EB065" /><path d={svgPaths.p33b0d980} fill="#3EB065" /></svg></div>
            <span className="font-['Open_Sans',sans-serif] font-normal text-[16px] leading-[22px] whitespace-nowrap" style={{ ...font, color: "rgba(255,255,255,0.78)" }}>Platform</span>
          </div>
        </div>
        {/* Project dropdown */}
        <div className="px-4 pt-3">
          <button
            ref={triggerRef}
            onClick={() => {
              if (triggerRef.current) {
                const r = triggerRef.current.getBoundingClientRect();
                setDropdownAnchor({ left: r.left, top: r.bottom + 4 });
              }
              setProjectDropdownOpen(p => !p);
              setProjectSearch("");
            }}
            className="bg-[#152033] rounded-[4px] w-full border border-[#d2dfed] flex items-center gap-2 p-2 hover:bg-[#1a2a40] transition-colors"
          >
            <div className="bg-[#1d6ce2] flex items-center p-1 rounded-full shrink-0">
              <div className="relative size-4 overflow-clip"><div className="absolute inset-[16.02%_16.67%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 10.8736"><path d={svgPathsPlatform.p30ca0800} fill="white" /></svg></div></div>
            </div>
            <span className="flex-1 font-['Open_Sans',sans-serif] font-semibold text-[14px] leading-[19px] overflow-hidden text-ellipsis whitespace-nowrap text-left" style={{ ...font, color: "rgba(255,255,255,0.78)" }}>{selectedProject}</span>
            <div className={`transition-transform duration-200 ${projectDropdownOpen ? "rotate-180" : ""}`}><ChevronDown size={14} color="white" /></div>
          </button>
          {projectDropdownOpen && dropdownAnchor && (
            <div ref={dropdownRef} className="fixed z-[9999] bg-white rounded-[8px] flex flex-col overflow-hidden border border-[#c9d0e3]" style={{ left: dropdownAnchor.left, top: dropdownAnchor.top, width: 340, boxShadow: "0 16px 48px rgba(0,0,0,0.45), 0 4px 16px rgba(0,0,0,0.30)" }}>
              <div className="px-5 pt-5 pb-3">
                <p className="font-['Open_Sans',sans-serif] font-semibold text-[#1f2f4a] text-[18px] leading-[25px] mb-3" style={{ fontVariationSettings: '"wdth" 100' }}>Projects</p>
                <div className="flex items-center gap-2 border-2 border-[#2a8553] rounded-[20px] px-3 py-2 bg-white">
                  <input autoFocus value={projectSearch} onChange={e => setProjectSearch(e.target.value)} placeholder="Search for a project" className="flex-1 font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[14px] leading-[22px] outline-none bg-transparent" style={{ fontVariationSettings: '"wdth" 100' }} />
                  <Search size={18} color="#414857" />
                </div>
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: 280 }}>
                {PROJECT_LIST.filter(n => n.toLowerCase().includes(projectSearch.toLowerCase())).map((name) => (
                  <button key={name} onClick={() => { onProjectChange?.(name); setProjectDropdownOpen(false); }} className="w-full text-left flex items-center gap-3 px-5 py-3 hover:bg-[#f5f7fa] transition-colors">
                    <span className={`font-['Open_Sans',sans-serif] text-[15px] leading-[22px] ${selectedProject === name ? "font-semibold text-[#2a8553]" : "font-normal text-[#1f2f4a]"}`} style={{ fontVariationSettings: '"wdth" 100' }}>{name}</span>
                  </button>
                ))}
              </div>
              <div className="border-t border-[#eaeef5] flex items-center gap-6 px-5 py-3">
                <button className="flex items-center gap-1.5 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px]" style={{ fontVariationSettings: '"wdth" 100' }}><span className="text-[18px] leading-none">+</span> Add Project</button>
                <button className="flex items-center gap-1.5 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px]" style={{ fontVariationSettings: '"wdth" 100' }}>Browse Projects</button>
              </div>
            </div>
          )}
        </div>
        {/* Nav */}
        <nav className="flex flex-col pt-3 w-full">
          {/* AppTrust parent */}
          <div className="px-[20px] py-[12px]">
            <span className="font-['Open_Sans',sans-serif] font-semibold text-[14px] leading-[19px]" style={{ ...font, color: "rgba(255,255,255,0.78)" }}>AppTrust</span>
          </div>
          {/* Sub-items: Insights, Applications, Lifecycle Policies */}
          <div className={`relative flex items-center pl-[56px] pr-[12px] py-[8px] hover:bg-[#243757] transition-colors cursor-pointer`}>
            <span className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[22px]" style={{ ...font, color: "rgba(255,255,255,0.78)" }}>Insights</span>
          </div>
          <div
            onClick={onApplicationsClick}
            className={`relative flex items-center pl-[56px] pr-[12px] py-[8px] transition-colors cursor-pointer ${activePlatformNav === "applications" ? "bg-[#152033]" : "hover:bg-[#243757]"}`}
          >
            {activePlatformNav === "applications" && <div className="absolute bg-[#3eb065] h-[12px] left-[42px] rounded-br-[4px] rounded-tr-[4px] w-[2px]" />}
            <span className={`font-['Open_Sans',sans-serif] text-[14px] leading-[22px] ${activePlatformNav === "applications" ? "font-semibold text-[#3eb065]" : "font-normal"}`} style={activePlatformNav === "applications" ? font : { ...font, color: "rgba(255,255,255,0.78)" }}>Applications</span>
          </div>
          <div className="relative flex items-center pl-[56px] pr-[12px] py-[8px] hover:bg-[#243757] transition-colors cursor-pointer">
            <span className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[22px]" style={{ ...font, color: "rgba(255,255,255,0.78)" }}>Lifecycle Policies</span>
          </div>
          {/* Compliance */}
          <div
            onClick={onComplianceClick}
            className={`relative flex items-center pl-[56px] pr-[12px] py-[8px] cursor-pointer transition-colors ${activePlatformNav !== "applications" ? "bg-[#152033]" : "hover:bg-[#243757]"}`}
          >
            {activePlatformNav !== "applications" && <div className="absolute bg-[#3eb065] h-[12px] left-[42px] rounded-br-[4px] rounded-tr-[4px] w-[2px]" />}
            <span className={`font-['Open_Sans',sans-serif] text-[14px] flex-1 ${activePlatformNav !== "applications" ? "font-semibold text-[#3eb065] leading-[19px]" : "font-normal leading-[22px]"}`} style={activePlatformNav !== "applications" ? font : { ...font, color: "rgba(255,255,255,0.78)" }}>Compliance</span>
            <div className="bg-white px-[4px] h-[20px] rounded-[2px] flex items-center justify-center ml-2">
              <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px] leading-[16px]" style={font}>New</span>
            </div>
          </div>
          {["Waivers", "Activity Log"].map(label => (
            <div key={label} className="relative flex items-center pl-[56px] pr-[12px] py-[8px] hover:bg-[#243757] transition-colors cursor-pointer">
              <span className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[22px]" style={{ ...font, color: "rgba(255,255,255,0.78)" }}>{label}</span>
            </div>
          ))}
          {/* Top-level items with icons */}
          {PLATFORM_TOP_ITEMS.map(item => (
            <div key={item.label} className="bg-[#1f2f4a] flex items-center gap-3 px-[20px] py-[12px] hover:bg-[#243757] transition-colors cursor-pointer">
              <div className="relative shrink-0 size-6">{item.iconEl}</div>
              <span className="font-['Open_Sans',sans-serif] font-normal text-[14px] leading-[22px]" style={{ ...font, color: "rgba(255,255,255,0.78)" }}>{item.label}</span>
            </div>
          ))}
        </nav>
      </div>
      {/* Footer */}
      <div className="bg-[#1f2f4a] shrink-0 w-full border-t border-[#708cb2] px-6 pt-3 pb-4">
        <div className="flex items-start justify-between mb-2">
          <div className="relative size-9 shrink-0"><div className="absolute inset-[7.81%_4.69%_6.25%_4.69%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.625 30.9375"><path d={svgPaths.p1c3cb000} fill="#3EB065" /></svg></div></div>
          <button onClick={onToggleCollapse} className="bg-[#2d4264] flex items-center justify-center rounded-l-[4px] size-8 hover:bg-[#364f6b] transition-colors">
            <div className="relative size-6"><div className="absolute inset-[29.17%_33.33%]"><svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10"><path d={svgPaths.p3afd0c00} fill="#B4BACC" /></svg></div></div>
          </button>
        </div>
        <p className="font-['Open_Sans',sans-serif] font-normal text-[12px] leading-[16px] whitespace-pre-wrap" style={{ ...font, color: "rgba(255,255,255,0.78)" }}>{"Enterprise Plus 7.38.8 rev 73808900 Licensed to Jfrog © Copyright 2024 "}<br />JFrog Ltd</p>
      </div>
    </div>
  );
}

// ─── Platform Wizard ─────────────────────────────────────────────────────────

interface AppRow {
  id: string;
  name: string;
  project: string;
  maturity: string;
  criticality: string;
  criticalityLevel: number;
  labels: string[];
  hasFramework?: boolean;
}

const MOCK_APPS: AppRow[] = [
  // BTC Wallet (12)
  { id: "a1",  name: "BTC Wallet App",          project: "BTC Wallet", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:wallet", "Service:core"] },
  { id: "a2",  name: "btc-transaction-service", project: "BTC Wallet", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:wallet", "Service:tx"] },
  { id: "a3",  name: "btc-key-manager",         project: "BTC Wallet", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:security", "Service:keys"] },
  { id: "a4",  name: "btc-node-connector",      project: "BTC Wallet", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:wallet", "AppGroup:core"] },
  { id: "a5",  name: "btc-price-feed",          project: "BTC Wallet", maturity: "Production",   criticality: "Medium",   criticalityLevel: 3, labels: ["Team:data"] },
  { id: "a6",  name: "btc-cold-storage",        project: "BTC Wallet", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:security", "Service:storage"] },
  { id: "a7",  name: "btc-hot-wallet",          project: "BTC Wallet", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:wallet", "Service:hot"] },
  { id: "a8",  name: "btc-audit-logger",        project: "BTC Wallet", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:ops", "AppGroup:observability"] },
  { id: "a9",  name: "btc-notification-service",project: "BTC Wallet", maturity: "Production",   criticality: "Medium",   criticalityLevel: 3, labels: ["Team:platform"] },
  { id: "a10", name: "btc-api-gateway",         project: "BTC Wallet", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:platform", "Service:gateway"] },
  { id: "a11", name: "btc-backup-service",      project: "BTC Wallet", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:infra"] },
  { id: "a12", name: "btc-cli-tools",           project: "BTC Wallet", maturity: "Experimental", criticality: "Low",      criticalityLevel: 2, labels: ["Team:devex"] },
  // Catalina Checkout Service (12)
  { id: "c1",  name: "catalina-cart-api",        project: "Catalina Checkout Service", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:checkout", "Service:cart"] },
  { id: "c2",  name: "catalina-payment-processor",project: "Catalina Checkout Service", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:payments", "Service:payments"], hasFramework: true },
  { id: "c3",  name: "catalina-order-manager",   project: "Catalina Checkout Service", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:checkout"] },
  { id: "c4",  name: "catalina-promo-engine",    project: "Catalina Checkout Service", maturity: "Production",   criticality: "Medium",   criticalityLevel: 3, labels: ["Team:growth"] },
  { id: "c5",  name: "catalina-tax-calculator",  project: "Catalina Checkout Service", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:checkout", "Organization:finance"] },
  { id: "c6",  name: "catalina-shipping-service",project: "Catalina Checkout Service", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:logistics"] },
  { id: "c7",  name: "catalina-invoice-gen",     project: "Catalina Checkout Service", maturity: "Production",   criticality: "Medium",   criticalityLevel: 3, labels: ["Team:checkout", "Organization:finance"] },
  { id: "c8",  name: "catalina-fraud-detector",  project: "Catalina Checkout Service", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:security"] },
  { id: "c9",  name: "catalina-receipt-service", project: "Catalina Checkout Service", maturity: "Production",   criticality: "Low",      criticalityLevel: 2, labels: ["Team:checkout"] },
  { id: "c10", name: "catalina-coupon-service",  project: "Catalina Checkout Service", maturity: "Experimental", criticality: "Low",      criticalityLevel: 2, labels: ["Team:growth"] },
  { id: "c11", name: "catalina-checkout-ui",     project: "Catalina Checkout Service", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:frontend"] },
  { id: "c12", name: "catalina-refund-handler",  project: "Catalina Checkout Service", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:payments", "Organization:finance"] },
  // Green Pizza Inventory Service (12)
  { id: "g1",  name: "pizza-stock-tracker",    project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:inventory"] },
  { id: "g2",  name: "pizza-supplier-api",     project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:procurement", "Service:suppliers"] },
  { id: "g3",  name: "pizza-ingredient-db",    project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:data"] },
  { id: "g4",  name: "pizza-order-intake",     project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:ops", "Service:orders"], hasFramework: true },
  { id: "g5",  name: "pizza-warehouse-mgr",    project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:inventory"] },
  { id: "g6",  name: "pizza-delivery-router",  project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:logistics"] },
  { id: "g7",  name: "pizza-menu-service",     project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "Medium",   criticalityLevel: 3, labels: ["Team:ops"] },
  { id: "g8",  name: "pizza-pos-adapter",      project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:ops", "Service:pos"] },
  { id: "g9",  name: "pizza-loyalty-engine",   project: "Green Pizza Inventory Service", maturity: "Experimental", criticality: "Medium",   criticalityLevel: 3, labels: ["Team:growth"] },
  { id: "g10", name: "pizza-analytics-dash",   project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "Low",      criticalityLevel: 2, labels: ["Team:data", "AppGroup:analytics"] },
  { id: "g11", name: "pizza-notification-svc", project: "Green Pizza Inventory Service", maturity: "Production",   criticality: "Medium",   criticalityLevel: 3, labels: ["Team:ops"] },
  { id: "g12", name: "pizza-feedback-api",     project: "Green Pizza Inventory Service", maturity: "Experimental", criticality: "Low",      criticalityLevel: 2, labels: ["Team:growth"] },
  // Napa Burger Infrastructure (12)
  { id: "n1",  name: "napa-k8s-operator",      project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:infra", "AppGroup:core"] },
  { id: "n2",  name: "napa-infra-provisioner", project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:infra"] },
  { id: "n3",  name: "napa-secrets-manager",   project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:security", "Service:secrets"] },
  { id: "n4",  name: "napa-ci-runner",         project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:devex"] },
  { id: "n5",  name: "napa-artifact-store",    project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:infra"] },
  { id: "n6",  name: "napa-network-policy",    project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:infra", "Service:network"] },
  { id: "n7",  name: "napa-log-aggregator",    project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "Medium",   criticalityLevel: 3, labels: ["Team:ops", "AppGroup:observability"] },
  { id: "n8",  name: "napa-backup-service",    project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:infra"] },
  { id: "n9",  name: "napa-cost-optimizer",    project: "Napa Burger Infrastructure", maturity: "Experimental", criticality: "Low",      criticalityLevel: 2, labels: ["Team:finops"] },
  { id: "n10", name: "napa-security-scanner",  project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:security"] },
  { id: "n11", name: "napa-helm-deployer",     project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:infra", "Team:devex"] },
  { id: "n12", name: "napa-dns-manager",       project: "Napa Burger Infrastructure", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:infra", "Service:network"] },
  // quotopia Application (12)
  { id: "q1",  name: "quotopia-web-app",       project: "quotopia Application", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:frontend"] },
  { id: "q2",  name: "quotopia-mobile-api",    project: "quotopia Application", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:mobile", "Service:api"] },
  { id: "q3",  name: "quotopia-quote-engine",  project: "quotopia Application", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:core", "AppGroup:core"], hasFramework: true },
  { id: "q4",  name: "quotopia-user-portal",   project: "quotopia Application", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:frontend"] },
  { id: "q5",  name: "quotopia-billing-svc",   project: "quotopia Application", maturity: "Production",   criticality: "Critical", criticalityLevel: 5, labels: ["Team:payments", "Organization:finance"] },
  { id: "q6",  name: "quotopia-pdf-renderer",  project: "quotopia Application", maturity: "Production",   criticality: "Medium",   criticalityLevel: 3, labels: ["Team:core"] },
  { id: "q7",  name: "quotopia-email-sender",  project: "quotopia Application", maturity: "Production",   criticality: "Medium",   criticalityLevel: 3, labels: ["Team:ops"] },
  { id: "q8",  name: "quotopia-crm-connector", project: "quotopia Application", maturity: "Experimental", criticality: "Medium",   criticalityLevel: 3, labels: ["Team:growth", "Service:crm"] },
  { id: "q9",  name: "quotopia-analytics",     project: "quotopia Application", maturity: "Production",   criticality: "Low",      criticalityLevel: 2, labels: ["Team:data", "AppGroup:analytics"] },
  { id: "q10", name: "quotopia-admin-panel",   project: "quotopia Application", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:frontend", "Team:ops"] },
  { id: "q11", name: "quotopia-webhooks",      project: "quotopia Application", maturity: "Production",   criticality: "High",     criticalityLevel: 4, labels: ["Team:core", "Service:api"] },
  { id: "q12", name: "quotopia-search-service",project: "quotopia Application", maturity: "Experimental", criticality: "Medium",   criticalityLevel: 3, labels: ["Team:core"] },
];

function CriticalityBar({ level }: { level: number }) {
  const bars = [1, 2, 3, 4, 5];
  const color = level >= 4 ? "#E93838" : level === 3 ? "#F59E0B" : "#3eb065";
  return (
    <div className="flex items-center gap-1">
      {bars.map(b => (
        <div key={b} className="w-[3px] h-[12px] rounded-[1px]" style={{ backgroundColor: b <= level ? color : "#d2dfed" }} />
      ))}
    </div>
  );
}

function LockedRowWrapper({ children, isLocked }: { children: React.ReactNode; isLocked: boolean }) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  if (!isLocked) return <>{children}</>;
  return (
    <div
      className="cursor-not-allowed"
      onMouseMove={e => setPos({ x: e.clientX, y: e.clientY })}
      onMouseLeave={() => setPos(null)}
    >
      {children}
      {pos && createPortal(
        <div
          style={{ position: "fixed", left: pos.x + 14, top: pos.y + 14, zIndex: 9999 }}
          className="bg-[#1e2533] text-white text-[11px] rounded-md px-3 py-[7px] leading-[16px] pointer-events-none w-max max-w-[220px] shadow-lg"
        >
          Set by Global Administrator.<br />This rule cannot be modified from a specific project.
        </div>,
        document.body
      )}
    </div>
  );
}

type WizardConfig = { selectedApps: Set<string>; ruleToggles: Record<string, boolean>; ruleActions: Record<string, "warn" | "fail">; globalRuleKeys: Set<string> };

function PlatformWizard({ framework, savedConfig, selectedProject = "Apptrust Demos", onClose }: {
  framework: Framework;
  savedConfig?: WizardConfig;
  selectedProject?: string;
  onClose: (count: number, config?: WizardConfig) => void;
}) {
  const [step, setStep] = useState<1 | 2>(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Set<string>>(
    () => savedConfig?.selectedApps ?? new Set<string>()
  );
  const [search, setSearch] = useState("");
  const [maturityFilter, setMaturityFilter] = useState("");
  const [critFilter, setCritFilter] = useState("");
  const [maturityOpen, setMaturityOpen] = useState(false);
  const [critOpen, setCritOpen] = useState(false);
  const [labelsOpen, setLabelsOpen] = useState(false);
  const [labelFilter, setLabelFilter] = useState("");
  const [labelSearch, setLabelSearch] = useState("");
  const [projectFilter, setProjectFilter] = useState<Set<string>>(new Set());
  const [projectFilterOpen, setProjectFilterOpen] = useState(false);
  const [projectSearch, setProjectSearch] = useState("");

  const isAllProjects = selectedProject === "All Projects";
  const ALL_PROJECTS = PROJECT_LIST.filter(p => p !== "All Projects");
  const BASE_APPS = isAllProjects ? MOCK_APPS : MOCK_APPS.filter(a => a.project === selectedProject);
  const ALL_LABELS = Array.from(new Set(BASE_APPS.flatMap(a => a.labels))).sort();
  const [selectedAppId, setSelectedAppId] = useState<string | null>(MOCK_APPS[0]?.id ?? null);
  const [expandedRuleIds, setExpandedRuleIds] = useState<Set<string>>(new Set());
  const [appSearch, setAppSearch] = useState("");
  const [ruleActions, setRuleActions] = useState<Record<string, "warn" | "fail">>(savedConfig?.ruleActions ?? {});
  const [ruleToggles, setRuleToggles] = useState<Record<string, boolean>>(savedConfig?.ruleToggles ?? {});
  const [globalRuleKeys, setGlobalRuleKeys] = useState<Set<string>>(() => savedConfig?.globalRuleKeys ?? new Set());
  const font = { fontVariationSettings: '"wdth" 100' };
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Animate in on mount
  useEffect(() => { requestAnimationFrame(() => setIsOpen(true)); }, []);

  const handleClose = (count: number, config?: WizardConfig) => {
    setIsOpen(false);
    if (closeTimer.current) clearTimeout(closeTimer.current);
    // Always persist the current selections (even on Cancel/X) so they survive project switches
    const configToSave: WizardConfig = config ?? { selectedApps: selected, ruleToggles, ruleActions, globalRuleKeys };
    closeTimer.current = setTimeout(() => onClose(count, configToSave), 320);
  };

  const handleDone = () => {
    const config: WizardConfig = { selectedApps: selected, ruleToggles, ruleActions, globalRuleKeys };
    handleClose(selected.size, config);
  };

  const filtered = BASE_APPS.filter(app => {
    const matchSearch = app.name.toLowerCase().includes(search.toLowerCase());
    const matchMaturity = !maturityFilter || app.maturity === maturityFilter;
    const matchCrit = !critFilter || app.criticality === critFilter;
    const matchLabel = !labelFilter || app.labels.includes(labelFilter);
    const matchProject = !isAllProjects || projectFilter.size === 0 || projectFilter.has(app.project);
    return matchSearch && matchMaturity && matchCrit && matchLabel && matchProject;
  }).sort((a, b) => isAllProjects ? a.project.localeCompare(b.project) : 0);

  const allChecked = filtered.length > 0 && filtered.every(a => selected.has(a.id));
  const toggleAll = () => {
    if (allChecked) setSelected(prev => { const n = new Set(prev); filtered.forEach(a => n.delete(a.id)); return n; });
    else setSelected(prev => { const n = new Set(prev); filtered.forEach(a => n.add(a.id)); return n; });
  };

  const CheckIcon = () => <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2L7 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[150] transition-all duration-300"
        style={{ backgroundColor: `rgba(65,72,87,${isOpen ? 0.4 : 0})`, pointerEvents: isOpen ? "auto" : "none" }}
        onClick={() => handleClose(0)}
      />
      {/* Bottom drawer */}
      <div
        className="fixed left-0 right-0 bottom-0 z-[151] flex flex-col bg-white rounded-tl-[8px] rounded-tr-[8px] shadow-[0px_-4px_24px_rgba(112,140,178,0.2)] transition-transform duration-300 ease-out"
        style={{ top: "101px", transform: isOpen ? "translateY(0)" : "translateY(105%)" }}
      >
      {/* Header */}
      <div className="shrink-0 flex items-center justify-between px-6 py-5 gap-6">
        {/* Left: logo + info */}
        <div className="flex gap-3 items-center min-w-0 flex-1">
          <div className="flex items-center justify-center rounded-[4px] size-[46px] overflow-clip shrink-0" style={{ backgroundColor: framework.color }}>
            {framework.logo ? <img src={framework.logo} alt={framework.abbr} className="w-full h-full object-cover" /> : <span className="font-['Open_Sans',sans-serif] font-semibold text-white text-[12px] leading-[16px]" style={font}>{framework.abbr}</span>}
          </div>
          <div className="flex flex-col min-w-0">
            <h2 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[18px] leading-[25px] whitespace-nowrap" style={font}>Edit {framework.name}</h2>
            <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[19px] truncate max-w-[480px]" style={font}>{framework.description.split(".")[0]}.</p>
          </div>
        </div>

        {/* Right: step indicator + close */}
        <div className="flex items-center gap-6 shrink-0">
          <div className="flex items-center gap-3">
            {/* Step 1 */}
            <button
              onClick={() => step === 2 && setStep(1)}
              className={`flex items-center gap-1.5 ${step === 2 ? "cursor-pointer hover:opacity-70 transition-opacity" : "cursor-default"}`}
            >
              <div className={`flex items-center justify-center size-6 rounded-full border-2 shrink-0 transition-colors ${step === 1 ? "border-[#3eb065] bg-white" : "border-[#3eb065] bg-[#3eb065]"}`}>
                {step === 1
                  ? <span className="font-['Open_Sans',sans-serif] font-semibold text-[#3eb065] text-[12px]" style={font}>1</span>
                  : <svg width="10" height="8" viewBox="0 0 10 8" fill="none"><path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
              </div>
              <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] leading-[19px] whitespace-nowrap" style={font}>Scope</span>
            </button>
            {/* Connector */}
            <div className="w-8 h-px bg-[#c9d0e3] shrink-0" />
            {/* Step 2 */}
            <div className="flex items-center gap-1.5">
              <div className={`flex items-center justify-center size-6 rounded-full border-2 shrink-0 transition-colors ${step === 2 ? "border-[#3eb065] bg-white" : "border-[#999db4] bg-white"}`}>
                <span className="font-['Open_Sans',sans-serif] font-semibold text-[12px]" style={{ ...font, color: step === 2 ? "#3eb065" : "#999db4" }}>2</span>
              </div>
              <span className={`font-['Open_Sans',sans-serif] font-semibold text-[14px] leading-[19px] whitespace-nowrap`} style={{ ...font, color: step === 2 ? "#414857" : "#999db4" }}>Configure rules</span>
            </div>
          </div>
          <button onClick={() => handleClose(0)} className="flex items-center justify-center size-9 rounded-[4px] hover:bg-[#eaeef5] transition-colors shrink-0">
            <X size={16} color="#414857" />
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto bg-white px-6 py-6" style={{ scrollbarWidth: "thin", scrollbarColor: "#e8ecf2 transparent" }}>
        {step === 1 ? (
          <div className="border border-[#eaeef5] rounded-[4px] flex flex-col gap-4 p-6">
            <div>
              <h3 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[16px] leading-[22px]" style={font}>Application Scope</h3>
              <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[22px]" style={font}>Choose applications in scope for {framework.name}</p>
            </div>
            {/* Filters */}
            <div className="flex gap-3">
              <div className="flex-1 border border-[#c9d0e3] rounded-[4px] flex items-center gap-2 px-3 h-[40px] bg-white">
                <Search size={14} color="#5e6d81" className="shrink-0" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by application name or label" className="flex-1 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] outline-none" style={font} />
              </div>
              {/* Project filter — multi-select, only when All Projects */}
              {isAllProjects && (
                <div className="relative">
                  <button
                    onClick={() => { setProjectFilterOpen(p => !p); setMaturityOpen(false); setCritOpen(false); setLabelsOpen(false); }}
                    className="border border-[#c9d0e3] rounded-[4px] flex items-center gap-1.5 px-2 h-[40px] bg-white min-w-[160px] max-w-[280px]"
                  >
                    {projectFilter.size === 0 ? (
                      <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] flex-1 text-left px-1" style={font}>Project</span>
                    ) : (
                      <div className="flex items-center gap-1 flex-1 overflow-hidden">
                        {Array.from(projectFilter).map(proj => (
                          <span key={proj} className="flex items-center gap-1 bg-[#eef3f8] border border-[#c9d0e3] rounded-[3px] pl-1.5 pr-1 shrink-0" style={{ height: "24px" }}>
                            <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[11px] whitespace-nowrap" style={font}>{proj}</span>
                            <span
                              role="button"
                              onClick={e => { e.stopPropagation(); setProjectFilter(prev => { const n = new Set(prev); n.delete(proj); return n; }); }}
                              className="flex items-center justify-center size-3 rounded-full hover:bg-[#c9d0e3] transition-colors cursor-pointer"
                            >
                              <X size={8} color="#5e6d81" />
                            </span>
                          </span>
                        ))}
                      </div>
                    )}
                    <ChevronDown size={14} color="#5e6d81" className={`shrink-0 transition-transform duration-200 ${projectFilterOpen ? "rotate-180" : ""}`} />
                  </button>
                  {projectFilterOpen && (
                    <div className="absolute top-full mt-1 left-0 bg-white border border-[#eaeef5] rounded-[4px] shadow-lg z-10 w-[220px]" style={{ animation: "dropdownIn 150ms ease-out" }}>
                      <div className="px-2 pt-2 pb-1 border-b border-[#eaeef5]">
                        <div className="flex items-center gap-2 border border-[#c9d0e3] rounded-[4px] px-2 h-[32px] bg-white">
                          <Search size={12} color="#5e6d81" className="shrink-0" />
                          <input
                            value={projectSearch}
                            onChange={e => setProjectSearch(e.target.value)}
                            placeholder="Search project..."
                            className="flex-1 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[13px] outline-none"
                            style={font}
                            autoFocus
                          />
                        </div>
                      </div>
                      <div className="max-h-[200px] overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#e8ecf2 transparent" }}>
                        {ALL_PROJECTS.filter(p => p.toLowerCase().includes(projectSearch.toLowerCase())).map(proj => {
                          const checked = projectFilter.has(proj);
                          return (
                            <button key={proj} onClick={() => { setProjectFilter(prev => { const n = new Set(prev); checked ? n.delete(proj) : n.add(proj); return n; }); }} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-[#f8fafb] transition-colors">
                              <div className={`size-4 border rounded-[2px] flex items-center justify-center shrink-0 transition-colors ${checked ? "border-[#3eb065] bg-[#3eb065]" : "border-[#c9d0e3]"}`}>
                                {checked && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2L7 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                              </div>
                              <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] truncate" style={font}>{proj}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
              {/* Maturity filter */}
              <div className="relative">
                <button onClick={() => { setMaturityOpen(p => !p); setCritOpen(false); setLabelsOpen(false); setProjectFilterOpen(false); }} className="border border-[#c9d0e3] rounded-[4px] flex items-center gap-2 px-3 h-[40px] bg-white min-w-[160px] justify-between">
                  <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px]" style={font}>{maturityFilter || "Maturity Level"}</span>
                  <ChevronDown size={14} color="#5e6d81" className={`transition-transform duration-200 ${maturityOpen ? "rotate-180" : ""}`} />
                </button>
                {maturityOpen && (
                  <div className="absolute top-full mt-1 left-0 bg-white border border-[#eaeef5] rounded-[4px] shadow-lg z-10 min-w-[160px]" style={{ animation: "dropdownIn 150ms ease-out" }}>
                    {["", "Unspecified", "Experimental", "Production", "End Of Life"].map(opt => (
                      <button key={opt} onClick={() => { setMaturityFilter(opt); setMaturityOpen(false); }} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-[#f8fafb] transition-colors">
                        <div className={`size-4 border rounded flex items-center justify-center ${maturityFilter === opt ? "border-[#3eb065] bg-[#3eb065]" : "border-[#c9d0e3]"}`}>
                          {maturityFilter === opt && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2L7 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                        <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px]" style={font}>{opt || "All"}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Criticality filter */}
              <div className="relative">
                <button onClick={() => { setCritOpen(p => !p); setMaturityOpen(false); setLabelsOpen(false); setProjectFilterOpen(false); }} className="border border-[#c9d0e3] rounded-[4px] flex items-center gap-2 px-3 h-[40px] bg-white min-w-[180px] justify-between">
                  <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px]" style={font}>{critFilter || "Business Criticality"}</span>
                  <ChevronDown size={14} color="#5e6d81" className={`transition-transform duration-200 ${critOpen ? "rotate-180" : ""}`} />
                </button>
                {critOpen && (
                  <div className="absolute top-full mt-1 left-0 bg-white border border-[#eaeef5] rounded-[4px] shadow-lg z-10 min-w-[180px]" style={{ animation: "dropdownIn 150ms ease-out" }}>
                    {(["", "Unspecified", "Low", "Medium", "High", "Critical"] as const).map(opt => (
                      <button key={opt} onClick={() => { setCritFilter(opt); setCritOpen(false); }} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-[#f8fafb] transition-colors">
                        <div className={`size-4 border rounded-[2px] flex items-center justify-center ${critFilter === opt ? "border-[#3eb065] bg-[#3eb065]" : "border-[#c9d0e3]"}`}>
                          {critFilter === opt && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2L7 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                        {(opt === "Low" || opt === "Medium" || opt === "High" || opt === "Critical") && <Impact property1={opt} className="overflow-clip relative size-[24px]" />}
                        <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px]" style={font}>{opt || "All"}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {/* Labels filter */}
              <div className="relative">
                <button onClick={() => { setLabelsOpen(p => !p); setMaturityOpen(false); setCritOpen(false); setProjectFilterOpen(false); }} className="border border-[#c9d0e3] rounded-[4px] flex items-center gap-2 px-3 h-[40px] bg-white min-w-[120px] justify-between">
                  <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] truncate max-w-[100px]" style={font}>{labelFilter || "Labels"}</span>
                  <ChevronDown size={14} color="#5e6d81" className={`shrink-0 transition-transform duration-200 ${labelsOpen ? "rotate-180" : ""}`} />
                </button>
                {labelsOpen && (
                  <div className="absolute top-full mt-1 right-0 bg-white border border-[#eaeef5] rounded-[4px] shadow-lg z-10 w-[220px]" style={{ animation: "dropdownIn 150ms ease-out" }}>
                    {/* Search inside dropdown */}
                    <div className="px-2 pt-2 pb-1 border-b border-[#eaeef5]">
                      <div className="flex items-center gap-2 border border-[#c9d0e3] rounded-[4px] px-2 h-[32px] bg-white">
                        <Search size={12} color="#5e6d81" className="shrink-0" />
                        <input
                          value={labelSearch}
                          onChange={e => setLabelSearch(e.target.value)}
                          placeholder="Search label..."
                          className="flex-1 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[13px] outline-none"
                          style={font}
                          autoFocus
                        />
                      </div>
                    </div>
                    <div className="max-h-[200px] overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#e8ecf2 transparent" }}>
                      <button onClick={() => { setLabelFilter(""); setLabelsOpen(false); setLabelSearch(""); }} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-[#f8fafb] transition-colors">
                        <div className={`size-4 border rounded flex items-center justify-center ${!labelFilter ? "border-[#3eb065] bg-[#3eb065]" : "border-[#c9d0e3]"}`}>
                          {!labelFilter && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2L7 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                        </div>
                        <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px]" style={font}>All</span>
                      </button>
                      {ALL_LABELS.filter(l => l.toLowerCase().includes(labelSearch.toLowerCase())).map(lbl => (
                        <button key={lbl} onClick={() => { setLabelFilter(lbl); setLabelsOpen(false); setLabelSearch(""); }} className="flex items-center gap-2 w-full px-3 py-2 hover:bg-[#f8fafb] transition-colors">
                          <div className={`size-4 border rounded-[2px] flex items-center justify-center ${labelFilter === lbl ? "border-[#3eb065] bg-[#3eb065]" : "border-[#c9d0e3]"}`}>
                            {labelFilter === lbl && <svg width="8" height="6" viewBox="0 0 8 6" fill="none"><path d="M1 3l2 2L7 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                          </div>
                          <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] truncate" style={font}>{lbl}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Counter */}
            <div className="flex items-center gap-2 mt-2">
              <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px]" style={font}>{selected.size} Selected</span>
              <div className="size-1.5 rounded-full bg-[#414857]" />
              <span className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px]" style={font}>Showing {filtered.length} of {BASE_APPS.length}</span>
            </div>
            {/* Table */}
            <div className="border border-[#eaeef5] rounded-[4px]">
              {/* Table header */}
              <div className={`grid bg-[#f8fafb] border-b border-[#eaeef5] h-[40px] rounded-tl-[4px] rounded-tr-[4px] ${isAllProjects ? "grid-cols-[84px_1fr_1fr_1fr_1fr_1fr]" : "grid-cols-[84px_1fr_172px_172px_1fr]"}`}>
                <div className="flex items-center justify-center px-6">
                  <button onClick={toggleAll} className={`size-4 border rounded-[2px] flex items-center justify-center transition-colors ${allChecked ? "border-[#3eb065] bg-[#3eb065]" : "border-[#c9d0e3]"}`}>
                    {allChecked && <CheckIcon />}
                  </button>
                </div>
                {["Application Name", ...(isAllProjects ? ["Project"] : []), "Maturity Level", "Business Criticality", "Labels"].map(col => (
                  <div key={col} className="flex items-center pl-6">
                    <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px] leading-[16px]" style={font}>{col}</span>
                  </div>
                ))}
              </div>
              {/* Rows */}
              {filtered.map(app => {
                const isSelected = selected.has(app.id);
                return (
                  <div key={app.id} onClick={() => { setSelected(prev => { const n = new Set(prev); isSelected ? n.delete(app.id) : n.add(app.id); return n; }); }} className={`grid border-b border-[#eaeef5] cursor-pointer hover:bg-[#f8fafb] transition-colors h-[52px] ${isAllProjects ? "grid-cols-[84px_1fr_1fr_1fr_1fr_1fr]" : "grid-cols-[84px_1fr_172px_172px_1fr]"}`}>
                    <div className="flex items-center justify-center px-6">
                      <div className={`size-4 border rounded-[2px] flex items-center justify-center transition-colors ${isSelected ? "border-[#3eb065] bg-[#3eb065]" : "border-[#c9d0e3]"}`}>
                        {isSelected && <CheckIcon />}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px]" style={font}>{app.name}</span>
                    </div>
                    {isAllProjects && (
                      <div className="flex items-center pl-6">
                        <span className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] truncate" style={font}>{app.project}</span>
                      </div>
                    )}
                    <div className="flex items-center pl-6">
                      <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px]" style={font}>{app.maturity}</span>
                    </div>
                    <div className="flex items-center gap-2 pl-6">
                      <Impact property1={app.criticality as "Low" | "Medium" | "High" | "Critical"} className="overflow-clip relative size-[24px]" />
                      <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px]" style={font}>{app.criticality}</span>
                    </div>
                    <div className="flex items-center gap-1.5 pl-6">
                      {app.labels[0] && (
                        <div className="bg-[#eef3f8] border border-[#c9d0e3] px-1.5 rounded-[2px] shrink-0" style={{ lineHeight: "16px" }}>
                          <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[11px]" style={font}>{app.labels[0]}</span>
                        </div>
                      )}
                      {app.labels.length > 1 && (
                        <div className="relative group/tooltip shrink-0">
                          <span className="font-['Open_Sans',sans-serif] font-semibold text-[#5e6d81] text-[12px] cursor-default" style={font}>+{app.labels.length - 1}</span>
                          <div className="absolute bottom-full left-0 mb-1.5 z-20 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-150 pointer-events-none">
                            <div className="bg-[#152033] rounded-[4px] px-3 py-2 shadow-lg flex flex-col gap-1 min-w-max">
                              {app.labels.slice(1).map(l => (
                                <span key={l} className="font-['Open_Sans',sans-serif] font-normal text-white text-[12px] leading-[16px]" style={font}>{l}</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="border border-[#eaeef5] rounded-[4px] flex min-h-0" style={{ height: "calc(100% - 0px)" }}>
            {/* Left: app list */}
            <div className="flex flex-col w-[340px] shrink-0" style={{ overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "#e8ecf2 transparent" }}>
              <div className="px-4 pt-4 pb-3">
                <p className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[16px] leading-[22px]" style={font}>Applications</p>
                <p className="font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[14px] leading-[19px]" style={font}>Select an app to edit rules</p>
                <div className="mt-3 border border-[#c9d0e3] rounded-[4px] flex items-center gap-2 px-2 h-[36px] bg-white">
                  <Search size={13} color="#5e6d81" className="shrink-0" />
                  <input value={appSearch} onChange={e => setAppSearch(e.target.value)} placeholder="Search Applications" className="flex-1 font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] outline-none" style={font} />
                </div>
                <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px] leading-[19px] mt-2" style={font}>
                  Showing <span className="font-semibold text-[#414857]">{BASE_APPS.filter(a => selected.has(a.id) && a.name.toLowerCase().includes(appSearch.toLowerCase())).length}</span> of {BASE_APPS.length} applications in project
                </p>
              </div>
              <div className="flex flex-col">
                {BASE_APPS.filter(a => selected.has(a.id) && a.name.toLowerCase().includes(appSearch.toLowerCase())).map(app => {
                  const isActive = selectedAppId === app.id;
                  const enabledRules = framework.controls.flatMap(c => c.requirements.flatMap(r => r.rules.filter(ru => ru.enabled)));
                  const totalRules = enabledRules.length;
                  return (
                    <button key={app.id} onClick={() => setSelectedAppId(app.id)} className={`text-left flex flex-col px-4 py-3 border-l-[3px] transition-colors relative ${isActive ? "bg-[#eef3f8] border-[#415980]" : "border-transparent hover:bg-[#f8fafb]"}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="relative shrink-0 size-4">
                          <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 15.5868 15.5483">
                            <path d={svgPathsP6.p30717f80} fill="#999db4" />
                          </svg>
                        </div>
                        <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] truncate" style={font}>{app.name}</span>
                      </div>
                      {totalRules > 0 && (
                        <CoverageBar
                          enabled={selected.has(app.id)
                            ? enabledRules.filter(rule => ruleToggles[`${app.id}-${rule.id}`] === true).length
                            : 0}
                          total={totalRules}
                        />
                      )}
                      {selected.has(app.id) && (() => {
                        const appRules = enabledRules;
                        const actualFail = appRules.filter(r => ruleToggles[`${app.id}-${r.id}`] === true && ruleActions[`${app.id}-${r.id}`] === "fail").length;
                        const actualWarn = appRules.filter(r => ruleToggles[`${app.id}-${r.id}`] === true && ruleActions[`${app.id}-${r.id}`] !== "fail").length;
                        if (actualFail === 0 && actualWarn === 0) return null;
                        return (
                          <div className="flex items-center gap-3 mt-1">
                            {actualWarn > 0 && <div className="flex items-center gap-1"><div className="size-2 rounded-full bg-[#F59E0B]" /><span className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[12px]" style={font}>{actualWarn} rules</span></div>}
                            {actualFail > 0 && <div className="flex items-center gap-1"><div className="size-2 rounded-full bg-[#D72D2D]" /><span className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[12px]" style={font}>{actualFail} rules</span></div>}
                          </div>
                        );
                      })()}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div className="w-[61px] shrink-0 flex items-start justify-center pt-3">
              <div className="bg-[#eaeef5] h-full w-px" />
            </div>
            {/* Right: rules */}
            <div className="flex flex-col flex-1 min-w-0 px-3" style={{ overflowY: "auto", scrollbarWidth: "thin", scrollbarColor: "#e8ecf2 transparent" }}>
              {(() => {
                const allEnabledRules = framework.controls.flatMap(c => c.requirements.flatMap(r => r.rules.filter(ru => ru.enabled)));
                if (!selectedAppId) {
                  return (
                    <div className="flex items-center justify-center h-full">
                      <p className="font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[14px]" style={font}>Select an application to configure rules</p>
                    </div>
                  );
                }
                if (allEnabledRules.length === 0) {
                  return (
                    <div className="flex flex-col items-center justify-center h-full gap-4 py-8">
                      {/* Folder illustration */}
                      <div className="h-[200px] overflow-clip relative shrink-0 w-[260px]">
                        {/* Pond */}
                        <div className="absolute h-[114px] left-[10px] top-[53px] w-[240px]">
                          <svg className="absolute block inset-0 size-full" fill="none" height="114" preserveAspectRatio="none" viewBox="0 0 240 114" width="240">
                            <path d={svgPathsEmptyState.p30817400} fill="#D9FAD2" />
                          </svg>
                        </div>
                        {/* Shadow ellipse */}
                        <div className="absolute flex h-[13.958px] items-center justify-center left-[85.4px] top-[130.77px] w-[80.108px]">
                          <div className="flex-none rotate-[2.49deg]">
                            <div className="h-[10.5px] relative w-[79.727px]">
                              <svg className="absolute block inset-0 size-full" fill="none" height="10.5" preserveAspectRatio="none" viewBox="0 0 79.7272 10.5" width="79.7272">
                                <ellipse cx="39.8636" cy="5.25" fill="#152033" rx="39.8636" ry="5.25" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* Main folder group */}
                        <div className="absolute flex h-[71.659px] items-center justify-center left-[90.07px] top-[59.31px] w-[87.207px]">
                          <div className="flex-none" style={{ transform: "rotate(-7.35deg) skewX(-2.63deg)" }}>
                            <div className="h-[61.271px] relative w-[82.848px]">
                              <svg className="absolute block inset-0 size-full" fill="none" height="61.2707" preserveAspectRatio="none" viewBox="0 0 82.8475 61.2707" width="82.8475">
                                <path d={svgPathsEmptyState.p8562b70} fill="#3EB065" />
                                <path d={svgPathsEmptyState.p1e404d00} fill="white" />
                                <path d={svgPathsEmptyState.pbc4ed00} fill="#152033" />
                                <path d={svgPathsEmptyState.p1959d400} fill="#152033" />
                                <path d={svgPathsEmptyState.p2a2e1600} fill="#152033" />
                                <path d={svgPathsEmptyState.p34513a00} fill="#152033" />
                                <path clipRule="evenodd" d={svgPathsEmptyState.p32583370} fill="#152033" fillRule="evenodd" />
                                <path d={svgPathsEmptyState.p1bf67480} fill="#152033" />
                                <path d={svgPathsEmptyState.p11d41900} fill="#152033" />
                                <path d={svgPathsEmptyState.p21df6600} fill="#152033" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* Small green folder left */}
                        <div className="absolute flex h-[32.114px] items-center justify-center left-[32.17px] top-[74.49px] w-[39.63px]">
                          <div className="flex-none" style={{ transform: "rotate(7.06deg)" }}>
                            <div className="relative h-[27.878px] w-[36.2px]">
                              <svg className="absolute block inset-0 size-full" fill="none" height="27.8783" preserveAspectRatio="none" viewBox="0 0 36.2002 27.8783" width="36.2002">
                                <path d={svgPathsEmptyState.p2adbbc00} fill="#9EE29E" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* Small green shape right */}
                        <div className="absolute flex h-[18.327px] items-center justify-center left-[202.69px] top-[75.38px] w-[23.162px]">
                          <div className="flex-none" style={{ transform: "rotate(-3.09deg)" }}>
                            <div className="h-[17.15px] relative w-[22.269px]">
                              <svg className="absolute block inset-0 size-full" fill="none" height="17.15" preserveAspectRatio="none" viewBox="0 0 22.2694 17.15" width="22.2694">
                                <path d={svgPathsEmptyState.p3f0feb00} fill="#9EE29E" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* Dark shape */}
                        <div className="absolute flex h-[21.095px] items-center justify-center left-[162.65px] top-[58.02px] w-[23.796px]">
                          <div className="flex-none" style={{ transform: "rotate(-3.95deg)" }}>
                            <div className="h-[19.592px] relative w-[22.5px]">
                              <svg className="absolute block inset-0 size-full" fill="none" height="19.592" preserveAspectRatio="none" viewBox="0 0 22.4999 19.592" width="22.4999">
                                <path d={svgPathsEmptyState.p59ee700} fill="#152033" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        {/* White circle behind X */}
                        <div className="absolute left-[174.16px] size-[15px] top-[36.49px]">
                          <svg className="absolute block inset-0 size-full" fill="none" height="15" preserveAspectRatio="none" viewBox="0 0 15 15" width="15">
                            <circle cx="7.5" cy="7.5" fill="white" r="7.5" />
                          </svg>
                        </div>
                        {/* Blue X badge */}
                        <div className="absolute flex items-center justify-center left-[171.12px] size-[21.717px] top-[33.36px]">
                          <div className="flex-none" style={{ transform: "rotate(-13.55deg)" }}>
                            <div className="relative size-[18px]">
                              <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
                                <path d={svgPathsEmptyState.p255bbf00} fill="#1D6CE2" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Text */}
                      <div className="flex flex-col items-center gap-2 text-center max-w-[320px]">
                        <p className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[18px] leading-[25px]" style={font}>No rules configured yet</p>
                        <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[22px]" style={font}>Enable rules in the Admin Compliance Catalog to configure them here.</p>
                      </div>
                    </div>
                  );
                }
                return null; // will fall through to normal render below
              })()}
              {selectedAppId && framework.controls.flatMap(c => c.requirements.flatMap(r => r.rules.filter(ru => ru.enabled))).length > 0 && (
                <div className="flex flex-col">
                  {/* Stage badge */}
                  <div className="flex justify-end px-4 pt-3 pb-1">

                  </div>
                  {/* Controls */}
                  <div className="flex flex-col gap-4 px-3 pb-4">
                  {framework.controls.filter(c => c.requirements.some(r => r.rules.some(ru => ru.enabled))).map(ctrl => (
                    <div key={ctrl.id} className="flex flex-col border border-[#eaeef5] rounded-[4px] overflow-hidden">
                      {/* Control header */}
                      <div className="flex items-center gap-3 px-4 py-2.5 bg-[#f8fafb] border-b border-[#eaeef5]">
                        <div className="bg-[#eef3f8] border border-[#b4bacc] rounded-[2px] px-1.5" style={{ lineHeight: "16px" }}>
                          <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[12px]" style={font}>{ctrl.tag}</span>
                        </div>
                        <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px]" style={font}>{ctrl.title}</span>
                      </div>
                      {/* Rules */}
                      {ctrl.requirements.flatMap(r => r.rules).filter(rule => rule.enabled).map(rule => {
                        const ruleKey = `${selectedAppId}-${rule.id}`;
                        const isOn = ruleToggles[ruleKey] ?? false;
                        const action = ruleActions[ruleKey] ?? "warn";
                        const isExpanded = expandedRuleIds.has(rule.id);
                        const isLocked = !isAllProjects && globalRuleKeys.has(ruleKey);
                        return (
                          <LockedRowWrapper key={rule.id} isLocked={isLocked}>
                          <div className={`flex flex-col border-b border-[#eaeef5] group/rule hover:bg-[#f8fafb] transition-colors ${!isOn && !isLocked ? "opacity-50" : ""}`}>
                            <div className="flex items-center gap-3 px-4 py-3">
                              {/* Toggle — static pill when locked, interactive otherwise */}
                              {isLocked ? (
                                <div className="shrink-0">
                                  <div className={`relative rounded-[12px] w-8 h-[18px] ${isOn ? "bg-[#d9fad2]" : "bg-[#eaeef5]"} px-[3px] py-[0px]`}>
                                    <div className={`absolute top-[2px] size-[14px] bg-white rounded-full shadow-sm ${isOn ? "left-[16px]" : "left-[2px]"}`} />
                                  </div>
                                </div>
                              ) : (
                                <button
                                  onClick={() => {
                                    const newVal = !isOn;
                                    setRuleToggles(prev => ({ ...prev, [ruleKey]: newVal }));
                                    if (isAllProjects) {
                                      setGlobalRuleKeys(prev => {
                                        const n = new Set(prev);
                                        newVal ? n.add(ruleKey) : n.delete(ruleKey);
                                        return n;
                                      });
                                    }
                                  }}
                                  className={`relative rounded-[12px] w-8 h-[18px] shrink-0 transition-colors ${isOn ? "bg-[#2a8553]" : "bg-[#999db4]"} px-[3px] py-[0px]`}
                                >
                                  <div className={`absolute top-[2px] size-[14px] bg-white rounded-full shadow-sm transition-all duration-200 ${isOn ? "left-[16px]" : "left-[2px]"}`} />
                                </button>
                              )}
                              {/* Icon + label */}
                              <div className="relative shrink-0 size-5">
                                {rule.iconType === "shield" ? <IconShieldCheck /> : <IconLock />}
                              </div>
                              <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] flex-1 min-w-0 overflow-hidden text-ellipsis whitespace-nowrap" style={font}>{rule.label}</span>
                              {/* Radio buttons */}
                              <div className="flex items-center gap-4 shrink-0">
                                <button disabled={!isOn || isLocked} onClick={() => setRuleActions(prev => ({ ...prev, [ruleKey]: "warn" }))} className="flex items-center gap-1.5 disabled:cursor-not-allowed">
                                  {isLocked
                                    ? <Radio type={action === "warn"} state="disabled" />
                                    : <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${isOn && action === "warn" ? "border-[#2a8553]" : "border-[#c9d0e3]"}`}>
                                        {isOn && action === "warn" && <div className="size-2 bg-[#2a8553] rounded-full" />}
                                      </div>
                                  }
                                  <div className="relative shrink-0 size-[14px]">
                                    <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 14.4794 12.6602">
                                      <path d={svgPathsP6.p19b7ccc0} fill={isOn && !isLocked ? "#F59E0B" : "#c9d0e3"} />
                                    </svg>
                                  </div>
                                  <span className="font-['Open_Sans',sans-serif] font-normal text-[12px]" style={{ ...font, color: isOn && !isLocked ? "#414857" : "#c9d0e3" }}>Warning</span>
                                </button>
                                <button disabled={!isOn || isLocked} onClick={() => setRuleActions(prev => ({ ...prev, [ruleKey]: "fail" }))} className="flex items-center gap-1.5 disabled:cursor-not-allowed">
                                  {isLocked
                                    ? <Radio type={action === "fail"} state="disabled" />
                                    : <div className={`size-4 rounded-full border-2 flex items-center justify-center transition-colors ${isOn && action === "fail" ? "border-[#2a8553]" : "border-[#c9d0e3]"}`}>
                                        {isOn && action === "fail" && <div className="size-2 bg-[#2a8553] rounded-full" />}
                                      </div>
                                  }
                                  <div className="relative shrink-0 size-[14px]">
                                    <svg className="absolute block inset-0 size-full" fill="none" viewBox="0 0 15 15">
                                      <path d={svgPathsP6.p3d657700} fill={isOn && !isLocked ? "#D72D2D" : "#c9d0e3"} />
                                    </svg>
                                  </div>
                                  <span className="font-['Open_Sans',sans-serif] font-normal text-[12px]" style={{ ...font, color: isOn && !isLocked ? "#414857" : "#c9d0e3" }}>Fail</span>
                                </button>
                              </div>
                              {/* Chevron expand — after radios */}
                              {rule.description && (
                                <button
                                  onClick={() => setExpandedRuleIds(prev => { const n = new Set(prev); n.has(rule.id) ? n.delete(rule.id) : n.add(rule.id); return n; })}
                                  className="opacity-0 group-hover/rule:opacity-100 transition-opacity flex items-center justify-center size-6 rounded hover:bg-[#f0f2f5] shrink-0"
                                >
                                  <ChevronDown size={14} color="#5e6d81" className={`transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`} />
                                </button>
                              )}
                            </div>
                            {isExpanded && rule.description && (
                              <div className="px-4 pb-3 pl-[72px]">
                                <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px] leading-[20px]" style={font}>{rule.description}</p>
                              </div>
                            )}
                          </div>
                          </LockedRowWrapper>
                        );
                      })}
                    </div>
                  ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="shrink-0 flex items-center px-6 py-3 border-t border-[#eaeef5] bg-white gap-4">
        {step === 1 ? (
          <div className="flex items-center gap-4 ml-auto">
            <button onClick={() => handleClose(0)} className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#eaeef5] transition-colors min-w-[80px]" style={font}>Cancel</button>
            <button
              onClick={() => { if (selected.size > 0) { const firstSelected = BASE_APPS.find(a => selected.has(a.id)); if (firstSelected) setSelectedAppId(firstSelected.id); setStep(2); } }}
              disabled={selected.size === 0}
              className={`font-['Open_Sans',sans-serif] font-semibold text-[14px] px-4 h-[34px] rounded-[4px] transition-colors min-w-[80px] ${selected.size > 0 ? "bg-[#3eb065] text-white hover:bg-[#2a8553]" : "bg-[#eaeef5] text-[#999db4] cursor-not-allowed"}`}
              style={font}
            >Next</button>
          </div>
        ) : (
          <>
            <button onClick={() => setStep(1)} className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#eaeef5] transition-colors flex items-center gap-1" style={font}>← Back</button>
            <div className="flex items-center gap-4 ml-auto">
              <button onClick={() => handleClose(0)} className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#eaeef5] transition-colors min-w-[80px]" style={font}>Cancel</button>
              <button onClick={handleDone} className="bg-[#3eb065] font-['Open_Sans',sans-serif] font-semibold text-white text-[14px] px-4 h-[34px] rounded-[4px] hover:bg-[#2a8553] transition-colors min-w-[80px]" style={font}>Done</button>
            </div>
          </>
        )}
      </div>
      </div>
    </>,
    document.body
  );
}

// ─── App Lifecycle View (Kanban + Gate panel) ────────────────────────────────

const PLATFORM_APPS: { id: string; name: string; version: string; stage: string; stageColor: string; projects: string[] }[] = [
  { id: "app-1",  name: "docker-demo-app",         version: "2.4.1",  stage: "Build",      stageColor: "#708cb2", projects: ["BTC Wallet App", "BTC Wallet"] },
  { id: "app-2",  name: "payment-service",          version: "1.9.0",  stage: "Test",       stageColor: "#1d6ce2", projects: ["Catalina Checkout Service", "PaymentGateway"] },
  { id: "app-3",  name: "recommendation-engine",    version: "3.1.2",  stage: "Staging",    stageColor: "#b36b00", projects: ["Catalina Recommendations Service"] },
  { id: "app-4",  name: "inventory-api",            version: "1.2.5",  stage: "Release",    stageColor: "#2a8553", projects: ["Green Pizza Inventory Service", "APIGateway"] },
  { id: "app-5",  name: "auth-service",             version: "4.0.0",  stage: "Build",      stageColor: "#708cb2", projects: ["AuthService", "UserPortal"] },
  { id: "app-6",  name: "helm-chart-deployer",      version: "2.0.3",  stage: "Test",       stageColor: "#1d6ce2", projects: ["BTC Helm Charts"] },
  { id: "app-7",  name: "wallet-backend",           version: "1.5.1",  stage: "Staging",    stageColor: "#b36b00", projects: ["quotopia Wallet App", "quotopia Application"] },
  { id: "app-8",  name: "log-analyzer-worker",      version: "0.9.8",  stage: "Build",      stageColor: "#708cb2", projects: ["LogAnalyzer", "DataProcessor"] },
  { id: "app-9",  name: "api-gateway-proxy",        version: "3.3.0",  stage: "Release",    stageColor: "#2a8553", projects: ["APIGateway", "WebProxy"] },
  { id: "app-10", name: "napa-infra-runner",        version: "1.0.4",  stage: "Test",       stageColor: "#1d6ce2", projects: ["Napa Burger Infrastructure"] },
  { id: "app-11", name: "mail-delivery-service",    version: "2.2.2",  stage: "Staging",    stageColor: "#b36b00", projects: ["MailClient", "MailServer"] },
  { id: "app-12", name: "doc-manager-core",         version: "1.7.0",  stage: "Build",      stageColor: "#708cb2", projects: ["DocManager", "FileSync"] },
  { id: "app-13", name: "container-orchestrator",   version: "5.0.1",  stage: "Release",    stageColor: "#2a8553", projects: ["ContainerOrchestrator", "KubeWorker", "DockerRunner"] },
  { id: "app-14", name: "analytics-db-connector",   version: "2.1.0",  stage: "Test",       stageColor: "#1d6ce2", projects: ["AnalyticsDB", "DatabaseCluster"] },
  { id: "app-15", name: "admin-dashboard-ui",       version: "3.8.5",  stage: "Staging",    stageColor: "#b36b00", projects: ["AdminDashboard", "UserPortal"] },
];

function PatchedGateDetails() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    // Simple text node replacements
    const walk = (node: Node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        if (node.textContent === "compliance-3002-PROD-release-block") node.textContent = "compliance-github-pr-approval-prod";
        else if (node.textContent === "Verify JIra Evidence") node.textContent = "Evidence of GitHub PR approvals by at least one non-committer";
        else if (node.textContent === "Verify PR Evidence- at least one approver that...") node.textContent = "Evidence of Jira issues on each commit in the resource";
        else if (node.textContent === "Green-Pizza") node.textContent = "BTC Wallet App";
        else if (node.textContent === "Apptrust Demos") node.textContent = "BTC Wallet";
      } else {
        node.childNodes.forEach(walk);
      }
    };
    walk(ref.current);
    // Multi-span "compliance-3001-PROD-release-block" — full text check on <p> elements
    ref.current.querySelectorAll("p").forEach(p => {
      if (p.textContent?.trim() === "compliance-3001-PROD-release-block") {
        p.innerHTML = '<span style="line-height:19px;font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block">compliance-jira-commit-evidence-prod</span>';
        // Add spacing between the policy name line and rule name line
        const textContainer = p.closest('[data-name="text"]');
        if (textContainer instanceof HTMLElement) {
          textContainer.style.gap = "6px";
        }
      }
      // Prevent row 1 policy name from wrapping
      if (p.textContent?.includes("compliance-github-pr-approval-prod")) {
        p.style.whiteSpace = "nowrap";
        p.style.overflow = "hidden";
        p.style.textOverflow = "ellipsis";
      }
    });
  }, []);
  return <div ref={ref}><GateDetails /></div>;
}

function ApplicationsScreen({ selectedProject = "All Projects", onProjectChange }: { selectedProject?: string; onProjectChange?: (p: string) => void }) {
  const font = { fontVariationSettings: '"wdth" 100' };
  const [gateOpen, setGateOpen] = useState(false);
  const [releaseRect, setReleaseRect] = useState<{ left: number; top: number; width: number; height: number } | null>(null);
  const [projectFilter, setProjectFilter] = useState("All Projects");
  const [filterOpen, setFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const filterTriggerRef = useRef<HTMLButtonElement>(null);
  const [filterAnchor, setFilterAnchor] = useState<{ left: number; top: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const isAllProjects = selectedProject === "All Projects";

  useEffect(() => {
    if (!isAllProjects) {
      const locate = () => {
        if (!containerRef.current) return;
        const gateEls = containerRef.current.querySelectorAll<HTMLElement>('[data-name="Gate-In"]');
        for (const el of Array.from(gateEls)) {
          if (el.textContent?.includes("Release")) {
            const r = el.getBoundingClientRect();
            setReleaseRect({ left: r.left, top: r.top, width: r.width, height: r.height });
            return;
          }
        }
      };
      locate();
      window.addEventListener("resize", locate);
      window.addEventListener("scroll", locate, true);
      return () => {
        window.removeEventListener("resize", locate);
        window.removeEventListener("scroll", locate, true);
      };
    }
  }, [isAllProjects]);

  useEffect(() => {
    if (!filterOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(e.target as Node)) setFilterOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [filterOpen]);

  const openFilter = () => {
    if (filterTriggerRef.current) {
      const r = filterTriggerRef.current.getBoundingClientRect();
      setFilterAnchor({ left: r.left, top: r.bottom + 4 });
    }
    setFilterOpen(p => !p);
  };

  // All unique projects that appear in the app list (excl. "All Projects")
  const projectOptions = ["All Projects", ...PROJECT_LIST.filter(p => p !== "All Projects" && PLATFORM_APPS.some(a => a.projects.includes(p)))];

  const filteredApps = PLATFORM_APPS.filter(app => {
    if (projectFilter === "All Projects") return true;
    return app.projects.includes(projectFilter);
  });

  if (isAllProjects) {
    return (
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="flex flex-col gap-6 px-6 py-5">
          <div className="flex gap-2 items-center h-[22px]">
            <div className="flex items-center gap-1.5">
              <div className="bg-[#b0d8fe] size-5 rounded-full flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 12.0588 11.736" fill="none"><path d={svgPathsCompliance9.pc737900} fill="#414857" /></svg>
              </div>
              <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] tracking-[0.14px]" style={font}>All Projects</span>
            </div>
            <ChevronDown size={14} color="#414857" className="-rotate-90" />
            <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] tracking-[0.14px]" style={font}>AppTrust</span>
            <ChevronDown size={14} color="#414857" className="-rotate-90" />
            <span className="font-['Open_Sans',sans-serif] font-semibold text-[#415980] text-[14px] leading-[19px] tracking-[0.14px]" style={font}>Applications</span>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex flex-col gap-1">
              <h1 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[24px] leading-[33px] tracking-[0.24px]" style={font}>Applications</h1>
              <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[20px]" style={font}>All applications across projects and their pipeline stages.</p>
            </div>
            {/* Project filter */}
            <div className="relative">
              <button
                ref={filterTriggerRef}
                onClick={openFilter}
                className="flex items-center gap-2 h-[34px] px-3 bg-white border border-[#c9d0e3] rounded-[4px] hover:border-[#708cb2] transition-colors"
                style={font}
              >
                <svg width="12" height="12" viewBox="0 0 12.0588 11.736" fill="none"><path d={svgPathsCompliance9.pc737900} fill="#5e6d81" /></svg>
                <span className="font-['Open_Sans',sans-serif] text-[13px] text-[#414857] leading-[19px]" style={font}>
                  {projectFilter === "All Projects" ? "Filter by Project" : projectFilter}
                </span>
                <ChevronDown size={12} color="#5e6d81" />
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="px-6 pb-6">
          <div className="border border-[#eaeef5] rounded-[6px] overflow-hidden">
            {/* Table header */}
            <div className="grid bg-[#f8fafb] border-b border-[#eaeef5]" style={{ gridTemplateColumns: "2fr 1fr 1fr 2fr" }}>
              {["Application", "Version", "Stage", "Projects"].map(col => (
                <div key={col} className="px-4 py-3">
                  <span className="font-['Open_Sans',sans-serif] font-semibold text-[#5e6d81] text-[12px] leading-[16px] uppercase tracking-[0.6px]" style={font}>{col}</span>
                </div>
              ))}
            </div>
            {/* Rows */}
            {filteredApps.map((app) => (
              <div
                key={app.id}
                className={`grid items-center border-b border-[#eaeef5] last:border-b-0 hover:bg-[#f8fafb] transition-colors cursor-pointer`}
                style={{ gridTemplateColumns: "2fr 1fr 1fr 2fr" }}
              >
                {/* App name */}
                <div className="px-4 py-3 flex items-center gap-2">
                  <div className="size-7 rounded-[4px] bg-[#eaeef5] flex items-center justify-center shrink-0">
                    <svg width="14" height="14" viewBox="0 0 18 19.4971" fill="none">
                      <path d="M18 18.1494V19.4971H0V18.1494H18Z" fill="#708cb2" />
                      <path d="M9 0L18 5.25V15.75L9 21L0 15.75V5.25L9 0Z" fill="#708cb2" opacity="0.3" />
                    </svg>
                  </div>
                  <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[13px] leading-[19px]" style={font}>{app.name}</span>
                </div>
                {/* Version */}
                <div className="px-4 py-3">
                  <span className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[13px] leading-[19px]" style={font}>{app.version}</span>
                </div>
                {/* Stage */}
                <div className="px-4 py-3">
                  <span
                    className="inline-flex items-center h-[20px] px-2 rounded-[3px] font-['Open_Sans',sans-serif] font-semibold text-[11px] leading-[15px] text-white"
                    style={{ backgroundColor: app.stageColor, fontVariationSettings: '"wdth" 100' }}
                  >
                    {app.stage}
                  </span>
                </div>
                {/* Projects */}
                <div className="px-4 py-3 flex flex-wrap gap-1">
                  {app.projects.map(proj => (
                    <button
                      key={proj}
                      onClick={(e) => { e.stopPropagation(); onProjectChange?.(proj); }}
                      className="inline-flex items-center gap-1 h-[20px] px-2 rounded-[10px] bg-[#eef3f8] hover:bg-[#d2dfed] transition-colors"
                    >
                      <div className="size-[10px] rounded-full bg-[#1d6ce2] shrink-0" />
                      <span className="font-['Open_Sans',sans-serif] font-normal text-[#415980] text-[11px] leading-[15px] whitespace-nowrap" style={font}>{proj}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
            {filteredApps.length === 0 && (
              <div className="flex items-center justify-center py-16">
                <span className="font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[14px]" style={font}>No applications found for this project.</span>
              </div>
            )}
          </div>
        </div>

        {/* Project filter dropdown portal */}
        {filterOpen && filterAnchor && createPortal(
          <div
            ref={filterRef}
            className="fixed bg-white border border-[#c9d0e3] rounded-[6px] overflow-hidden z-[9999]"
            style={{ left: filterAnchor.left, top: filterAnchor.top, width: 260, boxShadow: "0 8px 24px rgba(0,0,0,0.12)" }}
          >
            <div className="max-h-[300px] overflow-y-auto py-1">
              {projectOptions.map(proj => (
                <button
                  key={proj}
                  onClick={() => { setProjectFilter(proj); setFilterOpen(false); }}
                  className={`w-full flex items-center gap-2 px-3 py-2 text-left hover:bg-[#f0f4f9] transition-colors ${projectFilter === proj ? "bg-[#eef3f8]" : ""}`}
                >
                  <span className={`font-['Open_Sans',sans-serif] text-[13px] leading-[19px] ${projectFilter === proj ? "font-semibold text-[#1d6ce2]" : "font-normal text-[#414857]"}`} style={font}>{proj}</span>
                  {projectFilter === proj && <span className="ml-auto text-[#1d6ce2]">✓</span>}
                </button>
              ))}
            </div>
          </div>,
          document.body
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} style={{ position: "relative", height: 812, overflow: "hidden" }}>
      {/* Offset −240 px to clip the kanban's internal sidebar; Frame11 fills the content area */}
      <div style={{ position: "absolute", left: -240, top: 0, width: 1440, height: 812 }}>
        <CanbanEvaluationCreateRequest />
      </div>

      {/* Invisible hit-area dynamically positioned over the Release gate square */}
      {releaseRect && (
        <button
          onClick={() => setGateOpen(true)}
          aria-label="Open PROD release gate"
          style={{ position: "fixed", left: releaseRect.left, top: releaseRect.top, width: releaseRect.width, height: releaseRect.height, opacity: 0, zIndex: 65, cursor: "pointer" }}
        />
      )}

      {/* Dim overlay */}
      {gateOpen && (
        <div
          className="fixed inset-0 z-[70]"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
          onClick={() => setGateOpen(false)}
        />
      )}

      {/* GateDetails right panel */}
      <div
        className="fixed right-0 bottom-0 z-[80] bg-white transition-transform duration-300 ease-out overflow-y-auto"
        style={{ top: "101px", width: 920, transform: gateOpen ? "translateX(0)" : "translateX(100%)", boxShadow: "-4px 0 24px rgba(112,140,178,0.2)" }}
      >
        <button
          onClick={() => setGateOpen(false)}
          className="absolute top-4 right-4 z-10 flex items-center justify-center size-7 rounded hover:bg-[#eaeef5] transition-colors"
        >
          <X size={16} color="#5e6d81" />
        </button>
        <PatchedGateDetails />
      </div>
    </div>
  );
}

function NoEventsMedium() {
  return (
    <div className="h-[200px] overflow-clip relative w-[260px]">
      <div className="absolute inset-[24.25%_3.65%_18.75%_4.04%]">
        <svg className="absolute block inset-0 size-full" fill="none" height="114" preserveAspectRatio="none" viewBox="0 0 240 114" width="240">
          <path d={svgPathsCompliance9.p16862100} fill="#D9FAD2" />
        </svg>
      </div>
      <div className="absolute flex inset-[67.01%_34.35%_25.26%_34.71%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-0.648916cqw,77.5019cqh)] rotate-[2.49deg] w-[hypot(99.3511cqw,22.4981cqh)]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" height="12" preserveAspectRatio="none" viewBox="0 0 80 12" width="80">
              <path d={svgPathsCompliance9.p1bb54c80} fill="#152033" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[18.75%_35.34%_35.89%_35.69%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-22.0825cqw,86.2502cqh)] rotate-12 w-[hypot(77.9175cqw,13.7498cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-0.87%_-1.17%]">
              <svg className="block size-full" fill="none" height="81.4" preserveAspectRatio="none" viewBox="0 0 61.4 81.4" width="61.4">
                <g>
                  <path d={svgPathsCompliance9.p33333e80} fill="white" stroke="#152033" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                  <path d={svgPathsCompliance9.p3e033600} fill="#3EB065" stroke="#152033" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                  <path d={svgPathsCompliance9.p24cc8900} stroke="#152033" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[34.618px] items-center justify-center left-[51.44%] right-[35.24%] top-[103.67px]" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-18.4055cqw,81.5945cqh)] rotate-[12.71deg] w-[hypot(81.5945cqw,18.4055cqh)]">
          <div className="relative size-full">
            <svg className="absolute block inset-0 size-full" fill="none" height="28.9563" preserveAspectRatio="none" viewBox="0 0 28.9563 28.9563" width="28.9563">
              <g>
                <path d={svgPathsCompliance9.p2aa50500} fill="white" />
                <path d={svgPathsCompliance9.p142c89c0} fill="#1D6CE2" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[36.46%_73.34%_42.95%_14.13%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(11.785cqw,93.0105cqh)] rotate-[-5.72deg] w-[hypot(88.215cqw,-6.98945cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-3.9%_-5.2%]">
              <svg className="block size-full" fill="none" height="41.4957" preserveAspectRatio="none" viewBox="0 0 31.8718 41.4957" width="31.8718">
                <g>
                  <path d={svgPathsCompliance9.p36ca7c00} fill="#9EE29E" stroke="#9EE29E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path d={svgPathsCompliance9.p1ceec980} fill="#9EE29E" stroke="#9EE29E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path d={svgPathsCompliance9.p2684ae40} stroke="#9EE29E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[31.65%_19.27%_53.72%_72.07%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-5.72701cqw,96.6958cqh)] rotate-[2.61deg] w-[hypot(94.273cqw,3.30423cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-5.3%_-7.06%]">
              <svg className="block size-full" fill="none" height="31.323" preserveAspectRatio="none" viewBox="0 0 24.2422 31.323" width="24.2422">
                <g>
                  <path d={svgPathsCompliance9.p447f800} fill="#9EE29E" stroke="#9EE29E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path d={svgPathsCompliance9.p314f9100} fill="#9EE29E" stroke="#9EE29E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                  <path d={svgPathsCompliance9.pd569880} stroke="#9EE29E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PlatformComplianceCard({ framework, appCount, enabledRulesCount, selectedAppIds, ruleToggles, selectedProject }: { framework: Framework; appCount: number; enabledRulesCount: number; selectedAppIds: Set<string>; ruleToggles: Record<string, boolean>; selectedProject?: string }) {
  const enabled = getEnabledRules(framework);
  const pct = framework.totalRules > 0 ? Math.min(enabled / framework.totalRules, 1) : 0;
  const hasRules = enabled > 0;
  const postureLabel = hasRules ? "Active rules" : "No rules";
  const barColor = "#415980";
  const labelColor = hasRules ? "#414857" : "#999db4";
  const font = { fontVariationSettings: '"wdth" 100' };
  return (
    <div className="bg-[#f8fafb] rounded-[4px] border border-[#eaeef5] flex flex-col gap-4 p-6 cursor-pointer hover:border-[#b4bacc] hover:shadow-sm transition-all">
      <div className="flex gap-3 items-start">
        <div className="flex items-center justify-center rounded-[4px] shrink-0 size-8 overflow-clip" style={{ backgroundColor: framework.color }}>
          {framework.logo ? <img src={framework.logo} alt={framework.abbr} className="w-full h-full object-cover" /> : <span className="font-['Open_Sans',sans-serif] font-semibold text-white text-[12px] leading-[16px] text-center" style={font}>{framework.abbr}</span>}
        </div>
        <div className="flex flex-col flex-1 gap-[2px] min-w-0">
          <span className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[16px] leading-[22px] truncate" style={font}>{framework.name}</span>
          <span className="font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[12px] leading-[16px]" style={font}>{framework.category}</span>
        </div>
      </div>
      <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[14px] leading-[22px] overflow-hidden" style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", ...font }}>{framework.description}</p>
      <div className="flex flex-col gap-1">
        <span className="font-['Open_Sans',sans-serif] font-semibold text-[12px] leading-[16px]" style={{ color: (appCount > 0 && enabledRulesCount > 0) ? "#414857" : "#999db4", ...font }}>
          {(appCount > 0 && enabledRulesCount > 0) ? "Active rules" : "No rules"}
        </span>
        {enabled > 0 && (
          <div className="flex gap-2 items-center">
            <div className="flex-1 bg-[#d2dfed] h-2 rounded-full overflow-hidden">
              <div className="h-full rounded-full" style={{ width: appCount > 0 ? `${Math.min(enabledRulesCount / enabled, 1) * 100}%` : "0%", backgroundColor: "#415980" }} />
            </div>
            <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[12px] leading-[16px] whitespace-nowrap" style={font}>
              <span className="font-semibold">{appCount > 0 ? enabledRulesCount : 0}</span>/{enabled} rules
            </span>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2 relative group/apps cursor-default">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="shrink-0"><path d="M15.7385 11.3962L12.6422 8.29993C12.5551 8.21276 12.4939 8.12284 12.4587 8.03018C12.4234 7.93734 12.4057 7.83793 12.4057 7.73193C12.4057 7.62593 12.4234 7.52743 12.4587 7.43643C12.4939 7.34543 12.5551 7.25634 12.6422 7.16918L15.7385 4.07292C15.8257 3.98576 15.9156 3.92459 16.0082 3.88943C16.1011 3.85409 16.2005 3.83643 16.3065 3.83643C16.4125 3.83643 16.511 3.85409 16.602 3.88943C16.693 3.92459 16.7821 3.98576 16.8692 4.07292L19.9655 7.16918C20.0527 7.25634 20.1138 7.34626 20.149 7.43893C20.1843 7.53176 20.202 7.63118 20.202 7.73717C20.202 7.84317 20.1843 7.94168 20.149 8.03268C20.1138 8.12368 20.0527 8.21276 19.9655 8.29993L16.8692 11.3962C16.7821 11.4833 16.6921 11.5445 16.5992 11.5797C16.5066 11.615 16.4072 11.6327 16.3012 11.6327C16.1952 11.6327 16.0967 11.615 16.0057 11.5797C15.9147 11.5445 15.8257 11.4833 15.7385 11.3962ZM4.61523 9.80768V5.42292C4.61523 5.19409 4.69265 5.00226 4.84748 4.84743C5.00232 4.69259 5.19415 4.61517 5.42298 4.61517H9.80773C10.0366 4.61517 10.2284 4.69259 10.3832 4.84743C10.5381 5.00226 10.6155 5.19409 10.6155 5.42292V9.80768C10.6155 10.0365 10.5381 10.2283 10.3832 10.3832C10.2284 10.538 10.0366 10.6154 9.80773 10.6154H5.42298C5.19415 10.6154 5.00232 10.538 4.84748 10.3832C4.69265 10.2283 4.61523 10.0365 4.61523 9.80768ZM13.3845 18.5769V14.1922C13.3845 13.9633 13.4619 13.7715 13.6167 13.6167C13.7716 13.4618 13.9634 13.3844 14.1922 13.3844H18.577C18.8058 13.3844 18.9977 13.4618 19.1525 13.6167C19.3073 13.7715 19.3847 13.9633 19.3847 14.1922V18.5769C19.3847 18.8058 19.3073 18.9976 19.1525 19.1524C18.9977 19.3073 18.8058 19.3847 18.577 19.3847H14.1922C13.9634 19.3847 13.7716 19.3073 13.6167 19.1524C13.4619 18.9976 13.3845 18.8058 13.3845 18.5769ZM4.61523 18.5769V14.1922C4.61523 13.9633 4.69265 13.7715 4.84748 13.6167C5.00232 13.4618 5.19415 13.3844 5.42298 13.3844H9.80773C10.0366 13.3844 10.2284 13.4618 10.3832 13.6167C10.5381 13.7715 10.6155 13.9633 10.6155 14.1922V18.5769C10.6155 18.8058 10.5381 18.9976 10.3832 19.1524C10.2284 19.3073 10.0366 19.3847 9.80773 19.3847H5.42298C5.19415 19.3847 5.00232 19.3073 4.84748 19.1524C4.69265 18.9976 4.61523 18.8058 4.61523 18.5769ZM5.61548 9.61543H9.61548V5.61543H5.61548V9.61543ZM16.3287 10.5844L19.1537 7.75943L16.3287 4.93443L13.5037 7.75943L16.3287 10.5844ZM14.3845 18.3844H18.3845V14.3844H14.3845V18.3844ZM5.61548 18.3844H9.61548V14.3844H5.61548V18.3844Z" fill="#999db4"/></svg>
        <span className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[12px] leading-[16px]" style={font}>
          {(() => {
            const isAllProjects = selectedProject === "All Projects";
            const appsWithRules = Array.from(selectedAppIds).filter(appId =>
              Object.entries(ruleToggles).some(([key, val]) => key.startsWith(`${appId}-`) && val === true)
            );
            if (isAllProjects) {
              const projectCount = new Set(appsWithRules.map(id => MOCK_APPS.find(a => a.id === id)?.project).filter(Boolean)).size;
              return projectCount > 0 ? `${projectCount} project${projectCount !== 1 ? "s" : ""} in scope` : "No projects configured yet";
            }
            return appsWithRules.length > 0 ? `${appsWithRules.length} application${appsWithRules.length !== 1 ? "s" : ""} in scope` : "No applications configured yet";
          })()}
        </span>
        {appCount > 0 && (
          <div className="absolute top-full left-0 mt-2 z-20 opacity-0 group-hover/apps:opacity-100 transition-opacity duration-150 pointer-events-none">
            <div className="bg-[#152033] rounded-[4px] px-3 py-2 shadow-lg flex flex-col gap-1 min-w-max">
              {MOCK_APPS.filter(a => selectedAppIds.has(a.id)).map(a => (
                <span key={a.id} className="font-['Open_Sans',sans-serif] font-normal text-white text-[12px] leading-[16px]" style={font}>{a.name}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function PlatformComplianceScreen({ frameworks, selectedProject = "Apptrust Demos", savedConfigs, onSavedConfigsChange, appCounts, onAppCountsChange }: {
  frameworks: Framework[];
  selectedProject?: string;
  savedConfigs: Record<string, WizardConfig>;
  onSavedConfigsChange: (fn: (prev: Record<string, WizardConfig>) => Record<string, WizardConfig>) => void;
  appCounts: Record<string, number>;
  onAppCountsChange: (fn: (prev: Record<string, number>) => Record<string, number>) => void;
}) {
  const font = { fontVariationSettings: '"wdth" 100' };
  const [openFramework, setOpenFramework] = useState<Framework | null>(null);
  const breadcrumb = (
    <div className="flex flex-col gap-6 px-6 py-5">
      <div className="flex gap-2 items-center h-[22px]">
        <div className="flex items-center gap-1.5">
          <div className="bg-[#1d6ce2] size-5 rounded-full flex items-center justify-center shrink-0">
            <svg width="10" height="11" viewBox="0 0 10.6667 10.8736" fill="none"><path d={svgPathsPlatform.p30ca0800} fill="white" /></svg>
          </div>
          <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] tracking-[0.14px]" style={font}>{selectedProject}</span>
        </div>
        <ChevronDown size={14} color="#414857" className="-rotate-90" />
        <span className="font-['Open_Sans',sans-serif] font-normal text-[#414857] text-[14px] leading-[22px] tracking-[0.14px]" style={font}>AppTrust</span>
        <ChevronDown size={14} color="#414857" className="-rotate-90" />
        <span className="font-['Open_Sans',sans-serif] font-semibold text-[#415980] text-[14px] leading-[19px] tracking-[0.14px]" style={font}>Compliance</span>
      </div>
    </div>
  );

  if (frameworks.length === 0) {
    return (
      <div className="flex flex-col w-full h-full">
        {breadcrumb}
        <div className="flex flex-col items-center justify-center flex-1 gap-4 py-24">
          <NoEventsMedium />
          <div className="flex flex-col gap-2 items-center text-center max-w-[500px]">
            <p className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[18px] leading-[25px]" style={font}>{"Compliance Hasn't Been Set Up Yet"}</p>
            <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[16px] leading-[22px] text-center" style={font}>
              {"The Compliance Catalog hasn't been configured for your organization yet."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full">
      {breadcrumb}
      <div className="flex flex-col gap-2 px-6 pb-5">
        <h1 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[24px] leading-[33px] tracking-[0.24px]" style={font}>Compliance</h1>
        <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[16px] leading-[22px]" style={font}>Compliance frameworks for {selectedProject}. Open a framework to configure apps and Warning/Fail enforcement per rule.</p>
      </div>
      {/* Cards */}
      <div className="grid grid-cols-3 gap-5 pb-6 pt-4 px-6">
        {frameworks.map(fw => (
          <div key={fw.id} onClick={() => setOpenFramework(fw)}>
            <PlatformComplianceCard
              framework={fw}
              appCount={appCounts[fw.id] ?? 0}
              enabledRulesCount={Object.values(savedConfigs[fw.id]?.ruleToggles ?? {}).filter(Boolean).length}
              selectedAppIds={savedConfigs[fw.id]?.selectedApps ?? new Set()}
              ruleToggles={savedConfigs[fw.id]?.ruleToggles ?? {}}
              selectedProject={selectedProject}
            />
          </div>
        ))}
      </div>
      {openFramework && (
        <PlatformWizard
          key={openFramework.id}
          framework={openFramework}
          savedConfig={savedConfigs[openFramework.id]}
          selectedProject={selectedProject}
          onClose={(count, config) => {
            onSavedConfigsChange(prev => ({ ...prev, [openFramework!.id]: config! }));
            onAppCountsChange(prev => ({ ...prev, [openFramework!.id]: count }));
            setOpenFramework(null);
          }}
        />
      )}
    </div>
  );
}

// ─── Placeholder Screen ───────────────────────────────────────────────────────

function PlaceholderScreen({ title }: { title: string }) {
  return (
    <div className="flex flex-col items-start w-full px-6 py-10">
      <h1 className="font-['Open_Sans',sans-serif] font-semibold text-[#414857] text-[24px] leading-[33px] mb-4" style={{ fontVariationSettings: '"wdth" 100' }}>{title}</h1>
      <p className="font-['Open_Sans',sans-serif] font-normal text-[#5e6d81] text-[16px] leading-[22px] mb-8" style={{ fontVariationSettings: '"wdth" 100' }}>This screen has not been designed yet. Add it to the prototype to see it here.</p>
      <div className="border-2 border-dashed border-[#d2dfed] rounded-[8px] w-full min-h-[320px] flex items-center justify-center">
        <span className="font-['Open_Sans',sans-serif] font-normal text-[#999db4] text-[14px]" style={{ fontVariationSettings: '"wdth" 100' }}>Screen placeholder — drop your design here</span>
      </div>
    </div>
  );
}

// ─── Screen labels ────────────────────────────────────────────────────────────

const SCREEN_LABELS: Record<SidebarItemId, string> = {
  "all-projects": "All Projects Overview", "stages-lifecycle": "Stages & Lifecycle",
  "repositories": "Repositories", "user-management": "User Management",
  "user-authentication": "User Authentication", "security": "Security",
  "general-management": "General Management", "monitoring": "Monitoring",
  "topology": "Topology", "artifactory-settings": "Artifactory Settings",
  "apptrust-settings": "AppTrust Settings", "xray-settings": "Xray Settings",
  "curation-settings": "Curation Settings", "runtime": "Runtime",
  "connect": "Connect", "worker": "Worker",
};

const SUB_LABELS: Record<AppTrustSubItemId, string> = {
  "compliance-catalog": "Compliance Catalog", "integrations": "Integrations",
  "packages-settings": "Packages Settings", "repository-imp-exp": "Repository Imp/Exp",
  "repositories-layouts": "Repositories Layouts", "property-sets": "Property Sets",
  "maven-indexer": "Maven Indexer", "retention-policies": "Retention Policies",
};

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [activeItem, setActiveItem] = useState<SidebarItemId>("apptrust-settings");
  const [activeSubItem, setActiveSubItem] = useState<AppTrustSubItemId>("compliance-catalog");
  const [appTrustExpanded, setAppTrustExpanded] = useState(true);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState<"platform" | "administration">("administration");
  const [frameworks, setFrameworks] = useState<Framework[]>(INITIAL_FRAMEWORKS);
  const [policiesByRuleId, setPoliciesByRuleId] = useState<Record<string, RulePolicy[]>>({});
  const [activePlatformNav, setActivePlatformNav] = useState<"compliance" | "applications">("compliance");
  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [platformSavedConfigs, setPlatformSavedConfigs] = useState<Record<string, WizardConfig>>({});
  const [platformAppCounts, setPlatformAppCounts] = useState<Record<string, number>>({});

  const handleSidebarClick = (id: SidebarItemId) => {
    setActiveItem(id);
    if (id === "apptrust-settings") setAppTrustExpanded(prev => !prev);
    else setAppTrustExpanded(false);
  };

  const handleSubItemClick = (id: AppTrustSubItemId) => {
    setActiveSubItem(id);
    setActiveItem("apptrust-settings");
  };

  const createPolicy = (ruleId: string, policy: Omit<RulePolicy, "id">) => {
    setPoliciesByRuleId(current => ({
      ...current,
      [ruleId]: [...(current[ruleId] ?? []), { id: crypto.randomUUID(), ...policy }],
    }));
  };

  const updatePolicy = (ruleId: string, policyId: string, policy: Omit<RulePolicy, "id">) => {
    setPoliciesByRuleId(current => ({
      ...current,
      [ruleId]: (current[ruleId] ?? []).map(item => item.id === policyId ? { ...item, ...policy } : item),
    }));
  };

  const deletePolicy = (ruleId: string, policyId: string) => {
    setPoliciesByRuleId(current => ({
      ...current,
      [ruleId]: (current[ruleId] ?? []).filter(item => item.id !== policyId),
    }));
  };

  const renderMain = () => {
    if (activeTab === "platform") {
      if (activePlatformNav === "applications") return <ApplicationsScreen selectedProject={selectedProject} onProjectChange={setSelectedProject} />;
      return <PlatformComplianceScreen frameworks={frameworks.filter(fw => fw.published)} selectedProject={selectedProject} savedConfigs={platformSavedConfigs} onSavedConfigsChange={setPlatformSavedConfigs} appCounts={platformAppCounts} onAppCountsChange={setPlatformAppCounts} />;
    }
    if (activeItem === "apptrust-settings" && appTrustExpanded && activeSubItem === "compliance-catalog") {
      return (
        <ComplianceCatalog
          onBreadcrumbClick={handleSidebarClick}
          frameworks={frameworks}
          setFrameworks={setFrameworks}
          policiesByRuleId={policiesByRuleId}
          onCreatePolicy={createPolicy}
          onUpdatePolicy={updatePolicy}
          onDeletePolicy={deletePolicy}
          selectedProject={selectedProject}
        />
      );
    }
    if (activeItem === "apptrust-settings" && appTrustExpanded && activeSubItem !== "compliance-catalog") {
      return <PlaceholderScreen title={SUB_LABELS[activeSubItem]} />;
    }
    return <PlaceholderScreen title={SCREEN_LABELS[activeItem]} />;
  };

  return (
    <div className="bg-white flex items-start w-full h-full min-h-screen">
      {activeTab === "platform" ? (
        <PlatformSidebar
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(p => !p)}
          activePlatformNav={activePlatformNav}
          onApplicationsClick={() => setActivePlatformNav("applications")}
          onComplianceClick={() => setActivePlatformNav("compliance")}
          selectedProject={selectedProject}
          onProjectChange={setSelectedProject}
        />
      ) : (
        <Sidebar
          activeItem={activeItem}
          activeSubItem={activeSubItem}
          appTrustExpanded={appTrustExpanded}
          collapsed={sidebarCollapsed}
          selectedProject={selectedProject}
          onItemClick={handleSidebarClick}
          onSubItemClick={handleSubItemClick}
          onToggleCollapse={() => setSidebarCollapsed(p => !p)}
          onProjectChange={setSelectedProject}
        />
      )}
      <div className="flex flex-col flex-1 min-h-screen">
        <TopNavBar activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="flex-1 overflow-y-auto bg-white">{renderMain()}</div>
      </div>
    </div>
  );
}
