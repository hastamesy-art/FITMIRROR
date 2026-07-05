import { motion } from 'motion/react';
import { ShieldCheck, Heart, ShoppingBag, Eye, HelpCircle } from 'lucide-react';
import { BENEFITS } from '../data';

const benefitIcons: Record<string, any> = {
  'benefit-returns': ShoppingBag,
  'benefit-sustainability': Heart,
  'benefit-discovery': HelpCircle,
  'benefit-privacy': ShieldCheck,
};

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-slate-950/20 relative border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <span className="font-mono text-xs text-brand-indigo font-semibold tracking-widest uppercase bg-brand-indigo/10 px-3 py-1 rounded-full border border-brand-indigo/20">
              The Value Proposition
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mt-4">
              Designed for Smart, Conscious Shoppers
            </h2>
          </div>
          <p className="font-sans text-sm text-slate-400 max-w-md leading-relaxed">
            By pairing state-of-the-art AI with local-first secure databases, FitMirror resolves the core friction of online fashion retail.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => {
            const IconComponent = benefitIcons[benefit.id] || ShieldCheck;
            
            return (
              <motion.div
                key={benefit.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-900/30 border border-white/5 hover:border-brand-indigo/30 rounded-2xl p-6 hover:bg-slate-900/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="p-2.5 bg-brand-dark rounded-xl text-brand-indigo border border-white/10 group-hover:border-brand-indigo/25 group-hover:scale-105 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[9px] text-slate-400 font-medium tracking-wider uppercase">
                      {benefit.badge}
                    </span>
                  </div>

                  {/* Benefit Title & Description */}
                  <h3 className="font-display font-bold text-lg text-white tracking-tight mb-3">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-xs text-slate-400 leading-relaxed mb-8">
                    {benefit.description}
                  </p>
                </div>

                {/* Micro Stat Graphic */}
                <div className="pt-4 border-t border-white/5 flex items-end gap-3">
                  <span className="font-display font-bold text-2xl text-white tracking-tight group-hover:text-brand-indigo transition-colors duration-200">
                    {benefit.stat}
                  </span>
                  <span className="font-sans text-[10px] text-slate-500 pb-1.5 uppercase font-medium">
                    {benefit.statLabel}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
