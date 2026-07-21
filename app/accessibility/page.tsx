import type { Metadata } from "next";
import { PolicyDraft } from "../components";

export const metadata: Metadata = { title: "Draft Accessibility Statement", description: "Accessibility statement placeholder requiring owner review." };
export default function AccessibilityPage() { return <PolicyDraft title="Accessibility Statement" intro="The site draft is designed for keyboard access, clear focus, readable contrast, semantic structure and reduced motion. A public statement still requires ownership and a contact path." items={["Name the accessibility standard or goal the owner will support", "Provide an accessibility feedback contact", "Define response and remediation procedures", "Test keyboard navigation and focus order", "Review color contrast and text scaling", "Verify form labels, errors and instructions", "Verify meaningful image alt text after authentic photos are added", "Record any known limitations and update the statement"]} />; }
