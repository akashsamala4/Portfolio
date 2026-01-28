"use client";

import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import Title from "./Title";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 py-16 overflow-visible">

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col items-center lg:items-start gap-8 text-center lg:text-left max-w-xl">

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-green-400 to-indigo-500 bg-clip-text text-transparent">
          Hello! I am <span className="text-white">Akash</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Computer Science & AI student passionate about web development and building modern, user-friendly applications.
        </p>

        <div className="flex gap-4">
          <Link href="mailto:samalaakash4@gmail.com">
            <Title text="Let's Connect" />
          </Link>

          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>

      {/* RIGHT DECORATION */}
      <div className="relative z-10 mb-11 animate-decorFloat">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes decorFloat {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-decorFloat {
          animation: decorFloat 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
