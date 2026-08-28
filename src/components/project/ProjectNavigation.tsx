import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

export function ProjectNavigation({ currentSlug }: { currentSlug: string }) {
  const currentIndex = projects.findIndex((project) => project.slug === currentSlug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <nav className="project-navigation" aria-label="Project navigation">
      <Link className="project-navigation__back" href="/projects"><ArrowLeft size={16} /> Back to all projects</Link>
      <Link className="project-navigation__next" href={`/projects/${nextProject.slug}`}>
        <span><small>NEXT PROJECT</small><strong>{nextProject.title}</strong></span><ArrowRight size={19} />
      </Link>
    </nav>
  );
}
