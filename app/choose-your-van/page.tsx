import Link from "next/link";
import { SiteLayout } from "../components/SiteChrome";
import { PageBanner } from "../components/ReferenceSections";
import { makes, vans } from "../site-data";

export default function ChooseYourVanPage() { return <SiteLayout><main><PageBanner title="Choose Your Van"/><section className="route-content"><div className="container"><div className="services-title"><p className="eyebrow">CHOOSE YOUR VAN</p><h2>Choose Your Van</h2><p>Please select a Vehicle Manufacturer below to browse our vehicle-specific security solutions.</p></div><div className="manufacturer-grid">{makes.map(([name, slug]) => <Link href={`/${slug}`} key={slug}><span>›</span>{name}</Link>)}</div><div className="van-grid route-van-grid">{vans.map(v => <Link className="van-card" href={v.slug} key={v.slug}><div className="van-photo" style={{ backgroundImage: `url('${v.image}')` }}/><div className="van-info"><h3>{v.brand}</h3><small>{v.name}</small></div></Link>)}</div></div></section></main></SiteLayout>; }
