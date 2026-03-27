import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 md:py-24 bg-background relative border-t border-foreground/5 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-foreground/5 border border-foreground/10 rounded-sm p-8 sm:p-12 md:p-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-4 md:mb-6">
              Ready to <span className="text-gradient">Transform</span> Your Operations?
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-8 md:mb-12">
              Stop relying on fragmented tools. Build a unified, intelligent business operating system with Nornx Technologies.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:contact@nornx.com" className="px-5 py-3 md:px-6 md:py-3.5 bg-primary text-background font-bold rounded-sm hover:bg-primary-dark transition-colors font-mono tracking-tight flex items-center justify-center gap-2 group text-sm">
                START WITH A CONSULTATION
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:contact@nornx.com?subject=Build My Business OS" className="px-5 py-3 md:px-6 md:py-3.5 bg-foreground/5 border border-foreground/10 text-foreground font-bold rounded-sm hover:bg-foreground/10 transition-colors font-mono tracking-tight flex items-center justify-center text-sm">
                BUILD YOUR BUSINESS OS
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
