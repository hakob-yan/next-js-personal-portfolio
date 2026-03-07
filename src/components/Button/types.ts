export const BUTTON_BASE =
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-primary)]";

export const BUTTON_VARIANTS = {
  primary:
    "px-4 py-2 bg-[var(--color-primary)] text-white hover:opacity-90 disabled:opacity-60",
  outline:
    "px-4 py-2 border border-[var(--color-primary)] text-[var(--text-primary)] hover:bg-[var(--color-primary)] hover:text-white disabled:opacity-60",
  nav:
    "text-[var(--text-secondary)] pb-1 text-xs md:text-sm shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 " +
    "hover:underline hover:decoration-[var(--color-primary)] hover:decoration-4 hover:underline-offset-4 transition-all duration-200",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
