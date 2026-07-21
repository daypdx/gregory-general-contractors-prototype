import type { Metadata } from "next";
import { PolicyDraft } from "../components";

export const metadata: Metadata = { title: "Draft Website Terms", description: "Website terms placeholder requiring owner and legal review." };
export default function TermsPage() { return <PolicyDraft title="Website Terms" intro="No contract terms, warranty language or legal limitations have been invented for this draft." items={["Define the informational purpose of the website", "Clarify that website content is not a construction contract or estimate", "Set acceptable-use and intellectual-property terms", "Decide how project photographs may be used", "Review external-link and licensing-verification language", "Define jurisdiction, dispute and update terms with legal counsel", "Confirm contact information for legal notices"]} />; }
