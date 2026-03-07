import React from "react";
import { NAV_ITEMS } from "@/constants/navigation";
import { PROFILE } from "@/constants/profile";
import { Button } from "@/components/Button";

function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between py-3 px-6 md:px-20 bg-[var(--surface-elevated)]/95 backdrop-blur-sm h-20 border-b border-[var(--border-subtle)]">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="h-8 w-8 rounded-full border border-[var(--color-primary)]/70 flex items-center justify-center text-xs font-semibold text-[var(--color-primary)]">
          HH
        </div>
        <div className="flex flex-col leading-tight">
          <span className="text-sm md:text-base font-medium">
            {PROFILE.name}
          </span>
          <span className="text-[0.7rem] md:text-xs text-[var(--text-secondary)]">
            {PROFILE.title}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-x-4 md:gap-x-8">
        {NAV_ITEMS.map((item) => (
          <Button key={item.id} href={`#${item.id}`} variant="nav">
            {item.label}
          </Button>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
