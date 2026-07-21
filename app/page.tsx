import type { Metadata } from "next";
import Link from "next/link";
import { ConceptRender, EstimateCTA, OwnerTag, PageFrame, SectionHeading, VerificationStrip, projectPlaceholders, services } from "./components";

export const metadata: Metadata = {
  title: { absolute: "Gregory General Contractors | Wilsonville, Oregon Residential Contractor" },
  description: "Gregory General Contractors, Inc. is a Wilsonville-based residential general contractor for owner-confirmed remodeling, addition, repair and restoration projects. Oregon CCB #161158.",
};

const process = ["Initial conversation", "Site evaluation", "Written scope and estimate", "Planning and permitting", "Scheduling and construction", "Change-order approval", "Inspections where required", "Final walkthrough and closeout"];

export default function Home() {
  return (
    <PageFrame>
      <section className="home-hero blueprint-bg">
        <div className="shell hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Wilsonville, Oregon · Residential General Contractor</p>
            <h1>Built right. Repaired with care.</h1>
            <p className="lede">Residential remodeling, additions, structural repairs and restoration from an established Wilsonville contractor licensed with the Oregon CCB since 2004.</p>
            <div className="button-row"><Link className="button" href="/estimate">Request an Estimate</Link><Link className="button button-outline" href="/services">Explore Our Services</Link></div>
            <p className="trust-line">Oregon CCB #161158</p>
          </div>
          <div className="hero-photo"><ConceptRender src="/concepts/pnw-home-renovation.webp" alt="Illustrative 3D render of a renovated Pacific Northwest home with a small addition" uploadLabel="Wide landscape photograph of a completed Gregory residential project for the homepage hero" width={1659} height={948} hero /></div>
        </div>
      </section>
      <VerificationStrip />

      <section className="section">
        <div className="shell">
          <SectionHeading eyebrow="Draft service structure" title="Practical residential construction work." copy="Each service remains marked for owner confirmation. Project scope, availability and service location are confirmed during the initial conversation." />
          <div className="card-grid services">
            {services.map((service) => (
              <article className="service-card" key={service.slug}>
                <ConceptRender src={service.conceptImage} alt={service.conceptAlt} uploadLabel={`Authentic ${service.title.toLowerCase()} project photograph`} />
                <div className="card-body"><OwnerTag /><h3>{service.title}</h3><p>{service.description}</p><div className="button-row"><Link className="text-link" href={`/services#${service.slug}`}>Learn More</Link><Link className="text-link" href="/estimate">Discuss Your Project</Link></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <SectionHeading eyebrow="Portfolio draft" title="Project proof belongs here." copy="Illustrative concepts now show the intended portfolio experience while authentic, permissioned Gregory project photography is gathered. No customer names, locations, prices or outcomes have been invented." />
          <div className="project-grid">
            {projectPlaceholders.slice(0, 3).map(([title, category, upload, image, alt]) => <article className="project-card" key={title}><ConceptRender src={image} alt={alt} uploadLabel={upload} /><div className="card-body"><OwnerTag>Project details pending</OwnerTag><p className="kicker">{category}</p><h2>{title}</h2><Link className="text-link" href="/projects">View project requirements</Link></div></article>)}
          </div>
          <div className="button-row" style={{marginTop: 30}}><Link className="button button-outline" href="/projects">Explore Draft Project Portfolio</Link></div>
        </div>
      </section>

      <section className="section">
        <div className="shell split-grid">
          <div><SectionHeading eyebrow="About Gregory General Contractors" title="Established records. Plainspoken facts." /><p>Gregory General Contractors, Inc. is a Wilsonville-based residential general contractor. The company was registered in Oregon in 2003 and has held Oregon CCB licensing since 2004. Its documented project history includes residential remodeling, additions, structural repairs and restoration work.</p><OwnerTag>Owner biography and company story pending owner approval.</OwnerTag><p><Link className="text-link" href="/about">Read the draft company profile</Link></p></div>
          <ConceptRender src="/concepts/jobsite-planning-v2.webp" alt="AI-generated illustrative image of two residential construction professionals reviewing plans at a framed addition" uploadLabel="Professional owner or crew photograph at an active Gregory jobsite" />
        </div>
      </section>

      <section className="section section-alt">
        <div className="shell">
          <SectionHeading eyebrow="Proposed process—owner confirmation required" title="A clear path from first conversation to closeout." />
          <ol className="process-list">{process.map((step) => <li key={step}><div><h2>{step}</h2><p>Details are documented on the proposed process page and require owner confirmation before publication.</p></div></li>)}</ol>
          <Link className="button button-outline" href="/process">Review the Proposed Process</Link>
        </div>
      </section>

      <section className="section blueprint-bg">
        <div className="shell split-grid" style={{color: "white"}}>
          <div><p className="eyebrow" style={{color: "#efad8e"}}>Licensing & consumer information</p><h2 style={{color: "white"}}>Verify before you build.</h2><p>Gregory General Contractors’ Oregon CCB number is 161158. Confirm current license, bond and insurance information directly through the Oregon Construction Contractors Board.</p><div className="button-row"><a className="button" href="https://search.ccb.state.or.us/search/" target="_blank" rel="noreferrer">Verify CCB License <span className="sr-only">(opens new tab)</span></a><Link className="button button-outline" style={{color: "white"}} href="/licensing">Read Consumer Information</Link></div></div>
          <div className="page-hero-aside"><h2>Record details</h2><p>Oregon CCB #161158</p><p>Endorsement: Residential General Contractor</p><p>First licensed: August 19, 2004</p><p><strong>Status: [RECHECK BEFORE PUBLICATION]</strong></p></div>
        </div>
      </section>
      <EstimateCTA />
    </PageFrame>
  );
}
