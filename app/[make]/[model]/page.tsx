import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "../../components/SiteChrome";
import { EstimateBanner, Testimonials } from "../../components/ReferenceSections";
import { vans } from "../../site-data";

export function generateStaticParams() {
  return vans.map((van) => ({ make: van.slug.split("/")[1], model: van.slug.split("/")[2] }));
}

const lockServices = [
  { slug: "van-dead-locks", title: "Van Dead Locks", description: "Deadlocks are mechanical locks designed to work independently of your van’s central locking system.", type: "deadlock" },
  { slug: "van-hook-locks", title: "Van Hook Locks", description: "A hook lock is a variant of the deadlock that uses a hook bolt to engage with the van body.", type: "hooklock" },
  { slug: "van-slam-locks", title: "Van Slam Locks", description: "Slam locks ensure the door locks automatically every time it is closed.", type: "slamlock" },
  { slug: "van-statement-lock", title: "Van Statement Lock", description: "Statement locks fit across your van doors, bracing them to provide added security.", type: "statement" },
  { slug: "replacement-lock-for-ford", title: "Replacement Lock For Ford", description: "A high-security replacement lock for your existing Ford van lock.", type: "replacement" },
  { slug: "repair-plate-or-external-shield", title: "Repair Plate Or External Shield", description: "Reinforce vulnerable lock areas with a repair plate or external shield.", type: "shield" },
];

function LockIllustration({ type }: { type: string }) {
  return <div className={`model-lock-illustration ${type}`} aria-hidden="true">
    <svg viewBox="0 0 120 120" fill="none">
      {type === "hooklock" ? <><rect x="31" y="19" width="18" height="82" rx="5"/><rect x="72" y="19" width="18" height="82" rx="5"/><path d="M49 43h13v28H49m41-28H77v28h13"/></> :
        type === "slamlock" || type === "replacement" ? <><circle cx="60" cy="60" r="33"/><circle cx="60" cy="60" r="20"/><path d="M60 42v18l13 9"/></> :
          type === "statement" ? <><rect x="24" y="32" width="72" height="56" rx="12"/><path d="M38 43v34m44-34v34M48 60h24"/><circle cx="60" cy="60" r="8"/></> :
            <><rect x="38" y="48" width="44" height="43" rx="6"/><path d="M47 48V37a13 13 0 0 1 26 0v11"/><circle cx="60" cy="66" r="4"/><path d="M60 70v9"/></>}
    </svg>
  </div>;
}

function FittingPositions({ olderCustom, renaultTrafic, vauxhallVivaro, vwTransporter }: { olderCustom: boolean; renaultTrafic: boolean; vauxhallVivaro: boolean; vwTransporter: boolean }) {
  const positions = olderCustom
    ? [
        ["High", "door", ""], ["Mid", "unavailable", ""], ["Low", "door", ""],
        ["High", "door", "(Not suitable for glazed)"], ["Mid", "door", "(Not suitable for glazed)"], ["Low", "door", ""],
      ]
    : renaultTrafic
      ? [
          ["High", "door", ""], ["Mid", "unavailable", ""], ["Low", "door", ""],
          ["High", "door", ""], ["Mid", "door", "(Not suitable for glazed)"], ["Low", "door", ""],
        ]
      : vauxhallVivaro
        ? [
            ["High", "door", ""], ["Mid", "unavailable", ""], ["Low", "door", "(Suitable for SWB only)"],
            ["High", "door", ""], ["Mid", "door", "(Suitable for glazed)"], ["Low", "door", ""],
          ]
        : vwTransporter
          ? [
              ["High", "door", ""], ["Mid", "unavailable", ""], ["Low", "door", ""],
              ["High", "door", ""], ["Mid", "door", ""], ["Low", "door", ""],
            ]
      : [
          ["High", "door", "(Not suitable for glazed)"], ["Mid", "unavailable", ""], ["Low", "door", "(Suitable for glazed)"],
          ["High", "door", "(Not suitable for glazed)"], ["Mid", "door", "(Suitable for glazed)"], ["Low", "door", "(Suitable for glazed)"],
        ];
  return <section className="model-fitting container">
    <h2>Hooklock/Deadlock Fitting Positions Available</h2>
    <div className="fitting-panel">
      <div className="fitting-group"><h3>Side Door</h3>{positions.slice(0, 3).map(([label, state, note]) => <div className="fitting-position" key={label}><b>{label}</b><span className={state === "door" ? "fitting-lock" : "fitting-unavailable"}>{state === "door" ? "▮" : "×"}</span>{note && <small>{note}</small>}</div>)}</div>
      <div className="fitting-group"><h3>Barn Doors</h3>{positions.slice(3).map(([label, state, note]) => <div className="fitting-position" key={label}><b>{label}</b><span className="fitting-lock">▮</span>{note && <small>{note}</small>}</div>)}</div>
    </div>
  </section>;
}

export default async function VanModelPage({ params }: PageProps<"/[make]/[model]">) {
  const { make, model } = await params;
  const van = vans.find((item) => item.slug === `/${make}/${model}`);
  if (!van) notFound();
  const olderCustom = van.slug === "/ford/custom-2012-2023";
  const renaultTrafic = van.slug === "/renault/trafic-2014";
  const vauxhallVivaro = van.slug === "/vauxhall/vivaro-2019";
  const vwTransporter = van.slug === "/volkswagen/transporter-t6-1-2020";
  const displayBrand = vwTransporter ? "VW" : van.brand;

  return <SiteLayout><main className="model-page">
    <section className="model-product-hero"><div className="container model-product-inner">
      <div className="model-product-copy"><h1>{displayBrand} {van.name}{olderCustom ? "" : ">"} Locks And Security Solutions</h1>{vauxhallVivaro && <h2 className="model-variant-note">Also Includes Electric &amp; Hybrid Variants</h2>}<p>{olderCustom ? <>Browse L4V’s range of locks and security solutions for the Ford Custom 2012-2023 Click here for <Link href="/ford/custom-2023">Custom 2023&gt;</Link></> : <>Browse L4V’s range of locks and security solutions for the {van.brand} {van.name}&gt;</>}</p><a className="button" href="tel:+447367674000"><span aria-hidden="true">☎</span>07367674000</a></div>
      <img src={van.image} alt={`${van.brand} ${van.name} van`} />
    </div></section>
    <FittingPositions olderCustom={olderCustom} renaultTrafic={renaultTrafic} vauxhallVivaro={vauxhallVivaro} vwTransporter={vwTransporter} />
    <section className="model-lock-services container" aria-label="Van security solutions">
      {lockServices.map((item) => <article className="model-lock-card" key={item.slug}><LockIllustration type={item.type}/><h2>{item.title}</h2><p>{item.description}</p><Link href={`/our-services/${item.slug}`}>Learn More <span aria-hidden="true">→</span></Link></article>)}
    </section>
    <EstimateBanner />
    <Testimonials />
  </main></SiteLayout>;
}
