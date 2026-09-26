"use client";

import { useState } from "react";

const services = [
  { icon: "⌑", title: "Deadlocks", text: "Extra protection against forced entry, fitted discreetly to your van." },
  { icon: "⌘", title: "Hook locks", text: "A robust independent locking point that keeps your doors firmly secured." },
  { icon: "↗", title: "Slam locks", text: "Automatically lock your doors as you close them. Ideal for busy workdays." },
  { icon: "◈", title: "Alarms & trackers", text: "Smart alerts and live location tracking give you confidence wherever you park." },
];

const vans = [
  { brand: "FORD", name: "Transit Custom", year: "2023 onwards", image: "photo-1601584115197-04ecc0da31d7" },
  { brand: "VOLKSWAGEN", name: "Transporter T6.1", year: "2020 onwards", image: "photo-1566933293069-b55c7f326dd4" },
  { brand: "FORD", name: "Transit", year: "2014 onwards", image: "photo-1619642751034-765dfdf7c58e" },
  { brand: "RENAULT", name: "Trafic", year: "2014 onwards", image: "photo-1625047509168-a7026f36de04" },
];

const reasons = [
  ["01", "Van security specialists", "Our work is focused on one thing: keeping vans, tools and livelihoods protected."],
  ["02", "A solution that fits", "Every van and every business is different. We recommend security around your needs."],
  ["03", "Professional installation", "Experienced mobile fitters install quality products at your home, workplace or site."],
  ["04", "Support that stays", "From your first call to future upgrades, our team is here whenever you need us."],
];

const reviews = [
  { quote: "VanLock transformed the way we secure our vans. The team was prompt, professional, and the system works flawlessly.", name: "Daniel Morris", place: "West Yorkshire" },
  { quote: "Reliable service from start to finish. The tracking and smart lock system have given our whole team peace of mind.", name: "Karen Doyle", place: "Surrey" },
  { quote: "Installation was quick and the support is always responsive. Our vans feel safer than ever. Highly recommended.", name: "Stephen Patel", place: "Greater Manchester" },
];

function Button({ children, href = "#contact", light = false }: { children: React.ReactNode; href?: string; light?: boolean }) {
  return <a className={`button ${light ? "button-light" : ""}`} href={href}>{children}<span aria-hidden="true">↗</span></a>;
}

function Eyebrow({ children }: { children: React.ReactNode }) { return <p className="eyebrow"><span />{children}</p>; }

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["About", "#about"], ["Services", "#services"], ["Choose your van", "#vans"], ["Fleets", "#fleet"], ["Contact", "#contact"]];
  return <>
    <div className="topline"><div className="container top-inner"><span>Van security, fitted around you.</span><a href="tel:+447367674000">Call us <b>07367 674 000</b></a><a href="mailto:info@vanlocksecurity.co.uk">✉ &nbsp;info@vanlocksecurity.co.uk</a></div></div>
    <header className="site-header"><div className="container nav-wrap">
      <a className="brand" href="#home" aria-label="VanLock Security home"><span className="brand-mark">V<span>L</span></span><span className="brand-type">VANLOCK<small>SECURITY</small></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
      <nav className={open ? "nav-links nav-open" : "nav-links"}>{links.map(([label, href]) => <a key={label} onClick={() => setOpen(false)} href={href}>{label}</a>)}<Button>Get a quote</Button></nav>
    </div></header>
  </>;
}

function Footer() {
  return <footer className="footer"><div className="container footer-main"><div className="footer-brand"><a className="brand brand-invert" href="#home"><span className="brand-mark">V<span>L</span></span><span className="brand-type">VANLOCK<small>SECURITY</small></span></a><p>Smart, reliable van security to protect your vehicle, tools and livelihood.</p><a href="tel:+447367674000">07367 674 000</a><a href="mailto:info@vanlocksecurity.co.uk">info@vanlocksecurity.co.uk</a></div><div><h3>Explore</h3><a href="#about">About us</a><a href="#services">Our services</a><a href="#vans">Choose your van</a><a href="#fleet">Fleet solutions</a></div><div><h3>Our services</h3><a href="#services">Deadlocks & hook locks</a><a href="#services">Slam locks</a><a href="#services">Alarms & trackers</a><a href="#contact">Repairs & upgrades</a></div><div className="footer-cta"><Eyebrow>LET’S TALK SECURITY</Eyebrow><h3>Ready to protect your van?</h3><Button>Get a free quote</Button></div></div><div className="container footer-bottom"><span>© 2026 VanLock Security. All rights reserved.</span><span>594 Green Lane, Ilford, London</span><a href="#home">Back to top ↑</a></div></footer>;
}

