import type { Metadata } from "next";
import Link from "next/link";
import { PageFrame, PageHero } from "../components";

export const metadata: Metadata = { title: "Request an Estimate—Draft Form", description: "A non-connected draft estimate-request form for Gregory General Contractors." };

export default function EstimatePage() {
  return <PageFrame>
    <PageHero eyebrow="Request an estimate" title="Start with the project basics." image={{src: "/concepts/homeowner-consultation-v2.webp", alt: "AI-generated illustrative image of an in-home renovation planning conversation", uploadLabel: "Authentic Gregory estimate conversation, site walk or planning photograph"}}><p>Share your project type, location, approximate timeline and what you would like to change or repair.</p></PageHero>
    <section className="section"><div className="shell narrow">
      <div className="form-status" role="status"><strong>Draft form—not connected. Owner configuration required.</strong><p>This preview does not send, upload or save contact information. The submit button remains disabled until secure delivery and privacy requirements are configured and tested.</p></div>
      <form aria-describedby="draft-form-note">
        <p id="draft-form-note" className="sr-only">This form is a non-connected draft and cannot be submitted.</p>
        <div className="form-grid">
          <div className="field"><label htmlFor="first-name">First name</label><input id="first-name" name="first-name" autoComplete="given-name" /></div>
          <div className="field"><label htmlFor="last-name">Last name</label><input id="last-name" name="last-name" autoComplete="family-name" /></div>
          <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" /></div>
          <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" /></div>
          <div className="field"><label htmlFor="preferred-contact">Preferred contact method</label><select id="preferred-contact" name="preferred-contact" defaultValue=""><option value="" disabled>Select one</option><option>Phone</option><option>Email</option><option>Text message</option></select></div>
          <div className="field"><label htmlFor="project-location">Project address or general city/ZIP</label><input id="project-location" name="project-location" autoComplete="postal-code" /></div>
          <div className="field"><label htmlFor="project-type">Project type</label><select id="project-type" name="project-type" defaultValue=""><option value="" disabled>Select a draft category</option><option>Home remodeling</option><option>Addition or ADU</option><option>Kitchen or bathroom</option><option>Structural repair or alteration</option><option>Storm or property-damage restoration</option><option>Deck, stair or exterior repair</option><option>Concrete, slab or foundation repair</option><option>Other / not sure</option></select></div>
          <div className="field"><label htmlFor="property-type">Property type</label><input id="property-type" name="property-type" placeholder="For example: single-family home" /></div>
          <div className="field full-width"><label htmlFor="description">Short project description</label><textarea id="description" name="description" /></div>
          <div className="field full-width"><label htmlFor="condition">Existing damage or condition</label><textarea id="condition" name="condition" /></div>
          <div className="field"><label htmlFor="timeline">Desired timeline</label><input id="timeline" name="timeline" placeholder="Approximate; no schedule promise" /></div>
          <div className="field"><label htmlFor="budget">Approximate budget range</label><select id="budget" name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Owner to confirm useful ranges</option><option>Not sure yet</option><option>Prefer to discuss</option></select></div>
          <fieldset className="field"><legend>Do plans already exist?</legend><div className="choice-row"><label><input type="radio" name="plans" value="yes" /> Yes</label><label><input type="radio" name="plans" value="no" /> No</label><label><input type="radio" name="plans" value="partial" /> In progress</label></div></fieldset>
          <fieldset className="field"><legend>Is an insurance claim involved?</legend><div className="choice-row"><label><input type="radio" name="claim" value="yes" /> Yes</label><label><input type="radio" name="claim" value="no" /> No</label><label><input type="radio" name="claim" value="unsure" /> Not sure</label></div></fieldset>
          <div className="field full-width"><label htmlFor="photos">Project photos</label><input id="photos" name="photos" type="file" multiple accept="image/*" disabled /><small>Upload disabled. Secure handling and retention rules must be configured before activation. See the <Link className="text-link" href="/photo-upload-privacy">draft photo-upload privacy page</Link>.</small></div>
          <div className="field full-width"><label htmlFor="contact-time">Best time to contact</label><input id="contact-time" name="contact-time" /></div>
          <label className="consent full-width"><input type="checkbox" name="consent" /><span>I consent to being contacted about this project and acknowledge the <Link className="text-link" href="/privacy">draft Privacy Policy</Link>. <strong>Consent wording requires owner and legal review.</strong></span></label>
        </div>
        <div className="draft-submit"><button className="button" type="button" disabled>Request an Estimate</button></div>
      </form>
      <div className="notice warning" style={{marginTop: 34}}><strong>Required before activation</strong><ul><li>Owner-approved recipient email</li><li>Spam protection</li><li>Secure handling of uploads</li><li>Approved privacy notice</li><li>Real error and success states</li><li>Test submission and delivery verification</li></ul></div>
    </div></section>
  </PageFrame>;
}
