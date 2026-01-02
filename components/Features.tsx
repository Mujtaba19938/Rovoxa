import React from 'react';
import { FEATURES } from '../constants';
import { Sparkles } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 relative">
       {/* Ambient Light */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-text mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></div>
            How it works
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold text-white mb-4">
            Built to talk.<br />
            Trained to <span className="font-serif italic text-brand-text">understand.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-3xl bg-[#0F1119] border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Gradient hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-[#1A1D26] flex items-center justify-center mb-6 group-hover:bg-brand-accent group-hover:text-brand-dark transition-colors duration-300">
                  <feature.icon size={28} className="text-brand-accent group-hover:text-brand-dark transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-brand-text leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};