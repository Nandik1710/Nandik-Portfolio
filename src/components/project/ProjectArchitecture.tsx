import type { ArchitectureStep } from "@/types";

export function ProjectArchitecture({ steps }: { steps: ArchitectureStep[] }) {
  return (
    <div className="architecture-diagram" aria-label="Project architecture flow">
      <ol>
        {steps.map((step, index) => (
          <li key={`${step.label}-${index}`}>
            <div className="architecture-node">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step.label}</strong>
              {step.detail ? <small>{step.detail}</small> : null}
            </div>
            {index < steps.length - 1 ? <b className="architecture-arrow" aria-hidden="true">→</b> : null}
          </li>
        ))}
      </ol>
    </div>
  );
}
