import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { WaitingListForm } from './WaitingListForm';

const Hero = () => {
  const orbitRef = useRef<HTMLDivElement>(null);
  const [waitingListOpen, setWaitingListOpen] = useState(false);
  
  useEffect(() => {
    const orbitElement = orbitRef.current;
    if (!orbitElement) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const rect = orbitElement.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center
      const moveX = (clientX - centerX) / 30;
      const moveY = (clientY - centerY) / 30;
      
      orbitElement.style.transform = `translate(${moveX}px, ${moveY}px)`;
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise" aria-hidden="true"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50/30 to-transparent opacity-50"></div>
      
      <div className="container-custom relative z-10 pt-16">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-neutral-200 rounded-full bg-white/80 backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse-soft"></span>
            <span className="text-xs font-medium text-neutral-600">AI-Powered Digital Consciousness</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold max-w-3xl leading-tight tracking-tight mb-6 text-balance animate-fade-up">
            The Future of <span className="text-gradient">Digital Identity</span> Management is Here
          </h1>
          
          <p className="text-lg text-neutral-600 max-w-2xl mb-10 animation-delay-100 animate-fade-up">
            Meet DCM.ai, an AI-driven digital assistant that becomes a central manager for your digital identity and cognitive interactions across all platforms.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animation-delay-200 animate-fade-up">
            <button 
              onClick={() => setWaitingListOpen(true)}
              className="px-6 py-3 rounded-md bg-black text-white font-medium hover:bg-neutral-800 transition-all hover-scale"
            >
              Join Waiting List
            </button>
            <a 
              href="#features" 
              className="px-6 py-3 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50 transition-all hover-scale"
            >
              Learn More
            </a>
          </div>
        </div>
        
        {/* Orbital visual element */}
        <div className="relative mt-16 mb-8 h-[300px] md:h-[400px] animation-delay-300 animate-fade-in">
          
          <div
            ref={orbitRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] md:w-[340px] md:h-[340px] transition-transform duration-300 ease-out"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full shadow-lg glassmorphism animate-pulse-soft z-20">
              <div className="absolute inset-0 flex items-center justify-center text-lg font-semibold">
                DCM
              </div>
            </div>
            
            {/* Orbital rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-neutral-200 rounded-full animate-spin" style={{ animationDuration: '30s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-neutral-200 rounded-full animate-spin" style={{ animationDuration: '25s' }}></div>
            
            {/* Orbital points */}
            <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-50 rounded-full glassmorphism flex items-center justify-center animate-float shadow-sm">
              <span className="text-xs font-medium">Email</span>
            </div>
            <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-14 h-14 bg-indigo-50 rounded-full glassmorphism flex items-center justify-center animate-float shadow-sm" style={{ animationDelay: '1s' }}>
              <span className="text-xs font-medium">Social</span>
            </div>
            <div className="absolute bottom-[15%] right-[15%] w-12 h-12 bg-purple-50 rounded-full glassmorphism flex items-center justify-center animate-float shadow-sm" style={{ animationDelay: '2s' }}>
              <span className="text-xs font-medium">Work</span>
            </div>
            <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-14 h-14 bg-pink-50 rounded-full glassmorphism flex items-center justify-center animate-float shadow-sm" style={{ animationDelay: '1.5s' }}>
              <span className="text-xs font-medium">IoT</span>
            </div>
            <div className="absolute top-1/2 left-[5%] -translate-y-1/2 w-12 h-12 bg-green-50 rounded-full glassmorphism flex items-center justify-center animate-float shadow-sm" style={{ animationDelay: '0.5s' }}>
              <span className="text-xs font-medium">Health</span>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-700">
          <div className="flex flex-col items-center">
            <span className="text-xs text-neutral-400 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border border-neutral-300 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDuration: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Waiting List Form Dialog */}
      <WaitingListForm open={waitingListOpen} onOpenChange={setWaitingListOpen} />
    </section>
  );
};

export default Hero;
