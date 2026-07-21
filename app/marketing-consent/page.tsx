import type { Metadata } from "next";
import { PolicyDraft } from "../components";

export const metadata: Metadata = { title: "Draft Marketing Consent", description: "Marketing consent placeholder requiring owner and legal review." };
export default function MarketingConsentPage() { return <PolicyDraft title="Marketing Consent" intro="The estimate form does not enroll visitors in marketing. Any future marketing consent must be separate, specific and reviewed." items={["Decide whether the company will send marketing messages", "Separate project-contact consent from marketing consent", "Identify channels such as email or text", "Define opt-out instructions", "Record and retain proof of consent appropriately", "Review applicable calling, texting and email requirements", "Do not pre-check an optional marketing box"]} />; }
