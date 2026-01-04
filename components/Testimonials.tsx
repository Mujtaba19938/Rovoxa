import React from 'react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section className="pt-8 pb-8 md:py-32 bg-[#0B0C15] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-20">
          <h2 className="text-2xl md:text-5xl font-semibold text-white mb-4 md:mb-6">
             Loved by <span className="font-serif italic text-brand-text">founders</span>
          </h2>
          <p className="text-sm md:text-lg text-brand-text">See what our community is saying about Rovoxa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
                key={idx} 
                className="bg-[#11131A] p-6 md:p-10 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col items-center text-center group"
            >
               <div className="flex-1 flex items-center justify-center mb-8">
                    <p className="text-lg md:text-xl text-gray-300 font-medium leading-relaxed group-hover:text-white transition-colors">
                        "{testimonial.quote}"
                    </p>
               </div>
               
               <div className="flex flex-col items-center mt-auto w-full">
                  <div className="w-10 h-10 rounded-full bg-gray-700 mb-3 overflow-hidden ring-2 ring-white/5">
                    <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-0.5">{testimonial.author}</h4>
                  <p className="text-xs text-brand-text">{testimonial.role}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};