"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { contactSchema, initialContactValues, type ContactFormValues } from "@/lib/contact";

type FormStatus = "idle" | "sending" | "success" | "error";
type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialContactValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formMessage, setFormMessage] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status === "error") {
      setStatus("idle");
      setFormMessage("");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const parsed = contactSchema.safeParse(values);
    if (!parsed.success) {
      const nextErrors: FormErrors = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactFormValues | undefined;
        if (field && !nextErrors[field]) nextErrors[field] = issue.message;
      });
      setErrors(nextErrors);
      setStatus("error");
      setFormMessage("Please check the highlighted fields.");
      return;
    }

    setStatus("sending");
    setErrors({});
    setFormMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const result = await response.json() as { message?: string; error?: string; fields?: FormErrors };

      if (!response.ok) {
        setErrors(result.fields ?? {});
        setStatus("error");
        setFormMessage(result.error ?? "We could not send your message right now. Please try again later.");
        return;
      }

      setValues(initialContactValues);
      setStatus("success");
      setFormMessage(result.message ?? "Message sent successfully. I’ll get back to you soon.");
    } catch {
      setStatus("error");
      setFormMessage("We could not send your message right now. Please try again later.");
    }
  }

  const fieldError = (field: keyof ContactFormValues) => errors[field];

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate aria-labelledby="contact-form-title">
      <div className="contact-form__intro">
        <p className="section-kicker">SEND A NOTE <span>✦</span></p>
        <h3 id="contact-form-title">Let&apos;s make something useful.</h3>
        <p>Tell me a little about what you&apos;re working on and I&apos;ll reply by email.</p>
      </div>
      <div className="contact-form__grid">
        <div className="form-field">
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" name="name" value={values.name} onChange={handleChange} autoComplete="name" aria-invalid={Boolean(fieldError("name"))} aria-describedby={fieldError("name") ? "contact-name-error" : undefined} required />
          {fieldError("name") ? <p className="form-error" id="contact-name-error">{fieldError("name")}</p> : null}
        </div>
        <div className="form-field">
          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" value={values.email} onChange={handleChange} autoComplete="email" aria-invalid={Boolean(fieldError("email"))} aria-describedby={fieldError("email") ? "contact-email-error" : undefined} required />
          {fieldError("email") ? <p className="form-error" id="contact-email-error">{fieldError("email")}</p> : null}
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="contact-subject">Subject</label>
          <input id="contact-subject" name="subject" value={values.subject} onChange={handleChange} aria-invalid={Boolean(fieldError("subject"))} aria-describedby={fieldError("subject") ? "contact-subject-error" : undefined} required />
          {fieldError("subject") ? <p className="form-error" id="contact-subject-error">{fieldError("subject")}</p> : null}
        </div>
        <div className="form-field form-field--full">
          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" value={values.message} onChange={handleChange} rows={5} aria-invalid={Boolean(fieldError("message"))} aria-describedby={fieldError("message") ? "contact-message-error" : undefined} required />
          {fieldError("message") ? <p className="form-error" id="contact-message-error">{fieldError("message")}</p> : null}
        </div>
        <div className="form-field form-field--honeypot" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" value={values.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
        </div>
      </div>
      <div className="contact-form__footer">
        <button className="button button--coral" type="submit" disabled={status === "sending"} aria-busy={status === "sending"}>{status === "sending" ? "Sending…" : "Send message"}</button>
        <p className={`form-status form-status--${status}`} aria-live="polite" role={status === "error" ? "alert" : "status"}>{formMessage}</p>
      </div>
    </form>
  );
}
