import Link from "next/link";

export const services = [
  {
    slug: "home-remodeling",
    title: "Home Remodeling",
    description:
      "Thoughtful improvements to existing homes, from individual rooms to more extensive interior alterations.",
    examples: ["Interior remodeling", "Layout changes", "Whole-home updates", "Finish carpentry"],
    prepare: "Share the areas you want to change, known conditions, priorities and any plans or reference material.",
    conceptImage: "/concepts/kitchen-remodel.webp",
    conceptAlt: "Illustrative 3D render of a practical Pacific Northwest kitchen remodel",
  },
  {
    slug: "additions-adus",
    title: "Additions & ADUs",
    description:
      "Residential additions and accessory dwelling projects designed to create useful, well-integrated space.",
    examples: ["Room additions", "ADUs", "Attached living space", "Garage-related additions"],
    prepare: "Bring property information, early sketches if available, desired uses and any known site constraints.",
    conceptImage: "/concepts/addition-structural.webp",
    conceptAlt: "Illustrative 3D render of a framed residential addition meeting an existing home",
  },
  {
    slug: "kitchens-bathrooms",
    title: "Kitchens & Bathrooms",
    description: "Functional updates to kitchens, bathrooms and other frequently used spaces.",
    examples: ["Bathroom remodeling", "Bathroom additions", "Kitchen remodeling", "Interior reconfiguration"],
    prepare: "Identify functional problems, must-have features, existing damage and finish preferences.",
    conceptImage: "/concepts/kitchen-remodel.webp",
    conceptAlt: "Illustrative 3D render of a completed kitchen remodeling concept",
  },
  {
    slug: "structural-repairs",
    title: "Structural Repairs & Alterations",
    description:
      "Selected structural alterations and repairs coordinated around the needs of the existing home.",
    examples: ["Bearing-wall changes", "Beam installation", "Framing repair", "Damage reconstruction"],
    prepare: "Share inspection reports, drawings, visible symptoms and prior repair information when available.",
    conceptImage: "/concepts/addition-structural.webp",
    conceptAlt: "Illustrative 3D render showing residential framing and a structural opening",
  },
  {
    slug: "storm-restoration",
    title: "Storm & Property-Damage Restoration",
    description:
      "Repair and reconstruction following tree strikes, storm damage and other significant property events.",
    examples: ["Tree-strike repair", "Storm-damage reconstruction", "Exterior damage repair"],
    prepare: "Document existing damage safely and bring any reports or claim information you choose to share.",
    conceptImage: "/concepts/addition-structural.webp",
    conceptAlt: "Illustrative 3D render of organized residential reconstruction framing",
  },
  {
    slug: "deck-exterior",
    title: "Deck, Stair & Exterior Repairs",
    description: "Selected exterior repairs that improve safety, function and long-term durability.",
    examples: ["Deck repair", "Stair repair", "Door alterations", "Exterior carpentry"],
    prepare: "Note safety concerns, drainage or moisture issues, access needs and the age of the affected area.",
    conceptImage: "/concepts/deck-concrete.webp",
    conceptAlt: "Illustrative 3D render of a rebuilt cedar deck and exterior stair",
  },
  {
    slug: "concrete-foundation",
    title: "Concrete, Slab & Foundation Repairs",
    description:
      "Selected concrete, slab and foundation work based on the condition and requirements of the property.",
    examples: ["Concrete repair", "Slab repair", "Selected foundation repairs"],
    prepare: "Bring any inspection or engineering documents and note visible movement, cracks or water concerns.",
    conceptImage: "/concepts/deck-concrete.webp",
    conceptAlt: "Illustrative 3D render of a deck stair meeting a concrete foundation and drainage detail",
  },
];

export const projectPlaceholders = [
  ["Residential Addition — Project Details Pending", "Additions & ADUs", "Before-and-after set from a residential addition or ADU"],
  ["Storm Repair — Project Details Pending", "Storm Restoration", "Before-and-after set from a storm or structural repair"],
  ["Bathroom Remodel — Project Details Pending", "Kitchens & Bathrooms", "Completed kitchen or bathroom remodel"],
  ["Structural Alteration — Project Details Pending", "Structural Repairs", "Structural framing, bearing-wall or beam project"],
  ["Deck Repair — Project Details Pending", "Decks & Exterior Work", "Completed deck or stair repair"],
  ["Foundation Repair — Project Details Pending", "Concrete & Foundation Work", "Concrete, slab or foundation repair"],
] as const;

const navItems = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/projects", "Projects"],
  ["/about", "About"],
  ["/process", "Our Process"],
  ["/licensing", "Licensing"],
  ["/contact", "Contact"],
] as const;

export function Wordmark() {
  return (
    <Link className="wordmark" href="/" aria-label="Gregory General Contractors home">
      <span>Gregory</span>
      <small>General Contractors</small>
    </Link>
  );
}

