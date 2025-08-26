import React from "react";
import { Twitter, Instagram, Facebook, Linkedin, TreePine } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-10 py-8 bg-[#043836] text-white">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
       
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
           
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <TreePine className="text-green-700 w-5 h-5" />
            </div>
            <span className="font-semibold text-lg">Vivek™</span>
          </div>
          <p className="text-sm">Copyright © 2025</p>
          <p className="text-xs text-gray-300">Small change. Big change.</p>
        </div>

       

        
        <div className="mt-6 md:mt-0">
          <a
            href="#Contact"
            className="bg-[#FF867C] hover:bg-[#ff6f61] text-black px-5 py-2 rounded-md font-semibold text-sm"
          >
            CONTACT ME
          </a>
        </div>
      </div>

     
      <hr className="border-gray-500 my-6" />

      
      <div className="flex justify-end space-x-5 text-green-400">
        <a href="#"><Twitter className="w-5 h-5" /></a>
        <a href="#"><Instagram className="w-5 h-5" /></a>
        <a href="#"><Facebook className="w-5 h-5" /></a>
        <a href="#"><Linkedin className="w-5 h-5" /></a>
      </div>
    </footer>
  );
};

export default Footer;
