import React, { useState, useEffect, useRef } from 'react';
import { Slack, MessageSquare, Box, Hourglass, Globe, Database, Zap, Figma, Calendar, Github } from 'lucide-react';

// Two icons per ring (spaced 180 degrees apart)
const INTEGRATIONS = [
  // Ring 1 (Inner) - 2 icons
  { id: 'notion', label: 'Notion', icon: Box, ring: 1, initialAngle: 0 },
  { id: 'globe', label: 'Webhooks', icon: Globe, ring: 1, initialAngle: Math.PI },
  
  // Ring 2 (Middle) - 2 icons
  { id: 'slack', label: 'Slack', icon: Slack, ring: 2, initialAngle: Math.PI / 4 },
  { id: 'database', label: 'Database', icon: Database, ring: 2, initialAngle: Math.PI / 4 + Math.PI },
  
  // Ring 3 (Outer) - 2 icons
  { id: 'intercom', label: 'Intercom', icon: MessageSquare, ring: 3, initialAngle: Math.PI / 2 },
  { id: 'figma', label: 'Figma', icon: Figma, ring: 3, initialAngle: Math.PI / 2 + Math.PI },
];

// Ring configurations
// Speed calculated as: 2π / duration (in radians per second)
const RING_CONFIG = {
  1: { radius: 80, radiusMd: 130, speed: (2 * Math.PI) / 25, direction: 1 }, // CW, 25s for full rotation
  2: { radius: 125, radiusMd: 190, speed: -(2 * Math.PI) / 35, direction: -1 }, // CCW, 35s for full rotation
  3: { radius: 170, radiusMd: 250, speed: (2 * Math.PI) / 45, direction: 1 }, // CW, 45s for full rotation
};

export const Integrations: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  
  // Initialize angles for each icon based on their initial angles
  const [angles, setAngles] = useState<{ [key: string]: number }>(() => {
    const initialAngles: { [key: string]: number } = {};
    INTEGRATIONS.forEach(item => {
      initialAngles[item.id] = item.initialAngle;
    });
    return initialAngles;
  });
  
  const animationFrameRef = useRef<number>();
  const lastTimeRef = useRef<number>(Date.now());

  // Animation loop
  useEffect(() => {
    const animate = () => {
      const now = Date.now();
      const deltaTime = (now - lastTimeRef.current) / 1000; // Convert to seconds
      lastTimeRef.current = now;

      setAngles((prev) => {
        const newAngles: { [key: string]: number } = {};
        INTEGRATIONS.forEach((item) => {
          const config = RING_CONFIG[item.ring as keyof typeof RING_CONFIG];
          // Each icon on the same ring uses the same speed
          // The initial angle offset is preserved relative to the ring's base angle
          const baseAngle = prev[item.id] || item.initialAngle;
          let newAngle = baseAngle + config.speed * deltaTime;
          // Wrap angle using modulo 2π to keep it in [0, 2π) range
          newAngle = ((newAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
          newAngles[item.id] = newAngle;
        });
        return newAngles;
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Helper to find active integration label
  const activeLabel = INTEGRATIONS.find(i => i.id === activeId)?.label || 'Integrations';

  return (
    <section className="py-32 relative overflow-hidden bg-[#0B0C15]">
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
        <div className="relative w-[340px] h-[340px] md:w-[600px] md:h-[600px] mx-auto flex items-center justify-center">
           
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
           
           {/* Static Ring Borders */}
           <div 
             className="absolute border border-white/10 rounded-full w-[160px] h-[160px] md:w-[260px] md:h-[260px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
           ></div>
           <div 
             className="absolute border border-white/10 rounded-full w-[250px] h-[250px] md:w-[380px] md:h-[380px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
           ></div>
           <div 
             className="absolute border border-white/10 rounded-full w-[340px] h-[340px] md:w-[500px] md:h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
           ></div>
           
           {/* Orbiting Icons */}
           {INTEGRATIONS.map((item) => {
             const config = RING_CONFIG[item.ring as keyof typeof RING_CONFIG];
             const angle = angles[item.id] || item.initialAngle;
             
             // Calculate position using polar coordinates
             const radius = config.radius;
             const radiusMd = config.radiusMd;
             
             // Polar to Cartesian conversion: x = r * cos(θ), y = r * sin(θ)
             // Note: In screen coordinates, positive Y is down, so we negate Y
             const x = radius * Math.cos(angle);
             const y = -radius * Math.sin(angle); // Negate for screen coordinates
             const xMd = radiusMd * Math.cos(angle);
             const yMd = -radiusMd * Math.sin(angle);
             
             return (
               <OrbitingIcon
                 key={item.id}
                 item={item}
                 angle={angle}
                 x={x}
                 y={y}
                 xMd={xMd}
                 yMd={yMd}
                 isActive={activeId === item.id}
                 onClick={() => setActiveId(item.id)}
               />
             );
           })}

        </div>

      </div>
    </section>
  );
};

interface OrbitingIconProps {
  item: typeof INTEGRATIONS[0];
  angle: number;
  x: number;
  y: number;
  xMd: number;
  yMd: number;
  isActive: boolean;
  onClick: () => void;
}

const OrbitingIcon: React.FC<OrbitingIconProps> = ({ 
  item, 
  x, 
  y, 
  xMd, 
  yMd, 
  isActive, 
  onClick 
}) => {
  return (
    <>
      {/* Mobile version */}
      <div 
        className="absolute left-1/2 top-1/2 pointer-events-none md:hidden"
        style={{
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        }}
      >
        <button
          onClick={onClick}
          className={`
            group relative flex items-center justify-center w-10 h-10 rounded-full 
            border transition-all duration-300 pointer-events-auto
            ${isActive 
              ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-[0_0_20px_rgba(208,242,86,0.5)] scale-110 z-20' 
              : 'bg-[#0F1119] text-gray-400 border-white/10 hover:border-brand-accent/50 hover:text-white z-10'
            }
          `}
        >
          <item.icon size={18} className="transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>
      
      {/* Desktop version */}
      <div 
        className="absolute left-1/2 top-1/2 pointer-events-none hidden md:block"
        style={{
          transform: `translate(calc(-50% + ${xMd}px), calc(-50% + ${yMd}px))`,
        }}
      >
        <button
          onClick={onClick}
          className={`
            group relative flex items-center justify-center w-12 h-12 rounded-full 
            border transition-all duration-300 pointer-events-auto
            ${isActive 
              ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-[0_0_20px_rgba(208,242,86,0.5)] scale-110 z-20' 
              : 'bg-[#0F1119] text-gray-400 border-white/10 hover:border-brand-accent/50 hover:text-white z-10'
            }
          `}
        >
          <item.icon size={20} className="transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>
    </>
  );
};
