import { SiteLayout } from "../components/SiteChrome";
import { PageBanner } from "../components/ReferenceSections";

function ContactIcon({ kind }: { kind: "phone" | "email" | "address" }) {
  return <span className="contact-page-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {kind === "phone" ? <><path d="M7 3 3 5c-1 7 9 17 16 16l2-4-5-3-2 3c-3-1-6-4-7-7l3-2Z"/><path d="M15 3a7 7 0 0 1 6 6M15 7a3 3 0 0 1 2 2"/></> : kind === "email" ? <><path d="m2 9 10-7 10 7v13H2Z"/><path d="m2 9 10 8L22 9M2 22l7-7m6 0 7 7"/></> : <><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></>}
  </svg></span>;
}

export default function ContactPage() {
  return <SiteLayout><main>
    <PageBanner title="Contact Us" image="/vanlock/blog-deadlock.webp"/>
    <section className="contact-page-section">
      <div className="contact-page-grid">
        <div className="contact-page-copy">
          <p className="contact-page-kicker">CONTACT US</p>
          <h2>Get in Touch With Us</h2>
          <p className="contact-page-intro">Have questions or need a quote? Our team is ready to assist you with any inquiries related to our services. Whether it’s a new project or general support, feel free to reach out. We’re just a call or message away!</p>
          <div className="contact-page-detail"><ContactIcon kind="phone"/><div><h3>Phone No</h3><a href="tel:+447446898025">07446898025</a></div></div>
          <div className="contact-page-detail"><ContactIcon kind="email"/><div><h3>Email</h3><a href="mailto:info@vanlocksecurity.co.uk">info@vanlocksecurity.co.uk</a></div></div>
          <div className="contact-page-detail"><ContactIcon kind="address"/><div><h3>Address</h3><p>Van lock security 594 green lane , Ilford</p></div></div>
        </div>
        <form className="contact-page-form" action="mailto:info@vanlocksecurity.co.uk" method="post" encType="text/plain">
          <h2>Message us</h2>
          <div className="contact-page-fields">
            <input className="contact-page-name" required name="name" autoComplete="name" aria-label="Name" placeholder="Name"/>
            <input required name="email" type="email" autoComplete="email" aria-label="Email" placeholder="Email"/>
            <input name="phone" type="tel" autoComplete="tel" aria-label="Phone" placeholder="Phone"/>
            <textarea required name="message" aria-label="Message" placeholder="Message"/>
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
    <section className="contact-page-map" aria-label="Our location: 594 Green Lane, Ilford">
      <iframe title="VanLock Security — 594 Green Lane, Ilford" src="https://maps.google.com/maps?q=594%20Green%20Lane%2C%20Ilford%2C%20UK&z=15&output=embed" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" />
      <a className="contact-map-link" href="https://www.google.com/maps/search/?api=1&query=594%20Green%20Lane%2C%20Ilford%2C%20UK" target="_blank" rel="noopener noreferrer">Open in Maps <span aria-hidden="true">↗</span></a>
    </section>
  </main></SiteLayout>;
}
