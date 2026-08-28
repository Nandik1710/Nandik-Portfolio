import { Award, Bot, Cloud, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { SectionTitle } from "@/components/ui/SectionTitle";

const icons = [Cloud, Trophy, Trophy, Award, Bot];

export function Achievements() {
  return (
    <section id="achievements" className="content-section section-shell" aria-labelledby="achievements-title">
      <SectionTitle eyebrow="ACHIEVEMENTS" id="achievements-title">Milestones &amp; <span className="serif-accent serif-accent--coral">highlights.</span></SectionTitle>
      <div className="achievement-grid">
        {achievements.map((achievement, index) => {
          const Icon = icons[index % icons.length];
          return <article className="achievement-card" key={achievement.title + achievement.detail}><span className="achievement-icon"><Icon size={23} /></span><div><h3>{achievement.title}</h3><p>{achievement.detail}</p></div>{achievement.year && <time>{achievement.year}</time>}</article>;
        })}
      </div>
    </section>
  );
}
