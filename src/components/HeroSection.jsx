import React from "react";
import { ArrowRight } from "lucide-react";
import TypingName from "./TypingName";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[url('https://images.ctfassets.net/nnkxuzam4k38/219VUMa1SOxASKqCE2OgT4/be1c810344587bd7f6f203337d23602a/ranger-4df6c1b6.png')] bg-cover bg-center">
      
      <div className="absolute inset-0 bg-black/60"></div>

    
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-10">
        
       
        <div className="text-center lg:text-left text-white flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-snug">
            Hi, I’m{" "}
            <span className="text-indigo-400">
              <TypingName />
            </span>{" "}
            👋
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xl mx-auto lg:mx-0 mb-8">
            A passionate Full Stack Developer who loves building modern web
            applications with clean UI, strong backend, and smooth user
            experiences.
          </p>

          
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#Project"
              className="bg-indigo-500 hover:bg-indigo-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center gap-2 transition"
            >
              View Projects <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
            <a
              href="#Contact"
              className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold transition"
            >
              Contact Me
            </a>
          </div>
        </div>

       
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <div className="w-48 sm:w-60 md:w-72 lg:w-80 h-60 sm:h-72 md:h-80 lg:h-96 bg-[url('v.jpg')] bg-cover bg-top rounded-2xl shadow-xl border border-white/20 backdrop-blur-md"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
