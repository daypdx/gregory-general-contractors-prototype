import type { Metadata } from "next";
import { PolicyDraft } from "../components";

export const metadata: Metadata = { title: "Draft Photo-Upload Privacy & Retention", description: "Photo-upload privacy and retention placeholder requiring owner and legal review." };
export default function PhotoPrivacyPage() { return <PolicyDraft title="Photo-Upload Privacy & Retention" intro="Photo upload is disabled. This policy must be completed before the estimate form accepts any file." items={["Define accepted file types, size limits and prohibited content", "Explain the purpose for collecting property and damage photos", "Identify who can access uploaded files", "Choose secure storage and transfer controls", "Set deletion and retention periods", "Explain how customers request deletion", "Prohibit publishing customer photos without separate permission", "Test secure upload handling and failure states"]} />; }
