"use client";

import {
  FaAward,
  FaBookOpen,
  FaCalendarAlt,
  FaGraduationCap,
  FaUniversity,
} from "react-icons/fa";

/* ---------------- Title Component ---------------- */
type TitleProps = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: TitleProps) => (
  <div className={`flex flex-col items-center justify-center ${className}`}>
    <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight z-10">
      {text}
    </h2>
    <div className="origin-left h-1.5 w-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-3 shadow-md" />
  </div>
);

/* ---------------- Card Component ---------------- */
interface EducationEntryProps {
  degree: string;
  major: string;
  institution: string;
  location: string;
  period: string;
  gpa?: string;
  details?: string[];
  isCurrent?: boolean;
}

const EducationCard = ({
  degree,
  major,
  institution,
  location,
  period,
  gpa,
  details,
  isCurrent,
}: EducationEntryProps) => (
  <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black p-7 rounded-2xl border border-gray-700 shadow-xl overflow-hidden group transition-all duration-300">
    {isCurrent && (
      <span className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-purple-700 text-white text-xs font-semibold px-4 py-1.5 rounded-bl-lg">
        CURRENT
      </span>
    )}

    <div className="flex items-start gap-4 mb-4">
      <FaGraduationCap className="text-blue-400 text-4xl" />
      <div>
        <h3 className="text-2xl font-extrabold text-white">{degree}</h3>
        <p className="text-lg text-blue-300">{major}</p>
      </div>
    </div>

    <div className="text-gray-300 space-y-2 text-base">
      <div className="flex items-center">
        <FaUniversity className="mr-2 text-purple-400" />
        {institution}, {location}
      </div>
      <div className="flex items-center">
        <FaCalendarAlt className="mr-2 text-purple-400" />
        {period}
      </div>
      {gpa && (
        <div className="flex items-center">
          <FaAward className="mr-2 text-purple-400" />
          Score: {gpa}
        </div>
      )}
    </div>

    {details && (
      <div className="mt-5 pt-4 border-t border-gray-700/50">
        <h4 className="font-semibold text-gray-200 mb-2 flex items-center">
          <FaBookOpen className="mr-2 text-blue-400" />
          Highlights
        </h4>
        <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
          {details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

/* ---------------- Main Section ---------------- */
const EducationSection = () => {
  const educationData: EducationEntryProps[] = [
    {
      degree: "Bachelor of Technology",
      major: "Computer Science Engineering",
      institution: "Parul Institute of Engineering and Technology",
      location: "Vadodara, India",
      period: "September 2022 – May 2026",
      gpa: "7.5%",
      details: [
        "Core subjects include Data Structures, Algorithms, DBMS, and Operating Systems.",
        "Strong foundation in Python, C++, and problem solving.",
        "Actively building projects in Web Development and Data Science.",
      ],
      isCurrent: true,
    },
    {
      degree: "Intermediate (TSBIE)",
      major: "MPC (Mathematics, Physics, Chemistry)",
      institution: "Saanvi Junior College",
      location: "Karimnagar, India",
      period: "July 2020 – January 2022",
      gpa: "9.18%",
      details: [
        "Focused on Mathematics and analytical problem solving.",
        "Developed early interest in programming and technology.",
      ],
    },
    {
      degree: "Secondary School (SSC)",
      major: "School Education",
      institution: "Universal High School",
      location: "Peddapalli, India",
      period: "July 2014 – May 2020",
      gpa: "9.5%",
      details: [
        "Completed schooling with strong academic performance.",
        "Built a solid foundation in logical thinking and problem solving.",
      ],
    },
  ];

  return (
    <section id="education" className="py-20 bg-black relative">
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <Title text="My Education" className="mb-20" />

        <div className="space-y-14">
          {educationData.map((entry, index) => (
            <EducationCard key={index} {...entry} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
