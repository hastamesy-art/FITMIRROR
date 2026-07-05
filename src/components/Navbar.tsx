import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shirt, Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-darker/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative p-2 rounded-xl bg-gradient-to-tr from-brand-purple to-brand-indigo text-white shadow-md group-hover:scale-105 transition-transform duration-200">
            <Shirt className="w-5 h-5" />
            <Sparkles className="w-3 h-3 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
          </div>
          <span className="font-display font-bold text-xl tracking-wider text-white bg-clip-text bg-gradient-to-r from-white via-white to-brand-purple/80">
            Fit<span className="text-brand-purple">Mirror</span>
          </span>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {['how-it-works', 'benefits', 'features'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="font-sans text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer capitalize"
            >
              {section.replace(/-/g, ' ')}
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={() => scrollToSection('cta-section')}
            className="relative px-5 py-2.5 rounded-full font-sans text-sm font-medium text-white bg-gradient-to-r from-brand-purple to-brand-indigo hover:brightness-110 active:scale-95 transition-all duration-200 neon-glow cursor-pointer flex items-center gap-1.5"
          >
            Download App
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-brand-darker/95 backdrop-blur-lg border-b border-white/5 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {['how-it-works', 'benefits', 'features'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="font-sans text-lg font-medium text-left text-slate-300 hover:text-white transition-colors capitalize py-1 cursor-pointer"
                >
                  {section.replace(/-/g, ' ')}
                </button>
              ))}
              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => scrollToSection('cta-section')}
                  className="w-full py-3 rounded-xl font-sans text-base font-semibold text-center text-white bg-gradient-to-r from-brand-purple to-brand-indigo neon-glow cursor-pointer flex items-center justify-center gap-2"
                >
                  Download App
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
