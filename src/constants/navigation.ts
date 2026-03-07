export const SECTION_IDS = {
  hero: "home",
  projects: "projects",
  skills: "skills",
  architecture: "architecture",
  experience: "experience",
  contact: "contact",
} as const;

export type SectionKey = keyof typeof SECTION_IDS;

export type NavItem = {
  id: (typeof SECTION_IDS)[SectionKey];
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  { id: SECTION_IDS.hero, label: "Home" },
  { id: SECTION_IDS.projects, label: "Projects" },
  { id: SECTION_IDS.skills, label: "Skills" },
  { id: SECTION_IDS.architecture, label: "Architecture" },
  { id: SECTION_IDS.experience, label: "Experience" },
  { id: SECTION_IDS.contact, label: "Contact" },
];

