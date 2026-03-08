import { SECTION_IDS } from "@/constants/navigation";
import { SKILL_GROUPS } from "@/constants/skills";
import {
  Monitor,
  Server,
  Database,
  Cloud,
  FlaskConical,
} from "lucide-react";

const ICONS = {
  frontend: Monitor,
  backend: Server,
  databases: Database,
  cloud: Cloud,
  testing: FlaskConical,
} as const;

export function SkillsSection() {
  return (
    <section
      id={SECTION_IDS.skills}
      className="scroll-mt-24"
      aria-label="Engineering expertise"
    >
      <div className="max-w-3xl mb-14">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Engineering Expertise
        </h2>

        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
          A foundation of technologies and architectural patterns I rely on to
          build scalable, production-grade systems across frontend, backend,
          and cloud infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {SKILL_GROUPS.map((group) => {
          const Icon = ICONS[group.key as keyof typeof ICONS];

          return (
            <div
              key={group.title}
              className="group rounded-2xl border border-[var(--border-subtle)]
              bg-[var(--surface-card)] p-6 transition-all duration-300
              hover:border-[var(--color-primary)]/60
              hover:shadow-xl hover:-translate-y-1
              md:last:col-span-2 md:last:max-w-lg md:last:mx-auto"
            >
              <div className="flex items-center gap-3 mb-4">
                {Icon && (
                  <Icon
                    size={20}
                    className="text-[var(--color-primary)]"
                  />
                )}

                <h3 className="text-lg font-semibold">
                  {group.title}
                </h3>
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5 leading-relaxed">
                {group.description}
              </p>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-sm
                    bg-neutral-100 dark:bg-neutral-800
                    text-neutral-700 dark:text-neutral-300
                    transition group-hover:bg-neutral-200
                    dark:group-hover:bg-neutral-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}