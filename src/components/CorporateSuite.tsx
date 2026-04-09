import { motion } from 'motion/react';
import { Briefcase, DollarSign, CheckSquare, Settings, MessageSquare, BrainCircuit, ShieldCheck } from 'lucide-react';

const features = [
  { name: 'HRMS', desc: 'Human Resource Management System', icon: <Briefcase className="w-5 h-5" /> },
  { name: 'Payroll Management', desc: 'Automated payroll and compliance', icon: <DollarSign className="w-5 h-5" /> },
  { name: 'Task Management', desc: 'Project and task tracking', icon: <CheckSquare className="w-5 h-5" /> },
  { name: 'Operations Management', desc: 'End-to-end operational workflows', icon: <Settings className="w-5 h-5" /> },
  { name: 'Internal Communications', desc: 'Chat and video meetings platform', icon: <MessageSquare className="w-5 h-5" /> },
  { name: 'Central Intelligence', desc: 'Corporate Memory and Knowledge Base', icon: <BrainCircuit className="w-5 h-5" /> },
];

export function CorporateSuite() {
  return (
    <section id="cortex" className="py-16 md:py-24 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-mono mb-6">
                <ShieldCheck className="w-4 h-4" />
                CORPORATE SUITE
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
                CorteX.io
              </h2>
              <p className="text-lg md:text-xl text-primary font-mono mb-4 md:mb-6">
                AI-Powered Business Operations Suite
              </p>
              <p className="text-base md:text-lg text-muted mb-8 md:mb-10 max-w-lg">
                A unified platform designed to streamline your entire corporate operations. From HR to internal communications, CorteX.io is the central nervous system of your business.
              </p>
              <button className="px-5 py-3 md:px-6 md:py-3.5 bg-foreground/5 border border-foreground/10 text-foreground font-bold rounded-sm hover:bg-foreground/10 transition-colors font-mono tracking-tight text-sm w-full sm:w-auto">
                EXPLORE CORTEX.IO
              </button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 border border-foreground/10 bg-foreground/5 rounded-sm hover:border-primary/30 transition-colors group"
              >
                <div className="mb-4 text-primary">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 tracking-tight">{feature.name}</h4>
                <p className="text-sm text-muted">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
