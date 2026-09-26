"use client";

import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const services = [
  { title: "Van Dead Locks", image: "/vanlock/service-van.jpg", alt: "Van dead lock fitted to a van door", href: "/our-services/van-dead-locks" },
  { title: "Van Hook Locks", image: "/vanlock/hook-lock.jpg", alt: "Hook lock on a van door", href: "/our-services/van-hook-locks" },
  { title: "Van Slam Locks", image: "/vanlock/about-van.jpg", alt: "Slam lock fitted to a van", href: "/our-services/van-slam-locks" },
  { title: "Van Statement Lock", image: "/vanlock/fleet-van.jpg", alt: "Statement lock on a van door", href: "/our-services/van-statement-lock" },
];

const vans = [
  ["Vauxhall", "Vivaro 2019", "/vanlock/vauxhall-vivaro.png", "/vauxhall/vivaro-2019"],
  ["Volkswagen", "Transporter T6.1 2020", "/vanlock/vw-transporter.jpeg", "/volkswagen/transporter-t6-1-2020"],
  ["Ford", "Transit 2014", "/vanlock/ford-transit.png", "/ford/transit-2014"],
  ["Ford", "Custom 2012–2023", "/vanlock/ford-custom-2012.png", "/ford/custom-2012-2023"],
  ["Renault", "Trafic 2014", "/vanlock/renault-trafic.jpeg", "/renault/trafic-2014"],
  ["Ford", "Custom 2023 onwards", "/vanlock/ford-custom-2023.png", "/ford/custom-2023"],
  ["Fiat", "Talento 2014 onwards", "/vanlock/fiat-talento-2014.png", "/fiat/talento-2014"],
  ["Citroen", "Relay 2006 onwards", "/vanlock/citroen-relay.png", "/citroen/relay-2006"],
];

const reasons = [
  ["van-shield", "Specialists in Van Lock Security", "Our expertise lies solely in van security lock systems, leaving no room for distractions."],
  ["bulb", "Custom Solutions for All Van Types", "Whether it’s one van or a fleet, we offer customised security van lock solutions to meet your exact needs."],
  ["technology", "Cutting-Edge Technology", "Our advanced Vanlock security systems offer smart tracking, real-time alerts, and remote monitoring."],
  ["chip-lock", "Professional-Grade Components", "We use only high-quality, durable components designed specifically for van security locks."],
  ["mobile-van", "Designed for Mobile Businesses", "Our deep knowledge of mobile operations makes us a go-to for vanlock security."],
  ["users", "User-Friendly Systems", "Intuitive and easy to use, our VanLock security systems integrate seamlessly into your daily routine."],
  ["checklist", "End-to-End Service", "From expert installation to ongoing support, VanLock is trusted for reliable van security."],
  ["support", "Your Trusted Partner in Security", "VanLock works closely with customers to deliver reliable security solutions and peace of mind."],
];

function ReasonIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const drawings: Record<string, React.ReactNode> = {
    "van-shield": <><path d="M5 31h4l4-5h18l5 5h4v12H5zM9 31V19h18l7 7"/><circle cx="14" cy="43" r="3"/><circle cx="32" cy="43" r="3"/><path d="m20 7 7 3v6c0 5-3 8-7 10-4-2-7-5-7-10v-6z"/><path d="m17 16 2 2 4-5"/></>,
    bulb: <><path d="M20 5a11 11 0 0 0-6 20c2 1 2 3 2 4h8c0-1 0-3 2-4a11 11 0 0 0-6-20zM16 34h8M17 38h6M18 42h4"/><path d="M20 1v-3M4 8 1 6M36 8l3-2M2 22h-4M42 22h-4M9 3 7 0M31 3l2-3"/><circle cx="20" cy="16" r="5"/><path d="m20 12 1.2 2.4 2.6.4-1.9 1.8.5 2.6-2.4-1.3-2.4 1.3.5-2.6-1.9-1.8 2.6-.4z"/></>,
    technology: <><path d="M20 7V3m0 34v-4M7 20H3m34 0h-4M10.8 10.8 8 8m24 24-2.8-2.8m0-18L32 8m-24 24 2.8-2.8"/><path d="M20 8 23 6l2 3 4 .5.5 4 3 2-1.5 3.5 1.5 3.5-3 2-.5 4-4 .5-2 3-3-2-3 2-2-3-4-.5-.5-4-3-2 1.5-3.5L7 16l3-2 .5-4 4-.5 2-3z"/><circle cx="20" cy="20" r="7"/><circle cx="20" cy="20" r="2.5"/></>,
    "chip-lock": <><rect x="10" y="10" width="20" height="20" rx="3"/><path d="M15 10V5m10 5V5M15 35v-5m10 5v-5M10 15H5m5 10H5m30-10h-5m5 10h-5M16 19h8v7h-8z"/><path d="M18 19v-2a2 2 0 0 1 4 0v2m-2 3v2"/><circle cx="20" cy="22" r="18"/></>,
    "mobile-van": <><path d="M4 20h21l5 5h5v12H4zM8 20V9h15v11M25 26v-6h5l5 6"/><circle cx="12" cy="37" r="3"/><circle cx="29" cy="37" r="3"/><path d="M12 9V5h12v4M16 14h8M18 2h7"/></>,
    users: <><circle cx="13" cy="14" r="5"/><circle cx="28" cy="13" r="5"/><circle cx="20" cy="25" r="5"/><path d="M3 35c0-6 4-10 10-10m4 17c0-7 4-11 10-11s10 4 10 11M26 24c6 0 10 4 10 9"/><path d="M14 36h12"/></>,
    checklist: <><rect x="8" y="5" width="23" height="33" rx="2"/><path d="M13 13h13m-13 6h13m-13 6h8m-8 6h6M4 10v31h23"/><circle cx="31" cy="31" r="8"/><path d="m27 31 3 3 5-6"/></>,
    support: <><circle cx="20" cy="15" r="9"/><path d="M6 38c1-8 6-12 14-12s13 4 14 12M7 17v7m26-7v7M7 23a4 4 0 0 0 4 4m22-4a4 4 0 0 1-4 4M15 39v-5m10 5v-5"/><path d="M13 14c2-1 3-3 4-5 2 4 5 6 10 6"/></>,
  };
  return <svg className="reason-icon" viewBox="0 0 40 44" aria-hidden="true" {...common}>{drawings[name]}</svg>;
}

