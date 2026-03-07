import { SECTION_IDS } from "@/constants/navigation";
import { SKILL_GROUPS } from "@/constants/skills";

export function SkillsSection() {
  return (
    <section
      id={SECTION_IDS.skills}
      className="scroll-mt-24"
      aria-label="Technical skills and expertise"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Technical Expertise
      </h2>
      <p className="text-sm md:text-base text-balance max-w-3xl mb-8">
        A snapshot of the technologies I use most often across frontend, backend,
        data, and cloud infrastructure.
      </p>
      <div className="grid gap-4 md:grid-cols-2">
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.label}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/70 hover:bg-[var(--surface-elevated)]"
          >
            <h3 className="text-base md:text-lg font-semibold mb-2">
              {group.label}
            </h3>
            <ul className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="px-3 py-1 rounded-full bg-black/10 dark:bg-white/10 text-xs md:text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

