import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Smartphone, 
  Home, 
  Camera, 
  FolderHeart, 
  Download, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight,
  Shirt,
  Search,
  Grid
} from 'lucide-react';
import { LookbookItem } from '../types';

interface AppMockupCTAProps {
  lookbookItems: LookbookItem[];
}

export default function AppMockupCTA({ lookbookItems }: AppMockupCTAProps) {
  const [activeScreen, setActiveScreen] = useState<'discover' | 'camera' | 'closet'>('discover');

  return (
    <section id="cta-section" className="py-24 relative overflow-hidden bg-gradient-to-b from-transparent to-brand-darker border-t border-white/5">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-purple/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Side: Pitch and App download buttons (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            <span className="font-mono text-xs text-brand-purple font-semibold tracking-widest uppercase bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/20 w-fit">
              Experience the Future
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-white tracking-tight leading-none">
              Ready to redefine your shopping experience?
            </h2>
            <p className="font-sans text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">
              Download the FitMirror companion app today. Turn your smartphone into an endless digital runway, experiment with designer fabrics in real-time, and purchase with absolute confidence.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {/* Custom Google Play Badge */}
              <a 
                href="#download" 
                onClick={(e) => e.preventDefault()}
                className="group relative flex items-center gap-3.5 bg-slate-950 border border-white/10 hover:border-brand-purple/40 px-5 py-3 rounded-xl hover:bg-slate-900 transition-all duration-300 neon-glow"
              >
                {/* SVG Play Store Logo */}
                <svg className="w-6 h-6 text-white group-hover:text-brand-purple transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 5.25c0-1.21.99-2.2 2.2-2.2h13.6c1.21 0 2.2.99 2.2 2.2v13.5c0 1.21-.99 2.2-2.2 2.2H5.2c-1.21 0-2.2-.99-2.2-2.2V5.25z" fill="none"/>
                  <path d="M5.25 3H18.75A2.25 2.25 0 0 1 21 5.25V18.75A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75V5.25A2.25 2.25 0 0 1 5.25 3M17.5 12 7 6v12l10.5-6z"/>
                </svg>
                <div className="text-left">
                  <p className="font-sans text-[9px] uppercase tracking-wider text-slate-500 font-medium">Get it on</p>
                  <p className="font-display font-bold text-sm text-white tracking-wide">Google Play</p>
                </div>
              </a>

              {/* Custom Apple App Store Badge */}
              <a 
                href="#download" 
                onClick={(e) => e.preventDefault()}
                className="group relative flex items-center gap-3.5 bg-slate-950 border border-white/10 hover:border-brand-indigo/40 px-5 py-3 rounded-xl hover:bg-slate-900 transition-all duration-300 neon-glow-indigo"
              >
                {/* SVG App Store Logo */}
                <svg className="w-6 h-6 text-white group-hover:text-brand-indigo transition-colors" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.11.67-2.83 1.51-.62.71-1.16 1.85-1.02 2.96 1.12.09 2.2-.6 2.86-1.41z"/>
                </svg>
                <div className="text-left">
                  <p className="font-sans text-[9px] uppercase tracking-wider text-slate-500 font-medium">Download on the</p>
                  <p className="font-display font-bold text-sm text-white tracking-wide">App Store</p>
                </div>
              </a>
            </div>

            <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-6 max-w-lg">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-green-500/10 text-green-400">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs text-slate-300">Biometric Secure Encryption</span>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-brand-purple/10 text-brand-purple">
                  <Sparkles className="w-4 h-4" />
                </div>
                <span className="font-sans text-xs text-slate-300">100k+ Renders Crafted</span>
              </div>
            </div>
          </div>

          {/* Right Side: High fidelity interactive smartphone mockup (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[320px]">
              
              {/* Outer floating shadow card wrapper */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-brand-purple/20 to-brand-indigo/20 rounded-[50px] blur-2xl opacity-60" />

              {/* Physical Android Phone Frame */}
              <div className="relative w-full aspect-[9/19] bg-slate-950 rounded-[44px] border-[10px] border-slate-900 shadow-2xl overflow-hidden neon-glow-indigo flex flex-col">
                
                {/* Speaker Grill & Camera Punch Hole */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 flex items-center justify-between w-[90px] h-[16px] bg-black rounded-full px-3 z-30">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                  <div className="w-12 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* Status Bar */}
                <div className="pt-7 px-6 pb-2 bg-slate-950 flex justify-between items-center text-[10px] font-mono text-slate-500 font-medium z-20 shrink-0">
                  <span>9:41 AM</span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-green-500">5G</span>
                    <div className="w-4 h-2 bg-slate-700 rounded-sm p-0.5">
                      <div className="w-full h-full bg-slate-300 rounded-2xs" />
                    </div>
                  </div>
                </div>

                {/* Simulated Screen Body */}
                <div className="flex-1 overflow-hidden relative bg-slate-950 px-4 py-3 flex flex-col">
                  
                  <AnimatePresence mode="wait">
                    {/* Screen 1: Discover Feed */}
                    {activeScreen === 'discover' && (
                      <motion.div
                        key="discover"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="flex-1 flex flex-col justify-between"
                      >
                        {/* Header */}
                        <div>
                          <div className="flex items-center justify-between mb-4">
                            <span className="font-display font-black text-base text-white tracking-wider flex items-center gap-1">
                              Fit<span className="text-brand-purple">Mirror</span>
                            </span>
                            <div className="p-1.5 bg-slate-900 border border-white/5 rounded-lg text-slate-400">
                              <Search className="w-3.5 h-3.5" />
                            </div>
                          </div>

                          {/* Hero Slider */}
                          <div className="bg-gradient-to-r from-brand-purple/20 to-brand-indigo/20 border border-brand-purple/25 rounded-xl p-4 mb-4 relative overflow-hidden">
                            <span className="font-mono text-[8px] text-brand-purple font-semibold tracking-wider block mb-1">TRENDING STYLE</span>
                            <h4 className="font-display font-bold text-xs text-white leading-tight">Cyberpunk Fashion Drop</h4>
                            <p className="font-sans text-[9px] text-slate-400 mt-1">Render neon layers on demand</p>
                          </div>

                          {/* Category list */}
                          <div className="space-y-2.5">
                            <p className="font-display font-semibold text-[10px] text-slate-300 uppercase tracking-wider">Garments Catalog</p>
                            
                            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                              {['All', 'Outerwear', 'Suits', 'Dresses'].map((cat, idx) => (
                                <span 
                                  key={cat} 
                                  className={`text-[9px] font-medium px-2.5 py-1 rounded-full border shrink-0 ${
                                    idx === 0 
                                      ? 'bg-brand-purple text-white border-brand-purple' 
                                      : 'bg-slate-900 text-slate-400 border-white/5'
                                  }`}
                                >
                                  {cat}
                                </span>
                              ))}
                            </div>

                            {/* Card Item */}
                            <div className="bg-slate-900/50 border border-white/5 rounded-xl p-2.5 flex items-center gap-2.5">
                              <div className="w-10 h-12 bg-slate-950 rounded-lg overflow-hidden border border-white/10 flex items-center justify-center font-bold text-white text-xs">
                                🧥
                              </div>
                              <div className="overflow-hidden">
                                <p className="font-display font-bold text-[11px] text-white truncate">Valkyrie Cyber Hoodie</p>
                                <p className="font-sans text-[9px] text-slate-400">NEOTYPE™ • Outerwear</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* CTA micro footer */}
                        <div className="bg-brand-purple/10 border border-brand-purple/20 rounded-xl p-2.5 flex items-center justify-between mb-2">
                          <span className="font-sans text-[9px] text-slate-300">Start virtual try-on</span>
                          <button 
                            onClick={() => setActiveScreen('camera')}
                            className="p-1 bg-brand-purple text-white rounded-lg cursor-pointer"
                          >
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </motion.div>
                    )}

                    {/* Screen 2: Camera View Finder Try On */}
                    {activeScreen === 'camera' && (
                      <motion.div
                        key="camera"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="flex-1 flex flex-col justify-between"
                      >
                        {/* Title */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-display font-bold text-xs text-white">Fitting Lens</span>
                          <span className="font-mono text-[8px] bg-brand-purple/15 text-brand-purple px-2 py-0.5 rounded-full font-semibold">ACTIVE</span>
                        </div>

                        {/* Virtual Lens Box */}
                        <div className="flex-1 bg-slate-900 rounded-xl border border-dashed border-brand-purple/40 relative overflow-hidden flex flex-col items-center justify-center p-4">
                          {/* Corner alignment bracket decorations */}
                          <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-brand-purple/60" />
                          <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-brand-purple/60" />
                          <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-brand-purple/60" />
                          <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-brand-purple/60" />
                          
                          {/* Dummy skeleton avatar profile */}
                          <div className="text-center space-y-2">
                            <div className="w-14 h-14 rounded-full border border-brand-purple bg-brand-purple/10 flex items-center justify-center mx-auto text-brand-purple">
                              <Camera className="w-6 h-6 animate-pulse" />
                            </div>
                            <p className="font-mono text-[9px] text-slate-300">POSE DETECTED</p>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 bg-brand-darker/90 backdrop-blur-md px-2 py-1.5 rounded-lg border border-white/5 text-center">
                            <p className="font-sans text-[8px] text-slate-400">Garment: Valkyrie Cyber Hoodie</p>
                          </div>
                        </div>

                        <button 
                          onClick={() => setActiveScreen('closet')}
                          className="w-full mt-3 py-2 bg-gradient-to-r from-brand-purple to-brand-indigo rounded-lg text-white font-display font-bold text-[10px] uppercase tracking-wide cursor-pointer text-center"
                        >
                          Synthesize Fitting Result
                        </button>
                      </motion.div>
                    )}

                    {/* Screen 3: Closet & Saved outfits */}
                    {activeScreen === 'closet' && (
                      <motion.div
                        key="closet"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.25 }}
                        className="flex-1 flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center justify-between mb-3">
                            <span className="font-display font-bold text-xs text-white">My Lookbook</span>
                            <span className="font-sans text-[8px] text-slate-500">{lookbookItems.length} items saved</span>
                          </div>

                          {/* Quick grid layout */}
                          <div className="grid grid-cols-2 gap-2 max-h-[190px] overflow-y-auto no-scrollbar">
                            {lookbookItems.length === 0 ? (
                              <div className="col-span-2 text-center py-8 bg-slate-900/30 border border-white/5 rounded-lg">
                                <FolderHeart className="w-4 h-4 text-slate-600 mx-auto mb-1" />
                                <p className="font-sans text-[8px] text-slate-400">No fits saved yet</p>
                              </div>
                            ) : (
                              lookbookItems.map((item) => (
                                <div key={item.id} className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/5 bg-slate-900">
                                  <img 
                                    src={item.resultUrl} 
                                    alt="Mock" 
                                    referrerPolicy="no-referrer"
                                    className="w-full h-full object-cover" 
                                  />
                                </div>
                              ))
                            )}
                          </div>
                        </div>

                        <div className="text-center mb-2">
                          <p className="font-sans text-[8px] text-slate-500">Encrypted Locally via SQLite</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

                {/* Bottom App OS Navigation Bar */}
                <div className="py-3 bg-slate-950 border-t border-white/5 flex justify-around items-center shrink-0">
                  <button
                    onClick={() => setActiveScreen('discover')}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                      activeScreen === 'discover' ? 'text-brand-purple' : 'text-slate-500'
                    }`}
                  >
                    <Home className="w-4 h-4" />
                    <span className="text-[8px] font-sans">Home</span>
                  </button>

                  <button
                    onClick={() => setActiveScreen('camera')}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                      activeScreen === 'camera' ? 'text-brand-purple' : 'text-slate-500'
                    }`}
                  >
                    <div className="p-1 rounded-full bg-slate-900 text-slate-400 border border-white/10 hover:border-brand-purple/40">
                      <Camera className="w-4 h-4 text-brand-purple" />
                    </div>
                  </button>

                  <button
                    onClick={() => setActiveScreen('closet')}
                    className={`flex flex-col items-center gap-0.5 cursor-pointer ${
                      activeScreen === 'closet' ? 'text-brand-purple' : 'text-slate-500'
                    }`}
                  >
                    <FolderHeart className="w-4 h-4" />
                    <span className="text-[8px] font-sans">Lookbook</span>
                  </button>
                </div>

                {/* Physical Virtual Home Bar Indicator */}
                <div className="pb-2 bg-slate-950 flex justify-center shrink-0">
                  <div className="w-24 h-1 bg-slate-800 rounded-full" />
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
