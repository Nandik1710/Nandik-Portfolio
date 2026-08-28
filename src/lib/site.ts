export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

export const socialLinks = {
  github: "https://github.com/Nandik1710",
  linkedin: "https://www.linkedin.com/in/nandikdawar/",
  email: "mailto:nandik1710@gmail.com",
} as const;

export const heroStats = [
  { value: "2+", label: "Internships", icon: "briefcase" },
  { value: "4+", label: "Major Projects", icon: "layers" },
  { value: "2", label: "Hackathon Wins", icon: "trophy" },
  { value: "AWS", label: "Certified", icon: "cloud" },
] as const;
