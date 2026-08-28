import { ArrowUp } from "lucide-react";
import Link from "next/link";
import { socialLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <p>© 2026 Nandik Dawar. All rights reserved.</p>
      <p>Built with <span aria-label="love">♥</span> and lots of <span aria-label="coffee">☕</span></p>
      <div className="footer-right">
        <div className="footer-socials">
          <a href={socialLinks.github} aria-label="GitHub">GH</a>
          <a href={socialLinks.linkedin} aria-label="LinkedIn">in</a>
          <a href={socialLinks.email} aria-label="Email">@</a>
        </div>
        <Link href="#home">Back to top <ArrowUp size={15} /></Link>
      </div>
    </footer>
  );
}
