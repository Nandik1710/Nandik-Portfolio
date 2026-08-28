import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ProjectCaseStudy } from "@/components/project/ProjectCaseStudy";
import { projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  return project
    ? {
        title: project.title,
        description: project.description,
        alternates: { canonical: `/projects/${project.slug}` },
        openGraph: { type: "article", title: `${project.title} | Nandik Dawar`, description: project.description, url: `/projects/${project.slug}`, images: ["/opengraph-image"] },
        twitter: { card: "summary_large_image", title: `${project.title} | Nandik Dawar`, description: project.description, images: ["/opengraph-image"] },
      }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className={`case-page case-page--${project.accent}`} id={`project-${slug}`}>
        <ProjectCaseStudy project={project} />
      </main>
      <Footer />
    </>
  );
}
