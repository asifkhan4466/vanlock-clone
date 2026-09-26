import Link from "next/link";
import { SiteHeader, SiteFooter } from "../components/SiteChrome";


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
    <SiteFooter />
    </>
  );
}
