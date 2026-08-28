import { Rocket } from "lucide-react";
import { developmentCard, skills } from "@/data/skills";
import { CodeCard } from "@/components/ui/CodeCard";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TechBadge } from "@/components/ui/TechBadge";

export function Skills() {
  return (
    <section id="skills" className="content-section section-shell" aria-labelledby="skills-title">
      <div className="section-heading">
        <SectionTitle eyebrow="SKILLS & TOOLS" id="skills-title">Things I <span className="serif-accent serif-accent--blue">work with.</span></SectionTitle>
        <p className="section-intro">A practical toolkit for taking an idea from first sketch to a tested, useful product.</p>
      </div>
      <div className="skills-layout">
        <div className="skills-grid">
          {skills.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <div>{group.items.map((skill) => <TechBadge key={skill} name={skill} />)}</div>
            </div>
          ))}
        </div>
        <div className="skills-aside">
          <CodeCard>
            <span className="code-comment">&#47;&#47; a reliable loop</span>{"\n"}
            <span className="code-keyword">function</span> solveProblem(problem) &#123;{"\n"}
            &nbsp;&nbsp;analyze(problem);{"\n"}
            &nbsp;&nbsp;plan();{"\n"}
            &nbsp;&nbsp;build();{"\n"}
            &nbsp;&nbsp;test();{"\n"}
            &nbsp;&nbsp;iterate();{"\n"}{"\n"}
            &nbsp;&nbsp;<span className="code-keyword">return</span> solution;{"\n"}
            &#125;
          </CodeCard>
          <div className="development-card">
            <span className="development-card__eyebrow">PERSONAL DEVELOPMENT</span>
            <h3>{developmentCard.title}</h3>
            <ul>{developmentCard.themes.map((theme) => <li key={theme}>{theme}</li>)}</ul>
            <Rocket className="development-card__rocket" size={54} strokeWidth={1.2} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
