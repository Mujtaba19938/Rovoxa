import React from 'react';
import { Button } from './ui/Button';
import { Send, User, MessageSquare } from 'lucide-react';

export const ContactForm: React.FC = () => {
  return (
    <section className="py-24 relative">
       {/* Background gradient for this section */}
       <div className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-brand-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#13151b] border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
           
           {/* Decorative elements */}
           <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
           
           <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                 <h2 className="text-3xl font-semibold text-white mb-4">
                    Start chatting<br />
                    smarter <span className="font-serif italic text-brand-accent">today</span>
                 </h2>
                 <p className="text-brand-text mb-8">
                    Sign up in minutes and see how Rovoxa transforms your customer engagement.
                 </p>
                 
                 <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                             <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        </div>
                        Clean UI, fast responses — I use it every day.
                    </div>
                     <div className="flex items-center gap-3 text-sm text-gray-300">
                        <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center">
                             <User size={14} />
                        </div>
                        Super helpful, and easy to use — what more could I ask for?
                    </div>
                 </div>
              </div>

              <div className="bg-[#0B0C15] p-6 rounded-2xl border border-white/5">
                 <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <label className="text-xs text-brand-text uppercase font-bold tracking-wider">Work Email</label>
                        <input 
                          type="email" 
                          placeholder="name@company.com" 
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent/50 transition-colors"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs text-brand-text uppercase font-bold tracking-wider">Company Name</label>
                        <input 
                          type="text" 
                          placeholder="Acme Inc." 
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent/50 transition-colors"
                        />
                    </div>
                    
                    <Button variant="secondary" className="w-full gap-2">
                        Get Started <Send size={16} />
                    </Button>
                    <p className="text-xs text-gray-600 text-center mt-4">
                        No credit card required. 14-day free trial.
                    </p>
                 </form>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};