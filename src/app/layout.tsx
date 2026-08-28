import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { absoluteUrl, siteUrl } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nandik Dawar | Full Stack Developer",
    template: "%s | Nandik Dawar",
  },
  description:
    "Full Stack Developer building scalable web applications, cloud solutions and intelligent systems.",
  applicationName: "Nandik Dawar Portfolio",
  authors: [{ name: "Nandik Dawar", url: "https://github.com/Nandik1710" }],
  creator: "Nandik Dawar",
  alternates: { canonical: absoluteUrl("/") },
  keywords: ["Nandik Dawar", "Full Stack Developer", "React", "Node.js", "FastAPI", "QA Automation"],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl("/"),
    siteName: "Nandik Dawar Portfolio",
    title: "Nandik Dawar | Full Stack Developer",
    description: "Scalable web applications, cloud solutions and intelligent systems.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Nandik Dawar — Full Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nandik Dawar | Full Stack Developer",
    description: "Scalable web applications, cloud solutions and intelligent systems.",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            { "@type": "Person", name: "Nandik Dawar", url: siteUrl, jobTitle: "Full Stack Developer", sameAs: ["https://github.com/Nandik1710", "https://www.linkedin.com/in/nandikdawar/"] },
            { "@type": "WebSite", name: "Nandik Dawar Portfolio", url: siteUrl, description: "Full Stack Developer building scalable web applications, cloud solutions and intelligent systems." },
          ],
        }) }} />
      </body>
    </html>
  );
}
