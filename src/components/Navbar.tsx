
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { WaitingListForm } from './WaitingListForm';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [waitingListOpen, setWaitingListOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center">
            <span className="text-xl font-semibold tracking-tight">
              DCM<span className="text-neutral-400">.ai</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              How It Works
            </a>
            <a href="#use-cases" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              Use Cases
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-neutral-600 transition-colors">
              Pricing
            </a>
            <button 
              onClick={() => setWaitingListOpen(true)}
              className="text-sm font-medium px-4 py-2 rounded-md bg-black text-white hover:bg-neutral-800 transition-colors"
            >
              Join Waiting List
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center"
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-5">
              <span 
                className={cn(
                  "absolute w-6 h-[2px] bg-black transition-all duration-300", 
                  isMobileMenuOpen ? "top-2 rotate-45" : "top-0"
                )}
              />
              <span 
                className={cn(
                  "absolute top-2 w-6 h-[2px] bg-black transition-all duration-300", 
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span 
                className={cn(
                  "absolute w-6 h-[2px] bg-black transition-all duration-300", 
                  isMobileMenuOpen ? "top-2 -rotate-45" : "top-4"
                )}
              />
            </div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 pt-20",
          isMobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
        )}
      >
        <div className="container-custom flex flex-col space-y-8 p-4">
          <a 
            href="#features" 
            className="text-lg font-medium py-2 border-b border-neutral-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-lg font-medium py-2 border-b border-neutral-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#use-cases" 
            className="text-lg font-medium py-2 border-b border-neutral-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Use Cases
          </a>
          <a 
            href="#pricing" 
            className="text-lg font-medium py-2 border-b border-neutral-100"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              setWaitingListOpen(true);
            }}
            className="w-full text-center text-base font-medium px-4 py-3 rounded-md bg-black text-white hover:bg-neutral-800 transition-colors"
          >
            Join Waiting List
          </button>
        </div>
      </div>

      {/* Waiting List Form Dialog */}
      <WaitingListForm open={waitingListOpen} onOpenChange={setWaitingListOpen} />
    </nav>
  );
};

export default Navbar;
