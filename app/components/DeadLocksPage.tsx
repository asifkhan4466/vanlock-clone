import { SiteLayout } from "./SiteChrome";
import { PageBanner, Testimonials } from "./ReferenceSections";

const features = [
  "Independent Locking System – Not linked to your van’s central locking, making it harder to bypass.",
  "Straight Bolt Locking Mechanism – Provides robust security by locking directly into the door frame.",
  "High-Security Key Operation – Operated by a key only, keeping your contents extra safe.",
  "Fleet Friendly – Can be keyed alike for multi-van fleets.",
  "Custom Fit Kits – Designed to fit specific van models with minimal structural changes.",
  "Enhanced Vehicle Integrity – Maintains your van’s body strength and professional appearance.",
];
const columns = ["Dead Lock", "Hook Lock", "Slam Lock", "Slam Handle", "Statement Lock", "Ford Replacement", "Shield Plate"];
const comparison: [string, number[]][] = [
  ["Operated independently of your van’s locking system", [1,1,0,0,1,1,1]],
  ["Mechanical, key-operated lock, offering reliable, hands-on security", [1,1,1,1,0,1,0]],
  ["Automatically secures the door every time it closes", [0,0,1,1,0,0,0]],
  ["Designed for fast, low-impact installation using van-specific kits", [1,1,1,1,1,1,1]],
  ["Maintains your van’s original appearance", [1,1,1,1,0,1,0]],
  ["Ideal for tradespeople, couriers, and fleet operators", [1,1,1,1,1,1,1]],
  ["Custom keying options available — perfect for fleets or multiple vans", [1,1,1,0,0,0,0]],
  ["Provides a deterrent, as well as additional physical security", [1,1,0,0,1,0,1]],
  ["Gives you passive defence without needing any driver interaction", [0,0,0,0,0,0,1]],
];
const faqs = [
  ["Can I install a Dead Lock myself?", "While it’s possible, we recommend professional installation to ensure maximum security and maintain your vehicle’s warranty."],
  ["Will the Dead Lock affect my van’s central locking?", "No. Dead Locks operate independently of your van’s existing central locking system."],
  ["Can multiple vans be keyed alike?", "Yes, keyed-alike options are available so multiple vans can use the same key."],
];

const hookFeatures = [
  "Anti-Crowbar Design ? Hook mechanism offers maximum resistance to jemmying and levering.",
  "Independent Operation ? Not connected to central locking; ideal for high-value cargo protection.",
  "Model-Specific Kits ? Perfect fit and finish with no impact on van aesthetics.",
  "High-Security Keys ? Anti-pick, anti-drill cylinders for extra peace of mind.",
  "Fleet Keying Options ? Can be keyed alike for businesses with multiple vans.",
  "Visual Deterrence ? Reinforces that your van is professionally protected.",
];
const hookFaqs = [
  ["What is a Van Hook Lock?", "A Van Hook Lock is a high-security mechanical lock installed on the rear or side doors of commercial vans. It features a hook-shaped bolt that locks into a specially reinforced keep, providing much stronger resistance against forced entry compared to standard locks."],
  ["Are hook locks suitable for all types of vans?", "Yes, hook locks can be fitted to most makes and models of commercial vans. At Vanlock Security, our installation experts will assess your specific van and recommend the most secure configuration for your side and rear doors."],
  ["How are Van Hook Locks operated?", "They are manually operated using a high-security key. This means you have full control over when and how the van is secured, without relying on electronic systems that could fail or be hacked."],
];