const reviews = [
  { quote: "VanLock transformed the way we secure our vans. Their team was prompt, professional, and the system works flawlessly. Highly recommended.", name: "Daniel Morris", place: "West Yorkshire", image: "/vanlock/testimonial-daniel.jpg" },
  { quote: "Reliable service from start to finish. The GPS tracking and smart lock system gave us peace of mind. VanLock truly understands van owners’ needs.", name: "Karen Doyle", place: "Surrey", image: "/vanlock/testimonial-karen.jpg" },
  { quote: "Excellent experience with VanLock. Installation was quick, and support is always responsive. Our vans feel safer than ever.", name: "Stephen Patel", place: "Greater Manchester", image: "/vanlock/testimonial-stephen.jpg" },
];

const steps = [
  ["01.", "Register a Free Consultation", "Quality support and suggest the most appropriate solutions for your van."],
  ["02.", "Choose What Works for You.", "Choose a complete range of secure brands such as deadlocks, hook locks, slam locks, alarms and trackers. We will assist you in selecting the right combination that is suitable for your van and ensures you feel safe at any time, day, or night."],
  ["03.", "Professional Installation", "Our mobile installation division goes out to you at home, at work, and on-site. Fitters are fast, well trained and fully certified, so all fittings are completed to the highest standard."],
  ["04.", "Ongoing Support", "We have a presence even after installation. Do you require repairs, enhancements, or guidance? VanLock is available to provide lifelong support and maintain peace of mind."],
];

