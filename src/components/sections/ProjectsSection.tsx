import { SECTION_IDS } from "@/constants/navigation";
import { PROJECTS } from "@/constants/projects";

export function ProjectsSection() {
  return (
    <section
      id={SECTION_IDS.projects}
      className="scroll-mt-24"
      aria-label="Featured projects"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Featured Projects
      </h2>
      <p className="text-sm md:text-base text-balance max-w-3xl mb-8">
        A selection of projects that highlight architecture decisions, trade-offs,
        and measurable outcomes rather than only UI details.
      </p>
      <div className="space-y-6">
        {PROJECTS.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 md:p-6 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/70 hover:bg-[var(--surface-elevated)]"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-4 mb-3">
              <div>
                <h3 className="text-lg md:text-xl font-semibold">
                  {project.name}
                </h3>
                <p className="text-sm md:text-base text-[var(--text-secondary,#999)]">
                  {project.oneLiner}
                </p>
              </div>
              {project.links?.length ? (
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label + link.href}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs md:text-sm px-3 py-1 rounded-full border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="grid gap-3 md:grid-cols-2 md:gap-4 text-sm md:text-[0.95rem]">
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Context: </span>
                  {project.context}
                </p>
                <p>
                  <span className="font-medium">Problem: </span>
                  {project.problem}
                </p>
                <p>
                  <span className="font-medium">Solution: </span>
                  {project.solution}
                </p>
                {project.outcome ? (
                  <p>
                    <span className="font-medium">Outcome: </span>
                    {project.outcome}
                  </p>
                ) : null}
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Role: </span>
                  {project.role}
                </p>
                {project.metrics?.length ? (
                  <div>
                    <p className="font-medium">Impact & metrics</p>
                    <ul className="list-disc list-inside space-y-1">
                      {project.metrics.map((metric) => (
                        <li key={metric}>{metric}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                {project.challenges.length ? (
                  <div>
                    <p className="font-medium">Key challenges</p>
                    <ul className="list-disc list-inside space-y-1">
                      {project.challenges.map((challenge) => (
                        <li key={challenge}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <div>
                  <p className="font-medium">Tech stack</p>
                  <div className="mt-1 flex flex-wrap gap-1.5">
                    {Object.entries(project.techStack).map(
                      ([category, values]) =>
                        values && values.length > 0 ? (
                          <span
                            key={project.id + category}
                            className="inline-flex items-center gap-1 rounded-full bg-black/5 dark:bg-white/10 px-3 py-1 text-xs"
                          >
                            <span className="font-medium capitalize">
                              {category}
                            </span>
                            <span>·</span>
                            <span>{values.join(", ")}</span>
                          </span>
                        ) : null,
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

