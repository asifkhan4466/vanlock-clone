"use client";

import Link from "next/link";
import { useState } from "react";
import { mainLinks, makes, services, vans } from "../site-data";

export function SiteHeader() {
  const [opened, setOpened] = useState<"van" | "services" | null>(null);
  const [mobile, setMobile] = useState(false);
  const close = () => { setOpened(null); setMobile(false); };
  return <header className="site-header"><div className="container nav-wrap">
    <Link className="brand" href="/" aria-label="VanLock Security home"><img src="/vanlock/logo.png" alt="VanLock Security" /></Link>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? "×" : "☰"}</button>
    <nav className={mobile ? "nav-links nav-open" : "nav-links"}>
      <Link href="/" onClick={close}>Home</Link><Link href="/about-us" onClick={close}>About Us</Link>
      <div className={`nav-dropdown${opened === "van" ? " van-dropdown-open" : ""}`}>
        <button className="nav-dropdown-trigger" type="button" aria-expanded={opened === "van"} onClick={() => setOpened(opened === "van" ? null : "van")}>Choose Your Van <span>⌄</span></button>
        <div className="van-dropdown"><div className="popular-vans-menu"><h2>Popular Vans</h2>{vans.slice(0, 6).map(v => <Link href={v.slug} key={v.slug} onClick={close}>{v.brand} {v.name} <span>›</span></Link>)}</div><div className="manufacturer-menu"><h2>Choose by Manufacturer</h2><div>{makes.map(([name, slug]) => <Link href={`/${slug}`} key={slug} onClick={close}><span>›</span>{name}</Link>)}</div><Link className="all-manufacturers" href="/choose-your-van" onClick={close}>All Manufacturers <span>›</span></Link></div></div>
      </div>
      <div className={`nav-dropdown service-nav-dropdown${opened === "services" ? " service-dropdown-open" : ""}`}>
        <button className="nav-dropdown-trigger" type="button" aria-expanded={opened === "services"} onClick={() => setOpened(opened === "services" ? null : "services")}>Our Services <span>⌄</span></button>
        <div className="services-dropdown"><Link href="/our-services" onClick={close}>All Services</Link>{services.map(item => <Link href={`/our-services/${item.slug}`} key={item.slug} onClick={close}>{item.title}</Link>)}</div>
      </div>
      <Link href="/fleets" onClick={close}>Fleets</Link><Link href="/contact" onClick={close}>Contact</Link>
      <Link className="button" href="/contact" onClick={close}>Get a Quote <span aria-hidden="true">→</span></Link>
    </nav>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="footer"><div className="footer-main">
    <div className="footer-brand"><Link className="footer-logo" href="/" aria-label="VanLock Security home"><img src="/vanlock/logo.png" alt="VanLock Security" /></Link><p>We are specialists in advanced van security solutions. Our systems inspire confidence.</p><div className="footer-socials"><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.instagram.com/" aria-label="Instagram">◎</a><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a></div></div>
    <div className="footer-column"><h3>Quick Links</h3>{mainLinks.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div>
    <div className="footer-column footer-services"><h3>Our Services</h3>{services.map(item => <Link href={`/our-services/${item.slug}`} key={item.slug}>{item.title}</Link>)}</div>
    <div className="footer-column footer-contact"><h3>Contact Details</h3><a href="tel:+447367674000"><span>☎</span><span>07367674000</span></a><a href="mailto:info@vanlocksecurity.co.uk"><span>✉</span><span>info@vanlocksecurity.co.uk</span></a><div className="footer-address"><span>⌖</span><span>Van lock security 594 green lane, Ilford</span></div></div>
  </div><div className="footer-bottom">Copyright © 2026 VanLock Security | All Rights Reserved<Link href="#top" aria-label="Back to top">⌃</Link></div></footer>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><div id="top"/><SiteHeader/>{children}<SiteFooter/></>;
}
