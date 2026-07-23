import Link from "next/link";
import { footerSitemap, practiceAreaLinks } from "@/content/nav";
import { firm, offices, contact, disclaimerPlaceholder } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-14 sm:px-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <p className="font-serif text-lg text-ink">{firm.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">
              In practice since {firm.foundingDate}. New Delhi, Mumbai and
              associated counsel across India.
            </p>
          </div>

          <nav aria-label="Firm">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Firm
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerSitemap.firm.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Practice areas">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Practice areas
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {practiceAreaLinks.slice(0, 6).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink hover:text-accent">
                    {item.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="text-accent hover:text-accent-hover">
                  View all practice areas →
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="International">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              International
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerSitemap.international.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-ink hover:text-accent">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Offices
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-muted">
              {offices.map((office) => (
                <li key={office.id}>
                  <p className="text-ink">{office.name}</p>
                  {office.phone && <p>{office.phone}</p>}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="my-10 border-line" />

        <div className="flex flex-col gap-4 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {firm.name}. {contact.officeEmails.join(" · ")}
          </p>
          <p>
            Landline: {contact.landline.number} ({contact.landline.hours})
          </p>
        </div>

        <p className="prose-measure mt-6 text-xs leading-relaxed text-ink-muted">
          {disclaimerPlaceholder}
        </p>
      </div>
    </footer>
  );
}
