"use client";

import { MovingBorderBtn } from "@/components/ui/moving-border";
import Link from "next/link";
import Title from "./Title";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] w-full flex flex-col-reverse lg:flex-row items-center justify-between px-6 sm:px-12 py-16 overflow-visible">
      {/* ROTATING & MOVING TRIANGLE BORDER */}
      <div
        className="absolute pointer-events-none opacity-30"
        style={{
          width: 580,
          height: 550,
          top: 0,
          left: 0,
          zIndex: 0,
          animation:
            "moveAcrossPage 25s ease-in-out infinite, rotateTriangle 18s linear infinite",
          transformOrigin: "center center",
        }}
      >
        <svg
          viewBox="0 0 200 173.2"
          className="w-full h-full"
          style={{ border: "none", outline: "none" }}
        >
          <polygon
            points="100,0 200,173.2 0,173.2"
            fill="none"
            stroke="url(#triangleGradient)"
            strokeWidth="1"
            style={{ vectorEffect: "non-scaling-stroke" }}
          />
          <defs>
            <linearGradient id="triangleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6EE7B7" /> {/* Light green */}
              <stop offset="100%" stopColor="#A5B4FC" /> {/* Light indigo */}
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col items-center lg:items-start gap-8 text-center lg:text-left max-w-xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-green-400 to-indigo-500 bg-clip-text text-transparent">
          Hello! I am <Akash></Akash>        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Computer Science & AI student passionate about web development and building modern, user-friendly applications.

        </p>

        <div className="flex gap-4">
          <Link href="mailto:samalaakash4@gmail.com" className="group">
            <Title text="Let's Connect " />
          </Link>

          <MovingBorderBtn borderRadius="0.5rem" className="p-3 font-semibold">
            <p>Available for Work</p>
          </MovingBorderBtn>
        </div>
      </div>

      {/* RIGHT DECORATION WITH FLOATING ANIMATION */}
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
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
      </div>

      {/* ANIMATION STYLE */}
      <style jsx global>{`
        @keyframes rotateTriangle {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes moveAcrossPage {
          0% {
            top: 0%;
            left: 0%;
          }
          20% {
            top: 20%;
            left: 15%;
          }
          40% {
            top: 40%;
            left: 5%;
          }
          60% {
            top: 60%;
            left: 20%;
          }
          80% {
            top: 40%;
            left: 35%;
          }
          100% {
            top: 0%;
            left: 0%;
          }
        }

        @keyframes decorFloat {
          0% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-10px) translateX(5px);
          }
          50% {
            transform: translateY(0px) translateX(0px);
          }
          75% {
            transform: translateY(10px) translateX(-5px);
          }
          100% {
            transform: translateY(0px) translateX(0px);
          }
        }

        .animate-decorFloat {
          animation: decorFloat 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
