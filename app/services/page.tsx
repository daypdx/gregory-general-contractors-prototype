import type { Metadata } from "next";
import Link from "next/link";
import { ConceptRender, OwnerTag, PageFrame, PageHero, services } from "../components";

export const metadata: Metadata = { title: "Residential Services", description: "Owner-review draft service categories for Gregory General Contractors in Wilsonville, Oregon." };

export default function ServicesPage() {
  return <PageFrame>
    <PageHero eyebrow="Services" title="Residential work, defined clearly." image={{src: "/concepts/pnw-home-renovation.webp", alt: "Illustrative 3D render of a renovated Pacific Northwest home", uploadLabel: "Wide completed-project photograph representing Gregory's residential work"}}><p>These evidence-supported service categories are ready for owner review. Project scope, availability and service location are confirmed during the initial conversation.</p><OwnerTag>Every service requires owner confirmation.</OwnerTag></PageHero>
    <section className="section"><div className="shell">
      {services.map((service) => <article id={service.slug} className="service-detail" key={service.slug}><div className="service-detail-grid"><ConceptRender src={service.conceptImage} alt={service.conceptAlt} uploadLabel={`Authentic photograph of a completed ${service.title.toLowerCase()} project`} /><div className="service-copy"><OwnerTag /><p className="eyebrow">Residential service draft</p><h2>{service.title}</h2><p className="lede">{service.description}</p><h3>Typical project examples</h3><ul>{service.examples.map((example) => <li key={example}>{example}</li>)}</ul><h3>What the initial conversation covers</h3><p>The property, intended scope, general timeline, known conditions, service location and whether the project appears to fit the company’s current work.</p><h3>What to prepare</h3><p>{service.prepare}</p><div className="related-box"><strong>Related project proof is pending.</strong><p>Authentic before, in-progress and completed photographs, general location, completion year, scope, challenge, solution, materials and customer permission are required.</p></div><Link className="button" href="/estimate">Request an Estimate</Link></div></div></article>)}
    </div></section>
    <section className="section section-alt"><div className="shell narrow"><p className="eyebrow">Unpublished owner-review list</p><h2>Services withheld until confirmed</h2><div className="notice warning"><p>Painting, drywall, roofing, accessibility improvements, home repairs and maintenance, light-commercial alterations and commercial tenant improvements are not presented as active services.</p><p>Specialized remediation, lead-paint work, waterproofing, seismic engineering, design services and environmental testing are also withheld pending direct verification.</p></div></div></section>
  </PageFrame>;
}
