// Shared layout primitives for product and application pages.

import Link from "next/link";
import Image from "next/image";

export function Breadcrumbs({
  trail,
}: {
  trail: { name: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm text-slate-600 mb-6">
      <ol className="flex flex-wrap items-center gap-2">
        {trail.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#173178] hover:underline"
              >
                {item.name}
              </Link>
            ) : (
              <span className="text-slate-900 font-medium">{item.name}</span>
            )}
            {i < trail.length - 1 && <span className="text-slate-400">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative bg-gradient-to-br from-[#0f1f4a] via-[#173178] to-[#1f3d8f] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.4) 1px, transparent 1px), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px, 80px 80px",
          }}
        />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-blue-200 mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-blue-100 leading-relaxed max-w-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/#contactus"
              className="inline-flex items-center px-6 py-3 bg-white text-[#173178] font-semibold rounded-md hover:bg-blue-50 transition"
            >
              Request a Quote
            </Link>
            <Link
              href="/#products"
              className="inline-flex items-center px-6 py-3 border border-white/40 text-white font-semibold rounded-md hover:bg-white/10 transition"
            >
              View Full Range
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export function Section({
  id,
  title,
  subtitle,
  children,
  alt = false,
}: {
  id?: string;
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  alt?: boolean;
}) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-20 ${alt ? "bg-slate-50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {title && (
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#173178] mb-3">
              {title}
            </h2>
            {subtitle && (
              <p className="text-lg text-slate-600 leading-relaxed">{subtitle}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function SpecTable({
  rows,
}: {
  rows: { label: string; value: string }[];
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200">
      <table className="w-full text-left">
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
              <th
                scope="row"
                className="py-3 px-5 font-medium text-slate-700 w-1/2 border-r border-slate-200"
              >
                {row.label}
              </th>
              <td className="py-3 px-5 text-slate-900">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function FeatureGrid({
  items,
}: {
  items: { title: string; description: string; icon?: string }[];
}) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <div
          key={i}
          className="p-6 rounded-lg border border-slate-200 bg-white hover:border-[#173178] hover:shadow-md transition"
        >
          {item.icon && (
            <div className="w-12 h-12 mb-4 rounded bg-blue-50 flex items-center justify-center text-2xl">
              {item.icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-[#173178] mb-2">{item.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export function FAQList({
  faqs,
}: {
  faqs: { q: string; a: string }[];
}) {
  return (
    <div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white">
      {faqs.map((faq, i) => (
        <details key={i} className="group p-6">
          <summary className="flex justify-between items-start cursor-pointer list-none">
            <h3 className="text-lg font-semibold text-slate-900 pr-8">{faq.q}</h3>
            <span className="text-[#173178] text-2xl leading-none group-open:rotate-45 transition-transform">
              +
            </span>
          </summary>
          <p className="mt-4 text-slate-700 leading-relaxed">{faq.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="bg-[#173178] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold mb-2">
            Discuss your specifications with our team
          </h2>
          <p className="text-blue-100">
            India&apos;s largest aluminium slug manufacturer. Serving 50+ countries since 1978.
          </p>
        </div>
        <Link
          href="/#contactus"
          className="inline-flex items-center px-8 py-4 bg-white text-[#173178] font-semibold rounded-md hover:bg-blue-50 transition whitespace-nowrap"
        >
          Get in Touch →
        </Link>
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
