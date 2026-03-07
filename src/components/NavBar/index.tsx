import React, { useState } from "react";
import { PROFILE } from "@/constants/profile";
import {
  Menu,
  X,
  Home,
  Code,
  Cpu,
  Layers,
  Briefcase,
  Mail,
} from "lucide-react";
import { SECTION_IDS } from "@/constants/navigation";
import { motion, AnimatePresence } from "framer-motion";

// Map section IDs to proper icons
const ICON_MAP: Record<string, React.ElementType> = {
  [SECTION_IDS.hero]: Home,
  [SECTION_IDS.projects]: Code,
  [SECTION_IDS.skills]: Cpu,
  [SECTION_IDS.architecture]: Layers,
  [SECTION_IDS.experience]: Briefcase,
  [SECTION_IDS.contact]: Mail,
};

// Custom NavButton
interface NavButtonProps {
  href: string;
  label: string;
  icon?: React.ElementType;
  onClick?: () => void;
  isMobile?: boolean;
}
const NavButton: React.FC<NavButtonProps> = ({
  href,
  label,
  icon: Icon,
  onClick,
  isMobile = false,
}) => (
  <a
    href={href}
    onClick={onClick}
    className={`flex items-center gap-2 font-medium transition-colors ${
      isMobile
        ? "w-full px-4 py-2 rounded-md hover:bg-[var(--surface-muted)]"
        : "relative group px-2 py-1 hover:text-[var(--color-primary)]"
    }`}
  >
    {Icon && <Icon className="w-5 h-5 text-[var(--color-primary)]" />}
    {label}
    {!isMobile && (
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] transition-all group-hover:w-full"></span>
    )}
  </a>
);

// Profile Badge
const ProfileBadge: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="flex flex-col leading-tight">
      <span className="text-sm md:text-base font-semibold">{PROFILE.name}</span>
      <span className="text-xs md:text-sm text-[var(--text-secondary)]">
        {PROFILE.title}
      </span>
    </div>
  </div>
);

// Navigation Links
const NavLinks: React.FC<{ onClick?: () => void; isMobile?: boolean }> = ({
  onClick,
  isMobile = false,
}) => (
  <div
    className={`flex ${isMobile ? "flex-col gap-4" : "flex-row gap-6"} items-center`}
  >
    {Object.entries(SECTION_IDS).map(([key, id]) => {
      const Icon = ICON_MAP[id];
      const label = key.charAt(0).toUpperCase() + key.slice(1); // Capitalize
      return (
        <NavButton
          key={id}
          href={`#${id}`}
          label={label}
          icon={Icon}
          onClick={onClick}
          isMobile={isMobile}
        />
      );
    })}
  </div>
);

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Framer Motion variants for menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-[var(--surface-elevated)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] h-20 flex items-center justify-between px-6 md:px-20">
      {/* Profile */}
      <ProfileBadge />

      {/* Desktop Navigation */}
      <div className="hidden md:flex">
        <NavLinks />
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="p-2 rounded hover:bg-[var(--surface-muted)] transition"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden absolute top-20 left-4 right-4 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-lg flex flex-col items-start py-4 shadow-lg"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <NavLinks onClick={() => setMenuOpen(false)} isMobile />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