export function SiteHeader() {
  return (
    <>
      <div className="prototype-banner" role="note">Public prototype preview · Not an official company website · Forms and uploads are disabled</div>
      <header className="site-header">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="shell header-inner">
        <div>
          <Wordmark />
          <span className="editor-note wordmark-note">Temporary wordmark—owner approval required.</span>
        </div>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <div className="header-actions">
          <a className="call-link" href="tel:+15034908450">Call 503-490-8450</a>
          <Link className="button button-small" href="/estimate">Request an Estimate</Link>
        </div>
        <details className="mobile-menu">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([href, label]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/service-area">Service Area</Link>
            <Link href="/faq">FAQ</Link>
            <a href="tel:+15034908450">Call 503-490-8450</a>
            <Link className="button" href="/estimate">Request an Estimate</Link>
          </nav>
        </details>
      </div>
      </header>
    </>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <Wordmark />
          <p>Based in Wilsonville, Oregon.</p>
          <p>Registered in Oregon in 2003 and licensed with the Oregon Construction Contractors Board since 2004. Oregon CCB #161158.</p>
        </div>
        <div>
          <h2>Plan your project</h2>
          <Link href="/services">Services</Link>
          <Link href="/projects">Project placeholders</Link>
          <Link href="/process">Proposed process</Link>
          <Link href="/estimate">Request an estimate</Link>
        </div>
        <div>
          <h2>Verify & review</h2>
          <Link href="/licensing">Licensing information</Link>
          <Link href="/service-area">Service area</Link>
          <Link href="/faq">Owner-review FAQ</Link>
          <a href="https://search.ccb.state.or.us/search/" target="_blank" rel="noreferrer">Verify with Oregon CCB (opens new tab)</a>
        </div>
        <div>
          <h2>Draft policies</h2>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Website Terms</Link>
          <Link href="/photo-upload-privacy">Photo-upload privacy</Link>
          <Link href="/marketing-consent">Marketing consent</Link>
          <Link href="/accessibility">Accessibility statement</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>Draft website—owner review required before publication.</p>
        <p>© {new Date().getFullYear()} Gregory General Contractors, Inc.</p>
      </div>
    </footer>
  );
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader /><main id="main-content">{children}</main><SiteFooter /></>;
}

export function PageHero({ eyebrow, title, children, aside }: { eyebrow: string; title: string; children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <section className="page-hero blueprint-bg">
      <div className="shell page-hero-grid">
        <div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="lede">{children}</div></div>
        {aside && <aside className="page-hero-aside">{aside}</aside>}
      </div>
    </section>
  );
}

export function OwnerTag({ children = "Owner confirmation required" }: { children?: React.ReactNode }) {
  return <span className="status-tag">{children}</span>;
}

export function PhotoPlaceholder({ label, ratio = "landscape" }: { label: string; ratio?: "landscape" | "portrait" | "square" }) {
  return (
    <div className={`photo-placeholder ${ratio}`} role="img" aria-label={`Upload placeholder: ${label}`}>
      <span>Authentic photo needed</span>
      <strong>[UPLOAD: {label}]</strong>
      <small>Do not publish stock imagery as Gregory General Contractors’ work.</small>
    </div>
  );
}

export function ConceptRender({
  src,
  alt,
  uploadLabel,
  width = 1536,
  height = 1024,
  hero = false,
}: {
  src: string;
  alt: string;
  uploadLabel: string;
  width?: number;
  height?: number;
  hero?: boolean;
}) {
  const assetBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  return (
    <figure className={`concept-render${hero ? " concept-render-hero" : ""}`}>
      <img
        src={`${assetBasePath}${src}`}
        alt={alt}
        width={width}
        height={height}
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : "auto"}
      />
      <figcaption>
        <strong>Illustrative 3D render—not a Gregory General Contractors project.</strong>
        <span>Replace before publication: [UPLOAD: {uploadLabel}]</span>
      </figcaption>
    </figure>
  );
}

export function EstimateCTA({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "cta-panel compact" : "cta-band"}>
      <div className={compact ? "" : "shell cta-inner"}>
        <div><p className="eyebrow">Start with the basics</p><h2>Tell us about your project.</h2><p>Share your project type, location, approximate timeline and what you would like to change or repair.</p></div>
        <div className="button-row"><Link className="button" href="/estimate">Request an Estimate</Link><a className="button button-outline" href="tel:+15034908450">Call 503-490-8450</a></div>
      </div>
    </section>
  );
}

export function VerificationStrip() {
  const facts = ["Based in Wilsonville, Oregon", "Residential General Contractor", "Oregon CCB #161158", "First licensed in 2004"];
  return (
    <section className="verification-strip" aria-label="Verified business facts">
      <div className="shell verification-grid">
        {facts.map((fact) => <p key={fact}>{fact}</p>)}
        <p>License status last verified: <strong>[OWNER TO ENTER DATE]</strong></p>
        <a href="https://search.ccb.state.or.us/search/" target="_blank" rel="noreferrer">Verify with Oregon CCB <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function PolicyDraft({ title, intro, items }: { title: string; intro: string; items: string[] }) {
  return (
    <PageFrame>
      <PageHero eyebrow="Draft policy placeholder" title={title}><p>{intro}</p><OwnerTag>Draft—owner and legal review required before publication.</OwnerTag></PageHero>
      <section className="section"><div className="shell narrow"><div className="notice warning"><strong>This is not legal advice or a finished policy.</strong><p>No terms have been fabricated. The owner and legal reviewer must decide and supply the information below.</p></div><ul className="checklist">{items.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
    </PageFrame>
  );
}
