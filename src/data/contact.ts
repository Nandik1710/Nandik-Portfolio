import type { ContactDetail } from "@/types";
import { socialLinks } from "@/lib/site";

export const contactDetails: ContactDetail[] = [
  { label: "Email", value: "nandik1710@gmail.com", href: socialLinks.email, icon: "mail" },
  { label: "LinkedIn", value: "linkedin.com/in/nandikdawar", href: socialLinks.linkedin, icon: "linkedin" },
  { label: "GitHub", value: "github.com/Nandik1710", href: socialLinks.github, icon: "github" },
  { label: "Location", value: "New Delhi, India", icon: "location" },
];
