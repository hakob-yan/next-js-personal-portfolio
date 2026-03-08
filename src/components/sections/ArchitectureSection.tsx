import { SECTION_IDS } from "@/constants/navigation";
import {
  Server,
  Activity,
  ShieldCheck,
} from "lucide-react";

export function ArchitectureSection() {
  return (
    <section
      id={SECTION_IDS.architecture}
      className="scroll-mt-24"
      aria-label="Architecture and system design"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary,#111)]">
        Architecture & System Design
      </h2>
      <p className="text-sm md:text-base text-[var(--text-secondary,#666)] max-w-3xl mb-8">
        I design systems that are scalable, secure, observable, and easy to evolve. 
        Below is a high-level view of the architectures and patterns I implement in production.
      </p>

      <div className="grid gap-6 md:grid-cols-3 text-sm md:text-[0.95rem]">
        {/* Service Architectures */}
        <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-primary)] hover:bg-[var(--surface-elevated)]">
          <div className="flex items-center gap-2 mb-3">
            <Server size={24} className="text-[var(--color-primary)]" />
            <h3 className="font-semibold text-lg">Service Architectures</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary,#666)]">
            <li>Monoliths with clear module boundaries and separation of concerns.</li>
            <li>Microservices for independently scaling domains with loose coupling.</li>
            <li>Event-driven workflows using RabbitMQ or Kafka for async communication.</li>
            <li>Serverless patterns (AWS Lambda) for high-demand or burst workloads.</li>
          </ul>
        </div>

        {/* Reliability & Performance */}
        <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-primary)] hover:bg-[var(--surface-elevated)]">
          <div className="flex items-center gap-2 mb-3">
            <Activity size={24} className="text-[var(--color-primary)]" />
            <h3 className="font-semibold text-lg">Reliability & Performance</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary,#666)]">
            <li>Health checks, structured logging, tracing, and metrics for observability.</li>
            <li>Caching with Redis and database indexing for low-latency queries.</li>
            <li>Load balancing, horizontal scaling, and capacity planning for high traffic.</li>
            <li>Frontend SSR & backend performance profiling and optimization.</li>
          </ul>
        </div>

        {/* Security & Delivery */}
        <div className="relative rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-card)] p-5 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[var(--color-primary)] hover:bg-[var(--surface-elevated)]">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck size={24} className="text-[var(--color-primary)]" />
            <h3 className="font-semibold text-lg">Security & Delivery</h3>
          </div>
          <ul className="list-disc list-inside space-y-1 text-[var(--text-secondary,#666)]">
            <li>Authentication & authorization patterns: JWT, 2FA, OAuth, sessions.</li>
            <li>Least-privilege access for services and cloud resources.</li>
            <li>Automated CI/CD pipelines with Docker, Jenkins, and AWS, including rollbacks.</li>
            <li>API rate limiting, secure data contracts, and OWASP best practices enforcement.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}