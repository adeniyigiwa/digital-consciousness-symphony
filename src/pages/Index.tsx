
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import UseCases from '@/components/UseCases';
import Pricing from '@/components/Pricing';
import Footer from '@/components/Footer';
import { AnimatePresence, motion } from 'framer-motion';
import { Toaster } from 'sonner';

const Index = () => {
  useEffect(() => {
    // Update the document title
    document.title = 'DCM.ai - AI-Powered Digital Consciousness Manager';
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (!targetElement) return;
        
        window.scrollTo({
          top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
          behavior: 'smooth'
        });
      });
    });

    // Add animation class to body on page load
    document.body.classList.add('animate-fade-in');

    // Remove animation class when user navigates away
    return () => {
      document.body.classList.remove('animate-fade-in');
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col"
      >
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Features />
          <HowItWorks />
          <UseCases />
          <Pricing />
        </main>
        <Footer />
        <Toaster position="top-center" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Index;
