import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { ProjectCard } from "@/components/project/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description: "Selected project case studies by Nandik Dawar.",
  alternates: { canonical: "/projects" },
  openGraph: { title: "Projects | Nandik Dawar", description: "Selected project case studies by Nandik Dawar.", url: "/projects", images: ["/opengraph-image"] },
};

export default function ProjectsPage() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main className="projects-index page-shell">
        <div className="projects-index__intro">
          <Link className="back-link" href="/"><ArrowLeft size={15} /> Back home</Link>
          <div>
            <p className="section-kicker">SELECTED WORK <span>✦</span></p>
            <h1>A few things I&apos;ve built.</h1>
          </div>
          <p className="projects-index__copy">A collection of product experiments, workflow systems and full-stack builds shaped around real problems.</p>
        </div>
        <div className="project-grid project-grid--index">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
        <Link className="text-link projects-index__footer-link" href="/#contact">Have something in mind? <ArrowUpRight size={15} /></Link>
      </main>
      <Footer />
    </>
  );
}
