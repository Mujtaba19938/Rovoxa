import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl rounded-full bg-[#12141C]/80 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300">
        <div className="px-4 py-3 md:px-6 md:py-2.5">
          <div className="flex justify-between items-center">
            
            {/* Logo */}
            <a href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <img 
                src="/logo.png" 
                alt="Rovoxa" 
                className="h-8 w-auto"
              />
              <span className="text-lg font-medium tracking-tight text-white">Rovoxa</span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center justify-center space-x-8">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors flex items-center gap-1"
                >
                  {link.label}
                  {link.label === 'Pages' && <ChevronDown size={14} className="opacity-70" />}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center">
              <button className="bg-white/10 hover:bg-white/15 text-white text-sm font-medium px-6 py-2 rounded-full transition-all border border-white/5 hover:border-white/10">
                Contact us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white focus:outline-none p-1"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-[#12141C] border border-white/10 rounded-2xl shadow-xl flex flex-col space-y-2 md:hidden">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {link.label}
                {link.label === 'Pages' && <ChevronDown size={16} />}
              </a>
            ))}
            <div className="pt-2">
               <button className="w-full bg-white/10 hover:bg-white/20 text-white font-medium px-4 py-3 rounded-xl transition-colors">
                  Contact us
               </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};