import { motion } from 'motion/react';
import { Cpu, Sparkles, FolderHeart, Trash2, Calendar, Share2, Camera } from 'lucide-react';
import { LookbookItem } from '../types';

interface FeaturesShowcaseProps {
  lookbookItems: LookbookItem[];
  onRemoveFromLookbook: (id: string) => void;
}

export default function FeaturesShowcase({ lookbookItems, onRemoveFromLookbook }: FeaturesShowcaseProps) {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Mesh gradients for modern styling */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-xs text-brand-purple font-semibold tracking-widest uppercase bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/20">
            Inside the Engine
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mt-4">
            Next-Gen Tech Powering FitMirror
          </h2>
          <p className="font-sans text-sm text-slate-400 mt-4 leading-relaxed">
            We combined advanced computer vision with diffusion architectures to build a styling engine that delivers production-grade visualization in your pocket.
          </p>
        </div>

        {/* Feature Cards Grid (Two key tech blocks, then the Lookbook block) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: SDXL */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-slate-900/50 border border-white/5 hover:border-brand-purple/20 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300"
          >
            <div className="p-3 bg-brand-purple/10 border border-brand-purple/20 rounded-xl text-brand-purple w-fit mb-6 group-hover:scale-105 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white tracking-tight mb-3">
              SDXL High-Fidelity Rendering
            </h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Our custom finetuned SDXL model handles pixel synthesis. It accurately maps high-resolution fabric textures, leather grains, drapery folds, and complex lighting patterns onto your skeletal structure.
            </p>
            <ul className="mt-6 space-y-2.5">
              {['12-pass lighting correction', 'Real-time fabric drape analysis', 'Consistent pose preservation'].map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 font-sans text-[11px] text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2: Gemini */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative bg-slate-900/50 border border-white/5 hover:border-brand-indigo/20 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300"
          >
            <div className="p-3 bg-brand-indigo/10 border border-brand-indigo/20 rounded-xl text-brand-indigo w-fit mb-6 group-hover:scale-105 transition-transform">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white tracking-tight mb-3">
              Gemini Intelligent Vision
            </h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              The multi-modal Gemini framework reads the garment input. It acts as the intelligent prompt controller, extracting collar shapes, buttons, material textures, and sewing patterns to instruct the render perfectly.
            </p>
            <ul className="mt-6 space-y-2.5">
              {['Auto pattern classification', 'Garment collar/cuff isolation', 'Precise color map extraction'].map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 font-sans text-[11px] text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-indigo" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3: Saved Combinations explanation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-slate-900/50 border border-white/5 hover:border-brand-purple/20 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300"
          >
            <div className="p-3 bg-brand-purple/10 border border-brand-purple/20 rounded-xl text-brand-purple w-fit mb-6 group-hover:scale-105 transition-transform">
              <FolderHeart className="w-6 h-6" />
            </div>
            <h3 className="font-display font-bold text-xl text-white tracking-tight mb-3">
              Saved Combinations & Lookbook
            </h3>
            <p className="font-sans text-xs text-slate-400 leading-relaxed">
              Save tried-on fits directly to your digital Lookbook. Organize combinations by style, date, or brand catalog, and instantly output high-res style cards to consult with friends or shared style profiles.
            </p>
            <ul className="mt-6 space-y-2.5">
              {['Zero server data storage', 'Instant shareable style cards', 'Sort by event / category'].map((bullet) => (
                <li key={bullet} className="flex items-center gap-2 font-sans text-[11px] text-slate-300">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Dynamic Lookbook Catalog Interface (The live interactive segment) */}
        <div className="w-full bg-slate-950/60 border border-white/5 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center border border-brand-purple/25">
                <FolderHeart className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-bold text-lg text-white tracking-tight">Your Saved Combinations</h4>
                <p className="font-sans text-xs text-slate-500">Local Database Lookbook Sync (Offline-Friendly)</p>
              </div>
            </div>
            <span className="font-mono text-xs text-slate-400 bg-slate-900 border border-white/5 px-3 py-1 rounded-full">
              {lookbookItems.length} outfit{lookbookItems.length !== 1 ? 's' : ''} saved
            </span>
          </div>

          {/* Lookbook List Grid */}
          {lookbookItems.length === 0 ? (
            /* Empty state */
            <div className="border border-dashed border-white/5 rounded-xl py-12 text-center">
              <div className="w-12 h-12 bg-slate-900/80 rounded-full text-slate-600 border border-white/5 flex items-center justify-center mx-auto mb-4">
                <FolderHeart className="w-5 h-5" />
              </div>
              <p className="font-display font-semibold text-sm text-slate-300">Your lookbook is empty</p>
              <p className="font-sans text-xs text-slate-500 max-w-xs mx-auto mt-1 leading-relaxed">
                Go to the Virtual Try-On Playground above, click <strong>"Render Fit Visualization"</strong>, then tap <strong>"Save Lookbook"</strong>.
              </p>
            </div>
          ) : (
            /* Active lookbook items */
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {lookbookItems.map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="group relative bg-slate-900/50 border border-white/5 hover:border-brand-purple/30 rounded-xl overflow-hidden p-3 transition-colors duration-200"
                >
                  {/* Photo container */}
                  <div className="aspect-[3/4] rounded-lg overflow-hidden relative bg-slate-950">
                    <img
                      src={item.resultUrl}
                      alt={item.garmentName}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Floating delete button */}
                    <button
                      onClick={() => onRemoveFromLookbook(item.id)}
                      className="absolute top-2 right-2 p-1.5 bg-brand-darker/80 hover:bg-rose-500 hover:text-white text-slate-400 rounded-lg backdrop-blur-md border border-white/5 cursor-pointer transition-colors"
                      title="Remove combination"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Info details */}
                  <div className="mt-3.5 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-display font-bold text-xs text-white truncate max-w-[70%]">
                        {item.garmentName}
                      </p>
                      <span className="font-mono text-[9px] text-slate-500 flex items-center gap-1">
                        <Calendar className="w-2.5 h-2.5" />
                        {item.timestamp}
                      </span>
                    </div>
                    <p className="font-sans text-[10px] text-slate-400">
                      Model silhouette: <strong className="text-slate-300">{item.modelName}</strong>
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
