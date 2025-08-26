import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";


const services = [
  {
    id: 1,
    title: "UI/UX Design",
    description:
      "I create intuitive, user-centered designs that ensure seamless interactions and engaging digital experiences."
  },
  {
    id: 2,
    title: "Graphic Design",
    description:
      "From branding to social media creatives, I craft visuals that communicate your brand’s story effectively."
  },
  {
    id: 3,
    title: "Web Design",
    description:
      "Responsive, modern, and performance-focused websites tailored to your goals and audience."
  },
  {
    id: 4,
    title: "Branding",
    description:
      "I help brands find their voice through strong visual identity systems, logos, and cohesive design strategies."
  }
];

export default function ServicesSection() {
  const [openId, setOpenId] = useState(null);

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="bg-white text-black py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
      
        <div>
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase mb-4">
            What I Can Do For You
          </h2>
          <p className="text-[#1d5e5c] font-mono mb-14 max-w-2xl leading-relaxed">
            As a digital designer, I am a visual storyteller, crafting experiences
            that connect deeply and spark creativity.
          </p>
          

          {/* Accordion */}
          <div className="space-y-6 ">
           
            {services.map((service) => (
              
              <div
                key={service.id}
                className="border border-gray-900 rounded-xl p-5 hover:border-indigo-500  transition duration-300"
              >
                {/* Header */}
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleAccordion(service.id)}
                >
                  <h3 className="text-lg md:text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-pink-500">
                    {service.id}. {service.title}
                  </h3>
                  {openId === service.id ? (
                    <ChevronUp className="w-6 h-6 text-gray-300" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-gray-300" />
                  )}
                </div>

                
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    openId === service.id ? "max-h-40 mt-4" : "max-h-0"
                  }`}
                >
                  <p className="text-[#1d5e5c] font-medium">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        
        <div className="flex justify-center lg:justify-end">
          <img
            src="/l.gif"
            alt="Working animation"
            className="w-72  lg:w-96 h-auto  rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
