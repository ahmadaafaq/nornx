import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const reasons = [
  "Systems thinking over isolated tools",
  "Built for scale from day one",
  "Deep technical execution + strategic insight",
  "Focus on measurable operational efficiency"
];

export function WhyNornx() {
  return (
    <section className="py-16 md:py-24 bg-background relative border-t border-foreground/5 overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="text-sm font-mono text-primary mb-4 tracking-widest uppercase">Why Choose Us</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 md:mb-8">
              We Engineer <br />
              <span className="text-gradient">For Scale.</span>
            </h3>
            <p className="text-base md:text-lg text-muted mb-8 md:mb-12 max-w-lg">
              We don't just implement software; we build the infrastructure layer for next-generation businesses powered by AI.
            </p>

            <div className="space-y-4 md:space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3 md:gap-4"
                >
                  <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
                  <span className="text-lg md:text-xl font-medium tracking-tight">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-sm border border-foreground/10 bg-foreground/5 overflow-hidden mt-8 lg:mt-0">
            {/* Abstract visual representation of a system */}
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 bg-primary/20 blur-[80px] md:blur-[100px] rounded-full" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full p-8 md:p-12">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] sm:w-[300px] md:w-[400px] h-[250px] sm:h-[300px] md:h-[400px] border border-foreground/5 rounded-full animate-spin-slow" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] sm:w-[220px] md:w-[300px] h-[180px] sm:h-[220px] md:h-[300px] border border-primary/20 rounded-full animate-reverse-spin" style={{ borderStyle: 'dashed' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120px] sm:w-[150px] md:w-[200px] h-[120px] sm:h-[150px] md:h-[200px] border border-foreground/10 rounded-full animate-spin-slow" />
                
                {/* Nodes */}
                <div className="absolute top-[15%] left-[20%] w-3 h-3 bg-primary rounded-full shadow-[0_0_15px_rgba(0,255,204,0.8)]" />
                <div className="absolute bottom-[20%] right-[15%] w-4 h-4 bg-foreground rounded-full" />
                <div className="absolute top-[30%] right-[25%] w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_rgba(0,255,204,0.8)]" />
                <div className="absolute bottom-[30%] left-[25%] w-3 h-3 bg-foreground/50 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded-full shadow-[0_0_30px_rgba(0,255,204,1)] flex items-center justify-center">
                  <div className="w-4 h-4 bg-background rounded-full" />
                </div>
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <line x1="20%" y1="15%" x2="50%" y2="50%" stroke="rgba(0, 255, 204, 0.3)" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="85%" y1="80%" x2="50%" y2="50%" className="stroke-foreground/20" strokeWidth="1" strokeDasharray="4 4" />
                  <line x1="75%" y1="30%" x2="50%" y2="50%" stroke="rgba(0, 255, 204, 0.2)" strokeWidth="1" />
                  <line x1="25%" y1="70%" x2="50%" y2="50%" className="stroke-foreground/10" strokeWidth="1" />
                  
                  {/* Inter-node connections */}
                  <line x1="20%" y1="15%" x2="75%" y2="30%" stroke="rgba(0, 255, 204, 0.1)" strokeWidth="1" />
                  <line x1="25%" y1="70%" x2="85%" y2="80%" className="stroke-foreground/5" strokeWidth="1" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
