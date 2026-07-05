import { motion } from 'motion/react';
import { Camera, ShoppingBag, Sparkles, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '../data';

const iconMap: Record<string, any> = {
  Camera: Camera,
  ShoppingBag: ShoppingBag,
  Sparkles: Sparkles,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Decorative background grids */}
      <div className="absolute inset-0 bg-radial-gradient from-brand-purple/5 via-transparent to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs text-brand-purple font-semibold tracking-widest uppercase bg-brand-purple/10 px-3 py-1 rounded-full border border-brand-purple/20"
          >
            Sleek Workflow
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight mt-4"
          >
            Three Steps to Style Perfection
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-sans text-sm md:text-base text-slate-400 mt-4 leading-relaxed"
          >
            We've condensed state-of-the-art Generative AI models into a 3-step pipeline that runs entirely at your command.
          </motion.p>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative">
          {HOW_IT_WORKS_STEPS.map((step, index) => {
            const IconComponent = iconMap[step.icon] || Sparkles;
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative bg-slate-900/50 border border-white/5 hover:border-brand-purple/30 rounded-2xl p-8 hover:bg-slate-900/80 transition-all duration-300 flex flex-col justify-between h-full"
              >
                {/* Decorative glow corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-brand-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-2xl" />

                <div>
                  {/* Step number & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display font-black text-5xl text-brand-purple/15 group-hover:text-brand-purple/35 transition-colors duration-300">
                      {step.number}
                    </span>
                    <span className="font-sans text-[10px] font-semibold text-brand-purple uppercase bg-brand-purple/10 border border-brand-purple/20 px-2.5 py-0.5 rounded-full">
                      {step.badge}
                    </span>
                  </div>

                  {/* Icon and title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-brand-dark rounded-xl text-white group-hover:text-brand-purple border border-white/10 group-hover:border-brand-purple/30 group-hover:scale-105 transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step Description */}
                  <p className="font-sans text-xs text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Micro step-indicator arrows */}
                {index < 2 && (
                  <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-slate-700">
                    <ArrowRight className="w-5 h-5 animate-pulse" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
