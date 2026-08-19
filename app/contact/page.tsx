import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionRule } from "@/components/ui/SectionRule";
import { JsonLd } from "@/components/ui/JsonLd";
import { EnquiryForm } from "@/components/contact/EnquiryForm";
import { breadcrumbListSchema, localBusinessSchema } from "@/lib/schema";
import { offices, contact, firm } from "@/content/site";

export const metadata: Metadata = {
  title: `Contact | ${firm.name}`,
  description:
    "Office addresses, phone numbers and enquiry details for Sagar & Sagar Law Offices in New Delhi and Mumbai.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd
        data={breadcrumbListSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />

      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]} />

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10 sm:py-20">
        <header className="prose-measure">
          <h1 className="font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Contact
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-muted">
            For enquiries, please use the office details below or the form
            further down this page. Nothing on this website constitutes
            legal advice or creates an advocate–client relationship.
          </p>
        </header>

        <SectionRule className="my-14" />

        <section aria-labelledby="offices-heading">
          <h2 id="offices-heading" className="font-serif text-2xl text-ink">
            Offices
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            {offices.map((office) => (
              <div key={office.id} className="border border-line p-6">
                <h3 className="font-serif text-lg text-ink">{office.name}</h3>
                <address className="mt-3 text-sm not-italic leading-relaxed text-ink-muted">
                  {office.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="block">
                    {office.locality}
                    {office.postalCode ? ` – ${office.postalCode}` : ""}, {office.region}
                  </span>
                </address>
                <dl className="mt-4 space-y-1 text-sm">
                  {office.phone && (
                    <div className="flex gap-x-2">
                      <dt className="text-ink-muted">Tel:</dt>
                      <dd>
                        <a href={`tel:${office.phone}`} className="text-accent hover:text-accent-hover">
                          {office.phone}
                        </a>
                      </dd>
                    </div>
                  )}
                </dl>

                {office.partnerContact && (
                  <div className="mt-4 border border-accent bg-paper-raised px-4 py-3">
                    <p className="text-xs uppercase tracking-wide text-accent">
                      Partner contact
                    </p>
                    <a
                      href={`tel:${office.partnerContact.number}`}
                      className="mt-1 block font-serif text-lg text-ink hover:text-accent"
                    >
                      {office.partnerContact.number}
                    </a>
                    <p className="mt-0.5 text-xs text-ink-muted">
                      {office.partnerContact.note}
                    </p>
                  </div>
                )}

                {office.emails && office.emails.length > 0 && (
                  <dl className="mt-4 space-y-1 text-sm">
                    <div className="flex flex-wrap gap-x-2">
                      <dt className="text-ink-muted">Email:</dt>
                      <dd className="flex flex-wrap gap-x-1">
                        {office.emails.map((email, i) => (
                          <span key={email}>
                            <a href={`mailto:${email}`} className="text-accent hover:text-accent-hover">
                              {email}
                            </a>
                            {i < office.emails!.length - 1 && ","}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                )}
              </div>
            ))}
          </div>
        </section>

        <SectionRule className="my-14" />

        <div className="grid gap-14 sm:grid-cols-2">
          <section aria-labelledby="intl-heading" className="prose-measure">
            <h2 id="intl-heading" className="font-serif text-xl text-ink">
              International clients
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-muted">
              {contact.internationalNote}
            </p>
          </section>

          <section aria-labelledby="direct-heading" className="prose-measure">
            <h2 id="direct-heading" className="font-serif text-xl text-ink">
              Direct contact — senior partners
            </h2>
            <ul className="mt-3 space-y-1 text-sm">
              {contact.seniorPartnerDirect.map((number) => (
                <li key={number}>
                  <a href={`tel:${number}`} className="text-accent hover:text-accent-hover">
                    {number}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="emails-heading" className="prose-measure">
            <h2 id="emails-heading" className="font-serif text-xl text-ink">
              Office emails
            </h2>
            <ul className="mt-3 space-y-1 text-sm">
              {contact.officeEmails.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="text-accent hover:text-accent-hover">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="landline-heading" className="prose-measure">
            <h2 id="landline-heading" className="font-serif text-xl text-ink">
              Office landline
            </h2>
            <p className="mt-3 text-sm text-ink-muted">
              <a
                href={`tel:${contact.landline.number}`}
                className="text-accent hover:text-accent-hover"
              >
                {contact.landline.number}
              </a>
              <br />
              {contact.landline.hours}
            </p>
          </section>
        </div>

        <SectionRule className="my-14" />

        <section aria-labelledby="enquiry-heading" className="prose-measure">
          <h2 id="enquiry-heading" className="font-serif text-2xl text-ink">
            Send an enquiry
          </h2>

          <noscript>
            <p className="mt-6 text-sm text-ink-muted">
              This form requires JavaScript to compose an email. With
              JavaScript disabled, please use the office emails or phone
              numbers listed above instead.
            </p>
          </noscript>
          <EnquiryForm />
        </section>
      </div>
    </>
  );
}
