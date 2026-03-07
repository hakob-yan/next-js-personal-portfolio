import { SECTION_IDS } from "@/constants/navigation";
import { EXPERIENCE } from "@/constants/experience";

export function ExperienceSection() {
  return (
    <section
      id={SECTION_IDS.experience}
      className="scroll-mt-24"
      aria-label="Professional experience and leadership"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Experience & Leadership
      </h2>
      <p className="text-sm md:text-base text-balance max-w-3xl mb-8">
        Roles where I&apos;ve led projects end-to-end, mentored engineers, and
        collaborated closely with product, design, and operations.
      </p>
      <div className="space-y-5">
        {EXPERIENCE.map((item) => (
          <article
            key={`${item.company}-${item.role}-${item.period}`}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 md:p-6 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/70 hover:bg-[var(--surface-elevated)]"
          >
            <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-2">
              <div>
                <h3 className="text-base md:text-lg font-semibold">
                  {item.role}
                </h3>
                <p className="text-sm md:text-base text-[var(--text-secondary,#999)]">
                  {item.company}
                </p>
              </div>
              <p className="text-xs md:text-sm opacity-80">{item.period}</p>
            </header>
            <p className="text-sm md:text-[0.95rem] mb-3">{item.summary}</p>
            {item.highlights.length ? (
              <ul className="list-disc list-inside space-y-1 text-sm md:text-[0.95rem]">
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

