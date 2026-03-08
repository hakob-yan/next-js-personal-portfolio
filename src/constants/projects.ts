export const PROJECTS = [
  {
    id: "swaps-app",
    name: "Swaps.app",
    oneLiner: "High-throughput crypto exchange for 50,000+ users",
    context:
      "Created from scratch and led the frontend architecture and development for a production-ready crypto exchange targeting a global user base.",
    problem:
      "The existing frontend was slow, monolithic, and hard to maintain; real-time trading performance and multilingual support were limited.",
    solution:
      "Designed and architected a scalable SSR frontend using Next.js and TypeScript, implemented real-time WebSockets trading (<200ms latency), added multi-language support, and optimized for maintainability and performance.",
    outcome:
      "Page load time reduced by 45%, SEO boosted by 30%, adoption increased by 25%, and overall UX performance significantly improved.",
    role: "Lead Frontend Engineer (Architect & Creator)",
    metrics: [
      "50,000+ active users",
      "7 languages supported",
      "Page load time -45%",
      "Deployment efficiency +20%",
      "Testing coverage 90%+",
    ],
    challenges: [
      "Ensuring <200ms latency for real-time trading",
      "Maintaining cross-language consistency",
      "Optimizing SSR and lazy loading for performance",
      "Mentoring 4 engineers and coordinating cross-functional teams",
      "Making architecture decisions for scalability and maintainability from scratch",
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "SSR", "Lazy Loading"],
      backend: ["WebSockets", "Node.js", "Microservices"],
      testing: ["Jest", "React Testing Library", "End-to-End Tests"],
      devops: ["AWS", "CI/CD", "Monitoring", "Containerization"],
    },
    links: [
      {
        label: "Visit App",
        href: "https://swaps.app",
      },
    ],
  },
  {
    id: "w3are",
    name: "W3are",
    oneLiner:
      "Front-end led the bridge between crypto and fiat payments with a global smart link.",
    context:
      "Led the frontend development and architecture of a platform enabling anyone to collect payments in fiat or crypto with zero setup.",
    problem:
      "Existing payment solutions were fragmented, required multiple integrations, and were not accessible globally.",
    solution:
      "Designed and implemented a highly responsive, multilingual frontend with Next.js and TypeScript. Created a streamlined smart link system for universal payment collection, optimized for performance and global accessibility.",
    outcome:
      "Enabled seamless payments for clients, friends, and partners globally. Improved user onboarding and conversion by simplifying the payment flow, resulting in faster adoption.",
    role: "Lead Frontend Engineer",
    metrics: [
      "Global reach: payments in 50+ countries",
      "Reduced payment setup time to zero",
      "Optimized frontend performance for <2s load on mobile and desktop",
      "High adoption from crypto and fiat users",
    ],
    challenges: [
      "Creating a universal payment system across crypto and fiat",
      "Optimizing UI/UX for simplicity and accessibility",
      "Ensuring frontend scalability for global traffic",
      "Coordinating with backend and finance teams for real-time payments",
    ],
    techStack: {
      frontend: ["Next.js", "React", "TypeScript", "SSR", "Responsive Design"],
      backend: ["WebSockets", "Node.js", "API Integration"],
      devops: ["AWS", "CI/CD", "Monitoring", "Deployment Automation"],
      testing: ["Jest", "React Testing Library", "End-to-End Tests"],
    },
    links: [
      {
        label: "Visit W3are",
        href: "https://www.w3are.com/",
      },
    ],
  },
  {
    id: "bigbi",
    name: "BigBI",
    oneLiner:
      "No-code big data analytics platform powered by Apache Spark for scalable ETL and analytics.",
    context:
      "Worked as Senior Full-Stack Engineer contributing to the development of a scalable, visual big data analytics platform that enables non-technical users to build and deploy data pipelines efficiently.",
    problem:
      "Data professionals faced high barriers in building scalable big data processing workflows due to complex Spark coding, fragmented tools, and long delivery cycles.",
    solution:
      "Led backend architecture and system design for Node.js services managing authentication, user management, and core workflows. Designed database indexing and Redis caching for optimized queries, implemented API rate limiting and security best practices (OWASP), created event-driven workflows with RabbitMQ, and containerized services with Docker while managing Jenkins CI/CD pipelines for automated deployments.",
    outcome:
      "Accelerated ETL workflow development from weeks to hours, improved system reliability, optimized query performance, and ensured secure, scalable operations for enterprise clients.",
    role: "Senior Full-Stack Engineer ",
    metrics: [
      "Reduced database load and improved query performance",
      "Accelerated ETL pipeline deployment and execution",
      "Improved system reliability via event-driven microservices",
      "Streamlined CI/CD and deployment processes",
    ],
    challenges: [
      "Designing an intuitive yet robust backend for complex data workflows",
      "Ensuring real-time reliability across distributed services",
      "Optimizing Spark and Redis for performance at scale",
      "Maintaining high security and compliance standards (OWASP)",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "Interactive UI/UX"],
      backend: ["Node.js", "Microservices", "RabbitMQ", "API design"],
      data: [
        "Apache Spark",
        "Redis",
        "Database indexing",
        "Query optimization",
      ],
      devops: [
        "Docker",
        "Jenkins CI/CD",
        "Monitoring",
        "Deployment automation",
      ],
      security: [
        "OWASP best practices",
        "API rate limiting",
        "Authentication & Authorization",
      ],
    },
    links: [
      {
        label: "Visit BigBI",
        href: "https://bigbi.io/",
      },
    ],
  },
  {
    id: "origin-reports",
    name: "Origin Reports",
    oneLiner:
      "Editorial analytics and data visualization platform for journal performance reporting.",
    context:
      "Worked as Senior Full‑Stack Engineer contributing to a reporting and analytics platform that helps editorial offices visualize, filter, and interpret journal performance metrics.",
    problem:
      "Editorial teams spent excessive time manually preparing journal performance data in spreadsheets, lacked scalable visualization tools, and needed reliable authentication and secure APIs to support analytics for multiple users.",
    solution:
      "Engineered and refactored scalable backend services using Node.js within a microservices architecture. Built over 20 dynamic, reusable D3.js data visualization components and optimized chart export performance. Enhanced authentication with JWT and 2FA, integrated Stripe subscriptions, and developed secure REST APIs. Created middleware for CSV validation, automated workflows with AWS, containerized with Docker, and raised test coverage with endpoint tests and analytics integrations.",
    outcome:
      "Improved data visualization performance by 35%, reduced deployment errors by 40%, strengthened security and reliability of authentication flows, and enabled editorial teams to generate sophisticated analytics reports efficiently.",
    role: "Senior Full‑Stack Engineer",
    metrics: [
      "20+ dynamic reusable D3.js visualizations developed",
      "Export performance improved by 35%",
      "Deployment errors reduced by 40%",
      "Secure authentication with JWT and 2FA",
    ],
    challenges: [
      "Refactoring legacy charting architecture while ensuring backward compatibility",
      "Balancing real‑time frontend performance with complex data pipelines",
      "Ensuring secure, scalable API access under editorial reporting workflows",
      "Rolling out maintainable automated backend workflows in cloud infrastructure",
    ],
    techStack: {
      frontend: ["React", "TypeScript", "D3.js", "Responsive UI"],
      backend: [
        "Node.js",
        "Express",
        "REST API design",
        "JWT & 2FA authentication",
        "Middleware & CSV validation",
      ],
      devops: ["AWS automation", "Docker", "CI/CD"],
      database: ["SQL/NoSQL (as used)"],
      payments: ["Stripe subscriptions"],
      testing: ["Jest", "RTL", "Endpoint tests"],
    },
    links: [
      {
        label: "Visit Origin Reports",
        href: "https://originreports.org/",
      },
    ],
  },
];
