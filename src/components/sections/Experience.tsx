import { CalendarDays } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";

export function Experience() {
  return (
    <section id="experience" className="content-section section-shell" aria-labelledby="experience-title">
      <SectionTitle eyebrow="EXPERIENCE" id="experience-title">My professional <span className="serif-accent serif-accent--coral">journey.</span></SectionTitle>
      <div className="timeline">
        {experience.map((item) => (
          <article className="timeline-item" key={item.company}>
            <div className="timeline-marker"><CalendarDays size={17} /></div>
            <div className="timeline-card">
              <p className="timeline-period">{item.period}</p>
              <h3>{item.role}</h3>
              <p className="timeline-company">{item.company}</p>
              <p>{item.description}</p>
              <div className="tech-list">{item.technologies.map((technology) => <TechBadge key={technology} name={technology} />)}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
