export type Project = {
  id: string;
  name: string;
  oneLiner: string;
  context: string;
  problem: string;
  solution: string;
  outcome?: string;
  metrics?: string[];
  techStack: {
    frontend: string[];
    backend: string[];
    database?: string[];
    devops?: string[];
    cloud?: string[];
    other?: string[];
  };
  role: string;
  challenges: string[];
  links?: { label: string; href: string }[];
};

export const PROJECTS: Project[] = [
  {
    id: "swaps-app-exchange",
    name: "Swaps.app Crypto Exchange",
    oneLiner:
      "Production-ready crypto exchange frontend serving 50,000+ users with real-time trading.",
    context: "Lead Frontend Engineer role at Swaps.app (remote, Estonia).",
    problem:
      "The business needed a performant, SEO-friendly trading interface that could handle real-time price updates and support multiple languages.",
    solution:
      "Architected a scalable Next.js SSR frontend with lazy loading and WebSocket-based real-time trading, and internationalized the platform to support 7 languages.",
    outcome:
      "Cut page load time by about 45%, improved SEO by roughly 30%, and increased adoption after localization.",
    metrics: [
      "Served 50,000+ users on the production exchange.",
      "Page load time reduced by ~45% with SSR and lazy loading.",
      "SEO metrics improved by ~30% and localization to 7 languages boosted adoption by ~25%.",
    ],
    techStack: {
      frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      backend: ["Node.js", "WebSockets", "REST APIs"],
      database: [],
      devops: [],
      cloud: [],
    },
    role: "Led frontend architecture and implementation for the exchange UI, establishing testing standards and performance budgets.",
    challenges: [
      "Ensuring sub-200ms real-time updates over WebSockets while keeping the UI responsive.",
      "Balancing SEO requirements with dynamic, data-rich trading views.",
    ],
    links: [
      {
        label: "GitHub Profile",
        href: "https://github.com/hakob-yan",
      },
    ],
  },
  {
    id: "bigbi-platform",
    name: "BigBI Data & Microservices Platform",
    oneLiner:
      "Scalable Node.js microservices platform for authentication, user management, and core services.",
    context: "Senior Full Stack Engineer role at BigBI (remote, Israel).",
    problem:
      "Needed a robust, secure backend capable of handling authentication, user management, and core data workflows with predictable performance.",
    solution:
      "Led the design of a microservices architecture with well-defined boundaries, Redis caching, and RabbitMQ-based event-driven workflows, along with strong security practices.",
    outcome:
      "Improved reliability and scalability of core services while enforcing consistent security and performance best practices.",
    metrics: [
      "Reduced database load through targeted indexing and Redis caching.",
      "Improved system reliability via event-driven workflows and clear service contracts.",
    ],
    techStack: {
      frontend: ["React", "TypeScript"],
      backend: [
        "Node.js",
        "Express",
        "REST APIs",
        "WebSockets",
        "RabbitMQ",
        "Microservices",
      ],
      database: ["PostgreSQL"],
      devops: ["Docker", "CI/CD", "Jenkins"],
      cloud: ["AWS (Lambda, S3)"],
    },
    role: "Led architecture and system design decisions for the Node.js backend and core platform services.",
    challenges: [
      "Designing event-driven workflows that remained observable and debuggable across services.",
      "Implementing rate limiting and OWASP-aligned security without degrading UX.",
    ],
  },
  {
    id: "cretrix-analytics-platform",
    name: "Cretrix Analytics & Visualization Platform",
    oneLiner:
      "Interactive data visualization platform with reusable D3.js components and secure subscriptions.",
    context: "Full Stack Developer role at Cretrix (Armenia).",
    problem:
      "Legacy charting and export flows were slow and difficult to extend, and the platform needed stronger authentication and billing flows.",
    solution:
      "Engineered a library of reusable D3.js components, refactored chart architecture, improved export performance, and implemented JWT/2FA auth and Stripe-based subscriptions.",
    outcome:
      "Delivered faster data exports, more secure user flows, and more maintainable visualization components.",
    metrics: [
      "Export performance improved by ~35%.",
      "Deployment errors reduced by ~40% after containerization and workflow automation.",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "D3.js"],
      backend: ["Node.js", "Express", "REST APIs", "JWT", "2FA"],
      database: ["PostgreSQL", "MongoDB"],
      devops: ["Docker", "AWS", "Automated workflows"],
      other: ["Stripe", "Intercom custom events"],
    },
    role: "Developed full-stack features across React and Node.js, led visualization refactors, and improved deployment reliability.",
    challenges: [
      "Refactoring legacy charting logic without breaking existing reports.",
      "Designing authentication and billing flows that were both secure and user friendly.",
    ],
  },
  {
    id: "nwslab-frontends",
    name: "NWSLAB Frontend Platforms",
    oneLiner:
      "Scalable React frontends and reusable component libraries for multiple products.",
    context: "Frontend Developer role at NWSLAB (Armenia).",
    problem:
      "Legacy class-based React code and inconsistent state management made it difficult to add new features quickly.",
    solution:
      "Migrated legacy components to functional React with hooks, introduced Redux and MobX where appropriate, and created reusable component libraries and custom hooks.",
    outcome:
      "Improved responsiveness, reduced redundant API requests, and made it easier for teams to build on shared UI primitives.",
    metrics: [],
    techStack: {
      frontend: ["React", "JavaScript (ES6+)", "Redux", "MobX"],
      backend: [],
      database: ["MongoDB", "MySQL"],
      devops: [],
      other: [],
    },
    role: "Built and maintained React frontends, created reusable components, and wrote unit tests to keep code stable.",
    challenges: [
      "Refactoring legacy class components without introducing regressions.",
      "Standardizing state management patterns across different projects.",
    ],
  },
];

