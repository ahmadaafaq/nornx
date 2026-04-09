import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    title: "Business Operating Systems Design",
    description: "End-to-end architecture of workflows, tools, and automation tailored to a company's operations.",
    number: "01"
  },
  {
    title: "AI Automation & Workflow Engineering",
    description: "Design and deployment of intelligent systems that reduce manual processes and increase efficiency.",
    number: "02"
  },
  {
    title: "Custom Software & SaaS Development",
    description: "Building scalable platforms aligned with business needs.",
    number: "03"
  },
  {
    title: "Technical Consulting & Strategy",
    description: "Advising businesses on architecture, scaling, and technology decisions.",
    number: "04"
  },
  {
    title: "Tech Enablement",
    description: "Helping teams adopt, integrate, and effectively use advanced tools and systems.",
    number: "05"
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background relative border-t border-foreground/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start mb-16 md:mb-24 gap-8">
          <div>
            <p className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">Expertise</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              Structured & <br /> High-Value Services
            </h2>
          </div>
          <p className="text-lg text-muted max-w-md md:mt-12">
            We deliver deep technical execution combined with strategic insight to build systems that scale from day one.
          </p>
        </div>

        <div className="flex flex-col border-t border-foreground/10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col md:flex-row items-start md:items-center justify-between py-8 md:py-12 border-b border-foreground/10 hover:bg-foreground/5 transition-all hover:px-4 md:hover:px-8 cursor-pointer px-2 md:px-4 -mx-2 md:-mx-4 rounded-sm"
            >
              <div className="flex items-start gap-4 md:gap-8 md:w-2/3">
                <span className="font-mono text-muted text-base md:text-lg mt-1">{service.number}</span>
                <div>
                  <h4 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-2 md:mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-sm md:text-base text-muted max-w-xl">
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="mt-6 md:mt-0 ml-10 md:ml-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-background transition-all">
                  <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
