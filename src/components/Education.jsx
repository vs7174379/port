import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech)",
      institution: "IIMT COLLEGE OF ENGINEERING, Greater Noida",
      year: "2022 - 2026",
      description:
        "Specialized in Computer Science with focus on software engineering, AI, and web development.",
    },
    {
      id: 2,
      degree: "Senior Secondary (XII)",
      institution: "Kendriya Vidyalaya",
      year: "2020 - 2021",
      description: "Studied Physics, Chemistry, Mathematics. Secured 85% overall.",
    },
    {
      id: 3,
      degree: "Secondary (X)",
      institution: "Kendriya Vidyalaya",
      year: "2018 - 2019",
      description: "Completed foundational studies. Secured 81% overall.",
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#a6ecab] to-[#ffffff] min-h-screen text-gray-900 flex items-center">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-16 text-[#043836] drop-shadow-md">
          🎓 Education
        </h2>

        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {education.map((edu) => (
            <div
              key={edu.id}
              className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl shadow-lg 
              hover:shadow-2xl p-6 transform hover:-translate-y-2 hover:scale-[1.02] 
              transition-all duration-300 ease-in-out flex flex-col h-full"
            >
              
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-full bg-indigo-100">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#043836]">
                  {edu.degree}
                </h3>
              </div>

              
              <p className="text-[#043836] text-sm sm:text-base font-medium">
                {edu.institution}
              </p>

             
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#2c7a09] font-semibold mt-3">
                <Calendar className="w-4 h-4" />
                {edu.year}
              </div>

              
              <p className="text-[#043836]/90 mt-4 text-sm sm:text-base leading-relaxed flex-grow">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
