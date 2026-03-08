import { SECTION_IDS } from "@/constants/navigation";
import { PROJECTS } from "@/constants/projects";
import { ExternalLink } from "lucide-react"; // optional icon for links

export function ProjectsSection() {
  return (
    <section
      id={SECTION_IDS.projects}
      className="scroll-mt-24"
      aria-label="Featured projects"
    >
      <div className="max-w-3xl mb-12">
        <h2 className="text-3xl md:text-4xl font-semibold mb-3">
          Featured Projects
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm md:text-base">
          Selected projects that highlight architecture, trade-offs, engineering
          impact, and measurable results — not just UI.
        </p>
      </div>

      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="group rounded-2xl border border-[var(--border-subtle)]
              bg-[var(--surface-card)] p-6 md:p-8 transition-all duration-300
              hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-primary)]/60"
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold">{project.name}</h3>
                <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 mt-1">
                  {project.oneLiner}
                </p>
              </div>

              {project.links?.length ? (
                <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
                  {project.links.map((link) => (
                    <a
                      key={link.label + link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-xs md:text-sm px-3 py-1 rounded-full border border-[var(--color-primary)]
                        hover:bg-[var(--color-primary)] hover:text-white transition"
                    >
                      {link.label}
                      <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              ) : null}
            </div>

            {/* Project Details */}
            <div className="grid gap-6 md:grid-cols-2 text-sm md:text-[0.95rem]">
              <div className="space-y-3">
                <p>
                  <span className="font-medium">Context:</span> {project.context}
                </p>
                <p>
                  <span className="font-medium">Problem:</span> {project.problem}
                </p>
                <p>
                  <span className="font-medium">Solution:</span> {project.solution}
                </p>
                {project.outcome && (
                  <p>
                    <span className="font-medium">Outcome:</span> {project.outcome}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <p>
                  <span className="font-medium">Role:</span> {project.role}
                </p>

                {project.metrics?.length && (
                  <div>
                    <p className="font-medium mb-1">Impact & Metrics</p>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
                      {project.metrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challenges?.length && (
                  <div>
                    <p className="font-medium mb-1">Key Challenges</p>
                    <ul className="list-disc list-inside space-y-1 text-neutral-700 dark:text-neutral-300">
                      {project.challenges.map((challenge) => (
                        <li key={challenge}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <p className="font-medium mb-1">Tech Stack</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {Object.entries(project.techStack).map(
                      ([category, values]) =>
                        values && values.length > 0 && (
                          <span
                            key={project.id + category}
                            className="inline-flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs md:text-sm"
                          >
                            <span className="font-semibold capitalize">{category}</span>
                            <span>·</span>
                            <span>{values.join(", ")}</span>
                          </span>
                        )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}