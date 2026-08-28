import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { TechBadge } from "@/components/ui/TechBadge";
import Image from "next/image";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <header className={`case-hero case-hero--${project.accent}`}>
      <div className="case-hero__copy">
        <Link className="back-link" href="/projects"><ArrowLeft size={15} /> All projects</Link>
        <Badge>{project.category}</Badge>
        <h1>{project.title}</h1>
        <p className="case-hero__subtitle">{project.subtitle}</p>
        <p className="case-hero__description">{project.description}</p>
        <div className="case-hero__actions">
          {project.live ? <a className="button button--coral" href={project.live} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={15} /></a> : null}
          {project.github ? <a className="button button--outline" href={project.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a> : null}
        </div>
        <div className="case-stack" aria-label="Technology stack">
          {project.technologies.map((technology) => <TechBadge key={technology} name={technology} />)}
        </div>
        <dl className="case-meta">
          {project.role ? <div><dt>Role</dt><dd>{project.role}</dd></div> : null}
          {project.timeline ? <div><dt>Timeline</dt><dd>{project.timeline}</dd></div> : null}
          <div><dt>Category</dt><dd>{project.category}</dd></div>
          <div><dt>Stack</dt><dd>{project.technologies.length} technologies</dd></div>
        </dl>
      </div>
      <div
        className={`case-visual case-visual--${project.visualTreatment} ${project.image ? "case-visual--image" : ""
          }`}
        role="img"
        aria-label={`Visual preview for ${project.title}`}
      >
        {project.image ? (
          <Image
            className="case-visual__image"
            src={project.image}
            alt={`Preview of the ${project.title} project`}
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
          />
        ) : (
          <>
            <div className="case-visual__topline">
              <span>PROJECT STUDY</span>
              <span>/{project.slug}</span>
            </div>

            <div className="case-visual__window">
              <div className="case-visual__window-bar">
                <i />
                <i />
                <i />
              </div>

              <div className="case-visual__window-content">
                <span className="case-visual__label">{project.title}</span>
                <strong>
                  {project.visualTreatment === "document"
                    ? "Extract → organise → understand"
                    : project.visualTreatment === "interview"
                      ? "Interview flow / ready"
                      : project.visualTreatment === "wellness"
                        ? "A calmer daily rhythm"
                        : "Find the right ride"}
                </strong>
                <div className="case-visual__bars">
                  <b />
                  <b />
                  <b />
                </div>
              </div>
            </div>

            <span className="case-visual__stamp">
              VISUAL DIRECTION
              <br />
              NO SOURCE SCREENSHOT
            </span>
          </>
        )}
      </div>
    </header>
  );
}
