import { SECTION_IDS } from "@/constants/navigation";

export function ArchitectureSection() {
  return (
    <section
      id={SECTION_IDS.architecture}
      className="scroll-mt-24"
      aria-label="Architecture and system design"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Architecture & System Design
      </h2>
      <p className="text-sm md:text-base text-balance max-w-3xl mb-6">
        I focus on designing systems that are scalable, observable, and easy to
        evolve. Below is a high-level view of the types of architectures I often
        work with.
      </p>
      <div className="grid gap-4 md:grid-cols-3 text-sm md:text-[0.95rem]">
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/70 hover:bg-[var(--surface-elevated)]">
          <h3 className="font-semibold mb-2">Service Architectures</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Monoliths with clear module boundaries.</li>
            <li>Microservices for independently scaling domains.</li>
            <li>Event-driven workflows using queues/streams.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/70 hover:bg-[var(--surface-elevated)]">
          <h3 className="font-semibold mb-2">Reliability & Performance</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Health checks, structured logging, and tracing.</li>
            <li>Caching at application and database layers.</li>
            <li>Load testing and capacity planning.</li>
          </ul>
        </div>
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-4 backdrop-blur-sm transition-transform duration-200 hover:-translate-y-1 hover:border-[var(--color-primary)]/70 hover:bg-[var(--surface-elevated)]">
          <h3 className="font-semibold mb-2">Security & Delivery</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Authentication & authorization patterns (JWT, sessions).</li>
            <li>Least-privilege access to infrastructure resources.</li>
            <li>Automated CI/CD pipelines with checks and rollbacks.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

