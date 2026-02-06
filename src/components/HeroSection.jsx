import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Button } from './ui/button';

const Bubble = ({ name, role, text, position, delay, color, initials }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.9 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ delay, duration: 0.8, ease: "easeOut" }}
    className={`relative lg:absolute ${position} z-20 w-full max-w-xs mx-auto lg:mx-0 mb-4 lg:mb-0`}
  >
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay * 2 }}
      className="bg-white/70 backdrop-blur-xl border border-white/40 p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300"
    >
      <div className="flex items-center gap-3 mb-3">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-md" 
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <div>
          <p className="text-sm font-bold text-gray-900">{name}</p>
          <p className="text-[11px] text-gray-600 uppercase tracking-wide font-medium">{role}</p>
        </div>
      </div>
      <p className="text-sm text-gray-800 leading-relaxed font-medium italic">"{text}"</p>
    </motion.div>
  </motion.div>
);

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 lg:py-0">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1695173583133-c19731e2df44" 
          alt="Modern Office Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-recruiter-light-primary/90 via-white/80 to-white/95 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      <div className="max-w-10xl mx-auto px-6 relative z-10 w-full h-full flex flex-col justify-center">
        <div className="text-center max-w-5xl mx-auto relative py-10 lg:py-20">
          
          {/* Floating Bubbles - Desktop Positioned, Mobile Stacked */}
          <div className="hidden lg:block">
            <Bubble 
              name="Sarah K." 
              role="Founder at TechStart" 
              text="Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors." 
              position="top-[-10px] left-[-250px]" 
              delay={0.2} 
              color="#3B82F6"
              initials="SK"
            />
            <Bubble 
              name="Rahul M." 
              role="Hiring Manager at GrowthCo" 
              text="Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months." 
              position="top-[20px] right-[-250px]" 
              delay={0.4} 
              color="#B197FC"
              initials="RM"
            />
            <Bubble 
              name="Priya S." 
              role="CEO at InnovateLabs" 
              text="I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly." 
              position="bottom-[20px] left-[-300px]" 
              delay={0.6} 
              color="#A5D8FF"
              initials="PS"
            />
            <Bubble 
              name="Amit T." 
              role="Head of HR at ScaleUp" 
              text="Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening." 
              position="bottom-[-40px] right-[-250px]" 
              delay={0.8} 
              color="#D0BCFF"
              initials="AT"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-30"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 mb-8 leading-[1.1] tracking-tight drop-shadow-sm">
              Every Hire, <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-recruiter-primary to-recruiter-accent-3">Faster</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-recruiter-primary to-recruiter-accent-3">Better</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Stop losing great candidates to slow, manual hiring processes. Let AI handle the heavy lifting while you focus on building your team.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center relative z-30"
          >
            <Button
              size="lg"
              className="bg-recruiter-primary hover:bg-blue-600 text-white px-10 py-8 text-xl font-bold rounded-full shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1 transition-all duration-300 min-w-[240px]"
            >
              Start Hiring Smarter
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/50 backdrop-blur-sm border-2 border-gray-200 text-gray-800 hover:border-recruiter-primary hover:text-recruiter-primary px-10 py-8 text-xl font-bold rounded-full transition-all duration-300 min-w-[240px]"
            >
              <Play className="mr-2 w-5 h-5 fill-current" />
              See How It Works
            </Button>
          </motion.div>

          {/* Mobile Stacked Bubbles */}
          <div className="lg:hidden mt-16 space-y-4 px-4">
             <Bubble 
              name="Sarah K." 
              role="Founder at TechStart" 
              text="Candidates wait 3 weeks for replies while I'm juggling everything." 
              position="" 
              delay={0.6} 
              color="#3B82F6"
              initials="SK"
            />
            <Bubble 
              name="Rahul M." 
              role="Hiring Manager" 
              text="Hired on gut feeling. They quit in 2 months." 
              position="" 
              delay={0.7} 
              color="#B197FC"
              initials="RM"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;