import Link from "next/link";

export function PageBanner({ title, image = "/vanlock/main-banner-images.jpg" }: { title: string; image?: string }) {
  return <section className="reference-banner" style={{ backgroundImage: `linear-gradient(110deg,rgba(16,110,176,.78),rgba(8,23,34,.76)),url('${image}')` }}><h1>{title}</h1></section>;
}

const reviews = [
  ["VanLock transformed the way we secure our vans. Their team was prompt, professional, and the system works flawlessly. Highly recommended.", "Daniel Morris", "West Yorkshire", "/vanlock/testimonial-daniel.jpg"],
  ["Reliable service from start to finish. The GPS tracking and smart lock system gave us peace of mind. VanLock truly understands van owners’ needs.", "Karen Doyle", "Surrey", "/vanlock/testimonial-karen.jpg"],
  ["Excellent experience with VanLock. Installation was quick, and support is always responsive. Our vans feel safer than ever.", "Stephen Patel", "Greater Manchester", "/vanlock/testimonial-stephen.jpg"],
];
export function Testimonials() { return <section className="testimonial section"><div className="container"><div className="testimonial-heading"><p className="eyebrow">TESTIMONIALS</p><h2>Why Van Owners Trust VanLock</h2></div><div className="review-grid">{reviews.map(([quote, name, area, image]) => <article className="review-card" key={name}><span className="review-stars">★★★★★</span><blockquote>{quote}</blockquote><div className="review-person"><img className="avatar" src={image} alt=""/><div><b>{name}</b><small>{area}</small></div></div></article>)}</div></div></section>; }

export function EstimateBanner() { return <section className="estimate-banner"><div className="estimate-banner-inner"><div className="estimate-banner-copy"><p>ESTIMATE FOR YOUR PROJECT</p><h2>Ready to get an Estimate<br/>for your Project?</h2></div><Link className="button" href="/contact">Get a Quote <span aria-hidden="true">→</span></Link></div></section>; }
