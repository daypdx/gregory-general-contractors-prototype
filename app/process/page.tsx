import type { Metadata } from "next";
import { EstimateCTA, OwnerTag, PageFrame, PageHero } from "../components";

export const metadata: Metadata = { title: "Our Proposed Process", description: "An owner-review draft of the Gregory General Contractors project process." };

const steps = [
  ["Initial conversation", "Tell us about the property, the work you are considering, your general timeline and any known constraints."],
  ["Site evaluation", "We review the existing conditions and discuss the intended scope."],
  ["Written scope & estimate", "The proposed work, assumptions and pricing structure are documented for review."],
  ["Planning & permits", "Required plans, permits, engineering and trade coordination are identified before construction."],
  ["Scheduling", "Project timing and site-access expectations are confirmed."],
  ["Construction", "The approved scope is completed with progress communication throughout the project."],
  ["Change orders", "Changes to the approved scope are documented and authorized before additional work proceeds."],
  ["Inspections & closeout", "Required inspections are coordinated and the finished work is reviewed during project closeout."],
];

export default function ProcessPage() {
  return <PageFrame>
    <PageHero eyebrow="Proposed process—owner confirmation required" title="Clear decisions at each step." image={{src: "/concepts/jobsite-planning-v2.webp", alt: "AI-generated illustrative image of residential contractors reviewing plans", uploadLabel: "Authentic Gregory planning, walkthrough or active-jobsite photograph"}}><p>This editable sequence describes a practical construction process, but it is not yet a promise of how every project is handled.</p><OwnerTag>Owner confirmation required for all steps</OwnerTag></PageHero>
    <section className="section"><div className="shell narrow"><ol className="process-list">{steps.map(([title, copy]) => <li key={title}><div><h2>{title}</h2><p>{copy}</p></div></li>)}</ol><div className="notice warning"><strong>Claims intentionally withheld</strong><p>No promise is made here about daily updates, fixed completion dates, in-house design, engineering or permit services. Those details require owner confirmation.</p></div></div></section>
    <EstimateCTA />
  </PageFrame>;
}
