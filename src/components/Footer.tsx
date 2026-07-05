import { Shirt, Sparkles, Github, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-darker border-t border-white/5 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        
        {/* Brand logo in footer */}
        <div className="flex items-center gap-2">
          <div className="relative p-1.5 rounded-lg bg-gradient-to-tr from-brand-purple to-brand-indigo text-white shadow-sm">
            <Shirt className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-base tracking-wider text-white">
            Fit<span className="text-brand-purple">Mirror</span>
          </span>
        </div>

        {/* Navigation links & policies */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-slate-500 font-sans">
          <span>&copy; {currentYear} FitMirror Inc. All rights reserved.</span>
          <a href="https://www.fitmirror.com" target="_blank" rel="noopener noreferrer" className="text-brand-purple hover:text-white transition-colors duration-200 font-medium">
            www.fitmirror.com
          </a>
          <a href="#privacy" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="#terms" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors duration-200">
            Terms of Service
          </a>
        </div>

        {/* Social media icons */}
        <div className="flex items-center gap-4">
          <a 
            href="#twitter" 
            onClick={(e) => e.preventDefault()}
            className="p-2 bg-slate-900 border border-white/5 hover:border-brand-purple/30 rounded-xl text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
            aria-label="Twitter Profile"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a 
            href="#instagram" 
            onClick={(e) => e.preventDefault()}
            className="p-2 bg-slate-900 border border-white/5 hover:border-brand-purple/30 rounded-xl text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
            aria-label="Instagram Profile"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="#github" 
            onClick={(e) => e.preventDefault()}
            className="p-2 bg-slate-900 border border-white/5 hover:border-brand-purple/30 rounded-xl text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
            aria-label="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>

      </div>
    </footer>
  );
}
