
import React, { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { useToast } from "@/components/ui/use-toast";
import { motion } from 'framer-motion';

const UseCaseCard = ({ 
  title, 
  description, 
  icon, 
  color, 
  delay,
  onClick
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  color: string; 
  delay: string;
  onClick: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Intersection Observer for animations
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              card.classList.add('animate-fade-up');
              card.style.opacity = '1';
            }, parseInt(delay));
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(card);
    return () => observer.disconnect();
  }, [delay]);
  
  return (
    <motion.div 
      ref={cardRef}
      className={cn(
        "opacity-0 bg-white border border-neutral-100 rounded-xl p-6 hover-lift cursor-pointer",
        "transition-all duration-300"
      )}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={cn(
        "w-12 h-12 rounded-lg flex items-center justify-center mb-4",
        color
      )}>
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-neutral-600 text-sm">{description}</p>
    </motion.div>
  );
};

const UseCases = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
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

  const useCases = [
    {
      title: "Personal Productivity",
      description: "Manage emails, schedule meetings, and optimize your calendar with AI-powered suggestions.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="15" r="3" /><circle cx="9" cy="7" r="4" /><path d="M10 15H6a4 4 0 0 0-4 4v2" /><path d="M21.7 16.4 18 18l-2-2" /></svg>,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Digital Life Management",
      description: "Consolidate and manage all your digital profiles and accounts from a single dashboard.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="M12 2v4" /><path d="M12 18v4" /><path d="m4.93 4.93 2.83 2.83" /><path d="m16.24 16.24 2.83 2.83" /><path d="m4.93 19.07 2.83-2.83" /><path d="m16.24 7.76 2.83-2.83" /></svg>,
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Personalized Customer Service",
      description: "Provide 24/7 customer support that understands your brand's voice and policies.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /><path d="M15.5 7.5a2.5 2.5 0 0 1 0 5" /></svg>,
      color: "bg-pink-50 text-pink-600"
    },
    {
      title: "Enterprise Workflow Automation",
      description: "Automate repetitive tasks, delegate work, and optimize team collaboration.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M7 7h10" /><path d="M7 12h3" /><path d="M7 17h6" /></svg>,
      color: "bg-indigo-50 text-indigo-600"
    },
    {
      title: "Research & Knowledge Work",
      description: "Summarize documents, highlight trends, and generate insights from vast amounts of data.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" /></svg>,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Digital Identity Protection",
      description: "Monitor and protect your online presence with intelligent privacy recommendations.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
      color: "bg-red-50 text-red-600"
    },
  ];

  const handleUseCaseClick = (title: string) => {
    toast({
      title: `Use Case: ${title}`,
      description: `Learn more about how DCM.ai can help with ${title.toLowerCase()}.`,
      duration: 3000,
    });
  };

  return (
    <section ref={sectionRef} id="use-cases" className="py-24 opacity-0">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-neutral-200 rounded-full bg-white/80 backdrop-blur-sm">
            <span className="text-xs font-medium text-neutral-600">Use Cases</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Transform How You Work and Live</h2>
          <p className="text-lg text-neutral-600">
            From personal productivity to enterprise workflows, DCM.ai revolutionizes digital interactions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <UseCaseCard 
              key={index}
              title={useCase.title}
              description={useCase.description}
              icon={useCase.icon}
              color={useCase.color}
              delay={`${index * 100}ms`}
              onClick={() => handleUseCaseClick(useCase.title)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
