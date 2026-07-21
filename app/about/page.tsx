import type { Metadata } from "next";
import { OwnerTag, PageFrame, PageHero, PhotoPlaceholder } from "../components";

export const metadata: Metadata = { title: "About", description: "Verified company-record details and owner-review biography placeholders for Gregory General Contractors." };

const ownerSections = ["Juan’s owner-approved biography and public name", "Why the company was started", "Current team names and roles", "Types of projects the company values", "Construction philosophy", "Communication approach", "Experience coordinating permits and trades", "Confirmed Oregon service area", "Company milestones"];

export default function AboutPage() {
  return <PageFrame>
    <PageHero eyebrow="About" title="A company profile built on records, not assumptions."><p>Gregory General Contractors, Inc. is a residential general contractor based in Wilsonville, Oregon. The corporation was registered in Oregon in 2003 and first received its current Oregon CCB license in 2004.</p></PageHero>
    <section className="section"><div className="shell split-grid"><PhotoPlaceholder label="Professional portrait of Juan Ramirez Estrada at a jobsite" ratio="portrait" /><div><p className="eyebrow">Owner profile</p><h2>Name and biography pending approval.</h2><OwnerTag>Confirm public name: Juan Ramirez Estrada or Juan Manuel Ramirez Estrada</OwnerTag><OwnerTag>Confirm title: Owner, President, General Contractor, Project Manager or another approved title</OwnerTag><p>No childhood, immigration, education, apprenticeship, family or personal history has been invented. The name “Gregory” is not presented as an owner surname.</p></div></div></section>
    <section className="section section-alt"><div className="shell"><p className="eyebrow">Owner-editable company story</p><h2>Information needed to complete this page.</h2><div className="card-grid">{ownerSections.map((title) => <article className="content-card" key={title}><div className="card-body"><OwnerTag>Owner content required</OwnerTag><h3>{title}</h3><p>Use specific, factual, owner-approved copy here before publication.</p></div></article>)}</div></div></section>
    <section className="section"><div className="shell split-grid"><PhotoPlaceholder label="Current Gregory crew photograph with everyone’s permission" /><PhotoPlaceholder label="Company vehicle, jobsite sign or branded equipment" /></div></section>
  </PageFrame>;
}
