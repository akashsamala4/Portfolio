"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  SiBootstrap,
  SiCplusplus,
  SiCss3,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPowerbi,
  SiPython,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

/* ---------------- Title ---------------- */
type TitleProps = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: TitleProps) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
      {text}
    </h2>
    <div className="w-24 h-2 bg-blue-500 rounded-full mt-2 -rotate-6"></div>
    <div className="w-24 h-2 bg-indigo-500 rounded-full mt-1 -rotate-6 blur-sm opacity-50"></div>
  </div>
);

/* ---------------- Types ---------------- */
type SkillItem = {
  text: string;
  Icon: React.ComponentType<{ size?: number }>;
  color: string;
};

/* ---------------- Hover Effect ---------------- */
const HoverEffect = ({ items }: { items: SkillItem[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-10 gap-8">
    {items.map((item, i) => (
      <motion.div
        key={i}
        className="relative group block p-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: i * 0.08 }}
      >
        <div className="relative z-20 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-105">
          <div className="mb-4" style={{ color: item.color }}>
            <item.Icon size={64} />
          </div>
          <p className="text-xl font-semibold" style={{ color: item.color }}>
            {item.text}
          </p>
        </div>
      </motion.div>
    ))}
  </div>
);

/* ---------------- Skills Section ---------------- */
const Skills = () => {
  const skills: SkillItem[] = [
    { text: "Python", Icon: SiPython, color: "#3776AB" },
    { text: "React", Icon: SiReact, color: "#61DAFB" },
    { text: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
    { text: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
    { text: "Node.js", Icon: SiNodedotjs, color: "#339933" },
    { text: "Express.js", Icon: SiExpress, color: "#ffffff" },
    { text: "MongoDB", Icon: SiMongodb, color: "#47A248" },
    { text: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
    { text: "HTML5", Icon: SiHtml5, color: "#E34F26" },
    { text: "CSS3", Icon: SiCss3, color: "#1572B6" },
    { text: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    { text: "MySQL", Icon: SiMysql, color: "#4479A1" },
    { text: "C++", Icon: SiCplusplus, color: "#00599C" },
    { text: "Power BI", Icon: SiPowerbi, color: "#F2C811" },
  ];

  return (
    <section className="w-full py-20 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <Title text="My Skills" className="mb-16" />
        <HoverEffect items={skills} />
      </div>
    </section>
  );
};

export default Skills;
