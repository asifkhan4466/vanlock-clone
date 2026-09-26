"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { mainLinks, makes, services, vans } from "../site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [opened, setOpened] = useState<"van" | "services" | null>(null);
  const [mobile, setMobile] = useState(false);
  const close = () => { setOpened(null); setMobile(false); };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    setOpened(null);
    setMobile(false);
  }, [pathname]);
  const chooseVanActive = pathname === "/choose-your-van" || pathname.startsWith("/choose-your-van/") || makes.some(([, slug]) => pathname === `/${slug}` || pathname.startsWith(`/${slug}/`));
  const servicesActive = pathname === "/our-services" || pathname.startsWith("/our-services/");
  if (!["/"].includes(pathname)) return <header className="site-header compact-header" onKeyDown={event => {
    if (event.key === "Escape") { close(); event.currentTarget.querySelector<HTMLButtonElement>(".compact-toggle")?.focus(); }
  }}>
    <div className="container nav-wrap">
      <Link className="brand" href="/" aria-label="VanLock Security home" onClick={close}><img src="/vanlock/logo.png" alt="VanLock Security" /></Link>
      <button className="compact-toggle" type="button" aria-label={mobile ? "Close navigation" : "Open navigation"} aria-expanded={mobile} aria-controls="inner-navigation" onClick={() => { setMobile(!mobile); setOpened(null); }}><span /><span /><span /></button>
      <Link className="button compact-quote" href="/contact" onClick={close}>Get a Quote <span aria-hidden="true">→</span></Link>
      <nav id="inner-navigation" className={`compact-navigation${mobile ? " compact-navigation-open" : ""}`} aria-label="Main navigation">
        {[["Home", "/"], ["About Us", "/about-us"], ["Choose Your Van", "/choose-your-van"], ["Our Services", "/our-services"], ["Fleets", "/fleets"], ["Contact", "/contact"]].map(([name, href]) => {
          const submenu = href === "/choose-your-van" ? "van" : href === "/our-services" ? "services" : null;
          const active = submenu === "van" ? chooseVanActive : submenu === "services" ? servicesActive : pathname === href;
          return <div key={href} className={submenu === "van" ? "inner-van-item" : undefined}>
            {submenu ? <>
              {submenu === "services" ? <div className="inner-services-control"><Link href={href} className={active ? "nav-active" : undefined} aria-current={pathname === href ? "page" : undefined} onClick={close}>{name}</Link><button type="button" aria-label="Toggle Our Services menu" aria-expanded={opened === submenu} aria-controls={`inner-${submenu}`} onClick={() => setOpened(opened === submenu ? null : submenu)}><span className="inner-chevron" aria-hidden="true" /></button></div> : <button type="button" className={active ? "nav-active" : undefined} aria-expanded={opened === submenu} aria-controls={`inner-${submenu}`} onClick={() => setOpened(opened === submenu ? null : submenu)}>{name}<span className="inner-chevron" aria-hidden="true" /></button>}
              <div id={`inner-${submenu}`} className={`compact-submenu${submenu === "van" ? " inner-van-panel" : " inner-services-panel"}`} hidden={opened !== submenu}>
                {submenu === "van" ? <>
                  <div className="inner-popular"><h2>Popular Vans</h2><div>{vans.slice(0, 6).map(van => <Link key={van.slug} href={van.slug} onClick={close}><span className="inner-round-arrow" aria-hidden="true">›</span>{van.brand} {van.name}</Link>)}</div></div>
                  <div className="inner-manufacturers"><h2>Choose by Manufacturer</h2><div className="inner-make-grid">{makes.map(([label, slug]) => <Link key={slug} href={`/${slug}`} onClick={close}><span className="inner-round-arrow" aria-hidden="true">›</span>{label}</Link>)}<Link className="inner-all-makes" href={href} onClick={close}>All Manufacturers <span aria-hidden="true">›</span></Link></div></div>
                </> : services.map(item => <Link key={item.slug} href={`/our-services/${item.slug}`} aria-current={pathname === `/our-services/${item.slug}` ? "page" : undefined} onClick={close}>{item.title}</Link>)}
              </div>
            </> : <Link href={href} className={active ? "nav-active" : undefined} aria-current={active ? "page" : undefined} onClick={close}>{name}</Link>}
          </div>;
        })}
      </nav>
    </div>
  </header>;
  return <header className="site-header"><div className="container nav-wrap">
    <Link className="brand" href="/" aria-label="VanLock Security home"><img src="/vanlock/logo.png" alt="VanLock Security" /></Link>
    <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={mobile} onClick={() => setMobile(!mobile)}>{mobile ? "×" : "☰"}</button>
    <nav className={mobile ? "nav-links nav-open" : "nav-links"}>
      <Link className={pathname === "/" ? "nav-active" : undefined} aria-current={pathname === "/" ? "page" : undefined} href="/" onClick={close}>Home</Link><Link className={pathname === "/about-us" || pathname.startsWith("/about-us/") ? "nav-active" : undefined} aria-current={pathname === "/about-us" || pathname.startsWith("/about-us/") ? "page" : undefined} href="/about-us" onClick={close}>About Us</Link>
      <div className={`nav-dropdown${opened === "van" ? " van-dropdown-open" : ""}`}>
        <div className="nav-dropdown-control"><Link className={`nav-dropdown-label${chooseVanActive ? " nav-active" : ""}`} aria-current={chooseVanActive ? "page" : undefined} href="/choose-your-van" onClick={close}>Choose Your Van</Link><button className="nav-dropdown-trigger" type="button" aria-label="Toggle Choose Your Van menu" aria-expanded={opened === "van"} onClick={() => setOpened(opened === "van" ? null : "van")}><span>⌄</span></button></div>
        <div className="van-dropdown"><div className="popular-vans-menu"><h2>Popular Vans</h2>{vans.slice(0, 6).map(v => <Link href={v.slug} key={v.slug} onClick={close}>{v.brand} {v.name} <span>›</span></Link>)}</div><div className="manufacturer-menu"><h2>Choose by Manufacturer</h2><div>{makes.map(([name, slug]) => <Link href={`/${slug}`} key={slug} onClick={close}><span>›</span>{name}</Link>)}</div><Link className="all-manufacturers" href="/choose-your-van" onClick={close}>All Manufacturers <span>›</span></Link></div></div>
      </div>
      <div className={`nav-dropdown service-nav-dropdown${opened === "services" ? " service-dropdown-open" : ""}`}>
        <div className="nav-dropdown-control"><Link className={`nav-dropdown-label${servicesActive ? " nav-active" : ""}`} aria-current={servicesActive ? "page" : undefined} href="/our-services" onClick={close}>Our Services</Link><button className="nav-dropdown-trigger" type="button" aria-label="Toggle Our Services menu" aria-expanded={opened === "services"} onClick={() => setOpened(opened === "services" ? null : "services")}><span>⌄</span></button></div>
        <div className="services-dropdown"><Link href="/our-services" onClick={close}>All Services</Link>{services.map(item => <Link href={`/our-services/${item.slug}`} key={item.slug} onClick={close}>{item.title}</Link>)}</div>
      </div>
      <Link className={pathname === "/fleets" || pathname.startsWith("/fleets/") ? "nav-active" : undefined} aria-current={pathname === "/fleets" || pathname.startsWith("/fleets/") ? "page" : undefined} href="/fleets" onClick={close}>Fleets</Link><Link className={pathname === "/contact" || pathname.startsWith("/contact/") ? "nav-active" : undefined} aria-current={pathname === "/contact" || pathname.startsWith("/contact/") ? "page" : undefined} href="/contact" onClick={close}>Contact</Link>
      <Link className="button" href="/contact" onClick={close}>Get a Quote <span aria-hidden="true">→</span></Link>
    </nav>
  </div></header>;
}

