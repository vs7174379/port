import React from 'react';

export default function AboutMe() {
  return (
    <section id="About" className="bg-gradient-to-b from-[#ffffff] to-[#a6ecab] min-h-screen px-6 sm:px-10 flex items-center">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
         
          <h2 className="text-4xl font-bold text-[#043836] mb-6 tracking-wide">
            ABOUT ME
          </h2>

         
          <p className="font-roboto-condensed text-[#043836] text-lg leading-relaxed mb-12">
            Hi, I'm <span className="text-indigo-400 font-semibold">VIVEK</span> — a
            <span className="text-indigo-500"> MERN stack developer</span>   passionate about
            crafting engaging, user-centered digital experiences.
            <br />
            <br />
            With expertise in MongoDB, Express, React, Node.js, and modern design
            principles, I bridge the gap between functionality and aesthetics—
            delivering applications that are scalable, responsive, and visually
            compelling. I focus on writing clean, efficient code while designing
            intuitive interfaces and smooth interactions that bring ideas to life.
          </p>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 mb-12 font-medium text-[#1d5e5c]">
            <div>
              <p className="font-semibold">📞 Call Today :</p>
              <p className="text-red-600 font-bold">+91 8368628937</p>
            </div>
            <div>
              <p className="font-semibold">📧 Email :</p>
              <p className="text-red-600 font-bold">vs7857120@gmail.com</p>
            </div>
          </div>

        

          
          <button className="border border-[#1d5e5c] text-[#1d5e5c] px-8 py-3 rounded-full font-semibold tracking-wide hover:bg-blue-500 hover:text-white transition duration-300 shadow-md">
            Message me
          </button>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://assets-v2.lottiefiles.com/a/668de6b4-55ee-11ee-9f95-af971d099d03/9gk9mAazTR.png"
            alt="Working animation"
            className="w-72 lg:w-96 h-auto rounded-2xl drop-shadow-lg animate-[float_3s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </section>
  );
}
