export const BUTTON_BASE =
  "inline-flex items-center justify-center rounded-full text-sm font-medium transition shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--surface-primary)]";

export const BUTTON_VARIANTS = {
  primary:
    "px-4 py-2 bg-[var(--color-primary)] text-white hover:opacity-90 disabled:opacity-60",
  outline:
    "px-4 py-2 border border-[var(--color-primary)] text-[var(--text-primary)] hover:bg-[var(--color-primary)] hover:text-white disabled:opacity-60",
} as const;

export type ButtonVariant = keyof typeof BUTTON_VARIANTS;
