# Gregory General Contractors Website Prototype

A polished, mobile-first website prototype for Gregory General Contractors, Inc., a residential general contractor based in Wilsonville, Oregon.

## Prototype status

This repository is a shareable prototype. Its GitHub Pages link is a free public review environment, **not an official company website**, and it is not connected to a company domain.

- The estimate form is deliberately disabled and sends no information.
- Photo uploads are disabled.
- Service categories, service area, owner biography and process details require owner approval.
- Oregon CCB status, bond and insurance information must be rechecked before publication.
- Project cards remain authentic-photo and owner-information placeholders.
- The architectural images are clearly disclosed illustrative 3D renders, not Gregory General Contractors project photography.

## Local preview

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Verification

```bash
npm run build
npm test
```

## Site pages

- Home
- Services
- Projects
- About
- Our Process
- Licensing & Consumer Information
- Service Area
- FAQ
- Request an Estimate
- Contact
- Privacy Policy
- Website Terms
- Photo-Upload Privacy & Retention
- Marketing Consent
- Accessibility Statement

## Visual assets

The site includes four original AI-generated 3D architectural renders under `public/concepts/`. Each is visibly labeled as an illustrative render and should be replaced with authentic, owner-approved project photography before a public launch.

The social preview image is stored at `public/og.png`.

## Technology

- Next.js-compatible App Router through vinext
- React and TypeScript
- Tailwind CSS foundation with a custom responsive design system
- Cloudflare Worker-compatible build output

## Publication boundary

An official launch, company-domain connection, live form delivery and access changes remain outside this prototype. Complete the owner, licensing, photography, privacy, security and legal review checklist before any official public launch.

## Shareable prototype preview

GitHub Pages publishes a static, clearly labeled prototype from this repository. The workflow does not connect a company domain, activate forms or create an official launch.

Preview URL: `https://daypdx.github.io/gregory-general-contractors-prototype/`
