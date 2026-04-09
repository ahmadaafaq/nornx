import { motion } from 'motion/react';
import { Rocket, Briefcase, Users, Building2 } from 'lucide-react';

const cases = [
  {
    icon: <Rocket className="w-8 h-8 text-primary" />,
    title: "Startups",
    description: "Building scalable infrastructure from day one."
  },
  {
    icon: <Briefcase className="w-8 h-8 text-primary" />,
    title: "Growing Companies",
    description: "Facing operational chaos and needing structured systems."
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: "Agencies",
    description: "Optimizing delivery systems for faster, higher-quality output."
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    title: "Enterprises",
    description: "Modernizing legacy workflows with AI and automation."
  }
];

export function UseCases() {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-background relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">Who It's For</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
            Built for <span className="text-gradient">Scale.</span>
          </h2>
          <p className="text-base md:text-lg text-muted max-w-2xl mx-auto">
            Our systems adapt to your stage of growth, providing the infrastructure needed to operate with precision.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 border border-foreground/10 bg-foreground/5 rounded-sm hover:bg-foreground/10 transition-all hover:-translate-y-2 flex flex-col items-center text-center group"
            >
              <div className="mb-4 md:mb-6 p-3 md:p-4 bg-background/50 inline-block rounded-full border border-foreground/5 group-hover:border-primary/30 transition-colors">
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
    </section>
  );
}
