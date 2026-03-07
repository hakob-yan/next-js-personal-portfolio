import Image from "next/image";
import { PROFILE } from "@/constants/profile";
import { SECTION_IDS } from "@/constants/navigation";
import { Button } from "@/components/Button";

export function HeroSection() {
  return (
    <section
      id={SECTION_IDS.hero}
      className="min-h-[60vh] flex flex-col justify-center gap-8 md:gap-10"
      aria-label="Introduction"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-10">
        <div className="space-y-4 md:space-y-5 max-w-2xl">
          <p className="text-sm uppercase tracking-[0.3em] text-[var(--color-primary)]">
            {PROFILE.title}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            {PROFILE.name}
          </h1>
          <p className="text-base md:text-lg text-balance max-w-2xl">
            {PROFILE.tagline}
          </p>
          <p className="text-sm md:text-base text-balance max-w-2xl space-y-1">
            {PROFILE.bio.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </p>
        </div>
        {PROFILE.avatar && (
          <div className="flex-shrink-0 self-start md:self-auto animate-float-slow">
            <div className="relative h-56 w-56 md:h-72 md:w-72 rounded-full overflow-hidden border-2 border-[var(--color-primary)]/90 shadow-2xl">
              <Image
                src={PROFILE.avatar.src}
                alt={PROFILE.avatar.alt}
                fill
                sizes="288px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        {PROFILE.links.email && (
          <Button href={`mailto:${PROFILE.links.email}`} variant="primary">
            Contact
          </Button>
        )}
        {PROFILE.links.github && (
          <Button href={PROFILE.links.github} variant="outline">
            GitHub
          </Button>
        )}
        {PROFILE.links.linkedin && (
          <Button href={PROFILE.links.linkedin} variant="outline">
            LinkedIn
          </Button>
        )}
      </div>
    </section>
  );
}

