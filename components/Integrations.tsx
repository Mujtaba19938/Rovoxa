import React, { useState } from 'react';
import { Slack, Mail, Trello, Figma, Github, Chrome, Calendar, MessageSquare, Database, Globe, Zap, Hourglass, Box, Layers, Link as LinkIcon } from 'lucide-react';

const INTEGRATIONS = [
  // Inner Ring (Ring 1)
  { id: 'notion', label: 'Notion', icon: Box, ring: 1, angle: 0 },
  { id: 'globe', label: 'Webhooks', icon: Globe, ring: 1, angle: 180 },
  
  // Middle Ring (Ring 2)
  { id: 'slack', label: 'Slack', icon: Slack, ring: 2, angle: 45 },
  { id: 'linear', label: 'Linear', icon: Zap, ring: 2, angle: 165 },
  { id: 'drive', label: 'Drive', icon: Database, ring: 2, angle: 285 },

  // Outer Ring (Ring 3)
  { id: 'intercom', label: 'Intercom', icon: MessageSquare, ring: 3, angle: 90 },
  { id: 'figma', label: 'Figma', icon: Figma, ring: 3, angle: 210 },
  { id: 'calendar', label: 'Calendar', icon: Calendar, ring: 3, angle: 330 },
];

export const Integrations: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  // Helper to find active integration label
  const activeLabel = INTEGRATIONS.find(i => i.id === activeId)?.label || 'Integrations';

  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0C15]">
      {/* CSS for animations */}
      <style>{`
        @keyframes orbit-cw {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes orbit-ccw {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-orbit-cw {
          animation: orbit-cw var(--duration, 20s) linear infinite;
        }
        .animate-orbit-ccw {
          animation: orbit-ccw var(--duration, 20s) linear infinite;
        }
        /* Pause animations on hover */
        .animate-orbit-cw:hover, .animate-orbit-ccw:hover {
          animation-play-state: paused;
        }
        
        /* Counter rotate icons to keep them upright */
        /* The wrapper rotates opposite to the ring to cancel out orbital rotation */
        .icon-wrapper {
          animation: orbit-ccw var(--duration, 20s) linear infinite;
        }
        /* If the ring rotates CCW, the icon must rotate CW to compensate */
        .ring-ccw .icon-wrapper {
          animation: orbit-cw var(--duration, 20s) linear infinite;
        }
        
        /* When hovering the ring, pause the icon counter-rotation too so it doesn't spin in place */
        .icon-wrapper-parent:hover .icon-wrapper {
          animation-play-state: paused;
        }
      `}</style>

      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header */}
        <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
            Works seamlessly with<br />
            your <span className="font-serif italic font-normal text-white">favorite tools</span>
            </h2>
            <p className="text-brand-text text-lg max-w-2xl mx-auto">
                Connect Rovoxa with the apps you use every day. Automate workflows and sync data instantly.
            </p>
        </div>

        {/* Orbit Visualization */}
        <div className="relative w-[340px] h-[340px] md:w-[600px] md:h-[600px] mx-auto flex items-center justify-center perspective-1000">
           
           {/* Center Core */}
           <div className="absolute z-20 flex flex-col items-center justify-center transition-all duration-300">
                <div className="relative group cursor-default">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-brand-accent rounded-full blur-[20px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Main Orb */}
                    <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-b from-[#D0F256] to-[#aacc00] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(208,242,86,0.3)] border-[4px] border-[#0B0C15]">
                        <Hourglass className="w-8 h-8 md:w-10 md:h-10 text-[#0B0C15]" />
                    </div>
                </div>
                
                {/* Dynamic Label */}
                <div className={`mt-4 absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-white transition-all duration-300 ${activeId ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    {activeLabel}
                </div>
           </div>
           
           {/* Ring 1 (Inner) - CW */}
           <div 
             className="absolute border border-white/10 rounded-full w-[160px] h-[160px] md:w-[260px] md:h-[260px] animate-orbit-cw icon-wrapper-parent"
             style={{ '--duration': '25s' } as React.CSSProperties}
           >
              {INTEGRATIONS.filter(i => i.ring === 1).map((item) => (
                  <IntegrationItem key={item.id} item={item} isActive={activeId === item.id} onClick={() => setActiveId(item.id)} />
              ))}
           </div>
           
           {/* Ring 2 (Middle) - CCW */}
           <div 
             className="absolute border border-white/10 rounded-full w-[250px] h-[250px] md:w-[380px] md:h-[380px] animate-orbit-ccw ring-ccw icon-wrapper-parent"
             style={{ '--duration': '35s' } as React.CSSProperties}
           >
               {INTEGRATIONS.filter(i => i.ring === 2).map((item) => (
                  <IntegrationItem key={item.id} item={item} isActive={activeId === item.id} onClick={() => setActiveId(item.id)} />
              ))}
           </div>
           
           {/* Ring 3 (Outer) - CW */}
           <div 
             className="absolute border border-white/10 rounded-full w-[340px] h-[340px] md:w-[500px] md:h-[500px] animate-orbit-cw icon-wrapper-parent"
             style={{ '--duration': '45s' } as React.CSSProperties}
           >
               {INTEGRATIONS.filter(i => i.ring === 3).map((item) => (
                  <IntegrationItem key={item.id} item={item} isActive={activeId === item.id} onClick={() => setActiveId(item.id)} />
              ))}
           </div>

        </div>

      </div>
    </section>
  );
};

const IntegrationItem: React.FC<{ 
    item: typeof INTEGRATIONS[0], 
    isActive: boolean,
    onClick: () => void 
}> = ({ item, isActive, onClick }) => {
    return (
        <div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none"
            style={{ transform: `rotate(${item.angle}deg)` }}
        >
            {/* 
               1. Position: center of top edge. 
               2. icon-wrapper handles the continuous counter-rotation.
               3. inner div handles the static rotation correction (-item.angle) so the icon starts upright.
            */}
            <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 icon-wrapper pointer-events-auto"
            >
                 <div style={{ transform: `rotate(-${item.angle}deg)` }}>
                     <button
                        onClick={onClick}
                        className={`
                            group relative flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full 
                            border transition-all duration-300
                            ${isActive 
                                ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-[0_0_20px_rgba(208,242,86,0.5)] scale-110 z-20' 
                                : 'bg-[#0F1119] text-gray-400 border-white/10 hover:border-brand-accent/50 hover:text-white z-10'
                            }
                        `}
                     >
                        <item.icon size={18} className="md:w-5 md:h-5 transition-transform duration-300 group-hover:scale-110" />
                     </button>
                 </div>
            </div>
        </div>
    );
};
