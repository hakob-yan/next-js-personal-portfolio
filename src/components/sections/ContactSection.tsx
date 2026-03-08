import { SECTION_IDS } from "@/constants/navigation";
import { PROFILE } from "@/constants/profile";
import { Button } from "@/components/Button";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="scroll-mt-24"
      aria-label="Contact and links"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--text-primary,#111)]">
        Let&apos;s Work Together
      </h2>
      <p className="text-sm md:text-base text-[var(--text-secondary,#666)] max-w-3xl mb-8">
        Open to roles where I can own systems end-to-end, collaborate with
        strong product and design teams, and mentor other engineers to deliver
        high-quality solutions.
      </p>

      <div className="flex flex-wrap gap-4 items-center">
        {PROFILE.links.email && (
          <Button
            href={`mailto:${PROFILE.links.email}`}
            target="_self"
            variant="primary"
            className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium shadow-md hover:shadow-lg transition"
          >
            <Mail size={16} />
            Email
          </Button>
        )}
        {PROFILE.links.linkedin && (
          <Button
            href={PROFILE.links.linkedin}
            variant="outline"
            className="flex items-center gap-2 px-6 py-2.5 text-sm transition"
          >
            <Linkedin size={16} />
            LinkedIn
          </Button>
        )}
        {PROFILE.links.github && (
          <Button
            href={PROFILE.links.github}
            variant="outline"
            className="flex items-center gap-2 px-6 py-2.5 text-sm transition"
          >
            <Github size={16} />
            GitHub
          </Button>
        )}
        <Button
          href={PROFILE.links.resume}
          variant="outline"
          className="flex items-center gap-2 px-6 py-2.5 text-sm transition"
        >
          <FileText size={16} />
          Download Resume
        </Button>
        ,
      </div>
    </section>
  );
}
