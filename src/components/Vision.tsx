import { motion } from 'motion/react';

export function Vision() {
  return (
    <section className="py-16 md:py-24 bg-background relative border-t border-foreground/5 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-96 bg-primary/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-mono text-primary mb-8 tracking-widest uppercase">Our Vision</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] max-w-5xl mx-auto">
            "Building the <span className="text-gradient-primary">infrastructure layer</span> for next-generation businesses powered by AI."
          </h2>
        </motion.div>
      </div>
    </section>
  );
}
