import { motion } from 'motion/react';

export function Footer() {
  return (
    <footer className="bg-background py-8 md:py-12 border-t border-foreground/10 relative overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-foreground/10">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-background rounded-sm" />
              </div>
              <span className="font-mono font-bold text-lg tracking-tighter">NORNX</span>
            </div>
            <p className="text-sm text-muted font-mono max-w-xs">
              Designing the future of business operations through intelligent systems and automation.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono font-bold text-sm tracking-tight text-foreground">CONTACT US</h4>
            <div className="flex flex-col gap-2 text-sm font-mono text-muted">
              <a href="mailto:support@nornx.com" className="hover:text-primary transition-colors">support@nornx.com</a>
              <p>Global Operations</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="font-mono font-bold text-sm tracking-tight text-foreground">FOLLOW</h4>
            <div className="flex gap-6 text-sm font-mono text-muted">
              <a href="#" className="hover:text-primary transition-colors">LINKEDIN</a>
              <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-4 flex justify-center items-center text-[10px] text-muted font-mono text-center uppercase tracking-widest">
          <p>&copy; 2026 Nornx Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
