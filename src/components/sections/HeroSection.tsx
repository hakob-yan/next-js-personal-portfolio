import Image from "next/image";
import { PROFILE } from "@/constants/profile";
import { SECTION_IDS } from "@/constants/navigation";
import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      aria-label="Introduction"
      className="relative min-h-[75vh] flex flex-col justify-center py-12"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-20">
        {/* Left */}
        <div className="max-w-2xl space-y-6">
          {/* Title */}
          <p className="text-xs md:text-sm uppercase tracking-[0.35em] text-[var(--color-primary)] font-medium">
            {PROFILE.title}
          </p>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            {PROFILE.name}
          </h1>

          {/* Headline */}
          <h2 className="text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
            {PROFILE.tagline}
          </h2>

          {/* Short description */}
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {PROFILE.description}
          </p>

          {/* Core stack */}
          <div className="flex flex-wrap gap-2 pt-2">
            {PROFILE.coreStack.map((tech) => (
              <span
                key={tech}
                className="text-xs md:text-sm px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Button
              target="_self"
              href="#projects"
              variant="primary"
              className="px-6 py-2.5 text-sm font-medium shadow-md hover:shadow-lg"
            >
              View Projects
            </Button>

            {PROFILE.links.resume && (
              <Button
                href={PROFILE.links.resume}
                variant="outline"
                className="px-6 py-2.5 text-sm"
              >
                Download CV
              </Button>
            )}

            {PROFILE.links.github && (
              <Button href={PROFILE.links.github} className="px-4 py-2 text-sm">
                GitHub
              </Button>
            )}

            {PROFILE.links.linkedin && (
              <Button
                href={PROFILE.links.linkedin}
                className="px-4 py-2 text-sm"
              >
                LinkedIn
              </Button>
            )}
          </div>
        </div>

        {/* Avatar */}
        {PROFILE.avatar && (
          <div className="relative flex-shrink-0 self-start md:self-auto">
            <div className="relative h-60 w-60 md:h-72 md:w-72 rounded-full p-[3px] bg-[var(--color-primary)] shadow-4xl">
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

            <div className="absolute inset-0 -z-10 blur-3xl opacity-40 bg-[var(--color-primary)] rounded-full"></div>
          </div>
        )}
      </div>
    </section>
  );
}
