export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Swaps.app",
    role: "Lead Frontend Engineer",
    period: "Sep 2023 – Present · Remote · Estonia",
    summary:
      "Leading the frontend development of a production-ready crypto exchange built with Next.js and TypeScript.",
    highlights: [
      "Architected a scalable SSR frontend with lazy loading, cutting page load time by ~45% and boosting SEO metrics by ~30%.",
      "Implemented real-time trading via WebSockets with sub-200ms latency and expanded the platform to 7 languages, increasing adoption by ~25%.",
      "Established testing standards (Jest, React Testing Library) with 90%+ coverage and resolved performance bottlenecks for smoother UX.",
      "Mentored 4 engineers and coordinated cross-functional teams, improving deployment efficiency by ~20%.",
    ],
  },
  {
    company: "BigBI",
    role: "Senior Full Stack Engineer",
    period: "Jan 2024 – Dec 2025 · Remote · Israel",
    summary:
      "Led architecture and system design for a Node.js backend within a scalable microservices ecosystem.",
    highlights: [
      "Designed authentication, user management, and core services within a microservices architecture, enforcing clear boundaries.",
      "Implemented database indexing and Redis-based caching strategies to optimize query performance and reduce database load.",
      "Introduced API rate limiting and OWASP-aligned security practices for reliable, secure data contracts.",
      "Designed event-driven workflows with RabbitMQ and containerized services with Docker, managing Jenkins CI/CD pipelines for automated builds and deployments.",
    ],
  },
  {
    company: "Cretrix",
    role: "Full Stack Developer",
    period: "Aug 2022 – Sep 2023 · Armenia",
    summary:
      "Delivered end-to-end features for a data-heavy analytics platform using React, Node.js, and AWS.",
    highlights: [
      "Engineered 20+ dynamic, reusable data visualization components with D3.js and refactored legacy chart architecture.",
      "Improved export performance by ~35% and reduced deployment errors by ~40% through Dockerization and workflow automation.",
      "Enhanced authentication flows with JWT and 2FA, integrated Stripe subscriptions, and implemented secure REST APIs.",
      "Integrated analytics (Intercom custom events), improved access control, and added maintainable endpoint tests for higher reliability.",
    ],
  },
  {
    company: "NWSLAB",
    role: "Frontend Developer",
    period: "Feb 2020 – Aug 2022 · Armenia",
    summary:
      "Built scalable React frontends and reusable component libraries to support multiple products.",
    highlights: [
      "Migrated legacy class components to functional components with hooks, Redux, and MobX.",
      "Created reusable component libraries and custom hooks following DRY principles to support wider team development.",
      "Streamlined API usage and state management to cut redundant requests and improve responsiveness.",
      "Wrote unit tests for React components and helped maintain database interactions (MongoDB, MySQL) for stability.",
    ],
  },
];