function Button({ children, href = "/contact", light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return <Link className={`button ${light ? "button-light" : ""}`} href={href}>{children}<span aria-hidden="true">→</span></Link>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span />{children}</p>; }

function Header() {
  return <SiteHeader />;
}

function Footer() {
  return <SiteFooter />;
}

export default function Home() {
  return <><Header /><main id="home">
    <section className="hero"><div className="hero-image"/><div className="hero-blue-shape"/><img className="hero-van" src="/vanlock/van-hero.png" alt="White security van"/><div className="container hero-content"><div className="hero-copy"><h1>Safe. Smart. With Van Lock<br/>Security<span>,</span></h1><p>We specialize in advanced <Link href="/our-services">Van Lock Security</Link> solutions designed to safeguard your vehicle, tools, and livelihood. With expertly installed locks and anti-theft systems, we keep your van secure—day and night.</p><div className="hero-actions"><Button>Get a Quote</Button><Link className="button hero-service-button" href="/our-services">Our Services</Link></div></div></div></section>

    <section className="services section" id="services"><div className="container"><div className="services-title"><Eyebrow>OUR SERVICES</Eyebrow><h2>Our Van Lock Services</h2><p>Van Lock London offers smart, reliable security systems tailored specifically for<br className="desktop-break"/> commercial and personal vans.</p></div><div className="service-photo-grid">{services.map(service => <Link className="service-photo-card" href={service.href} key={service.title} style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.68),transparent 38%),url('${service.image}')` }} aria-label={service.alt}><span>{service.title}</span></Link>)}</div><Link className="services-all-button" href="/our-services">View All Services <span>→</span></Link></div></section>

    <section className="about section" id="about"><div className="about-preview-wrap"><div className="about-preview-image"><img src="/vanlock/about-van.jpg" alt="VanLock security specialist beside a van"/></div><div className="about-preview-copy"><Eyebrow>ABOUT US</Eyebrow><h2>Our Approach to Smart<br className="about-title-break"/> Security</h2><p>A permanent solution to protection requires a combination of strategies, which include, among others, innovative locking systems, powerful hardware, <Link href="/our-services">intelligent monitoring</Link>, and frequent maintenance. Van Lock Security in London uses the latest technology to protect every vehicle with assurance, and we learn from real-world threats.</p><Link className="about-preview-button" href="/about-us">Read More <span>→</span></Link></div></div></section>

    <section className="mission-vision section"><div className="mission-vision-container"><h2>Secure, Track &amp; Protect<br/>Bring It All Together</h2><div className="mission-vision-grid"><article><h3>Our Mission</h3><p>VanLock is a company that exclusively works on van security. We make solutions that are exact, reliable, and new. Our solutions work with various vans, so you may protect either one van or your whole fleet. We make sure your vehicle is safe 24/7 using the latest technology and parts that are made for professionals.</p></article><article><h3>Our Vision</h3><p>We know plenty about the demands of mobile businesses, which sets us apart. We work directly with van owners to come up with smart, simple methods that fit right in with their everyday duties. Security Van Lock is the company you can trust for mobile security, from installation to continuous support.</p></article></div></div></section>

    <section className="estimate-banner"><div className="estimate-banner-inner"><div className="estimate-banner-copy"><p>ESTIMATE FOR YOUR PROJECT</p><h2>Ready to get an Estimate<br/>for your Project?</h2></div><Button>Get a Quote</Button></div></section>

    <section className="van-section section" id="vans"><div className="container"><div className="van-heading"><div><Eyebrow>CHOOSE YOUR VAN</Eyebrow><h2>Security Solutions for Popular<br className="van-title-break"/> Vans</h2></div><Link className="van-all-button" href="/choose-your-van">View All Vans <span>→</span></Link></div><div className="van-grid">{vans.map(([brand, name, image, href]) => <Link className="van-card" href={href} key={`${brand}-${name}`}><div className="van-photo" style={{ backgroundImage: `url(${image})` }}/><div className="van-info"><h3>{brand}</h3><small>{name}</small></div></Link>)}</div></div></section>

    <section className="why section"><div className="why-container"><div className="why-heading"><Eyebrow>WHY CHOOSE US?</Eyebrow><h2>Secure, Track &amp; Protect<br/>Bring It All Together</h2></div><div className="reason-grid">{reasons.map(([icon, title, text]) => <article className="reason-card" key={title}><ReasonIcon name={icon}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="testimonial section"><div className="container"><div className="testimonial-heading"><Eyebrow>TESTIMONIALS</Eyebrow><h2>Why Van Owners Trust VanLock</h2></div><div className="review-grid">{reviews.map(review => <article className="review-card" key={review.name}><span className="review-stars">★★★★★</span><blockquote>“{review.quote}”</blockquote><div className="review-person"><img className="avatar" src={review.image} alt=""/><div><b>{review.name}</b><small>{review.place}</small></div></div></article>)}</div></div></section>

    <section className="how-it-works section"><div className="container"><div className="how-heading"><h2>How It Works</h2><p>Van protection at VanLock is easy, smooth, and stress-free. Seeking protection of a single van,<br className="desktop-break"/> or a fleet of several ones, our workflow is tailored towards your convenience.</p></div><div className="steps-grid">{steps.map(([number, title, text]) => <article className="step-card" key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="difference-section section"><div className="difference-layout"><div className="difference-copy"><h2>The Van Lock Difference</h2><article><h3>No Generic Solutions – Just Customised Solutions</h3><p>Risks vary in every van. To this end, we conduct detailed evaluations to suggest the appropriate products, including slam locks and GPS trackers.</p></article><article><h3>Install with Your Convenience</h3><p>You will not need to come up and see us since we are a certified mobile service, and therefore the service will be brought to you where you want.</p></article><article><h3>Round-the-Clock Monitoring and Real-Time Alert</h3><p>Our connected systems provide protection when you’re not present. You receive an immediate call on your phone in case strange activity is spotted.</p></article><article><h3>Easy Upgrades and Repairs</h3><p>Is there a need to change your Van Lock Security system or repair damages due to wear? We’re just a call away — fast response, zero stress.</p></article></div><img src="https://vanlocksecurity.co.uk/wp-content/uploads/2025/05/assets_task_01jvph90eyfqj8b6s4bk9yfzvn_1747734358_img_0-1024x683.webp" alt="VanLock security team"/></div></section>

    <section className="contact section" id="contact"><div className="contact-reference-layout"><div className="contact-info-panel"><div className="contact-info-item"><span>♧</span><span>Call Support Center 24/7</span><a href="tel:+447367674000">07367674000</a></div><div className="contact-info-item"><span>✉</span><span>Write To Us</span><a href="mailto:info@vanlocksecurity.co.uk">info@vanlocksecurity.co.uk</a></div><img className="contact-support-image" src="/vanlock/contact-support.png" alt="VanLock customer support"/></div><form className="contact-reference-form" action="mailto:info@vanlocksecurity.co.uk" method="post" encType="text/plain"><p className="contact-form-kicker">CONTACT US</p><h2>Get In Touch With Us</h2><div className="contact-reference-fields"><input name="firstName" placeholder="First Name"/><input name="lastName" placeholder="Last Name"/><input name="email" type="email" placeholder="Email"/><input name="phone" type="tel" placeholder="Phone No"/><textarea name="message" placeholder="Message"/></div><button className="contact-reference-submit" type="submit">Submit Form</button></form></div></section>
  </main><Footer /></>;
}
