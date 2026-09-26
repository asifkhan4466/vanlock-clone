import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "../../components/SiteChrome";
import { EstimateBanner, PageBanner } from "../../components/ReferenceSections";
import { vans } from "../../site-data";

export function generateStaticParams() { return vans.map(v => ({ make: v.slug.split("/")[1], model: v.slug.split("/")[2] })); }
export default async function VanModelPage({ params }: PageProps<"/[make]/[model]">) {
  const { make, model } = await params;
  const van = vans.find(v => v.slug === `/${make}/${model}`);
  if (!van) notFound();
  return <SiteLayout><main><PageBanner title={`${van.brand} ${van.name}`}/><section className="route-content"><div className="container model-detail"><img src={van.image} alt={`${van.brand} ${van.name} van`}/><div><p className="eyebrow">CHOOSE YOUR VAN</p><h2>Van Security Solutions for {van.brand} {van.name}</h2><Link className="button" href="/contact">Get a Quote <span>→</span></Link></div></div></section><EstimateBanner/></main></SiteLayout>;
}
