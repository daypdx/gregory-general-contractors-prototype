import type { Metadata } from "next";
import { PageFrame, PageHero } from "../components";

export const metadata: Metadata = { title: "Licensing & Consumer Information", description: "Oregon CCB #161158 verification details and consumer notes for Gregory General Contractors." };

const facts = [["Legal business name", "Gregory General Contractors, Inc."], ["Oregon CCB", "161158"], ["Endorsement", "Residential General Contractor"], ["First licensed", "August 19, 2004"], ["Status", "[RECHECK BEFORE PUBLICATION]"], ["Last verified", "[OWNER TO ENTER DATE]"]];

export default function LicensingPage() {
  return <PageFrame>
    <PageHero eyebrow="Licensing & consumer information" title="Verify the current record before relying on it."><p>License, bond and insurance information can change. Confirm the current record directly through the Oregon Construction Contractors Board before relying on it.</p><a className="button" href="https://search.ccb.state.or.us/search/" target="_blank" rel="noreferrer">Verify with Oregon CCB (opens new tab)</a></PageHero>
    <section className="section"><div className="shell"><div className="facts-grid">{facts.map(([term, value]) => <dl className="fact-card" key={term}><dt>{term}</dt><dd>{value}</dd></dl>)}</div></div></section>
    <section className="section section-alt"><div className="shell split-grid"><div><p className="eyebrow">Record reviewed July 21, 2026</p><h2>Bond and coverage snapshot.</h2><ul><li>$25,000 residential surety bond</li><li>$1,000,000 liability-insurance limit</li><li>Employee workers’ compensation coverage</li></ul><p>These figures must be rechecked before publication and shown with a verification date. Insurer names and expiration dates are not used as prominent marketing claims.</p></div><div className="notice warning"><strong>What licensing does not mean</strong><p>Licensing does not guarantee workmanship or the result of a project. No BuildZoom score is presented as a government rating, and no BBB accreditation or badge is claimed.</p></div></div></section>
    <section className="section"><div className="shell split-grid"><div><p className="eyebrow">Lead-paint limits</p><h2>No lead-safe claim.</h2><p>The CCB record reviewed July 21, 2026 displayed “Certified Lead-Based Paint Renovation contractor: No.” Lead-paint inspection, abatement, lead-safe certification and specialized pre-1978-home renovation are not advertised.</p></div><div><p className="eyebrow">Commercial-work limits</p><h2>Residential endorsement only.</h2><p>The verified endorsement is Residential General Contractor. Broad commercial contracting and light-commercial work are withheld until the owner confirms the legal scope, bond requirements and accepted project types.</p></div></div></section>
  </PageFrame>;
}
