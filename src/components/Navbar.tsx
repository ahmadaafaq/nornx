import { motion } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

export function Navbar({ isDark, toggleTheme }: { isDark: boolean, toggleTheme: () => void }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-foreground/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <div className="w-4 h-4 bg-background rounded-sm" />
            </div>
            <span className="font-mono font-bold text-xl tracking-tighter">NORNX</span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-mono text-muted">
          <a href="#services" className="hover:text-primary transition-colors">SERVICES</a>
          <a href="#products" className="hover:text-primary transition-colors">PRODUCTS</a>
          <a href="#cortex" className="hover:text-primary transition-colors">CORTEX.IO</a>
          <a href="#process" className="hover:text-primary transition-colors">PROCESS</a>
          
          <button onClick={toggleTheme} className="p-2 hover:bg-foreground/5 rounded-full transition-colors text-foreground">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          <a href="mailto:contact@nornx.com" className="px-4 py-2 xl:px-5 xl:py-2.5 bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 rounded-sm text-foreground transition-all text-xs xl:text-sm font-bold">
            BOOK STRATEGY CALL
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button onClick={toggleTheme} className="p-2 hover:bg-foreground/5 rounded-full transition-colors text-foreground">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button 
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-foreground/10 p-6 flex flex-col gap-4 font-mono text-sm"
        >
          <a href="#services" className="text-muted hover:text-primary" onClick={() => setIsOpen(false)}>SERVICES</a>
          <a href="#products" className="text-muted hover:text-primary" onClick={() => setIsOpen(false)}>PRODUCTS</a>
          <a href="#cortex" className="text-muted hover:text-primary" onClick={() => setIsOpen(false)}>CORTEX.IO</a>
          <a href="#process" className="text-muted hover:text-primary" onClick={() => setIsOpen(false)}>PROCESS</a>
          <a href="mailto:contact@nornx.com" className="mt-4 px-5 py-3 bg-primary text-background font-bold rounded-sm w-full text-center block">
            BOOK STRATEGY CALL
          </a>
        </motion.div>
      )}
    </nav>
  );
}
