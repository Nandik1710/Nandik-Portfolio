import { ArrowUpRight, GitBranch, Link2, Mail, MapPin } from "lucide-react";
import { contactDetails } from "@/data/contact";
import { ContactForm } from "./ContactForm";

const icons = { mail: Mail, linkedin: Link2, github: GitBranch, location: MapPin };

export function Contact() {
  const emailDetail = contactDetails.find((detail) => detail.icon === "mail");

  return (
    <section id="contact" className="contact-section section-shell" aria-labelledby="contact-title">
      <div>
        <p className="section-kicker">LET&apos;S CONNECT <span>✦</span></p>
        <h2 id="contact-title">Have a project<br /><span className="serif-accent serif-accent--coral">in mind?</span></h2>
        <p className="contact-copy">I&apos;m always open to discussing interesting opportunities, collaborations or ideas. Drop me a message and I&apos;ll get back to you.</p>
        <div className="contact-details">
          {contactDetails.map((detail) => {
            const Icon = icons[detail.icon as keyof typeof icons];
            const content = <><Icon size={16} /> <span><small>{detail.label}</small>{detail.value}</span></>;
            return detail.href ? <a key={detail.label} href={detail.href} target={detail.href.startsWith("http") ? "_blank" : undefined} rel={detail.href.startsWith("http") ? "noreferrer" : undefined}>{content}</a> : <span key={detail.label}>{content}</span>;
          })}
        </div>
        <a className="button button--coral" href={emailDetail?.href ?? "#contact"}>Let&apos;s Connect <ArrowUpRight size={17} /></a>
      </div>
      <div className="contact-form-panel"><ContactForm /></div>
    </section>
  );
}
