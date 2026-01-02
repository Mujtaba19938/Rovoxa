import React from 'react';
import { Button } from './ui/Button';
import { TRUSTED_BRANDS } from '../constants';
import { PlayCircle, Calendar, MessageCircle, Mic, Send, User, Bot } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 overflow-hidden min-h-screen flex flex-col justify-center">
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Atmosphere */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Main Right Glow - Greenish Yellow */}
          <div className="absolute -top-[30%] -right-[10%] w-[900px] h-[900px] bg-[radial-gradient(circle,rgba(208,242,86,0.15)_0%,rgba(0,0,0,0)_70%)] blur-[80px] md:blur-[120px] mix-blend-screen opacity-100"></div>
          
          {/* Secondary Left Glow - Deep Space Purple */}
          <div className="absolute top-[-10%] left-[-20%] w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] opacity-60"></div>
          
          {/* Stars / Particles */}
          <div className="absolute top-[15%] left-[20%] w-0.5 h-0.5 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-[30%] right-[30%] w-0.5 h-0.5 bg-white rounded-full opacity-30"></div>
          <div className="absolute top-[10%] right-[15%] w-1 h-1 bg-white rounded-full opacity-40 shadow-[0_0_8px_rgba(255,255,255,0.8)]"></div>
          <div className="absolute bottom-[40%] left-[10%] w-0.5 h-0.5 bg-white rounded-full opacity-30"></div>
          <div className="absolute top-[50%] right-[5%] w-0.5 h-0.5 bg-white rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Text Content */}
        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-white mb-6">
          Talk smarter.<br />
          Scale <span className="font-serif italic font-normal text-brand-accent">faster.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-text mb-10 leading-relaxed">
          Meet Rovoxa, your intelligent AI chatbot that engages, converts, and supports users 24/7. Built for SaaS, made for humans.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button variant="primary" size="lg">Start Free Trial</Button>
          <Button variant="outline" size="lg" className="group">
             <PlayCircle className="w-5 h-5 mr-2 text-brand-text group-hover:text-white transition-colors" />
             Watch Demo
          </Button>
        </div>

        {/* Floating UI Mockup */}
        <div className="relative max-w-4xl mx-auto perspective-1000">
          <div className="relative bg-[#13151b] border border-white/10 rounded-3xl shadow-2xl p-6 md:p-8 backdrop-blur-xl ring-1 ring-white/5">
             {/* Header of Mockup */}
             <div className="flex items-center justify-between mb-8">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#28C840]"></div>
                </div>
                <div className="text-xs text-brand-text font-medium tracking-wide">New Chat</div>
                <div className="w-8 h-8 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                   <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-brand-accent to-green-400"></div>
                </div>
             </div>

             {/* Chat Area */}
             <div className="space-y-8 text-left mb-8 relative">
                
                {/* User Msg */}
                <div className="flex justify-end">
                    <div className="bg-[#1A1D26] border border-white/5 text-white px-5 py-3 rounded-2xl rounded-tr-sm text-sm inline-flex items-center gap-3 shadow-lg">
                        Can I book a meeting with Sales?
                        <div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden border border-white/10">
                           <img src="https://picsum.photos/100/100?random=user" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>

                {/* Bot Msg Area */}
                <div className="flex justify-start w-full relative">
                    <div className="flex flex-col space-y-4 w-full">
                        {/* Bot Bubble */}
                        <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark shadow-[0_0_15px_rgba(208,242,86,0.3)]">
                                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                             </div>
                             <div className="text-sm text-gray-300 bg-[#1A1D26] px-4 py-2 rounded-2xl rounded-tl-sm border border-white/5">Sure! please select a time below.</div>
                        </div>
                        
                        {/* Floating Cards Container */}
                        <div className="relative h-32 md:h-24">
                           {/* Card 1: Select AI Model - Floating Left */}
                           <div className="absolute left-0 top-0 md:-left-4 md:top-2 bg-[#1c1f2e] border border-white/10 p-3 rounded-xl shadow-2xl w-48 z-20 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                                <div className="flex items-center justify-between mb-2">
                                   <span className="text-[10px] text-gray-400 font-semibold uppercase">Select AI Model</span>
                                </div>
                                <div className="space-y-1.5">
                                   <div className="bg-[#D0F256]/10 border border-[#D0F256]/20 rounded-lg p-2 flex items-center justify-between">
                                      <div className="flex items-center gap-2">
                                          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                                          <span className="text-xs text-white">Gemini 2.5</span>
                                      </div>
                                      <div className="w-3 h-3 rounded-full bg-brand-accent flex items-center justify-center">
                                         <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                                      </div>
                                   </div>
                                   <div className="bg-white/5 border border-white/5 rounded-lg p-2 flex items-center gap-2 opacity-50">
                                       <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                                       <span className="text-xs text-gray-400">ChatGPT 4o</span>
                                   </div>
                                </div>
                           </div>

                           {/* Card 2: Date Picker - Floating Right */}
                           <div className="absolute right-0 top-12 md:-right-4 md:top-0 bg-[#1c1f2e] border border-white/10 p-3 rounded-xl shadow-2xl w-52 z-30 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                                <span className="text-[10px] text-gray-400 font-semibold uppercase block mb-2">Select Time & Date</span>
                                <div className="space-y-1.5">
                                   <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex items-center justify-between text-xs text-white">
                                      <div className="flex items-center gap-2">
                                         <Calendar size={12} className="text-gray-400" />
                                         12 June 2025
                                      </div>
                                      <ChevronDownIcon />
                                   </div>
                                   <div className="bg-white/5 border border-white/10 rounded-lg p-2 flex items-center justify-between text-xs text-white">
                                      <div className="flex items-center gap-2">
                                         <div className="w-3 h-3 rounded-full border border-gray-500 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-brand-accent rounded-full"></div>
                                         </div>
                                         Select Time
                                      </div>
                                      <div className="w-4 h-4 bg-brand-accent rounded-full flex items-center justify-center text-black text-[8px]">▼</div>
                                   </div>
                                </div>
                           </div>
                        </div>

                    </div>
                </div>
             </div>

             {/* Input Area */}
             <div className="mt-4 relative z-40">
                <div className="w-full bg-[#0B0C15] border border-brand-accent/30 rounded-2xl py-3 px-4 flex items-center gap-3 text-brand-text text-sm shadow-lg ring-1 ring-brand-accent/20">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center cursor-pointer hover:bg-white/10 text-gray-400">
                        +
                    </div>
                    <div className="flex-1 flex items-center gap-2">
                        <div className="bg-white/5 rounded-full px-3 py-1 text-xs text-gray-400 flex items-center gap-1 border border-white/5">
                           <Bot size={10} /> Tools
                        </div>
                        <input type="text" placeholder="Ask anything..." className="bg-transparent border-none outline-none flex-1 placeholder-gray-600 text-white min-w-0" disabled />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark cursor-pointer hover:bg-[#bce045]">
                        <Mic size={14} />
                    </div>
                </div>
             </div>
          </div>
        </div>

        {/* Trusted By */}
        <div className="mt-24 w-full max-w-5xl mx-auto">
            <p className="text-xs font-semibold tracking-widest text-brand-text uppercase mb-10 opacity-80">Trusted by innovative teams</p>
            
            <div className="relative w-full overflow-hidden">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0B0C15] to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0B0C15] to-transparent z-10"></div>

                <div className="flex items-center w-max animate-marquee">
                    {/* Render the list 3 times for seamless looping on wide screens */}
                    {[...Array(3)].map((_, setIndex) => (
                        <div key={setIndex} className="flex items-center gap-12 md:gap-24 px-6 md:px-12">
                            {TRUSTED_BRANDS.map((brand, idx) => (
                                <div key={`${setIndex}-${idx}`} className="flex items-center gap-3 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-default group">
                                    <brand.icon size={24} className="text-white group-hover:text-brand-accent transition-colors" />
                                    <span className="text-lg font-semibold text-white">{brand.name}</span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

const ChevronDownIcon = () => (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
        <path d="m6 9 6 6 6-6"/>
    </svg>
);