export function SiteFooter() {
  return <footer className="footer shared-reference-footer"><div className="footer-main">
    <div className="footer-brand"><Link className="footer-logo" href="/" aria-label="VanLock Security home"><img src="/vanlock/logo.png" alt="VanLock Security" /></Link><p>We are specialists in advanced van security solutions. Our systems inspire confidence.</p><div className="footer-socials"><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.instagram.com/" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" fill="currentColor" stroke="none"/></svg></a><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a></div></div>
    <div className="footer-column"><h3>Quick Links</h3>{mainLinks.map(([name, href]) => <Link href={href} key={href}>{name}</Link>)}</div>
    <div className="footer-column footer-services"><h3>Our Services</h3>{services.map(item => <Link href={`/our-services/${item.slug}`} key={item.slug}>{item.title}</Link>)}</div>
    <div className="footer-column footer-contact"><h3>Contact Details</h3><a href="tel:+447367674000"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 3h4l2 5-3 2a15 15 0 0 0 6 6l2-3 5 2v4a2 2 0 0 1-2 2A17 17 0 0 1 3 5a2 2 0 0 1 2-2Z"/><path d="M15 2a8 8 0 0 1 7 7M15 6a4 4 0 0 1 3 3"/></svg><span>07367674000</span></a><a href="mailto:info@vanlocksecurity.co.uk"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m2 9 10-7 10 7v13H2Z"/><path d="m2 9 10 8L22 9M2 22l7-7m6 0 7 7"/></svg><span>info@vanlocksecurity.co.uk</span></a><div className="footer-address"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg><span>Van lock security 594 green lane , Ilford</span></div></div>
  </div><button className="footer-to-top" type="button" aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 15 7-7 7 7"/></svg></button><div className="footer-bottom">Copyright © 2026 VanLock Security | All Rights Reserved</div></footer>;
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return <><div id="top"/><SiteHeader/>{children}<SiteFooter/></>;
}
