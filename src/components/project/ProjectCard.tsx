import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { TechBadge } from "@/components/ui/TechBadge";
import Image from "next/image";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={"project-card project-card--" + project.accent}>
      <Link className="project-card__link" href={"/projects/" + project.slug} aria-label={"View " + project.title + " case study"}>
        <div className="project-card__visual">
          {project.cardImage ? (
            <Image
              className="project-card__image"
              src={project.cardImage}
              alt={`${project.title} project card preview`}
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 25vw"
            />
          ) : (
            <div className="project-mockup" aria-hidden="true">
              <div />
              <div />
              <div />
              <div />
            </div>
          )}

          <span className="project-card__category">{project.category}</span>

          <span className="project-card__arrow" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        </div>
        <div className="project-card__body">
          <h3>{project.title}</h3>
          <p>{project.shortDescription}</p>
          <div className="tech-list">{project.technologies.map((technology) => <TechBadge key={technology} name={technology} />)}</div>
        </div>
      </Link>
    </article>
  );
}
