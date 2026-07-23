import {
  contactBar,
  partnerPhoneDisplay,
  partnerPhoneTel,
  whatsappHref,
} from "@/content/lpo";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 fill-current"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.001 2C6.478 2 2 6.477 2 12c0 1.86.508 3.664 1.472 5.24L2.05 22l4.918-1.29A9.95 9.95 0 0 0 12 22c5.523 0 10-4.477 10-10S17.524 2 12.001 2zm0 18.03a8.01 8.01 0 0 1-4.086-1.117l-.293-.174-3.036.796.81-2.96-.19-.303A8.01 8.01 0 0 1 4 12c0-4.418 3.582-8 8-8 4.419 0 8 3.582 8 8 0 4.419-3.581 8-7.999 8z" />
    </svg>
  );
}

// Top-of-page contact band per lpo-international-page.md §B.2: bordered,
// above the fold, the partner number as the single most prominent element.
export function ContactBar() {
  return (
    <div className="border-y border-line bg-paper-raised">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-10">
        <p className="text-sm font-medium text-ink">{contactBar.intro}</p>

        <div className="mt-3 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <a
            href={`tel:${partnerPhoneTel}`}
            className="font-serif text-3xl tracking-tight text-ink hover:text-accent sm:text-4xl"
          >
            {partnerPhoneDisplay}
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-line px-3 py-1.5 text-sm text-ink hover:border-accent hover:text-accent"
          >
            <WhatsAppIcon />
            WhatsApp
          </a>
        </div>

        <dl className="mt-5 grid gap-x-8 gap-y-2 text-sm text-ink-muted sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <dt className="sr-only">LPO desk email</dt>
            <dd>
              {contactBar.deskEmails.map((email, i) => (
                <span key={email}>
                  <a href={`mailto:${email}`} className="text-accent hover:text-accent-hover">
                    {email}
                  </a>
                  {i < contactBar.deskEmails.length - 1 ? " · " : ""}
                </span>
              ))}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Office landline</dt>
            <dd>
              <a
                href={`tel:${contactBar.landline.number}`}
                className="text-accent hover:text-accent-hover"
              >
                {contactBar.landline.number}
              </a>{" "}
              ({contactBar.landline.hours})
            </dd>
          </div>
          <div className="sm:col-span-2 lg:col-span-2">
            <dt className="sr-only">Desk location</dt>
            <dd>{contactBar.deskLocation}</dd>
          </div>
        </dl>

        <p className="prose-measure mt-4 text-xs leading-relaxed text-ink-muted">
          {contactBar.note}
        </p>
      </div>
    </div>
  );
}
