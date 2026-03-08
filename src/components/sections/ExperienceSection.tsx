import { SECTION_IDS } from "@/constants/navigation";
import { EXPERIENCE } from "@/constants/experience";
import { Briefcase, Calendar } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id={SECTION_IDS.experience}
      className="scroll-mt-24"
      aria-label="Professional experience and leadership"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary,#111)]">
        Experience & Leadership
      </h2>
      <p className="text-sm md:text-base text-[var(--text-secondary,#666)] max-w-3xl mb-8">
        Roles where I&apos;ve led projects end-to-end, mentored engineers, and
        collaborated with product, design, and operations to deliver high-quality systems.
      </p>

      <div className="space-y-6">
        {EXPERIENCE.map((item) => (
          <article
            key={`${item.company}-${item.role}-${item.period}`}
            className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-primary)] hover:bg-[var(--surface-elevated)]"
          >
            {/* Header */}
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
              <div className="flex flex-col md:flex-row md:items-center gap-2">
                <Briefcase size={20} className="text-[var(--color-primary)]" />
                <h3 className="text-lg md:text-xl font-semibold">{item.role}</h3>
                <span className="text-sm md:text-base text-[var(--text-secondary,#999)] md:ml-2">
                  {item.company}
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs md:text-sm opacity-80">
                <Calendar size={16} className="text-[var(--color-primary)]" />
                <span>{item.period}</span>
              </div>
            </header>

            {/* Summary */}
            <p className="text-sm md:text-[0.95rem] mb-3 text-[var(--text-secondary,#555)]">
              {item.summary}
            </p>

            {/* Highlights */}
            {item.highlights.length ? (
              <ul className="list-disc list-inside space-y-1 text-sm md:text-[0.95rem] text-[var(--text-secondary,#666)]">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}