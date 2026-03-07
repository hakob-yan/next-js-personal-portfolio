"use client";
import { useEffect, useRef } from "react";
import canvasAnimate from "../utils/animate";
import NavBar from "@/components/NavBar";

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
      <header>
        <NavBar />
      </header>

      <main className="flex min-h-screen flex-col">
        <canvas className="fixed h-full w-full -z-10" ref={canvasElem}></canvas>
      </main>
    </>
  );
}