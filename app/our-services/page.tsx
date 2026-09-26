import Link from "next/link";
import { SiteLayout } from "../components/SiteChrome";
import { PageBanner } from "../components/ReferenceSections";
import { services } from "../site-data";

const images = ["/vanlock/service-van.jpg", "/vanlock/hook-lock.jpg", "/vanlock/about-van.jpg", "/vanlock/fleet-van.jpg", "/vanlock/service-van.jpg", "/vanlock/hook-lock.jpg", "/vanlock/about-van.jpg"];
export default function ServicesPage() { return <SiteLayout><main><PageBanner title="Our Services"/><section className="route-content"><div className="container"><div className="services-title"><p className="eyebrow">OUR SERVICES</p><h2>Our Van Lock Services</h2><p>Van Lock London offers smart, reliable security systems tailored specifically for commercial and personal vans.</p></div><div className="route-service-grid">{services.map((service, i) => <Link className="service-photo-card" href={`/our-services/${service.slug}`} key={service.slug} style={{ backgroundImage: `linear-gradient(0deg,rgba(0,0,0,.68),transparent 45%),url('${images[i]}')` }}><span>{service.title}</span></Link>)}</div></div></section></main></SiteLayout>; }
