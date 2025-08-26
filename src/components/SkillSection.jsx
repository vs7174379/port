import React from "react";
import { Code, Database, Wrench } from "lucide-react";

const skills = {
  Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
  Backend: ["Node.js", "Express", "MongoDB", "Firebase"],
  Tools: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
};

const icons = {
  Frontend: <Code className="w-8 h-8 text-indigo-400" />,
  Backend: <Database className="w-8 h-8 text-indigo-400" />,
  Tools: <Wrench className="w-8 h-8 text-indigo-400" />,
};

const SkillSection = () => {
  return (
    <section
      id="Skills"
      className="relative h-screen bg-[url('https://cdn.pixabay.com/photo/2020/04/19/18/43/landscape-5064988_1280.jpg')] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 lg:px-12"
    >
     
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

     
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg">
          <span className="text-indigo-400">My</span> Skills
        </h2>
        <p className="text-gray-200 text-base sm:text-lg lg:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Technologies and tools I use to build modern, responsive, and
          user-friendly web experiences.
        </p>

        {/* Skill Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className="group relative bg-white/10 backdrop-blur-lg border border-white/20 p-6 rounded-2xl shadow-lg hover:scale-105 hover:shadow-indigo-500/40 transition-transform duration-300"
            >
              
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

              <div className="relative flex flex-col items-center">
               
                <div className="flex items-center justify-center gap-3 mb-5">
                  {icons[category]}
                  <h3 className="text-xl sm:text-2xl font-semibold text-indigo-300">
                    {category}
                  </h3>
                </div>

                {/* Skills */}
                <ul className="flex flex-wrap gap-3 justify-center">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="bg-indigo-500/30 border border-white/10 px-4 py-2 rounded-lg text-sm sm:text-base font-medium hover:bg-indigo-500/60 hover:scale-105 transition duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
