import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Brain,
  MessageSquare,
  Calendar,
  X,
  CheckCircle2,
  Diamond
} from 'lucide-react';

/* ---------- Timeline Stage ---------- */
const Stage = ({
  icon: Icon,
  title,
  subtitle,
  delay,
  isLast,
  isDecision
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.45 }}
    className="relative pl-8 pb-8 last:pb-0"
  >
    {/* Vertical Line */}
    {!isLast && (
      <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 to-blue-100" />
    )}

    {/* Icon */}
    <div
      className={`absolute left-0 top-0 w-10 h-10 flex items-center justify-center border-4 border-white shadow-md z-10
        ${
          isDecision
            ? 'bg-purple-100 text-purple-600 rotate-45 rounded-lg'
            : 'bg-blue-50 text-blue-600 rounded-full'
        }`}
    >
      <Icon className={`w-5 h-5 ${isDecision ? '-rotate-45' : ''}`} />
    </div>

    {/* Card */}
    <div className="ml-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  </motion.div>
);

/* ---------- Main Component ---------- */
export default function ScreeningFlow() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative min-h-[600px] flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />

      <div className="p-6 md:p-8 z-10 flex-1 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900">Automated Screening</h3>
          <p className="text-gray-500 text-sm">
            From application to interview in minutes
          </p>
        </div>

        {/* Timeline */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar relative">
          <Stage
            icon={Mail}
            title="New Application"
            subtitle="Candidate submits application"
            delay={0.1}
          />

          <Stage
            icon={Brain}
            title="AI Resume Screening"
            subtitle="Skills, experience & relevance analyzed"
            delay={0.3}
          />

          <Stage
            icon={MessageSquare}
            title="Auto Questions"
            subtitle="Dynamic screening questions sent"
            delay={0.5}
          />

          {/* Decision Block */}
          <div className="relative pl-8 pb-8">
            {/* Vertical stem */}
            <div className="absolute left-[19px] top-0 h-8 w-0.5 bg-purple-200" />

            {/* Decision Icon */}
            <div className="absolute left-0 top-0 w-10 h-10 bg-purple-100 text-purple-600 rotate-45 rounded-lg flex items-center justify-center border-4 border-white shadow-md z-10">
              <Diamond className="w-5 h-5 -rotate-45" />
            </div>

            {/* Outcomes */}
            <div className="ml-6 grid grid-cols-2 gap-4 mt-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="bg-green-50 border border-green-100 p-3 rounded-lg"
              >
                <div className="text-xs font-bold text-green-700 mb-1">
                  Score &gt; 75%
                </div>
                <div className="flex items-center gap-2 text-xs text-green-600">
                  <Calendar className="w-3 h-3" />
                  Auto Schedule Interview
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="bg-red-50 border border-red-100 p-3 rounded-lg opacity-70"
              >
                <div className="text-xs font-bold text-red-700 mb-1">
                  Score &lt; 75%
                </div>
                <div className="flex items-center gap-2 text-xs text-red-600">
                  <X className="w-3 h-3" />
                  Rejection Email
                </div>
              </motion.div>
            </div>
          </div>

          {/* End */}
          <Stage
            icon={CheckCircle2}
            title="Process Complete"
            subtitle="Candidate notified automatically"
            delay={1.1}
            isLast
          />
        </div>
      </div>
    </div>
  );
}