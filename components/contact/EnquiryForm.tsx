"use client";

import { useRef, useState } from "react";
import { contact } from "@/content/site";

// Static hosting (Hostinger shared/Premium) has no server to POST to, so
// this composes a mailto: link from the field values instead of submitting
// anywhere — no backend, no third-party form service, consistent with the
// original brief's "do not wire to any third-party service" constraint.
export function EnquiryForm() {
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    const mailto = `mailto:${contact.officeEmails[0]}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setSent(true);
  }

  if (sent) {
    return (
      <p role="status" className="mt-6 border border-accent px-4 py-3 text-sm text-ink">
        Your email application should now be open with your enquiry
        pre-filled. If it did not open, please email{" "}
        <a
          href={`mailto:${contact.officeEmails[0]}`}
          className="text-accent hover:text-accent-hover"
        >
          {contact.officeEmails[0]}
        </a>{" "}
        directly.
      </p>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="subject" className="block text-sm text-ink">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus-visible:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full border border-line bg-paper px-4 py-3 text-sm text-ink outline-none focus-visible:border-accent"
        />
      </div>
      <button
        type="submit"
        className="border border-ink px-6 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
      >
        Send enquiry
      </button>
      <p className="text-xs text-ink-muted">
        This opens your email application with the details above pre-filled
        — nothing is submitted to this website or any third party. Nothing
        submitted constitutes legal advice or creates an advocate–client
        relationship.
      </p>
    </form>
  );
}