export default function Home() {
  return <><Header /><main id="home">
    <section className="hero"><div className="hero-image"/><div className="container hero-content"><div className="hero-copy"><Eyebrow>VAN SECURITY SPECIALISTS · LONDON & BEYOND</Eyebrow><h1>Protect what<br/>moves you<span>.</span></h1><p>Smart, reliable van security that protects your vehicle, your tools and the work you’ve built.</p><div className="hero-actions"><Button>Get a free quote</Button><a className="text-link" href="#services"><span className="play">▶</span> Explore our services</a></div><div className="hero-proof"><div className="proof-stars">★★★★★</div><span>Trusted by van owners<br/><b>across London & beyond</b></span><i/></div></div><div className="hero-note"><span>01 / 04</span><b>Security built around<br/>your working day.</b><a href="#services">Discover our services ↘</a></div></div><div className="hero-edge">VANLOCK SECURITY&nbsp; · &nbsp;PROTECT WHAT MOVES YOU</div></section>

    <section className="services section" id="services"><div className="container"><div className="section-heading"><div><Eyebrow>BUILT FOR THE WAY YOU WORK</Eyebrow><h2>Security that works<br/>as hard as you do<span>.</span></h2></div><div className="heading-aside"><p>From a single extra lock to a complete security system, we fit trusted solutions around you and your van.</p><a className="arrow-link" href="#contact">Talk to a specialist <span>↗</span></a></div></div><div className="service-grid">{services.map((service, i) => <article className="service-card" key={service.title}><div className="service-top"><span className="service-icon">{service.icon}</span><span className="service-number">0{i + 1}</span></div><h3>{service.title}</h3><p>{service.text}</p><a className="circle-arrow" href="#contact" aria-label={`Ask about ${service.title}`}>↗</a></article>)}</div><div className="services-bottom"><span>HONEST ADVICE. PROFESSIONAL FITTING. REAL PEACE OF MIND.</span><a href="#contact">Not sure what you need? <b>Let’s figure it out ↗</b></a></div></div></section>

    <section className="about section" id="about"><div className="container about-layout"><div className="about-visual"><div className="about-photo"/><div className="about-stamp"><span>VANLOCK</span><b>SECURITY<br/>YOU CAN<br/>COUNT ON</b><i>✳</i></div><div className="image-caption"><span>ON THE ROAD, WITH YOU</span><span>LONDON · UK</span></div></div><div className="about-copy"><Eyebrow>ABOUT VANLOCK</Eyebrow><h2>Good security<br/>starts with<br/><em>understanding.</em></h2><p className="about-lead">We know your van is more than transport. It carries your tools, your plans and the work you do every day.</p><p>That’s why we take the time to understand how you work before recommending a solution. Our experienced team fits proven security products with care, wherever you need us.</p><Button>More about VanLock</Button><div className="about-stats"><div><b>100<span>%</span></b><small>VAN SECURITY<br/>FOCUSED</small></div><div><b>24<span>/7</span></b><small>PEACE OF<br/>MIND</small></div><div><b>UK</b><small>MOBILE<br/>INSTALLATION</small></div></div></div></div></section>

    <section className="van-section section" id="vans"><div className="container"><div className="section-heading"><div><Eyebrow>FIND YOUR VAN</Eyebrow><h2>The right fit for<br/><em>your vehicle.</em></h2></div><div className="heading-aside"><p>Choose your make and model to find security solutions designed to fit your van properly.</p><a className="arrow-link" href="#contact">View all vans <span>↗</span></a></div></div><div className="van-grid">{vans.map((van, i) => <a className="van-card" href="#contact" key={van.name}><div className="van-photo" style={{ backgroundImage: `url(https://images.unsplash.com/${van.image}?auto=format&fit=crop&w=900&q=85)` }}><span className="van-tag">0{i + 1} / POPULAR FIT</span><span className="van-go">↗</span></div><div className="van-info"><span>{van.brand}</span><h3>{van.name}</h3><small>{van.year}</small></div></a>)}</div><div className="make-row"><span>ALSO FITTING</span><b>VAUXHALL</b><b>MERCEDES-BENZ</b><b>RENAULT</b><b>PEUGEOT</b><b>VOLKSWAGEN</b><a href="#contact">+ MORE MAKES</a></div></div></section>

    <section className="fleet section" id="fleet"><div className="container fleet-layout"><div className="fleet-copy"><Eyebrow>FOR BUSINESSES ON THE MOVE</Eyebrow><h2>One van or<br/>one hundred.<br/><em>We’ve got you.</em></h2><p>Keep your people, vehicles and valuable kit protected with a fleet security plan built around your operation.</p><Button>Talk fleet solutions</Button><div className="fleet-meta"><span>01 — PERSONAL SERVICE</span><span>02 — SIMPLE, SCALABLE FITTING</span></div></div><div className="fleet-visual"><div className="fleet-photo"/><div className="fleet-quote"><span>“</span><p>Less time worrying about your vans. More time getting on with business.</p><small>THE VANLOCK PROMISE</small></div><div className="fleet-outline">FLEET<br/>SECURITY</div></div></div></section>

    <section className="why section"><div className="container why-layout"><div className="why-intro"><Eyebrow>THE VANLOCK DIFFERENCE</Eyebrow><h2>Small details.<br/><em>Serious security.</em></h2><p>Good protection comes from the right products, fitted by people who care about getting it right.</p><a className="arrow-link" href="#contact">Meet your security team <span>↗</span></a></div><div className="reason-list">{reasons.map(([number, title, text]) => <article className="reason" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b>↗</b></article>)}</div></div></section>

    <section className="testimonial section"><div className="container"><div className="testimonial-heading"><Eyebrow>GOOD WORDS TRAVEL</Eyebrow><h2>Trusted by people<br/>who depend on their vans<span>.</span></h2></div><div className="review-grid">{reviews.map((review, i) => <article className="review-card" key={review.name}><div className="review-top"><span className="review-stars">★★★★★</span><span>0{i + 1} / 03</span></div><blockquote>“{review.quote}”</blockquote><div className="review-person"><span className="avatar">{review.name.split(" ").map(n => n[0]).join("")}</span><div><b>{review.name}</b><small>{review.place}</small></div><span className="review-mark">”</span></div></article>)}</div><div className="review-footer"><span>REAL PEOPLE. REAL PEACE OF MIND.</span><a href="#contact">Join our customers <b>↗</b></a></div></div></section>

    <section className="contact section" id="contact"><div className="container contact-layout"><div className="contact-copy"><Eyebrow>LET’S MAKE YOUR VAN A HARDER TARGET</Eyebrow><h2>Ready to feel<br/>more <em>secure?</em></h2><p>Tell us a little about your van and we’ll help you find the right next step.</p><div className="contact-detail"><span>CALL OUR TEAM</span><a href="tel:+447367674000">07367 674 000 <b>↗</b></a></div><div className="contact-detail"><span>EMAIL US</span><a href="mailto:info@vanlocksecurity.co.uk">info@vanlocksecurity.co.uk <b>↗</b></a></div><div className="contact-hours"><span className="status-dot"/> Here when you need us <span>·</span> Ilford, London</div></div><form className="contact-form" action="mailto:info@vanlocksecurity.co.uk" method="post" encType="text/plain"><div className="form-title"><span>01 / SAY HELLO</span><p>Get a free, no-obligation quote.</p></div><div className="form-row"><label>Your name<input name="name" placeholder="e.g. Alex Smith" required/></label><label>Phone number<input name="phone" type="tel" placeholder="Your best contact number"/></label></div><label>Email address<input name="email" type="email" placeholder="you@example.com" required/></label><label>Tell us about your van<textarea name="message" rows={3} placeholder="Make, model and what you’re looking for..."/></label><button className="button form-button" type="submit">Send your enquiry <span>↗</span></button><small>By submitting, you agree we can contact you about your enquiry.</small></form></div></section>
  </main><Footer /></>;
}
