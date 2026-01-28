"use client";

import Image from "next/image";
import { ArrowRight, TelegramLogo } from "phosphor-react";

export default function About() {
  return (
    <section className="w-full py-20 bg-black text-white overflow-hidden animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative z-10 backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-10 transition-all duration-700">
          
          {/* Glowing background */}
          <div className="absolute inset-0 z-0 opacity-40 blur-3xl bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-indigo-500 animate-glow" />

          {/* Profile Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 z-10">
            <Image
              src="/Professional_edited.jpg"
              alt="Samala Akash"
              fill
              className="rounded-full border-4 border-blue-500 shadow-xl object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute bottom-2 right-2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow animate-bounce-slow">
              Me
            </span>
          </div>

          {/* Text Content */}
          <div className="z-10 text-center md:text-left max-w-2xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold animate-slide-in-top">
              Little About Me
            </h2>

            <ul className="space-y-4 text-lg text-gray-300">
              <li className="flex items-start gap-3">
                <ArrowRight size={32} weight="bold" className="text-blue-500 mt-1" />
                <span>
                  I am <strong>Samala Akash</strong>, a Computer Science and Artificial
                  Intelligence undergraduate with a strong foundation in Python,
                  C++, databases, and data analysis.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <ArrowRight size={32} weight="bold" className="text-blue-500 mt-1" />
                <span>
                  I have hands-on experience in full-stack web development using
                  React, Next.js, Node.js, and building interactive dashboards
                  using Power BI.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <ArrowRight size={32} weight="bold" className="text-blue-500 mt-1" />
                <span>
                  I am actively preparing for software development roles and looking
                  for opportunities where I can apply my skills and grow as a
                  professional developer.
                </span>
              </li>
            </ul>

            {/* Resume Button */}
            <div className="pt-4 animate-slide-in-bottom">
              <a
                href="/Samala_Akash_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-br from-blue-600 to-purple-700 text-white font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-lg transition-all"
              >
                View Resume
                <TelegramLogo size={20} weight="bold" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInTop {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInBottom {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes glow {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
        .animate-fade-in { animation: fadeIn 1.2s ease-out both; }
        .animate-slide-in-top { animation: slideInTop 1s ease-out both; }
        .animate-slide-in-bottom { animation: slideInBottom 1s ease-out 0.3s both; }
        .animate-bounce-slow { animation: bounceSlow 2s infinite; }
        .animate-glow { animation: glow 6s infinite ease-in-out; }
      `}</style>
    </section>
  );
}
