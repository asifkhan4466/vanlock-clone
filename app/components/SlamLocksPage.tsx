import { SiteLayout } from "./SiteChrome";
import { PageBanner } from "./ReferenceSections";
import { LockComparison } from "./DeadLocksPage";
import content from "./slam-locks-content.json";

function Split({ title, text, image, alt, reverse = false }: { title: string; text: string; image: string; alt: string; reverse?: boolean }) {
  const photo = <img src={`/vanlock/${image}`} alt={alt} loading="lazy" />;
  return <section className={`deadlocks-section${reverse ? " deadlocks-features" : ""}`}><div className="deadlocks-grid">
    {reverse && photo}<div><h2>{title}</h2><p>{text}</p></div>{!reverse && photo}
  </div></section>;
}

function Cards({ title, intro, items, columns = 3, wide = false }: { title: string; intro?: string; items: string[][]; columns?: number; wide?: boolean }) {
  return <section className="slam-cards-section"><div className="slam-container"><h2>{title}</h2>{intro && <p>{intro}</p>}
    <div className={`slam-cards slam-columns-${columns}${wide ? " slam-cards-wide" : ""}`}>{items.map(([heading, text]) => <article key={heading}><h3>{heading}</h3><p>{text}</p></article>)}</div>
  </div></section>;
}

export default function SlamLocksPage() {
  return <SiteLayout><main className="services-index-page deadlocks-page slamlocks-page">
    <PageBanner title="Van Slam Locks" image="/vanlock/blog-deadlock.webp" />
    <Split title="A Guide To Van Slam Locks" text={content.intro} image="slamlocks-guide.jpg" alt="Slam lock fitted below a silver van door handle" />
    <Split title="Are Van Slam Locks Suitable For All Types Of Vans?" text={content.suitable} image="slamlocks-vans.jpg" alt="Row of white commercial vans" reverse />
    <Cards title="Best Van Slam Locks for Security" intro={content.best} items={content.security} />
    <Split title="What Is A Van Slam Lock?" text={content.what} image="slamlocks-key.jpg" alt="Key in a van slam lock" />
    <Cards title="Why Should You Install a Van Slam Lock?" items={content.why} wide />
    <Split title="How Van Slam Locks Work" text={content.work} image="slamlocks-operation.jpg" alt="Operating a van door lock with a key" reverse />
    <Cards title="Types of Van Slam Locks" intro="Van slam locks come in different varieties; they depend on what you would need in terms of security:" items={content.types} columns={4} />
    <Cards title="How to Install a Van Slam Lock" intro="Installing a van slam lock is essential for enhancing the safety of your vehicle. The process is the following way:" items={content.install} columns={4} />
    <Cards title="Advantages of Van Slam Locks Maintenance" intro="To ensure your van slam locks are in good working condition, you need to make sure that you care about them. These were the key advantages of having a van with a slam lock in operational condition:" items={content.maintenance} />
    <Cards title="Tips for Maintaining Your Van Slam Locks" intro="These are some of the simple maintenance practices that you can practice in order to keep your van slam locks in perfect shape:" items={content.tips} columns={4} />
    <Split title="Conclusion" text={content.conclusion} image="slamlocks-conclusion.jpg" alt="Slam lock and key beside a van rear door handle" />
    <LockComparison />
    <section className="deadlocks-faq"><div className="deadlocks-grid"><div><h2>Frequently Asked Question</h2><p>If your van has been attacked or you want to prevent one, Repair Plates and External Shields are a simple but powerful defense.</p></div><div>{content.faqs.map(([question, answer], index) => <details key={question} name="slamlocks-faq" open={index === 0}><summary>{question}<span aria-hidden="true">⌄</span></summary><p>{answer}</p></details>)}</div></div></section>
  </main></SiteLayout>;
}
