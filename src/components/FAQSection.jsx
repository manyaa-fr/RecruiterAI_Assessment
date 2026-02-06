import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, Zap, DollarSign, Clock, Lock, ChevronDown } from 'lucide-react';
import { cn } from "../lib/utils";

const faqs = [
  {
    question: "How does AI screening work?",
    answer: "Our AI analyzes resumes against your job descriptions using natural language processing. It looks for skills, experience, and contextual relevance, not just keywords. It then ranks candidates with a fit score, highlighting the top matches for your review.",
    icon: Brain
  },
  {
    question: "Does RecruiterAI integrate with our existing ATS?",
    answer: "Yes! We integrate seamlessly with major ATS platforms like Greenhouse, Lever, Ashby, and Workday. You can sync jobs and candidates automatically, so you don't have to change your core system of record.",
    icon: Zap
  },
  {
    question: "What's the pricing structure?",
    answer: "We offer flexible plans starting with a Starter tier for small teams, a Professional tier for growing companies, and an Enterprise tier for large organizations. All plans include a 14-day free trial.",
    icon: DollarSign
  },
  {
    question: "How long does setup take?",
    answer: "Most teams are up and running in less than 30 minutes. Simply connect your job board or ATS, invite your team, and our AI starts learning your preferences immediately.",
    icon: Clock
  },
  {
    question: "Is candidate data secure?",
    answer: "Absolutely. We are SOC 2 Type II compliant and GDPR ready. Your data is encrypted at rest and in transit, and we never share your candidate data with other companies.",
    icon: Lock
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Questions? We've Got Answers</h2>
          <p className="text-xl text-gray-600">Everything you need to know about the platform.</p>
        </div>

        <div className="w-full space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "border rounded-2xl px-6 transition-all duration-300 overflow-hidden",
                  isOpen ? "bg-recruiter-light-primary border-blue-200 shadow-md" : "bg-white border-gray-200 hover:border-blue-200"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                >
                  <div className="flex items-center gap-5">
                    <div className={cn(
                      "p-3 rounded-xl transition-colors duration-300",
                      isOpen ? "bg-white text-recruiter-primary shadow-sm" : "bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-500"
                    )}>
                      <faq.icon className="w-6 h-6" />
                    </div>
                    <span className={cn(
                      "text-lg font-bold transition-colors",
                      isOpen ? "text-recruiter-primary" : "text-gray-900"
                    )}>{faq.question}</span>
                  </div>
                  <div className={cn(
                    "p-2 rounded-full transition-all duration-300",
                    isOpen ? "bg-blue-100 rotate-180" : "bg-gray-50 group-hover:bg-gray-100"
                  )}>
                    <ChevronDown 
                      className={cn(
                        "w-5 h-5 transition-colors",
                        isOpen ? "text-blue-600" : "text-gray-400"
                      )} 
                    />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="text-gray-600 text-lg leading-relaxed pb-8 pl-[76px] pr-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}