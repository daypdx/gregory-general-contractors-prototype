import type { Metadata } from "next";
import { EstimateCTA, OwnerTag, PageFrame, PageHero } from "../components";

export const metadata: Metadata = { title: "Service Area", description: "Owner-confirmed Oregon service-area placeholder for Gregory General Contractors, based in Wilsonville." };

const questions = ["Primary cities", "Counties served", "Maximum travel distance", "Oregon-only boundaries", "Minimum or preferred project size"];

export default function ServiceAreaPage() {
  return <PageFrame>
    <PageHero eyebrow="Service area" title="Based in Wilsonville. Oregon communities to be confirmed."><p>Based in Wilsonville and serving owner-confirmed communities in Oregon.</p><OwnerTag>Do not publish a city list until the owner confirms it.</OwnerTag></PageHero>
    <section className="section"><div className="shell split-grid"><div className="map-placeholder" role="img" aria-label="Editable Oregon service-area map placeholder"><div><strong>Editable service-area map</strong><p>[OWNER: Confirm cities, counties and maximum travel distance before adding boundaries.]</p></div></div><div><p className="eyebrow">Owner review</p><h2>Define the actual working area.</h2><ul className="checklist">{questions.map((question) => <li key={question}>Confirm: {question}</li>)}</ul><div className="notice warning"><p>Washington communities are not listed. The company’s former Washington registration expired in 2022; no Washington licensing or service coverage is advertised without current verification.</p></div></div></div></section>
    <EstimateCTA />
  </PageFrame>;
}
