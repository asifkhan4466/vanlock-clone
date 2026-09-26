import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "../components/SiteChrome";
import { PageBanner } from "../components/ReferenceSections";
import { makes, vans } from "../site-data";

export function generateStaticParams() { return makes.map(([, slug]) => ({ make: slug })); }
export default async function ManufacturerPage({ params }: PageProps<"/[make]">) {
  const { make } = await params;
  const manufacturer = makes.find(([, slug]) => slug === make);
  if (!manufacturer) notFound();
  const available = vans.filter(v => v.slug.split("/")[1] === make);
  return <SiteLayout><main><PageBanner title={manufacturer[0]}/><section className="route-content"><div className="container"><div className="services-title"><p className="eyebrow">CHOOSE YOUR VAN</p><h2>{manufacturer[0]} Vans</h2></div>{available.length > 0 && <div className="van-grid route-van-grid">{available.map(v => <Link className="van-card" href={v.slug} key={v.slug}><div className="van-photo" style={{ backgroundImage: `url('${v.image}')` }}/><div className="van-info"><h3>{v.brand}</h3><small>{v.name}</small></div></Link>)}</div>}<Link className="text-route-link" href="/choose-your-van">← All Manufacturers</Link></div></section></main></SiteLayout>;
}
