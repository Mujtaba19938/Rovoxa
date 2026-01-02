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

// Ring configurations with responsive radii
// Speed calculated as: 2π / duration (in radians per second)
// Radii: mobile / sm / md / lg
const RING_CONFIG = {
  1: { 
    radius: 65,      // mobile
    radiusSm: 80,    // sm (640px+)
    radiusMd: 100,   // md (768px+)
    radiusLg: 130,   // lg (1024px+)
    speed: (2 * Math.PI) / 25, 
    direction: 1 
  }, // CW, 25s for full rotation
  2: { 
    radius: 100, 
    radiusSm: 125,
    radiusMd: 150,
    radiusLg: 190,
    speed: -(2 * Math.PI) / 35, 
    direction: -1 
  }, // CCW, 35s for full rotation
  3: { 
    radius: 135, 
    radiusSm: 170,
    radiusMd: 210,
    radiusLg: 250,
    speed: (2 * Math.PI) / 45, 
    direction: 1 
  }, // CW, 45s for full rotation
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
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-[#0B0C15]">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] bg-brand-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Header */}
        <div className="mb-12 sm:mb-16 md:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 sm:mb-6 tracking-tight px-4">
            Works seamlessly with<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>your <span className="font-serif italic font-normal text-white">favorite tools</span>
            </h2>
            <p className="text-brand-text text-base sm:text-lg max-w-2xl mx-auto px-4">
                Connect Rovoxa with the apps you use every day. Automate workflows and sync data instantly.
            </p>
        </div>

        {/* Orbit Visualization */}
        <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] mx-auto flex items-center justify-center">
           
           {/* Center Core */}
           <div className="absolute z-20 flex flex-col items-center justify-center transition-all duration-300">
                <div className="relative group cursor-default">
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-brand-accent rounded-full blur-[20px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    {/* Main Orb */}
                    <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-b from-[#D0F256] to-[#aacc00] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(208,242,86,0.3)] border-[3px] sm:border-[4px] border-[#0B0C15]">
                        <Hourglass className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[#0B0C15]" />
                    </div>
                </div>
                
                {/* Dynamic Label */}
                <div className={`mt-3 sm:mt-4 absolute top-full left-1/2 -translate-x-1/2 whitespace-nowrap px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs sm:text-sm font-medium text-white transition-all duration-300 ${activeId ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                    {activeLabel}
                </div>
           </div>
           
           {/* Static Ring Borders */}
           <div 
             className="absolute border border-white/10 rounded-full w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] md:w-[200px] md:h-[200px] lg:w-[260px] lg:h-[260px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
           ></div>
           <div 
             className="absolute border border-white/10 rounded-full w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
           ></div>
           <div 
             className="absolute border border-white/10 rounded-full w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
           ></div>
           
           {/* Orbiting Icons */}
           {INTEGRATIONS.map((item) => {
             const config = RING_CONFIG[item.ring as keyof typeof RING_CONFIG];
             const angle = angles[item.id] || item.initialAngle;
             
             // Calculate position using polar coordinates for each breakpoint
             // Polar to Cartesian conversion: x = r * cos(θ), y = r * sin(θ)
             // Note: In screen coordinates, positive Y is down, so we negate Y
             const x = config.radius * Math.cos(angle);
             const y = -config.radius * Math.sin(angle);
             const xSm = config.radiusSm * Math.cos(angle);
             const ySm = -config.radiusSm * Math.sin(angle);
             const xMd = config.radiusMd * Math.cos(angle);
             const yMd = -config.radiusMd * Math.sin(angle);
             const xLg = config.radiusLg * Math.cos(angle);
             const yLg = -config.radiusLg * Math.sin(angle);
             
             return (
               <OrbitingIcon
                 key={item.id}
                 item={item}
                 angle={angle}
                 x={x}
                 y={y}
                 xSm={xSm}
                 ySm={ySm}
                 xMd={xMd}
                 yMd={yMd}
                 xLg={xLg}
                 yLg={yLg}
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
  xSm: number;
  ySm: number;
  xMd: number;
  yMd: number;
  xLg: number;
  yLg: number;
  isActive: boolean;
  onClick: () => void;
}

const OrbitingIcon: React.FC<OrbitingIconProps> = ({ 
  item, 
  x, 
  y,
  xSm,
  ySm,
  xMd, 
  yMd,
  xLg,
  yLg,
  isActive, 
  onClick 
}) => {
  return (
    <>
      {/* Mobile version (default) */}
      <div 
        className="absolute left-1/2 top-1/2 pointer-events-none sm:hidden"
        style={{
          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
        }}
      >
        <button
          onClick={onClick}
          className={`
            group relative flex items-center justify-center w-9 h-9 rounded-full 
            border transition-all duration-300 pointer-events-auto
            ${isActive 
              ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-[0_0_20px_rgba(208,242,86,0.5)] scale-110 z-20' 
              : 'bg-[#0F1119] text-gray-400 border-white/10 hover:border-brand-accent/50 hover:text-white z-10'
            }
          `}
        >
          <item.icon size={16} className="transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>
      
      {/* Small screens (sm) */}
      <div 
        className="absolute left-1/2 top-1/2 pointer-events-none hidden sm:block md:hidden"
        style={{
          transform: `translate(calc(-50% + ${xSm}px), calc(-50% + ${ySm}px))`,
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
      
      {/* Medium screens (md) */}
      <div 
        className="absolute left-1/2 top-1/2 pointer-events-none hidden md:block lg:hidden"
        style={{
          transform: `translate(calc(-50% + ${xMd}px), calc(-50% + ${yMd}px))`,
        }}
      >
        <button
          onClick={onClick}
          className={`
            group relative flex items-center justify-center w-11 h-11 rounded-full 
            border transition-all duration-300 pointer-events-auto
            ${isActive 
              ? 'bg-brand-accent text-brand-dark border-brand-accent shadow-[0_0_20px_rgba(208,242,86,0.5)] scale-110 z-20' 
              : 'bg-[#0F1119] text-gray-400 border-white/10 hover:border-brand-accent/50 hover:text-white z-10'
            }
          `}
        >
          <item.icon size={19} className="transition-transform duration-300 group-hover:scale-110" />
        </button>
      </div>
      
      {/* Large screens (lg+) */}
      <div 
        className="absolute left-1/2 top-1/2 pointer-events-none hidden lg:block"
        style={{
          transform: `translate(calc(-50% + ${xLg}px), calc(-50% + ${yLg}px))`,
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
