import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "LinkedIn", "Naukri.com", "Indeed", "AngelList", "Instahyre", 
  "Wellfound", "IIMJobs", "Glassdoor", "Monster India", "Cutshort"
];

export default function LogoSliderSection() {
  return (
    <section className="py-20 bg-white border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Post Once, Reach Everywhere</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          RecruiterAI automatically syncs your job postings across all major platforms, saving you hours of manual entry.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group py-8">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
        
        <motion.div
          className="flex gap-20 items-center whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...logos, ...logos, ...logos].map((logo, index) => (
            <span 
              key={index} 
              className="text-3xl md:text-4xl font-bold text-gray-300 hover:text-gray-900 transition-all duration-500 cursor-default select-none hover:scale-110 transform inline-block"
              style={{ textShadow: '0 0 0 rgba(0,0,0,0)' }}
            >
              {logo}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}