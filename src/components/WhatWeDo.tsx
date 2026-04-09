import { motion } from 'motion/react';
import { Cpu, Network, Layers, Zap } from 'lucide-react';

const offerings = [
  {
    icon: <Network className="w-8 h-8 text-primary" />,
    title: "End-to-End System Design",
    description: "We architect complete business operating systems tailored to your unique workflows and operational needs."
  },
  {
    icon: <Cpu className="w-8 h-8 text-primary" />,
    title: "AI Automation Infrastructure",
    description: "Deploy intelligent agents and automated pipelines that reduce manual overhead and accelerate execution."
  },
  {
    icon: <Layers className="w-8 h-8 text-primary" />,
    title: "Full-Stack Implementation",
    description: "From custom software to seamless API integrations, we build the technical foundation your business runs on."
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Tech Enablement & Advisory",
    description: "We don't just build tools; we train your team to adopt, manage, and scale advanced technology effectively."
  }
];

export function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-20">
          <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">Core Offering</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            We Engineer <span className="text-gradient">Ecosystems.</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl">
            Nornx Technologies designs AI-powered systems, automation workflows, and scalable tech infrastructure that transform how your business operates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offerings.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 border border-foreground/10 bg-foreground/5 rounded-sm hover:bg-foreground/10 transition-all hover:-translate-y-1 group"
            >
              <div className="mb-6 p-3 md:p-4 bg-background/50 inline-block rounded-sm border border-foreground/5 group-hover:border-primary/30 transition-colors">
                {item.icon}
              </div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 tracking-tight">{item.title}</h4>
              <p className="text-sm md:text-base text-muted leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
