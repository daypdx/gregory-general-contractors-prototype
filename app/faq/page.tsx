import type { Metadata } from "next";
import { EstimateCTA, OwnerTag, PageFrame, PageHero } from "../components";

export const metadata: Metadata = { title: "Frequently Asked Questions—Owner Review", description: "Draft customer questions awaiting owner-approved answers from Gregory General Contractors." };

const questions = ["What types of projects do you accept?", "What areas do you serve?", "Is there a minimum project size?", "Are estimates free or paid?", "Do you handle permits?", "When is engineering required?", "Do you work with architects and designers?", "Do you use subcontractors?", "How are project schedules established?", "How are change orders approved?", "What payment schedule is used?", "What warranties are provided?", "Can customers remain in the home during construction?", "Do you perform insurance-restoration work?", "Do you work on homes built before 1978?", "Do you accept commercial work?", "Do you work in Washington?", "How far in advance should a customer contact you?", "What should a customer prepare before the first conversation?"];

export default function FAQPage() {
  return <PageFrame>
    <PageHero eyebrow="Frequently asked questions" title="Good questions. Owner-approved answers still needed."><p>No answers have been invented. Each item below remains visibly marked for owner response before publication.</p><OwnerTag>Owner response required for every answer</OwnerTag></PageHero>
    <section className="section"><div className="shell narrow faq-list">{questions.map((question) => <details key={question}><summary>{question}</summary><div className="faq-answer"><OwnerTag>Owner response required</OwnerTag><p>Supply a clear, factual answer and identify any project-specific exceptions before this item is published.</p></div></details>)}</div></section>
    <EstimateCTA />
  </PageFrame>;
}
