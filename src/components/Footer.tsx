import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-background py-8 md:py-12 border-t border-foreground/10 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-3 h-3 bg-background rounded-sm" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tighter">NORNX TECHNOLOGIES</span>
          </div>

          <div className="flex gap-6 text-sm font-mono text-muted">
            <a href="#" className="hover:text-primary transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-8 flex justify-center items-center text-xs text-muted font-mono text-center">
          <p>&copy; 2026 Nornx Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
