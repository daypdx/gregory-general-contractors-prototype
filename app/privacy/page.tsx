import type { Metadata } from "next";
import { PolicyDraft } from "../components";

export const metadata: Metadata = { title: "Draft Privacy Policy", description: "Privacy policy placeholder requiring owner and legal review." };
export default function PrivacyPage() { return <PolicyDraft title="Privacy Policy" intro="This page identifies the decisions required for a finished privacy policy. It does not currently authorize data collection." items={["Identify what contact information the active form will collect", "Explain why project photos may be uploaded", "Name who receives submissions", "Set retention periods for submissions and photos", "Disclose whether analytics are used", "Identify service providers that may receive information", "Provide a deletion-request method and privacy contact", "Approve consent language and applicable privacy rights"]} />; }
