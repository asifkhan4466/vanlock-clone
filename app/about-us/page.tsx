"use client";

import { useState } from "react";

const navItems = [
  ["Home", "/"],
  ["About Us", "/about-us"],
  ["Choose Your Van", "/#vans"],
  ["Our Services", "/#services"],
  ["Fleets", "/#vans"],
  ["Contact", "/#contact"],
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="about-page">
      <header className="about-header">
        <div className="about-header-inner">
          <a className="about-logo" href="/" aria-label="VanLock Security home">
            <img src="/vanlock/logo.png" alt="VanLock Security" />
          </a>
          <button
            className="about-menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
          <nav className={menuOpen ? "about-nav about-nav-open" : "about-nav"}>
            {navItems.map(([label, href]) => (
              <a
                href={href}
                key={label}
                className={label === "About Us" ? "about-nav-active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a className="about-quote" href="/#contact">Get a Quote <span>→</span></a>
          </nav>
        </div>
      </header>

      <section className="about-banner">
        <div className="about-banner-image" />
        <h1>About Us</h1>
      </section>

      <section className="about-story">
        <div className="about-story-inner">
          <div className="about-story-image">
            <img src="https://vanlocksecurity.co.uk/wp-content/uploads/2025/05/assets_task_01jvend17eed8atb4jsj1ndqr4_1747470235_img_0.webp" alt="VanLock security specialist beside a van" />
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

      <section className="about-values">
        <div className="about-values-inner">
          <p className="about-kicker">WHAT WE BELIEVE</p>
          <h2>Security made for real working days.</h2>
          <div className="about-values-grid">
            <article><span>01</span><h3>Our Mission</h3><p>We make reliable, modern van security solutions for a single vehicle or an entire fleet, using trusted technology and professional-grade parts.</p></article>
            <article><span>02</span><h3>Our Vision</h3><p>We work alongside van owners and mobile businesses to make protection simple, practical and ready for the demands of everyday work.</p></article>
          </div>
        </div>
      </section>
    </main>
  );
}
