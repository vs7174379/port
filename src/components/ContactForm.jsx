import React from "react";

export default function ContactSection() {
  return (
    <section
      id="Contact"
      className="bg-[url('v.png')] bg-cover bg-center min-h-screen text-gray-300 py-12 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
      
        <div className="flex justify-center">
          <div className="w-48 sm:w-64 md:w-72 lg:w-80 h-64 sm:h-80 md:h-96 bg-[url('v.jpg')] bg-cover bg-top rounded-2xl shadow-xl border border-white/20 backdrop-blur-md" />
        </div>

        
        <div className="bg-[#0c2f2d]/70 backdrop-blur-md border border-white/20 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-lime-300 uppercase leading-tight mb-4">
            Let's Work Together
          </h2>
          <p className="text-white font-medium mb-8 sm:mb-10 text-sm sm:text-base">
            Let’s build something impactful together—whether it’s your brand,
            your website, or your next big idea.
          </p>

          
          <form className="space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-lime-300 mb-2 text-sm sm:text-base">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full rounded-full bg-[#2a2a2a] px-4 py-3 text-white focus:outline-none text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-lime-300 mb-2 text-sm sm:text-base">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  className="w-full rounded-full bg-[#2a2a2a] px-4 py-3 text-white focus:outline-none text-sm sm:text-base"
                />
              </div>
            </div>

            
            <div>
              <label className="block text-lime-300 mb-2 text-sm sm:text-base">
                Service Needed?
              </label>
              <select className="w-full rounded-full bg-[#2a2a2a] px-4 py-3 text-gray-400 focus:outline-none text-sm sm:text-base">
                <option value="">Select...</option>
                <option value="web">Web Design</option>
                <option value="uiux">UI/UX Design</option>
                <option value="branding">Branding</option>
              </select>
            </div>

           
            <div>
              <label className="block text-lime-300 mb-2 text-sm sm:text-base">
                What Can I Help You With?
              </label>
              <textarea
                rows="4"
                placeholder="Hello, I'd like to enquire about..."
                className="w-full rounded-2xl bg-[#2a2a2a] px-4 py-3 text-white focus:outline-none text-sm sm:text-base"
              />
            </div>

           
            <button
              type="submit"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-full border border-lime-300 text-lime-300 font-bold uppercase tracking-wide hover:bg-lime-300 hover:text-black transition text-sm sm:text-base"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
