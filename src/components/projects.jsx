import React from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern responsive portfolio showcasing projects and skills.",
    image: "p.png",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    id: 2,
    title: "Wanderlust",
    description: "Wanderlust operates an online marketplace that connects hosts offering accommodations (like houses and apartments) and Wanderlust Experiences with travelers and guests seeking short- or long-term stays and activities. ",
    image: "w.png",
    tech: ["Node.js", "MongoDB", "razorpay"],
    github: "https://github.com/",
    demo: "https://example.com",
  },
  {
    id: 3,
    title: "Cinema-A ott Web Application",
    description: " Cinema is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of ...",
    image: "a.png",
    tech: ["Node.js", "Express", "react", "MongoDB"],
    github: "https://github.com/vs7174379/cinema",
    demo: "https://cinema-naeb.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="Project" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center text-gray-900 mb-10">
          My <span className="text-indigo-600">Projects</span>
        </h2>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:scale-[1.02] flex flex-col"
            >
       
              <div className="overflow-hidden rounded-t-xl sm:rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-36 xs:h-40 sm:h-44 lg:h-56 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>

        
              <div className="p-3 xs:p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-base xs:text-lg sm:text-xl font-bold text-[#043836] mb-1 sm:mb-2">
                  {project.title}
                </h3>
                <p className="text-[#043836]/90 mb-3 sm:mb-4 text-xs xs:text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] xs:text-xs sm:text-sm bg-indigo-500/20 text-indigo-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

            
                <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 border border-gray-400/60 text-[#043836] text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md hover:border-indigo-500 hover:text-indigo-600 transition"
                  >
                    <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 sm:gap-2 bg-indigo-500 text-white text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md hover:bg-indigo-600 transition"
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
