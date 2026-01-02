import React from 'react';
import { Bot, Twitter, Linkedin, Github } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#05060A] border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-8 h-8 rounded-lg bg-brand-accent flex items-center justify-center text-brand-dark">
                  <Bot size={20} />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">Rovoxa</span>
            </div>
            
            <div className="flex space-x-6">
                {NAV_LINKS.map(link => (
                    <a key={link.label} href={link.href} className="text-sm text-brand-text hover:text-white transition-colors">
                        {link.label}
                    </a>
                ))}
            </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
                © {new Date().getFullYear()} Rovoxa Inc. All rights reserved.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github size={20} /></a>
            </div>
        </div>
      </div>
    </footer>
  );
};