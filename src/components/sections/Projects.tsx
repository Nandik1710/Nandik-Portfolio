import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/project/ProjectCard";
import { SectionTitle } from "@/components/ui/SectionTitle";

export function Projects() {
  return (
    <section id="projects" className="content-section section-shell section-shell--wide" aria-labelledby="projects-title">
      <div className="section-heading">
        <SectionTitle eyebrow="FEATURED PROJECTS" id="projects-title">
          Things I&apos;ve built<br />
          and I&apos;m <span className="serif-accent serif-accent--blue">proud of.</span>
        </SectionTitle>
        <Link className="text-link" href="/projects">View all projects <ArrowUpRight size={15} /></Link>
      </div>
      <div className="project-grid">
        {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  );
}
