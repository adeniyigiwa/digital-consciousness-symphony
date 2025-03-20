
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
  isActive?: boolean;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon,
  delay,
  isActive = false,
  onClick
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: Number(delay.replace('ms', '')) / 1000 }}
      className={cn(
        "relative p-6 rounded-xl transition-all duration-300 hover-lift cursor-pointer backdrop-blur-sm",
        isActive 
          ? "bg-neutral-900 text-white shadow-xl border-neutral-800" 
          : "bg-white/70 border border-neutral-100 hover:bg-white/90"
      )}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
    >
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        isActive ? "bg-white/10" : "bg-neutral-100"
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className={cn(
        "text-sm",
        isActive ? "text-neutral-300" : "text-neutral-600"
      )}>
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const features = [
    {
      title: "Digital Twin Creation",
      description: "AI develops a dynamic digital twin of the user that evolves with time and learns preferences.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M11 4a2 2 0 1 1 4 0v1a1 1 0 0 0 1 1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a2 2 0 0 0 0 4h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-3a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0v-1a1 1 0 0 0-1-1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H4a2 2 0 0 1 0-4h1a1 1 0 0 0 1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 0 1-1V4z" />
        </svg>
      )
    },
    {
      title: "Context-Aware Decision-Making",
      description: "Predicts actions based on location, time, and recent activities with remarkable accuracy.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      )
    },
    {
      title: "Sentiment and Personality Matching",
      description: "Mimics the user's tone and communication style accurately in messages across platforms.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
        </svg>
      )
    },
    {
      title: "AI-Powered Delegation",
      description: "Manages tasks independently, such as rescheduling meetings or negotiating deadlines.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
          <line x1="8" y1="12" x2="16" y2="12" />
          <line x1="12" y1="16" x2="12" y2="8" />
        </svg>
      )
    },
    {
      title: "Predictive Insights",
      description: "Provides insights like 'Your team's workload will peak next week. Suggest rescheduling Project X.'",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M2 12h6" />
          <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
          <path d="M12 2a10 10 0 0 0-6.88 2.77" />
        </svg>
      )
    },
    {
      title: "Evolving Knowledge Graph",
      description: "Tracks personal or organizational knowledge and evolves it for future decision-making.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <path d="M12 7V3" />
          <path d="M19 5c.667 2.667 0 5.333-2 8h-3.5" />
          <path d="M16 19h6" />
          <path d="M7.491 11.956 3 11" />
          <path d="M8.5 5.5 7 3" />
          <path d="M7.5 15.5c1.667 1.833 4.333 2 6 0" />
          <path d="M13 13h5" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    // Auto-rotate featured item
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [features.length]);

  // Intersection Observer for animations
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index);
    toast({
      title: features[index].title,
      description: features[index].description,
      duration: 3000,
    });
  };

  return (
    <section ref={sectionRef} id="features" className="py-24 opacity-0">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-neutral-200 rounded-full bg-white/80 backdrop-blur-sm">
            <span className="text-xs font-medium text-neutral-600">Core Features</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Beyond a Simple Assistant</h2>
          <p className="text-lg text-neutral-600">
            DCM.ai is designed to be a comprehensive digital proxy that manages every aspect of your digital identity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              delay={`${index * 100}ms`}
              isActive={index === activeFeature}
              onClick={() => handleFeatureClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
