import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero } from "../components";
import ProjectsFilter from "./ProjectsFilter";

export const metadata: Metadata = { title: "Project Portfolio Draft", description: "Authentic-project placeholders and case-study requirements for Gregory General Contractors." };

const caseFields = ["Project title", "General location only", "Year completed", "Project category", "Existing condition", "Customer’s goal", "Scope performed by Gregory General Contractors", "Permits or engineering coordination", "Construction challenge", "Solution", "Materials", "Before photos", "Construction photos", "Finished photos", "Customer-approved testimonial", "Related services", "Customer permission status"];

export default function ProjectsPage() {
  return <PageFrame>
    <PageHero eyebrow="Project portfolio draft" title="Real work. Real details. No invented proof."><p>No dependable public portfolio of authentic Gregory General Contractors photography was verified. Every card below is an upload and information placeholder, not a claim of completed work.</p></PageHero>
    <section className="section"><div className="shell"><ProjectsFilter /></div></section>
    <section id="case-study-template" className="section section-alt"><div className="shell split-grid"><div><p className="eyebrow">Reusable case-study template</p><h2>What every published project needs.</h2><p>Permit-holder names, exact residential addresses and unverified research leads must not be published. Any permit information used as a lead needs confirmation from the owner and issuing jurisdiction.</p><Link className="button" href="/estimate">Discuss Your Project</Link></div><ul className="checklist">{caseFields.map((field) => <li key={field}>{field}</li>)}</ul></div></section>
  </PageFrame>;
}
