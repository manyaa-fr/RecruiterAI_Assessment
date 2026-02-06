import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Clock,
  RefreshCw,
  Send,
  HelpCircle,
  Rocket,
  Repeat,
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
      <div className="absolute left-[19px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-purple-200 to-purple-100" />
    )}

    {/* Icon */}
    <div
      className={`absolute left-0 top-0 w-10 h-10 flex items-center justify-center border-4 border-white shadow-md z-10
        ${
          isDecision
            ? 'bg-purple-100 text-purple-600 rotate-45 rounded-lg'
            : 'bg-purple-50 text-purple-600 rounded-full'
        }`}
    >
      <Icon className={`w-5 h-5 ${isDecision ? '-rotate-45' : ''}`} />
    </div>

    {/* Content */}
    <div className="ml-6 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
      <h4 className="font-bold text-gray-900 text-sm">{title}</h4>
      <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
    </div>
  </motion.div>
);

/* ---------- Main Component ---------- */
export default function ReengagementFlow() {
  return (
    <div className="w-full bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative min-h-[600px] flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/30 to-white" />

      <div className="p-6 md:p-8 z-10 flex-1 flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            Passive Re-engagement
          </h3>
          <p className="text-gray-500 text-sm">
            Automatically revive strong candidates
          </p>
        </div>

        {/* Timeline */}
        <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar relative">
          <Stage
            icon={Database}
            title="Talent Pool"
            subtitle="Qualified candidates stored automatically"
            delay={0.1}
          />

          <Stage
            icon={Clock}
            title="Cooling Period"
            subtitle="Wait 60–90 days before re-contact"
            delay={0.3}
          />

          <Stage
            icon={RefreshCw}
            title="New Role Match"
            subtitle="AI detects relevant job opening"
            delay={0.5}
          />

          <Stage
            icon={Send}
            title="Re-engagement Email"
            subtitle="Personalized outreach sent automatically"
            delay={0.7}
          />

          {/* Decision Block */}
          <div className="relative pl-8 pb-8">
            {/* Stem */}
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
                transition={{ delay: 0.9 }}
                className="bg-green-50 border border-green-100 p-3 rounded-lg"
              >
                <div className="text-xs font-bold text-green-700 mb-1">
                  Candidate Interested
                </div>
                <div className="flex items-center gap-2 text-xs text-green-600">
                  <Rocket className="w-3 h-3" />
                  Fast-track to Interview
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="bg-gray-50 border border-gray-200 p-3 rounded-lg opacity-70"
              >
                <div className="text-xs font-bold text-gray-700 mb-1">
                  No Response
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Repeat className="w-3 h-3" />
                  Keep in Talent Pool
                </div>
              </motion.div>
            </div>
          </div>

          <Stage
            icon={HelpCircle}
            title="Continuous Monitoring"
            subtitle="Candidate stays warm for future roles"
            delay={1.2}
            isLast
          />
        </div>
      </div>
    </div>
  );
}