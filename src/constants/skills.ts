export type SkillGroup = {
  label: string;
  items: string[];
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    label: "Frontend",
    items: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit",
      "MobX",
      "GraphQL",
      "Tailwind CSS",
      "Material-UI",
      "Styled Components",
      "D3.js",
      "Micro Frontends",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "REST APIs",
      "WebSockets",
      "RabbitMQ",
      "Microservices",
      "Event-Driven Architecture",
      "Serverless (AWS Lambda)",
      "Authentication & Authorization (JWT, 2FA)",
      "Performance Optimization",
      "Security (OWASP)",
      "Load Balancing",
      "Horizontal Scaling",
      "Design Patterns",
      "SOLID Principles",
      "Python",
    ],
  },
  {
    label: "Databases & Data",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Indexing",
      "Query Optimization",
      "Caching",
      "Data Validation",
    ],
  },
  {
    label: "Testing & Quality",
    items: [
      "Jest",
      "React Testing Library",
      "Cypress",
      "Playwright",
      "Test Coverage & Quality Standards",
    ],
  },
  {
    label: "Cloud, DevOps & Tooling",
    items: [
      "Docker",
      "AWS (Lambda, S3)",
      "CI/CD",
      "Git",
      "Containerization",
      "Monitoring & Deployment Automation",
    ],
  },
  {
    label: "Architecture & Practices",
    items: [
      "Domain-Driven Design",
      "Event-Driven Architectures",
      "Microservices",
      "Monoliths with clear boundaries",
      "Code review and mentoring",
      "Agile / Scrum collaboration",
    ],
  },
];

