import { BookOpen, Layers3, Lightbulb, Wrench } from "lucide-react";
import { Reveal } from "@/components/animations/Reveal";
import { ProjectArchitecture } from "@/components/project/ProjectArchitecture";
import { ProjectHero } from "@/components/project/ProjectHero";
import { ProjectNavigation } from "@/components/project/ProjectNavigation";
import { TechBadge } from "@/components/ui/TechBadge";
import type { Project } from "@/types";

function StoryBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <article className="case-story-block">
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}

export function ProjectCaseStudy({ project }: { project: Project }) {
  return (
    <>
      <ProjectHero project={project} />
      <div className="case-content">
        <Reveal className="case-overview">
          <div className="case-section-heading">
            <p className="section-kicker">THE SHORT VERSION <span>✦</span></p>
            <h2>From a real problem to a considered product flow.</h2>
          </div>
          <p className="case-overview__copy">{project.overview}</p>
          <div className="case-concepts" aria-label="Key project concepts">
            {project.keyConcepts.map((concept) => <span key={concept}>{concept}</span>)}
          </div>
        </Reveal>

        <Reveal className="case-story-grid">
          <StoryBlock title="Problem">{project.problem}</StoryBlock>
          <StoryBlock title="Solution">{project.solution}</StoryBlock>
        </Reveal>

        <Reveal className="case-section case-section--architecture">
          <div className="case-section-heading case-section-heading--split">
            <div><p className="section-kicker">HOW IT FITS TOGETHER <span>✦</span></p><h2>Architecture</h2></div>
            <p>Each step is shown as a readable flow so the system stays legible on both wide and narrow screens.</p>
          </div>
          <ProjectArchitecture steps={project.architecture} />
        </Reveal>

        <Reveal className="case-detail-grid">
          <section className="case-detail-card">
            <div className="case-detail-card__icon"><Layers3 size={18} /></div>
            <h2>Features</h2>
            <ul className="case-feature-list">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          </section>
          <section className="case-detail-card case-detail-card--accent">
            <div className="case-detail-card__icon"><Lightbulb size={18} /></div>
            <h2>Technology choices</h2>
            <p>The stack keeps the project’s core layers visible: interface, APIs, services, storage, automation and the supporting AI or authentication pieces named in the brief.</p>
            <div className="case-stack case-stack--detail">{project.technologies.map((technology) => <TechBadge key={technology} name={technology} />)}</div>
          </section>
        </Reveal>

        <Reveal className="case-section case-section--visuals">
          <div className="case-section-heading">
            <p className="section-kicker">VISUAL STUDY <span>✦</span></p>
            <h2>Designed around the important moments.</h2>
          </div>
          <div className="case-visual-grid">
            {project.visuals.map((visual, index) => (
              <figure className={`case-shot case-shot--${project.visualTreatment} case-shot--${index + 1}`} key={visual.label} role="img" aria-label={`Visual study for ${project.title}: ${visual.label}`}>
                <div className="case-shot__chrome"><i /><i /><i /><span>{project.slug}</span></div>
                <div className="case-shot__screen"><span className="case-shot__screen-label">{visual.label}</span><strong>{index === 0 ? project.title : project.features[index % project.features.length]}</strong><div className="case-shot__screen-lines"><b /><b /><b /></div></div>
                <figcaption><strong>{visual.label}</strong><span>{visual.detail}</span><small>Visual study · source screenshot not supplied</small></figcaption>
              </figure>
            ))}
          </div>
        </Reveal>

        <Reveal className="case-reflection-grid">
          <section className="case-reflection">
            <div className="case-detail-card__icon"><Wrench size={18} /></div>
            <h2>Engineering challenges</h2>
            <ul>{project.engineeringChallenges.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section className="case-reflection case-reflection--learned">
            <div className="case-detail-card__icon"><BookOpen size={18} /></div>
            <h2>What I learned</h2>
            <ul>{project.learned.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
        </Reveal>

        <ProjectNavigation currentSlug={project.slug} />
      </div>
    </>
  );
}
