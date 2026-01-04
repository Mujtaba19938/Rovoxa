import React from 'react';
import { PRICING_PLANS } from '../constants';
import { Check } from 'lucide-react';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pt-8 pb-8 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-brand-text mb-6">
            <div className="w-2 h-2 rounded-full bg-brand-text"></div>
            Our pricing
          </div>
          <h2 className="text-2xl md:text-5xl font-semibold text-white">
            Simple pricing for<br />
            <span className="font-serif italic text-brand-text">any size team</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {PRICING_PLANS.map((plan, index) => (
            <div 
              key={index} 
              className={`
                group relative p-6 md:p-10 rounded-2xl md:rounded-3xl border transition-all duration-500 overflow-hidden
                ${plan.highlight 
                  ? 'bg-[#0d0f16] border-white/10 hover:border-brand-accent/20' 
                  : 'bg-[#0B0C15] border-white/5 hover:border-white/10'
                }
              `}
            >
              {/* Glow Effects */}
              {plan.highlight ? (
                  <>
                     {/* Persistent Left Glow - Matches the image */}
                     <div className="absolute top-0 left-0 w-2/3 h-full bg-[radial-gradient(ellipse_at_left,_var(--tw-gradient-stops))] from-brand-accent/15 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-2xl" />
                     
                     {/* Top Highlight on Hover */}
                     <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl group-hover:bg-brand-accent/10 transition-colors duration-500" />
                  </>
              ) : (
                  // Subtle hover glow for non-highlighted card
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              )}
              
              <div className="relative z-10 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                        <h3 className="text-2xl font-semibold text-white mb-2">{plan.name}</h3>
                        <p className="text-sm text-brand-text/80 leading-relaxed max-w-[260px]">{plan.description}</p>
                    </div>
                    {plan.highlight && (
                        <div className="bg-brand-accent text-[#0B0C15] text-[10px] font-bold uppercase px-3 py-1.5 rounded-full tracking-wide shadow-[0_0_10px_rgba(208,242,86,0.4)] leading-tight flex flex-col items-center">
                          <span>MOST</span>
                          <span>POPULAR</span>
                        </div>
                    )}
                  </div>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-medium text-white tracking-tight">{plan.price}</span>
                    <span className="text-brand-text/60 text-lg">{plan.period}</span>
                  </div>

                  <button 
                    className={`
                        w-full py-4 rounded-xl font-medium text-sm transition-all duration-300 mb-10
                        ${plan.highlight 
                            ? 'bg-white/10 text-white hover:bg-white/20 border border-white/5 hover:border-white/10 shadow-lg' 
                            : 'bg-transparent text-white border border-white/10 hover:bg-white/5 hover:border-white/20'
                        }
                    `}
                  >
                    {plan.cta}
                  </button>

                  <div className="mt-auto space-y-4">
                     <p className="text-xs font-medium text-brand-text uppercase tracking-widest mb-6">Includes:</p>
                     {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 text-sm text-brand-text/80 group-hover:text-gray-300 transition-colors">
                            <div className="mt-0.5 min-w-[18px] h-[18px] rounded-full border border-white/20 flex items-center justify-center">
                               <Check size={10} className="text-brand-accent" strokeWidth={3} />
                            </div>
                            {feature}
                        </div>
                     ))}
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};