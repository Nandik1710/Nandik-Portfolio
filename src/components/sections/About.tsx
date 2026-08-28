import { Award, Bot, BriefcaseBusiness, Code2, Trophy } from "lucide-react";
import { aboutHighlights } from "@/data/about";
import { Reveal } from "@/components/animations/Reveal";
import { SectionTitle } from "@/components/ui/SectionTitle";

const highlightIcons = { briefcase: BriefcaseBusiness, testing: Code2, award: Award, trophy: Trophy, robotics: Bot };

export function About() {
  return (
    <section id="about" className="content-section section-shell" aria-labelledby="about-title">
      <Reveal>
        <div className="about-grid">
          <div>
            <SectionTitle eyebrow="ABOUT ME" id="about-title">
              Curious mind.<br />
              <span className="serif-accent serif-accent--coral">Problem solver.</span><br />
              Always learning.
            </SectionTitle>
          </div>
          <div className="about-copy">
            <p>I&apos;m a Computer Science student at UPES, Dehradun, specialising in Full Stack Development.</p>
            <p>I enjoy building complete products across frontend, backend, APIs and cloud infrastructure, while exploring AI, computer vision and automation to solve practical problems.</p>
            <p>I care about building systems that are useful, scalable and genuinely solve something.</p>
          </div>
        </div>
        <div className="highlight-row">
          {aboutHighlights.map((highlight) => {
            const Icon = highlightIcons[highlight.icon as keyof typeof highlightIcons];
            return <span key={highlight.title}><Icon size={17} /><span><strong>{highlight.title}</strong><small>{highlight.detail}</small></span></span>;
          })}
        </div>
      </Reveal>
    </section>
  );
}
