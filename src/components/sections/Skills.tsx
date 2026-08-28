import {
  Bot,
  Cloud,
  Code2,
  Layers3,
  Rocket,
  Wrench,
} from "lucide-react";
import { developmentCard, skills } from "@/data/skills";
import { CodeCard } from "@/components/ui/CodeCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";

const skillIcons = {
  code: Code2,
  layers: Layers3,
  cloud: Cloud,
  ai: Bot,
  testing: Wrench,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="content-section section-shell"
      aria-labelledby="skills-title"
    >
      <div className="section-heading">
        <SectionTitle eyebrow="SKILLS & TOOLS" id="skills-title">
          Things I{" "}
          <span className="serif-accent serif-accent--blue">
            work with.
          </span>
        </SectionTitle>

        <p className="section-intro">
          A practical toolkit for taking an idea from first sketch to a
          tested, useful product.
        </p>
      </div>

      <div className="skills-marquee" aria-hidden="true">
        {skills.map((group, index) => {
          const Icon = skillIcons[group.icon];
          const marqueeItems = [...group.items, ...group.items];

          return (
            <div
              className={`skills-marquee__row skills-marquee__row--${index % 2 === 0 ? "forward" : "reverse"}`}
              key={group.category}
            >
              <div className="skills-marquee__track">
                {marqueeItems.map((skill, itemIndex) => (
                  <span
                    className={`skills-marquee__item skills-marquee__item--${group.accent ?? "blue"}`}
                    key={`${group.category}-${skill}-${itemIndex}`}
                  >
                    <Icon size={20} strokeWidth={1.8} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="skills-layout">
        <div className="skills-grid">
          {skills.map((group, index) => {
            const Icon = skillIcons[group.icon];

            return (
              <article
                className={`skill-group skill-group--${
                  group.accent ?? "blue"
                }`}
                key={group.category}
              >
                <div className="skill-group__header">
                  <div>
                    <span className="skill-group__index">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3>{group.category}</h3>
                  </div>

                  <span className="skill-group__icon" aria-hidden="true">
                    <Icon size={30} strokeWidth={1.8} />
                  </span>
                </div>

                <div className="skill-group__items">
                  {group.items.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="skills-aside">
          <CodeCard>
            <span className="code-comment">&#47;&#47; a reliable loop</span>
            {"\n"}
            <span className="code-keyword">function</span> solveProblem
            (problem) {"{"}
            {"\n"}
            &nbsp;&nbsp;analyze(problem);
            {"\n"}
            &nbsp;&nbsp;plan();
            {"\n"}
            &nbsp;&nbsp;build();
            {"\n"}
            &nbsp;&nbsp;test();
            {"\n"}
            &nbsp;&nbsp;iterate();
            {"\n\n"}
            &nbsp;&nbsp;<span className="code-keyword">return</span>{" "}
            solution;
            {"\n"}
            {"}"}
          </CodeCard>

          <div className="development-card">
            <span className="development-card__eyebrow">
              PERSONAL DEVELOPMENT
            </span>

            <h3>{developmentCard.title}</h3>

            <ul>
              {developmentCard.themes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>

            <Rocket
              className="development-card__rocket"
              size={54}
              strokeWidth={1.2}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
