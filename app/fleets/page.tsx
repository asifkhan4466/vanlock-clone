import { SiteLayout } from "../components/SiteChrome";
import { EstimateBanner, PageBanner, Testimonials } from "../components/ReferenceSections";

const benefits = [
  ["Reduced Theft Risk", "Keep your tools, cargo, and vehicles secure", "M6 10V6a6 6 0 0 1 12 0v4M4 10h16v13H4ZM12 15v4"],
  ["Increased Driver Confidence", "Let your team work without worry", "M8 12a4 4 0 1 0 8 0M8 5a4 4 0 1 0 8 0 4 4 0 0 0-8 0M4 23v-5l5-3 3 5 3-5 5 3v5Z"],
  ["Lower Insurance Premiums", "Security upgrades can help reduce policy costs", "M4 2h14v12M4 2v20h8M7 6h8M7 10h8M7 14h4M13 19l7-7 3 3-7 7h-3Z"],
  ["Fleet Visibility", "GPS and alerts help improve tracking and accountability", "M2 9h13v12H2ZM15 13h4l3 4v4h-7M5 21v2M19 21v2M7 5l3-3 3 3M10 2v11"],
];

export default function FleetsPage() {
  return <SiteLayout><main className="fleets-page">
    <PageBanner title="Fleets" image="/vanlock/blog-deadlock.webp"/>
    <section className="fleets-story">
      <div className="fleets-content">
        <div><p className="fleets-kicker">PROTECT WHAT DRIVES YOUR BUSINESS</p><h2>Fleet Security Solutions</h2>
          <p>Criminal attacks on fleets result in not only the theft of cargo and costly repair bills, but also the loss to your business in having that vehicle off the road.</p>
          <p>VanLock Security have been protecting commercial vehicles from theft and attack for over 20 years. Our award-winning range of vehicle specific kits includes everything from locking and shielding solutions, to cargo locks and alarms.</p>
          <p>So whether your business is in logistics, construction, parcel delivery, utility, housing maintenance, pharmaceutical, food and beverage or retail, VanLock Security has the widest range of security products available on the market for all major manufacturers.</p>
        </div>
        <img src="/vanlock/fleet-security.jpeg" alt="Commercial vans lined up outside a business"/>
      </div>
    </section>
    <section className="fleets-story fleets-benefits-section">
      <div className="fleets-content">
        <img src="/vanlock/fleet-benefits.jpeg" alt="White fleet vans fitted with security locks in a workshop"/>
        <div><p className="fleets-kicker">SMART SECURITY SMART INVESTMENT</p><h2>Benefits to Your Business</h2>
          <p>Investing in VanLock Security not only protects your fleet but also adds long-term value to your operations. From reducing theft and insurance costs to improving driver confidence and operational efficiency, our solutions are designed to secure your assets and support your business growth. Reliable security means fewer disruptions and more peace of mind.</p>
          <ul className="fleets-benefit-list">{benefits.map(([title, description, path]) => <li key={title}><svg viewBox="0 0 24 26" aria-hidden="true"><path d={path}/></svg><div><h3>{title}</h3><p>{description}</p></div></li>)}</ul>
        </div>
      </div>
    </section>
    <Testimonials/><EstimateBanner/>
  </main></SiteLayout>;
}
