import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Video,
  BarChart3,
  GitBranch,
  UserCheck,
  Star,
  XCircle
} from 'lucide-react';

/* ---------- CONNECTORS ---------- */
const VerticalLine = ({ delay = 0 }) => (
  <motion.div
    initial={{ scaleY: 0 }}
    whileInView={{ scaleY: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.4 }}
    className="w-px h-6 bg-blue-300 origin-top"
  />
);

const BranchCurve = ({ delay = 0 }) => (
  <motion.svg
    width="100%"
    height="28"
    viewBox="0 0 100 28"
    initial={{ pathLength: 0 }}
    whileInView={{ pathLength: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
  >
    <motion.path
      d="M 50 0 C 50 14, 10 14, 10 28"
      stroke="#93C5FD"
      strokeWidth="2"
      fill="none"
    />
    <motion.path
      d="M 50 0 C 50 14, 90 14, 90 28"
      stroke="#93C5FD"
      strokeWidth="2"
      fill="none"
    />
  </motion.svg>
);

/* ---------- NODE ---------- */
const Node = ({ icon: Icon, label, variant, delay }) => {
  const styles = {
    primary: 'bg-blue-50 border-blue-200 text-blue-700',
    success: 'bg-green-50 border-green-200 text-green-700',
    danger: 'bg-red-50 border-red-200 text-red-700',
    decision: 'bg-purple-50 border-purple-200 text-purple-700'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.35 }}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl border shadow-sm ${styles[variant]}`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-xs font-bold">{label}</span>
    </motion.div>
  );
};

export default function InterviewFlow() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-white rounded-3xl shadow-xl border border-blue-100 p-6 min-h-[520px] flex flex-col">

      {/* Badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-xs font-semibold text-blue-600 shadow">
        Multi-Stage Interviewing
      </div>

      {/* Header */}
      <div className="mt-8 mb-6 text-center">
        <h3 className="text-xl font-bold text-gray-900">Multi-Stage Interview Process Automation</h3>
        <p className="text-sm text-gray-600">
          Smart branching with AI evaluation
        </p>
      </div>

      {/* FLOW */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="flex flex-col items-center">

          <Node icon={CheckCircle2} label="Invite Accepted" variant="success" delay={0} />
          <VerticalLine delay={0.1} />

          <Node icon={Video} label="AI Video Interview" variant="primary" delay={0.2} />
          <VerticalLine delay={0.3} />

          <Node icon={BarChart3} label="AI Scoring" variant="decision" delay={0.4} />

          <BranchCurve delay={0.5} />

          <div className="grid grid-cols-2 gap-6 w-full max-w-md">
            <Node icon={XCircle} label="Auto-Reject (<80%)" variant="danger" delay={0.6} />
            <Node icon={GitBranch} label="Pass (>80%)" variant="success" delay={0.6} />
          </div>

          <VerticalLine delay={0.7} />

          <Node icon={UserCheck} label="Manager Interview" variant="primary" delay={0.8} />

          <BranchCurve delay={0.9} />

          <div className="grid grid-cols-2 gap-6 w-full max-w-md">
            <Node icon={XCircle} label="Reject" variant="danger" delay={1.0} />
            <Node icon={Star} label="HIRE" variant="success" delay={1.0} />
          </div>

        </div>
      </div>

      {/* Metric */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-5 rounded-lg border border-gray-100 shadow-sm">
        <div className="text-xs text-gray-500">Time to Hire</div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-xs">42 days</span>
          <span className="text-green-600 font-bold">12 days</span>
        </div>
      </div>
    </div>
  );
}