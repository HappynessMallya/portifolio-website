"use client";

import { FaReact, FaNodeJs, FaAws, FaDatabase, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpo,
} from "react-icons/si";
import { IoLogoReact } from "react-icons/io5"; // Use for React Native

const skills = [
  { icon: FaReact, label: "React.js" },
  { icon: IoLogoReact, label: "React Native" }, // Added React Native
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiTailwindcss, label: "Tailwind CSS" },
  { icon: SiTypescript, label: "TypeScript" },
  { icon: FaNodeJs, label: "Node.js" },
  { icon: SiExpo, label: "Expo" }, // Added Expo
  { icon: FaAws, label: "AWS" },
  { icon: FaDatabase, label: "PostgreSQL" },
  { icon: FaGitAlt, label: "Git & GitHub" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 px-4">
        {skills.map((skill, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <skill.icon className="text-6xl mb-4 hover:scale-110 transition-transform duration-300" />
            <p>{skill.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
