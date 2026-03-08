import Image from "next/image";
import { PROFILE } from "@/constants/profile";
import { SECTION_IDS } from "@/constants/navigation";
import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      aria-label="Introduction"
      className="relative min-h-[70vh] flex flex-col justify-center gap-10 md:gap-14 py-10"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 md:gap-16">
        
        {/* Text */}
        <div className="space-y-6 max-w-2xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--color-primary)] font-medium">
            {PROFILE.title}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight">
            {PROFILE.name}
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {PROFILE.tagline}
          </p>

          <div className="text-sm md:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed space-y-1">
            {PROFILE.bio.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
        </div>

        {/* Avatar */}
        {PROFILE.avatar && (
          <div className="relative flex-shrink-0 self-start md:self-auto animate-float-slow">
            <div className="relative h-60 w-60 md:h-72 md:w-72 rounded-full p-[3px] bg-[var(--color-primary)]  shadow-4xl">
              
              <div className="relative h-full w-full rounded-full overflow-hidden bg-white dark:bg-neutral-900">
                <Image
                  src={PROFILE.avatar.src}
                  alt={PROFILE.avatar.alt}
                  fill
                  sizes="288px"
                  priority
                  className="object-cover"
                />
              </div>

            </div>

            {/* subtle glow */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-[var(--color-primary)] rounded-full"></div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-4 pt-2">
        {PROFILE.links.email && (
          <Button
            href={`mailto:${PROFILE.links.email}`}
            variant="primary"
            className="px-6 py-2.5 text-sm font-medium shadow-md hover:shadow-lg transition"
          >
            Contact Me
          </Button>
        )}

        {PROFILE.links.github && (
          <Button
            href={PROFILE.links.github}
            variant="outline"
            className="px-6 py-2.5 text-sm"
          >
            GitHub
          </Button>
        )}

        {PROFILE.links.linkedin && (
          <Button
            href={PROFILE.links.linkedin}
            variant="outline"
            className="px-6 py-2.5 text-sm"
          >
            LinkedIn
          </Button>
        )}
      </div>
    </section>
  );
}