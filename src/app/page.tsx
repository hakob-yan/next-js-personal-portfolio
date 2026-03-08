"use client";
import { useEffect, useRef } from "react";
import canvasAnimate from "../utils/animate";
import NavBar from "@/components/NavBar";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ArchitectureSection } from "@/components/sections/ArchitectureSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Reveal } from "@/components/Reveal";
import { SECTION_IDS } from "@/constants/navigation";

export default function Home() {
  const canvasElem = useRef<HTMLCanvasElement | null>(null);
  const resizeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!canvasElem.current) return;

    let animate = canvasAnimate(canvasElem.current);
    animate.start();

    const handleResize = () => {
      // Clear the previous timeout if resizing continues
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);

      // Set a new timeout to trigger after 200ms
      resizeTimeout.current = setTimeout(() => {
        animate.end();
        animate = canvasAnimate(canvasElem.current!);
        animate.start();
      }, 300); // adjust 200ms as needed
    };

    window.addEventListener("resize", handleResize);

    return () => {
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
      animate.end();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-20">
        <NavBar />
      </header>

      <main className="flex min-h-screen flex-col" id={SECTION_IDS.hero}>
        <canvas className="fixed h-full w-full -z-10" ref={canvasElem}></canvas>
        <div className="relative z-10 flex-1 pt-24 pb-16 px-6 md:px-20">
          <div className="max-w-5xl mx-auto space-y-20 md:space-y-28">
            <Reveal>
              <HeroSection />
            </Reveal>
            <Reveal delay={80} threshold={0.01}>
              <ProjectsSection />
            </Reveal>
            <Reveal delay={120}>
              <SkillsSection />
            </Reveal>
            <Reveal delay={160}>
              <ArchitectureSection />
            </Reveal>
            <Reveal delay={200}>
              <ExperienceSection />
            </Reveal>
            <Reveal delay={240}>
              <ContactSection />
            </Reveal>
          </div>
        </div>
      </main>
    </>
  );
}