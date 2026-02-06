import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Brain,
  MessageSquare,
  Calendar,
  CheckCircle
} from 'lucide-react';

/* ---------- Node ---------- */
const FlowNode = ({ icon: Icon, label, color, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="flex flex-col items-center gap-2 z-10"
  >
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
      style={{ backgroundColor: color }}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>
    <span className="text-sm font-semibold text-gray-800 text-center max-w-[120px]">
      {label}
    </span>
  </motion.div>
);

/* ---------- Decision ---------- */
const DecisionNode = ({ label, delay }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="flex flex-col items-center gap-2 z-10"
  >
    <div className="w-14 h-14 bg-purple-500 rotate-45 rounded-lg shadow-lg flex items-center justify-center">
      <CheckCircle className="w-6 h-6 text-white -rotate-45" />
    </div>
    <span className="text-sm font-semibold text-gray-800 text-center">
      Score &gt; 75%?
    </span>
  </motion.div>
);

export default function ScreeningFlow() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 rounded-3xl shadow-xl border border-blue-100 p-8 h-[900px] flex flex-col overflow-hidden">

      {/* Use-case label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-xs font-semibold text-blue-600 shadow">
        Automated Screening
      </div>

      {/* Title */}
      <div className="mt-8 mb-6 text-center">
        <h3 className="text-xl font-bold text-gray-900">
          Candidate Screening Flow
        </h3>
        <p className="text-sm text-gray-600">
          From application to interview — fully automated
        </p>
      </div>

      {/* Flowchart */}
      <div className="relative flex-1 flex flex-col items-center justify-between">

        {/* Vertical line */}
        <div className="absolute top-6 bottom-6 w-[2px] bg-blue-200" />

        <FlowNode
          icon={Mail}
          label="New Application Submitted"
          color="#3B82F6"
          delay={0.1}
        />

        <FlowNode
          icon={Brain}
          label="AI Resume Screening (Top 20%)"
          color="#6366F1"
          delay={0.25}
        />

        <FlowNode
          icon={MessageSquare}
          label="Auto-Send Screening Questions"
          color="#8B5CF6"
          delay={0.4}
        />

        <DecisionNode delay={0.55} />

        {/* Outcome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className="flex gap-12"
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-green-700 text-center max-w-[120px]">
              Auto-Schedule Interview
            </span>
          </div>

          <div className="flex flex-col items-center gap-2 opacity-60">
            <div className="w-14 h-14 rounded-full bg-gray-300 flex items-center justify-center shadow">
              <Mail className="w-6 h-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-gray-500 text-center max-w-[120px]">
              Thank-You Email + Talent Pool
            </span>
          </div>
        </motion.div>
      </div>

      {/* Footer metric */}
      <div className="mt-6 pt-4 border-t border-blue-100 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-600">
          Efficiency Gain
        </span>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-blue-600">250+</div>
            <div className="text-xs text-gray-500">apps in minutes</div>
          </div>
          <div className="h-8 w-px bg-gray-300" />
          <div className="text-left opacity-50">
            <div className="text-xl font-bold text-gray-400 line-through">
              8 hrs
            </div>
            <div className="text-xs text-gray-400">manual work</div>
          </div>
        </div>
      </div>
    </div>
  );
}