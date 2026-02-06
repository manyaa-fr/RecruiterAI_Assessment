import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Rahul Mehta",
    title: "Founder",
    company: "TechStart Solutions",
    quote: "We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything from screening to scheduling. Game changer for our 5-person startup.",
    image: "https://images.unsplash.com/photo-1493882552576-fce827c6161e",
    color: "text-blue-500"
  },
  {
    name: "Priya Sharma",
    title: "Head of HR",
    company: "GrowthCo",
    quote: "The AI screening is eerily accurate. We're hiring better people in half the time. Our retention improved by 40%.",
    image: "https://images.unsplash.com/photo-1701878131592-3e22da496308",
    color: "text-purple-500"
  },
  {
    name: "Amit Patel",
    title: "CEO",
    company: "InnovateLabs",
    quote: "Finally, a recruiting tool that doesn't feel like a chore. Setup was 30 minutes, and we're already seeing results.",
    image: "https://images.unsplash.com/photo-1479800800845-03752b6188fa",
    color: "text-indigo-500"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-recruiter-light-primary relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Trusted by 500+ Companies</h2>
          <p className="text-xl text-gray-600">Don't just take our word for it. See what leaders are saying.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 relative group border border-white"
            >
              <Quote className={`w-12 h-12 ${t.color} opacity-20 absolute top-8 right-8`} />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-8 leading-relaxed relative z-10 font-medium">"{t.quote}"</p>

              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-gray-100">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{t.name}</h4>
                  <p className="text-sm text-gray-500 font-medium">{t.title}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}