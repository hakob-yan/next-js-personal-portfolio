"use client";
import { useEffect, useRef } from "react";
import canvasAnimate from "../utils/animate";
import NavBar from "@/components/NavBar";

export default function Home() {
  const canvasElem = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const animate = canvasAnimate(canvasElem.current as HTMLCanvasElement);
    animate.start();
    return () => animate.end();
  }, []);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="flex min-h-screen flex-col ">
        <canvas className="fixed h-full w-full -z-10" ref={canvasElem}></canvas>
      </main>
    </>
  );
}
