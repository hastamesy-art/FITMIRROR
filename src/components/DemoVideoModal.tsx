import { motion } from 'motion/react';
import { X, Play, Sparkles, Volume2, Shield, Heart } from 'lucide-react';

interface DemoVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoVideoModal({ isOpen, onClose }: DemoVideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-darker/90 backdrop-blur-md cursor-pointer"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 350 }}
        className="relative w-full max-w-4xl bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 neon-glow-indigo"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-purple animate-pulse" />
            <span className="font-display font-medium text-sm text-slate-300 uppercase tracking-widest flex items-center gap-1">
              FitAI Walkthrough <Sparkles className="w-3.5 h-3.5 text-brand-purple" />
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Simulation Content */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Main Simulated Screen */}
          <div className="col-span-2 relative aspect-video bg-black flex flex-col justify-between p-6 overflow-hidden">
            {/* Background elements to simulate high-tech fashion */}
            <div className="absolute inset-0 bg-radial-gradient from-brand-indigo/10 via-transparent to-transparent opacity-50" />
            
            {/* Ambient animated gradient backdrop */}
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple/5 to-brand-indigo/5" />
            
            {/* Video Watermark / Corner details */}
            <div className="z-10 flex justify-between items-start">
              <span className="font-mono text-[10px] text-white/40 tracking-wider">
                REC [AUTO] • 1080P 60FPS
              </span>
              <span className="font-mono text-[10px] text-brand-purple font-semibold bg-brand-purple/10 px-2 py-0.5 rounded-full border border-brand-purple/20">
                AI ENGINE ONLINE
              </span>
            </div>

            {/* Simulated Live Action Fitting Overlay */}
            <div className="z-10 flex flex-col items-center justify-center my-auto py-8">
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-4 bg-brand-purple/30 rounded-full blur-xl group-hover:bg-brand-purple/40 transition-colors" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-tr from-brand-purple to-brand-indigo text-white flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
              </div>
              <p className="font-display text-lg text-white font-medium mt-6 text-center tracking-tight">
                Simulating FitAI v2.4 Fitting Pipeline
              </p>
              <p className="font-sans text-xs text-slate-400 mt-1 max-w-sm text-center">
                Click play to simulate scanning and 12-pass Stable Diffusion XL rendering.
              </p>
            </div>

            {/* Video Controls */}
            <div className="z-10 flex items-center justify-between border-t border-white/5 pt-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-slate-400">0:14 / 1:02</span>
                <Volume2 className="w-4 h-4 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              </div>
              {/* Timeline bar */}
              <div className="flex-1 mx-4 h-1 bg-slate-800 rounded-full overflow-hidden relative">
                <div className="absolute left-0 top-0 bottom-0 w-[22%] bg-gradient-to-r from-brand-purple to-brand-indigo" />
              </div>
              <span className="font-mono text-[10px] text-slate-500">HD QUALITY</span>
            </div>
          </div>

          {/* Feature Highlights Column */}
          <div className="col-span-1 bg-slate-950 p-6 flex flex-col justify-between border-t md:border-t-0 md:border-l border-white/5">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-lg text-white tracking-tight">
                Try-On Mechanics
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-brand-purple/10 text-brand-purple mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-sm text-slate-200">
                      Multi-pose Mapping
                    </h4>
                    <p className="font-sans text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Automatically matches the fabric direction to any shoulder lean or posture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-brand-indigo/10 text-brand-indigo mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-sm text-slate-200">
                      Privacy Firewall
                    </h4>
                    <p className="font-sans text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Biometric traits and photo scans remain locally in your app memory.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-rose-500/10 text-rose-400 mt-0.5">
                    <Heart className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-sans font-medium text-sm text-slate-200">
                      Instant Lookbook Saving
                    </h4>
                    <p className="font-sans text-xs text-slate-400 mt-0.5 leading-relaxed">
                      Bookmark renders with a single tap to compare outfits seamlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/5 mt-6">
              <p className="font-sans text-[11px] text-slate-500 leading-normal">
                Want to try it yourself with your own photo? Click "Get Started Free" to access the virtual engine instantly.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
