import { footerContactBlock, partnerPhoneDisplay, partnerPhoneTel, whatsappHref } from "@/content/lpo";

// Foot-of-page contact section per lpo-international-page.md §14/§B.2: a
// distinct bordered block, separate from the site-wide footer.
export function ContactBlock() {
  const b = footerContactBlock;

  return (
    <div className="border border-line p-8 sm:p-10">
      <h2 className="font-serif text-2xl text-ink">{b.heading}</h2>

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="text-sm text-ink-muted">
            Direct partner line — urgent enquiries
            <br />
            <a
              href={`tel:${partnerPhoneTel}`}
              className="font-serif text-xl text-ink hover:text-accent"
            >
              {partnerPhoneDisplay}
            </a>{" "}
            <span className="text-xs">
              (
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover">
                WhatsApp
              </a>{" "}
              and phone)
            </span>
          </p>

          <p className="mt-4 text-sm text-ink-muted">
            Email
            <br />
            {b.emails.map((email) => (
              <span key={email} className="block">
                <a href={`mailto:${email}`} className="text-accent hover:text-accent-hover">
                  {email}
                </a>
              </span>
            ))}
          </p>

          <p className="mt-4 text-sm text-ink-muted">
            Office landline
            <br />
            <a href={`tel:${b.landline.number}`} className="text-accent hover:text-accent-hover">
              {b.landline.number}
            </a>{" "}
            ({b.landline.hours})
          </p>

          <p className="mt-4 text-sm text-ink-muted">
            {b.deskLabel}
            <br />
            {b.deskLocation}
          </p>
        </div>

        <div className="text-sm text-ink-muted">
          <p>
            <span className="text-ink">{b.principalOffice.label}</span>
            <br />
            {b.principalOffice.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <p className="mt-4">
            <span className="text-ink">{b.delhiChamber.label}</span>
            <br />
            {b.delhiChamber.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a href={`tel:${b.delhiChamber.phone}`} className="text-accent hover:text-accent-hover">
              Tel: {b.delhiChamber.phone}
            </a>
          </p>

          <p className="mt-4">
            <span className="text-ink">{b.mumbaiOffice.label}</span>
            <br />
            {b.mumbaiOffice.lines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>

          <p className="mt-4">
            <span className="text-ink">Web:</span> {b.web}
          </p>
        </div>
      </div>

      <p className="prose-measure mt-6 text-xs leading-relaxed text-ink-muted">{b.note}</p>
    </div>
  );
}
