import Image from "next/image";
import { PROFILE } from "@/constants/profile";
import { SECTION_IDS } from "@/constants/navigation";
import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      aria-label="Introduction"
      className="relative flex min-h-[80vh] items-center py-16"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-12 md:flex-row md:items-center md:justify-between md:gap-20">

        {/* LEFT CONTENT */}
        <div className="max-w-xl text-center md:text-left space-y-6">

          {/* Title */}
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--color-primary)] font-semibold">
            {PROFILE.title}
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05]">
            {PROFILE.name}
          </h1>

          {/* Tagline */}
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-800 dark:text-neutral-200">
            {PROFILE.tagline}
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {PROFILE.description}
          </p>

          {/* Core Stack */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 pt-2">
            {PROFILE.coreStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs md:text-sm text-neutral-700 dark:text-neutral-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-4">

            <Button
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
              <Button
                href={PROFILE.links.github}
                className="px-4 py-2 text-sm"
              >
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

        {/* AVATAR */}
        {PROFILE.avatar && (
          <div className="relative flex-shrink-0">

            <div className="relative h-52 w-52 sm:h-60 sm:w-60 md:h-72 md:w-72">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] blur-3xl opacity-30"></div>

              {/* Border */}
              <div className="relative h-full w-full rounded-full p-[3px] bg-[var(--color-primary)] shadow-2xl">

                <div className="relative h-full w-full overflow-hidden rounded-full bg-white dark:bg-neutral-900">

                  <Image
                    src={PROFILE.avatar.src}
                    alt={PROFILE.avatar.alt}
                    fill
                    sizes="(max-width: 768px) 220px, 288px"
                    priority
                    className="object-cover"
                  />

                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}