import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="fixed w-full top-0 z-50 flex items-center justify-center px-4 py-3">
      <nav className="bg-gradient-to-r from-black/70 via-gray-900/60 to-black/70 backdrop-blur-lg border border-white/10 shadow-lg flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full text-white text-sm">
        
       
        <a href="#">
          <img
            src="../public/v.jpg"
            className="rounded-full w-10 h-10 object-cover ring-2 ring-indigo-500 hover:scale-110 transition-transform duration-300"
            alt="logo"
          />
        </a>

        
        <div className="hidden md:flex items-center gap-8 ml-7 font-medium">
          {["Home", "About", "Project", "Skills"].map((item) => (
            <a
              href={`#${item}`}
              className="relative pb-1 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bg-indigo-500 after:left-0 after:bottom-0 after:transition-all after:duration-300 hover:after:w-full"
              key={item}
            >
              {item}
            </a>
          ))}
        </div>

        
        <div className="hidden md:flex items-center gap-4">
          <a
            href="#Contact"
            className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:shadow-[0px_0px_25px_6px] hover:shadow-indigo-500/50 transition-all duration-300"
          >
            Contact
          </a>
        </div>

        
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none hover:scale-110 transition-transform"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> 
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> 
            )}
          </svg>
        </button>

       
        <div
          className={`absolute top-full left-0 w-full bg-black/95 backdrop-blur-md flex-col items-center gap-6 text-lg font-medium py-8 transition-all duration-500 md:hidden ${
            isMenuOpen ? "flex animate-fadeIn" : "hidden"
          }`}
        >
          {["Home", "About", "Project", "Skills"].map((item) => (
            <a
              href={`#${item}`}
              className="hover:text-indigo-400 transition-colors"
              key={item}
            >
              {item}
            </a>
          ))}

          <a href="#Contact" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full shadow-md hover:shadow-[0px_0px_25px_6px] hover:shadow-purple-500/50 transition-all duration-300">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
