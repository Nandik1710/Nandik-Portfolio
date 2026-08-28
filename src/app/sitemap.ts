import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { projects } from "@/data/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/projects", ...projects.map((project) => `/projects/${project.slug}`)];
  return routes.map((route) => ({ url: absoluteUrl(route), lastModified: new Date() }));
}
