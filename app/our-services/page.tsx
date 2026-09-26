import Link from "next/link";
import { SiteLayout } from "../components/SiteChrome";
import { EstimateBanner, PageBanner, Testimonials } from "../components/ReferenceSections";
import { services } from "../site-data";

const descriptions = [
  "Dead locks are mechanical locks designed to work independently of your",
  "The hook lock is a variant of the deadlock that uses a hook bolt to engage",
  "Slam locks guarantee the door is locked every time it is closed.",
  "Statement locks are mounted across your van doors, bracing them to provide security",
  "A high-security replacement for your existing lock, our replacement locks",
  "A high-security replacement for your existing lock, our replacement locks",
  "Air Vent Installation is a smart upgrade for any van that transports tools, animals, chemicals, or anything sensitive to heat or poor airflow.",
];

export default function ServicesPage() {
  return <SiteLayout><main className="services-index-page">
    <PageBanner title="Our Services" image="/vanlock/blog-deadlock.webp"/>
    <section className="services-catalog" aria-label="Van security services">
      <div className="services-catalog-grid">{services.map((service, index) => <article className="services-catalog-card" key={service.slug}>
        <img src={`/vanlock/service-product-${index}.png`} alt={service.title}/>
        <h2>{service.title}</h2><p>{descriptions[index]}</p>
        <Link href={`/our-services/${service.slug}`} aria-label={`Learn more about ${service.title}`}>Learn More <span aria-hidden="true">→</span></Link>
      </article>)}</div>
    </section>
    <Testimonials/><EstimateBanner/>
  </main></SiteLayout>;
}
