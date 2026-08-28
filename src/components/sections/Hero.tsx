import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowDown, ArrowRight, BriefcaseBusiness, Cloud, ExternalLink, Layers3, Trophy } from "lucide-react";
import { heroStats } from "@/lib/site";
import { Badge } from "@/components/ui/Badge";
import { CodeCard } from "@/components/ui/CodeCard";
import { Reveal } from "@/components/animations/Reveal";

const statIcons = { briefcase: BriefcaseBusiness, layers: Layers3, trophy: Trophy, cloud: Cloud };
const hasResume = existsSync(path.join(process.cwd(), "public", "Nandik-Dawar-Resume.pdf"));

export function Hero() {
  return (
    <section id="home" className="hero section-shell" aria-labelledby="hero-title">
      <div className="hero__copy">
        <Reveal delay={0.05}>
          <Badge><span className="status-dot" /> Full Stack Developer <span className="badge-spark">✦</span></Badge>
        </Reveal>
        <Reveal delay={0.15}>
          <h1 id="hero-title">I build digital <span className="serif-accent serif-accent--coral">products</span> that <span className="serif-accent serif-accent--blue">solve real problems.</span></h1>
        </Reveal>
        <Reveal delay={0.28}>
          <p className="hero__description">Full Stack Developer and Computer Science student building scalable web applications, cloud solutions and intelligent systems.</p>
        </Reveal>
        <Reveal delay={0.38} className="hero__actions">
          <a className="button button--coral" href="#projects">View My Work <ArrowRight size={17} /></a>
          {hasResume && <>
            <a className="button button--ghost" href="/Nandik-Dawar-Resume.pdf" target="_blank" rel="noreferrer">View CV <ExternalLink size={15} /></a>
            <a className="button button--ghost" href="/Nandik-Dawar-Resume.pdf" download>Download CV <ArrowDown size={16} /></a>
          </>}
        </Reveal>
        <Reveal delay={0.5} className="hero__stats">
          {heroStats.map((stat) => {
            const Icon = statIcons[stat.icon as keyof typeof statIcons];
            return <div className="hero-stat" key={stat.label}><span className="hero-stat__icon"><Icon size={16} strokeWidth={1.8} /></span><strong>{stat.value}</strong><span>{stat.label}</span></div>;
          })}
        </Reveal>
      </div>

      <div className="hero__visual" aria-label="Portrait of Nandik Dawar with colourful abstract shapes">
        <div className="hero-shape hero-shape--coral" aria-hidden="true" />
        <div className="hero-shape hero-shape--blue" aria-hidden="true" />
        <div className="hero-shape hero-shape--mint" aria-hidden="true" />
        <div className="hero-shape hero-shape--yellow" aria-hidden="true" />
        <div className="dot-grid dot-grid--hero" aria-hidden="true" />
        <span className="hero-scribble hero-scribble--top" aria-hidden="true">⌁</span>
        <span className="hero-bracket hero-bracket--left" aria-hidden="true">&lt;/&gt;</span>
        <span className="hero-bracket hero-bracket--right" aria-hidden="true">&#123; &#125;</span>
        <Reveal delay={0.25} className="hero__portrait-wrap">
          <Image className="hero__portrait" src="/images/nandik-hero.png" alt="Nandik Dawar smiling in a navy blazer" width={900} height={1060} priority sizes="(max-width: 767px) 82vw, 48vw" />
        </Reveal>
        <Reveal delay={0.65} className="hero__code-wrap">
          <CodeCard><span className="code-card__dots">● ● ●</span>{"\n"}<span className="code-keyword">const</span> developer = &#123;{"\n"}&nbsp;&nbsp;passion: <span className="code-string">&quot;building&quot;</span>,{"\n"}&nbsp;&nbsp;focus: <span className="code-string">&quot;impact&quot;</span>,{"\n"}&nbsp;&nbsp;stack: [<span className="code-string">&quot;Next.js&quot;</span>, <span className="code-string">&quot;FastAPI&quot;</span>, <span className="code-string">&quot;AWS&quot;</span>]{"\n"}&#125;;</CodeCard>
        </Reveal>
      </div>
    </section>
  );
}
