import { motion } from 'framer-motion';
import {
  Zap,
  Clock,
  Users,
  TrendingUp,
  DollarSign,
  ShieldAlert
} from 'lucide-react';

const benefits = [
  {
    title: 'Fast Resume Processing',
    stat: '10× faster',
    desc: 'AI screens resumes instantly instead of hours of manual review.',
    icon: Zap,
    color: 'border-blue-400 text-blue-600'
  },
  {
    title: 'Quick Time-to-Hire',
    stat: '70% faster',
    desc: 'Reduce hiring cycles from weeks to days.',
    icon: Clock,
    color: 'border-indigo-400 text-indigo-600'
  },
  {
    title: 'Massive Capacity Increase',
    stat: '25× scale',
    desc: 'Handle thousands of applications without added recruiters.',
    icon: Users,
    color: 'border-cyan-400 text-cyan-600'
  },
  {
    title: 'Higher Completion Rate',
    stat: '95%',
    desc: 'Candidates finish AI-led applications more reliably.',
    icon: TrendingUp,
    color: 'border-teal-400 text-teal-600'
  },
  {
    title: 'Lower Recruitment Cost',
    stat: '80% less',
    desc: 'Cut agency fees and repetitive recruiter effort.',
    icon: DollarSign,
    color: 'border-green-400 text-green-600'
  },
  {
    title: 'Fewer Hiring Mistakes',
    stat: '50% fewer',
    desc: 'AI scoring reduces bias and poor-fit hires.',
    icon: ShieldAlert,
    color: 'border-purple-400 text-purple-600'
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-recruiter-light-neutral">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Why Teams Choose RecruiterAI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tangible improvements across speed, quality, cost, and scale.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`bg-white rounded-2xl p-6 shadow-md border-2 ${item.color} hover:shadow-xl hover:-translate-y-1 transition`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon className="w-6 h-6" />
                  <span className="text-sm font-bold uppercase tracking-wide">
                    {item.stat}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}