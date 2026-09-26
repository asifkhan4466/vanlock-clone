import Link from "next/link";
import { SiteHeader } from "../components/SiteChrome";
import { services } from "../site-data";

const reviews = [
  { quote: "VanLock transformed the way we secure our vans. Their team was prompt, professional, and the system works flawlessly. Highly recommended.", name: "Daniel Morris", place: "West Yorkshire", image: "/vanlock/testimonial-daniel.jpg" },
  { quote: "Reliable service from start to finish. The GPS tracking and smart lock system gave us peace of mind. VanLock truly understands van owners’ needs.", name: "Karen Doyle", place: "Surrey", image: "/vanlock/testimonial-karen.jpg" },
  { quote: "Excellent experience with VanLock. Installation was quick, and support is always responsive. Our vans feel safer than ever.", name: "Stephen Patel", place: "Greater Manchester", image: "/vanlock/testimonial-stephen.jpg" },
];

export default function AboutPage() {
return (
    <>
    <SiteHeader />
    <main className="about-page">

      <section className="about-banner">
        <div className="about-banner-image" />
        <h1>About Us</h1>
      </section>

      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-image">
            <img src="/vanlock/hero-background.webp" alt="VanLock security specialist beside a van" />
          </div>
          <div className="about-story-copy">
            <p className="about-kicker">ABOUT US</p>
            <h2>Secure, Track &amp; Protect – Bring It All Together</h2>
            <p>
              A permanent solution to protection requires a combination of strategies, which include,
              among others, innovative locking systems, powerful hardware, intelligent monitoring,
              and frequent maintenance. Van Lock Security uses the latest technology to protect
              every vehicle with assurance, and we learn from real-world threats.
            </p>
            <div className="about-services-checklists">
              <ul>
                <li>Pre-Construction</li>
                <li>Design Services</li>
                <li>Residential</li>
              </ul>
              <ul>
                <li>Commercial</li>
                <li>Industrial</li>
                <li>Outdoor Living</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial section">
        <div className="container">
          <div className="testimonial-heading">
            <p className="eyebrow">TESTIMONIALS</p>
            <h2>Why Van Owners Trust VanLock</h2>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.name}>
                <span className="review-stars" aria-label="5 out of 5 stars">★★★★★</span>
                <blockquote>{review.quote}</blockquote>
                <div className="review-person">
                  <img className="avatar" src={review.image} alt="" />
                  <div><b>{review.name}</b><small>{review.place}</small></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="difference-section section about-team-section">
        <div className="difference-layout">
          <div className="difference-copy">
            <p className="about-kicker">WHY CHOOSE US?</p>
            <h2>Secure, Track &amp; Protect – Bring It All Together</h2>
            <article>
              <h3>Our Mission</h3>
              <p>VanLock is a company that exclusively works on van security. We make solutions that are exact, reliable, and new. Our solutions work with various vans, so you may protect either one van or your whole fleet. We make sure your vehicle is safe 24/7 using the latest technology and parts that are made for professionals.</p>
            </article>
            <article>
              <h3>Our Vision</h3>
              <p>We know plenty about the demands of mobile businesses, which sets us apart. We work directly with van owners to come up with smart, simple methods that fit right in with their everyday duties. Security Van Lock is the company you can trust for mobile security, from installation to continuous support.</p>
            </article>
          </div>
          <img src="https://vanlocksecurity.co.uk/wp-content/uploads/2025/05/assets_task_01jvph90eyfqj8b6s4bk9yfzvn_1747734358_img_0-1024x683.webp" alt="VanLock security team" />
        </div>
      </section>
      <section className="estimate-banner">
        <div className="estimate-banner-inner">
          <div className="estimate-banner-copy">
            <p>ESTIMATE FOR YOUR PROJECT</p>
            <h2>Ready to get an Estimate<br />for your Project?</h2>
          </div>
          <Link className="button" href="/contact">Get a Quote <span aria-hidden="true">→</span></Link>
        </div>
      </section>
    </main>
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-brand">
          <a className="footer-logo" href="/" aria-label="VanLock Security home"><img src="/vanlock/logo.png" alt="VanLock Security" /></a>
          <p>We are specialists in advanced van security solutions. Our systems inspire confidence.</p>
          <div className="footer-socials"><a href="/#contact" aria-label="Facebook">f</a><a href="/#contact" aria-label="Instagram">◎</a><a href="/#contact" aria-label="LinkedIn">in</a></div>
        </div>
        <div className="footer-column"><h3>Quick Links</h3><Link href="/">Home</Link><Link href="/about-us">About Us</Link><Link href="/fleets">Fleets</Link><Link href="/contact">Contact</Link></div>
        <div className="footer-column footer-services"><h3>Our Services</h3>{services.map((service) => <Link href={`/our-services/${service.slug}`} key={service.slug}>{service.title}</Link>)}</div>
        <div className="footer-column footer-contact">
          <h3>Contact Details</h3>
          <a href="tel:+447367674000"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z" /></svg><span>07367674000</span></a>
          <a href="mailto:info@vanlocksecurity.co.uk"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg><span>info@vanlocksecurity.co.uk</span></a>
          <div className="footer-address"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg><span>Van lock security 594 green lane, Ilford</span></div>
        </div>
      </div>
      <div className="footer-bottom">Copyright © 2026 VanLock Security | All Rights Reserved<a href="/#home" aria-label="Back to top">⌃</a></div>
    </footer>
    </>
  );
}
