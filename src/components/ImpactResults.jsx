import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Zap, Clock, Users, CheckCircle, TrendingUp, DollarSign, ShieldAlert } from 'lucide-react';

const data = [
  { name: 'Screening', value: 10, label: '10x Faster', fullLabel: 'Faster Screening' },
  { name: 'Time', value: 70, label: '70% Faster', fullLabel: 'Time-to-Hire' },
  { name: 'Capacity', value: 25, label: '25x More', fullLabel: 'Interview Capacity' },
  { name: 'Completion', value: 95, label: '95% Rate', fullLabel: 'App Completion' },
  { name: 'Quality', value: 89, label: '89% Better', fullLabel: 'Qualified Apps' },
  { name: 'Cost', value: 80, label: '80% Lower', fullLabel: 'Recruitment Cost' },
  { name: 'Bad Hires', value: 50, label: '50% Less', fullLabel: 'Bad Hires' },
];

const colors = ['#3B82F6', '#60A5FA', '#93C5FD', '#A5D8FF', '#C4B5FD', '#A78BFA', '#8B5CF6'];

const MetricCard = ({ icon: Icon, title, value, subtitle, delay, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
  >
    <div className="flex items-start justify-between mb-4">
      <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      <div className={`text-3xl font-bold ${color.replace('bg-', 'text-')}`}>{value}</div>
    </div>
    <h3 className="text-gray-900 font-bold text-lg mb-1">{title}</h3>
    <p className="text-gray-500 text-sm">{subtitle}</p>
  </motion.div>
);

export default function ImpactResults() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">The RecruiterAI Advantage</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real companies. See how AI transforms recruitment metrics.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Chart Area */}
          <div className="lg:col-span-7 h-[500px] w-full bg-recruiter-light-neutral rounded-3xl p-8 shadow-inner border border-gray-100">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-800">Performance Improvements</h3>
              <div className="flex gap-2">
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div> Before
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div> After
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height="85%">
              <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 12, fill: '#6B7280' }} 
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)', padding: '12px' }}
                  cursor={{ fill: 'rgba(0,0,0,0.05)', radius: 8 }}
                />
                <Bar dataKey="value" radius={[8, 8, 8, 8]} barSize={40}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Metrics Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <MetricCard 
              icon={Zap} 
              title="Screening Speed" 
              value="10x" 
              subtitle="Faster than manual review" 
              delay={0.1} 
              color="bg-blue-500"
            />
            <MetricCard 
              icon={Clock} 
              title="Time-to-Hire" 
              value="70%" 
              subtitle="Reduction in total time" 
              delay={0.2} 
              color="bg-indigo-500"
            />
            <MetricCard 
              icon={Users} 
              title="Interview Capacity" 
              value="25x" 
              subtitle="More candidates processed" 
              delay={0.3} 
              color="bg-purple-500"
            />
            <MetricCard 
              icon={DollarSign} 
              title="Cost Savings" 
              value="80%" 
              subtitle="Lower recruitment costs" 
              delay={0.4} 
              color="bg-green-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}