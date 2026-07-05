import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Play, Sparkles, Shield, Heart, Zap } from 'lucide-react';
import Navbar from './components/Navbar';
import InteractiveTryOn from './components/InteractiveTryOn';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import FeaturesShowcase from './components/FeaturesShowcase';
import AppMockupCTA from './components/AppMockupCTA';
import Footer from './components/Footer';
import DemoVideoModal from './components/DemoVideoModal';
import { LookbookItem } from './types';

export default function App() {
  const [lookbookItems, setLookbookItems] = useState<LookbookItem[]>([]);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  // Initialize lookbook from localStorage or default items on mount
  useEffect(() => {
    const saved = localStorage.getItem('fitai_lookbook');
    if (saved) {
      try {
        setLookbookItems(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to parse lookbook items', e);
      }
    } else {
      // Pre-populate with a gorgeous default item representing the cyberpunk hoodie result
      const defaultItem: LookbookItem = {
        id: 'initial-item-1',
        modelName: 'Mia',
        garmentName: 'Valkyrie Cyber Hoodie',
        resultUrl: '/src/assets/images/tryon_result_cyber_1783242341775.jpg',
        timestamp: 'Just now'
      };
      setLookbookItems([defaultItem]);
      localStorage.setItem('fitai_lookbook', JSON.stringify([defaultItem]));
    }
  }, []);

  // Save lookbook changes to localStorage
  const handleAddToLookbook = (item: LookbookItem) => {
    // Check if item already exists to prevent duplication
    if (lookbookItems.some((i) => i.garmentName === item.garmentName && i.modelName === item.modelName)) {
      return;
    }
    const updated = [item, ...lookbookItems];
    setLookbookItems(updated);
    localStorage.setItem('fitai_lookbook', JSON.stringify(updated));
  };

  const handleRemoveFromLookbook = (id: string) => {
    const updated = lookbookItems.filter((item) => item.id !== id);
    setLookbookItems(updated);
    localStorage.setItem('fitai_lookbook', JSON.stringify(updated));
  };

  // Smooth scroll helper
  const scrollToPlayground = () => {
    const element = document.getElementById('tryon-playground');
    if (element) {
      const offset = 100;
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
    <div id="app-container" className="min-h-screen bg-brand-darker text-slate-100 flex flex-col font-sans selection:bg-brand-purple/30 selection:text-white">
      {/* Navigation bar */}
      <Navbar />

      {/* Hero Section Container */}
      <section id="hero" className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden flex items-center justify-center min-h-[90vh]">
        
        {/* Modern ambient blurred circles for cyber-chic aesthetics */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[160px] pointer-events-none" />
        
        {/* Background circuit grid paper mesh */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" 
          style={{ maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)', WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, #000 70%, transparent 100%)' }}
        />

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10 w-full">
          
          {/* Left Side: Copy, headline, metrics */}
          <div className="lg:col-span-5 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-brand-purple/30 text-xs font-mono font-medium text-brand-purple tracking-wider uppercase neon-glow"
            >
              <Sparkles className="w-3.5 h-3.5 text-brand-purple animate-pulse" />
              Smarter Virtual Dressing Room
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display font-bold text-4xl md:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.05]"
              >
                Your Entire Wardrobe, <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-purple via-brand-indigo to-purple-400">
                  Instantly Visualized.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-sans text-sm md:text-base text-slate-400 leading-relaxed max-w-lg"
              >
                Upload a photo of yourself and any clothing item. Our advanced Stable Diffusion XL engine renders a photorealistic try-on result in seconds.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <button
                onClick={scrollToPlayground}
                className="px-6 py-3.5 rounded-full font-sans text-sm font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-indigo hover:brightness-110 active:scale-95 transition-all duration-200 neon-glow cursor-pointer flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setIsDemoModalOpen(true)}
                className="px-6 py-3.5 rounded-full font-sans text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800/80 border border-white/5 active:scale-95 transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <Play className="w-4 h-4 fill-current text-brand-purple" />
                Watch Demo
              </button>
            </motion.div>

            {/* Social Trust Metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-8 border-t border-white/5 grid grid-cols-3 gap-6"
            >
              <div>
                <p className="font-display font-bold text-2xl text-white tracking-tight">SDXL 1.0</p>
                <p className="font-sans text-[10px] text-slate-500 uppercase font-medium mt-1">Render Engine</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-white tracking-tight">100%</p>
                <p className="font-sans text-[10px] text-slate-500 uppercase font-medium mt-1">Data Privacy</p>
              </div>
              <div>
                <p className="font-display font-bold text-2xl text-white tracking-tight">&lt; 3.5s</p>
                <p className="font-sans text-[10px] text-slate-500 uppercase font-medium mt-1">Fitting Speed</p>
              </div>
            </motion.div>

          </div>

          {/* Right Side: Showcase representing a split screen try-on layout */}
          <div className="lg:col-span-7" id="tryon-playground">
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            >
              <InteractiveTryOn onAddToLookbook={handleAddToLookbook} />
            </motion.div>
          </div>

        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* Benefits Section */}
      <Benefits />

      {/* App Features Showcase (containing lookbook catalog list) */}
      <FeaturesShowcase 
        lookbookItems={lookbookItems} 
        onRemoveFromLookbook={handleRemoveFromLookbook} 
      />

      {/* App Mockup and Call to Action */}
      <AppMockupCTA lookbookItems={lookbookItems} />

      {/* Footer */}
      <Footer />

      {/* Demo Walkthrough Modal */}
      <AnimatePresence>
        {isDemoModalOpen && (
          <DemoVideoModal 
            isOpen={isDemoModalOpen} 
            onClose={() => setIsDemoModalOpen(false)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
