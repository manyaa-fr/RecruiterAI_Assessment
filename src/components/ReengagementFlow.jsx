import React from 'react';
import { motion } from 'framer-motion';
import {
  Database,
  Clock,
  RefreshCw,
  Send,
  Rocket,
  UserPlus
} from 'lucide-react';

/* ---------- ORBIT ITEM ---------- */
const OrbitItem = ({ icon: Icon, angle, delay, color, label }) => {
  const radius = 140;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute w-10 h-10 bg-white rounded-full shadow-md border flex items-center justify-center z-10"
      style={{
        borderColor: color,
        x,
        y,
        left: '50%',
        top: '50%',
        marginLeft: -20,
        marginTop: -20
      }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <Icon className="w-5 h-5" style={{ color }} />
      <span className="absolute -bottom-6 text-[10px] text-gray-600 font-semibold whitespace-nowrap">
        {label}
      </span>
    </motion.div>
  );
};

/* ---------- DECISION NODE ---------- */
const DecisionNode = ({ angle, delay }) => {
  const radius = 140;
  const x = Math.cos((angle * Math.PI) / 180) * radius;
  const y = Math.sin((angle * Math.PI) / 180) * radius;

  return (
    <motion.div
      className="absolute w-12 h-12 bg-white border-2 border-blue-500 shadow-md flex items-center justify-center z-20 rotate-45"
      style={{
        x,
        y,
        left: '50%',
        top: '50%',
        marginLeft: -24,
        marginTop: -24
      }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay }}
    >
      <RefreshCw className="-rotate-45 w-5 h-5 text-blue-600" />
      <span className="absolute top-14 left-1/2 -translate-x-1/2 rotate-0 text-[10px] text-blue-700 font-bold whitespace-nowrap">
        New role opens?
        </span>
    </motion.div>
  );
};

/* ---------- COMPONENT ---------- */
export default function ReengagementFlow() {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-blue-100 to-white rounded-3xl shadow-xl border border-blue-100 p-6 h-[600px] flex flex-col">

      {/* Badge */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-full text-xs font-semibold text-blue-600 shadow">
        Passive Re-engagement
      </div>

      {/* Header */}
      <div className="mt-8 mb-6 text-center z-10">
        <h3 className="text-xl font-bold text-gray-900">Passive Candidate <br /> Re-engagement</h3>
        <p className="text-sm text-gray-600">
          Automated re-engagement cycle
        </p>
      </div>

      {/* Entry Label */}
      <div className="text-center text-xs font-semibold text-blue-700 mb-2">
        Entry: Rejected candidates scoring 60–74%
      </div>

      {/* Orbit Area */}
      <div className="flex-1 relative flex items-center justify-center overflow-visible">

        {/* Orbit Ring + Direction */}
        <div className="absolute w-[280px] h-[280px] border border-dashed border-blue-300 rounded-full">
          <span className="absolute -right-3 top-1/2 text-blue-400 text-sm">
            →
          </span>
        </div>

        <motion.div
          className="absolute w-[280px] h-[280px] border border-transparent border-t-blue-400/40 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        {/* Center Hub */}
        <div className="w-24 h-24 bg-white rounded-full shadow-xl border-4 border-blue-200 flex flex-col items-center justify-center z-20 relative">
          <Database className="w-8 h-8 text-blue-600 mb-1" />
          <span className="text-[10px] font-bold text-gray-600">Talent DB</span>
          <motion.div
            className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            +12%
          </motion.div>
        </div>

        {/* Orbit Nodes */}
        <div className="absolute inset-0">
          <OrbitItem
            icon={UserPlus}
            angle={270}
            delay={0.2}
            color="#9CA3AF"
            label="Added to pool"
          />

          <OrbitItem
            icon={Clock}
            angle={330}
            delay={0.4}
            color="#F59E0B"
            label="Wait 3 months"
          />

          <DecisionNode angle={30} delay={0.6} />

          <OrbitItem
            icon={Send}
            angle={90}
            delay={0.8}
            color="#8B5CF6"
            label="Re-engage email"
          />

          <OrbitItem
            icon={Rocket}
            angle={150}
            delay={1.0}
            color="#10B981"
            label="Fast-track interview"
          />

          <OrbitItem
            icon={RefreshCw}
            angle={210}
            delay={1.2}
            color="#6366F1"
            label="Loop next quarter"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
        <span className="text-sm font-medium text-gray-500">
          Pipeline Growth
        </span>
        <span className="text-blue-600 font-bold text-sm">
          Auto-growing
        </span>
      </div>
    </div>
  );
}