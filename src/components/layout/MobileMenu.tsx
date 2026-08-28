"use client";

import { ArrowUpRight, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation, socialLinks } from "@/lib/site";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const sectionHref = (href: string) => pathname === "/" ? href : `/${href}`;

  return (
    <div className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="mobile-menu__backdrop" onClick={onClose} />
      <aside className="mobile-menu__panel" aria-label="Mobile navigation">
        <div className="mobile-menu__topline">
          <span className="brand-mark">ND</span>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        <nav className="mobile-menu__links">
          {navigation.map((item, index) => (
            <Link key={item.href} href={sectionHref(item.href)} onClick={onClose} tabIndex={open ? 0 : -1}>
              <span className="mobile-menu__index">0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__footer">
          <p>Find me online</p>
          <div className="mobile-menu__socials">
            <a href={socialLinks.github} aria-label="GitHub">GitHub</a>
            <a href={socialLinks.linkedin} aria-label="LinkedIn">LinkedIn</a>
            <a href={socialLinks.email} aria-label="Email">Email</a>
          </div>
          <div className="mobile-code-card" aria-hidden="true">
            <span>const</span> developer = <span>&#123;</span>
            <br />
            &nbsp;&nbsp;focus: <em>&quot;impact&quot;</em>
            <br />
            <span>&#125;</span>;
          </div>
        </div>
      </aside>
    </div>
  );
}
