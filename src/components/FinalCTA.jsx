import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-recruiter-dark-primary text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight leading-tight"
        >
          Ready to Hire <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Better, Faster?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium"
        >
          Join 500+ companies hiring smarter with AI. Start your free trial today and see the difference.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button 
            size="lg" 
            className="bg-recruiter-primary hover:bg-blue-500 text-white px-10 py-8 text-xl font-bold rounded-full min-w-[240px] shadow-lg hover:shadow-blue-500/40 transition-all duration-300"
          >
            Start Free Trial <ArrowRight className="ml-2 w-6 h-6" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-transparent border-2 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white hover:border-gray-600 px-10 py-8 text-xl font-bold rounded-full min-w-[240px] transition-all duration-300"
          >
            <Calendar className="mr-2 w-6 h-6" /> Schedule Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}