export default function DeadLocksPage({ variant = "deadlocks" }: { variant?: "deadlocks" | "hooklocks" }) {
  const isHook = variant === "hooklocks";
  return <SiteLayout><main className="services-index-page deadlocks-page">
    <PageBanner title={isHook ? "Van Hooks Lock" : "Van Dead Locks"} image="/vanlock/blog-deadlock.webp"/>
    <section className="deadlocks-section"><div className="deadlocks-grid">
      <div><h2>{isHook ? "Reinforced Security With Hook Lock Systems" : "Secure Your Van With Heavy-Duty DeadLocks"}</h2>
        {isHook ? <>
          <p>The hook lock is a variant of the deadlock that uses a hook bolt to engage with an internal keep. The strong hook makes it difficult to force the door open and makes it effective on side and rear doors where there isn?t a part of the vehicle?s frame where a normal bolt can securely engage. It?s also a mechanical, key-controlled lock that works in addition to your van?s central locking system.</p>
          <p style={{ marginTop: "1.5em" }}>Hook locks share the benefits of traditional deadlocks, like custom keying, easy installation with minimal cutting, and compact designs. Protecting against ?peel and steal? thefts by helping prevent door bending, they are a good option for those that use their vans to transport valuable tools and supplies.</p>
        </> : <>
        <p>Dead locks are mechanical locks designed to work independently of your vehicle’s existing locking system. Using a straight bolt, typically between 2 and 5 cm in length, they secure the door by engaging with the body of the van. Only operated by a high-security key, they provide an additional layer of security for your van and its contents. Installation kits are specific to the make and model of van, making them easy to install, and they come with all the parts you need.</p>
        <p>As well as being designed to maintain your vehicle’s appearance, they are intended to be installed with minimal work required. This means less of your vehicle’s structure needs to be removed, helping maintain your vehicle’s strength.</p>
      </>}</div><img src={isHook ? "/vanlock/hooklocks-installation.jpg" : "/vanlock/deadlocks-installation.jpeg"} alt={isHook ? "Hook lock installed on a yellow van door" : "Deadlock and key installed on a grey van door"}/>
    </div></section>
    <section className="deadlocks-section deadlocks-features"><div className="deadlocks-grid">
      <img src={isHook ? "/vanlock/hooklocks-features.webp" : "/vanlock/deadlocks-features.jpg"} alt={isHook ? "Opening a white van door secured with a hook lock" : "Independent deadlock fitted to a white van door"}/>
      <div><h2>Key Features &amp; Benefits</h2><p>{isHook ? "Van Hook Locks are an upgrade from traditional locks, offering powerful resistance against forced entry." : "Van Dead Locks offer unmatched mechanical security by adding an independent, high-security locking point to your van doors."}</p><ul>{(isHook ? hookFeatures : features).map(feature => <li key={feature}>{feature}</li>)}</ul></div>
    </div></section>
    <section className="deadlocks-call"><div className="deadlocks-call-inner"><div><h2>Protect Your Van — Upgrade Now!</h2><p>Don’t leave your tools and livelihood at risk. Secure your van with<br/> our premium Dead Locks.</p></div><a href="tel:+447446898025"><span aria-hidden="true">☎</span> +44 07446898025</a></div></section>
    <Testimonials/>
    <LockComparison />
    <section className="deadlocks-faq"><div className="deadlocks-grid"><div><h2>Frequently Asked Question</h2><p>{isHook ? "Here are some of the most common queries we get from customers looking to upgrade their van security." : "If your van has been attacked or you want to prevent one, Repair Plates and External Shields are a simple but powerful defense."}</p></div><div>{(isHook ? hookFaqs : faqs).map(([question, answer], index) => <details key={question} name="deadlocks-faq" open={index === 0}><summary>{question}<span aria-hidden="true">⌄</span></summary><p>{answer}</p></details>)}</div></div></section>
  </main></SiteLayout>;
}

export function LockComparison() {
  return <section className="deadlocks-comparison" aria-label="Van security feature comparison"><div className="deadlocks-table-scroll" tabIndex={0} role="region" aria-label="Scrollable feature comparison"><table><thead><tr><th scope="col">Features</th>{columns.map(column => <th scope="col" key={column}>{column}</th>)}</tr></thead><tbody>{comparison.map(([label, values]) => <tr key={label}><th scope="row">{label}</th>{values.map((value, index) => <td key={columns[index]}><span aria-label={value ? "Included" : "Not included"}>{value ? "×" : "-"}</span></td>)}</tr>)}</tbody></table></div></section>;
}
