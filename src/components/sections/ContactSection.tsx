import { SECTION_IDS } from "@/constants/navigation";
import { PROFILE } from "@/constants/profile";
import { Button } from "@/components/Button";

export function ContactSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="scroll-mt-24"
      aria-label="Contact and links"
    >
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Let&apos;s work together
      </h2>
      <p className="text-sm md:text-base text-balance max-w-3xl mb-6">
        Open to roles where I can own systems end-to-end, collaborate with strong
        product and design teams, and mentor other engineers.
      </p>
      <div className="flex flex-wrap gap-3 items-center">
        {PROFILE.links.email && (
          <Button href={`mailto:${PROFILE.links.email}`} variant="primary">
            Email
          </Button>
        )}
        {PROFILE.links.linkedin && (
          <Button href={PROFILE.links.linkedin} variant="outline">
            LinkedIn
          </Button>
        )}
        {PROFILE.links.github && (
          <Button href={PROFILE.links.github} variant="outline">
            GitHub
          </Button>
        )}
        {PROFILE.links.resumeUrl && PROFILE.links.resumeUrl !== "#" && (
          <Button href={PROFILE.links.resumeUrl} variant="outline">
            Download Resume
          </Button>
        )}
      </div>
    </section>
  );
}

