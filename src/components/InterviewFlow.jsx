import React from 'react';
import { motion } from 'framer-motion';
import { Video, BarChart, Calendar, X, User, Star, Mail, CheckCircle2, Diamond } from 'lucide-react';

const Stage = ({ icon: Icon, title, subtitle, delay, isLast, isDecision, outcome }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="relative pl-8 pb-8 last:pb-0"
  >
    {/* Vertical Line */}
    {!isLast && (
      <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-100"></div>
    )}
    
    {/* Icon Node */}
    <div className={`absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center border-4 border-white shadow-md z-10 ${
      outcome === 'positive' ? 'bg-green-100 text-green-600' : 
      outcome === 'negative' ? 'bg-red-100 text-red-600' : 
      isDecision ? 'bg-purple-100 text-purple-600 rotate-45 rounded-lg' : 'bg-blue-50 text-blue-600'
    }`}>
      <Icon className={`w-5 h-5 ${isDecision ? '-rotate-45' : ''}`} />
    </div>

    {/* Content Card */}
    <div className="ml-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow cursor-default group">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        </div>
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          <CheckCircle2 className="w-4 h-4 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default function InterviewFlow() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative h-[600px] flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white"></div>
      
      <div className="p-6 md:p-8 z-10 flex-1 flex flex-col h-full">
        <div className="mb-6 flex justify-between items-end">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Multi-Stage Interview</h3>
            <p className="text-gray-500 text-sm">Automated coordination & scoring</p>
          </div>
          <div className="hidden md:block text-right">
            <div className="text-sm text-gray-500">Time to Hire</div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 line-through text-sm">42 Days</span>
              <span className="text-green-600 font-bold text-xl">12 Days</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar relative">
          <Stage icon={CheckCircle2} title="Candidate Accepts" subtitle="Interview invite accepted" delay={0.2} />
          <Stage icon={Video} title="Round 1: AI Video" subtitle="Asynchronous video responses" delay={0.4} />
          <Stage icon={BarChart} title="AI Scoring" subtitle="Ranked by relevance & sentiment" delay={0.6} />
          
          {/* Branching Visual */}
          <div className="relative pl-8 pb-8">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-blue-100"></div>
            <div className="absolute left-0 top-0 w-10 h-10 bg-purple-100 text-purple-600 rotate-45 rounded-lg flex items-center justify-center border-4 border-white shadow-md z-10">
              <Diamond className="w-5 h-5 -rotate-45" />
            </div>
            <div className="ml-6 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-green-50 border border-green-100 p-3 rounded-lg"
              >
                <div className="text-xs font-bold text-green-700 mb-1">Score &gt; 80%</div>
                <div className="flex items-center gap-2 text-xs text-green-600">
                  <Calendar className="w-3 h-3" /> Auto-Schedule Round 2
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="bg-red-50 border border-red-100 p-3 rounded-lg opacity-60"
              >
                <div className="text-xs font-bold text-red-700 mb-1">Score &lt; 80%</div>
                <div className="flex items-center gap-2 text-xs text-red-600">
                  <X className="w-3 h-3" /> Auto-Reject
                </div>
              </motion.div>
            </div>
          </div>

          <Stage icon={User} title="Hiring Manager Interview" subtitle="Live interview with team" delay={1.2} />
          
          <div className="relative pl-8">
            <div className="absolute left-0 top-0 w-10 h-10 bg-purple-100 text-purple-600 rotate-45 rounded-lg flex items-center justify-center border-4 border-white shadow-md z-10">
              <Diamond className="w-5 h-5 -rotate-45" />
            </div>
            <div className="ml-6 grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 }}
                className="bg-green-600 text-white p-4 rounded-xl shadow-lg"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="font-bold text-sm">HIRE</span>
                </div>
                <p className="text-xs text-green-100">Send Offer Letter</p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5 }}
                className="bg-gray-100 text-gray-500 p-4 rounded-xl border border-gray-200"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-4 h-4" />
                  <span className="font-bold text-sm">REJECT</span>
                </div>
                <p className="text-xs">Personalized Email</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}