
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const TabContent = ({ 
  isActive, 
  title, 
  description, 
  items 
}: { 
  isActive: boolean; 
  title: string; 
  description: string;
  items: {icon: React.ReactNode; title: string; description: string;}[];
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 transition-all duration-500 ease-in-out",
        isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'
      )}
    >
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <p className="text-neutral-600 mb-8">{description}</p>
      
      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="flex items-start">
            <div className="mr-4 p-2 bg-neutral-100 rounded-lg">
              {item.icon}
            </div>
            <div>
              <h4 className="font-medium mb-1">{item.title}</h4>
              <p className="text-sm text-neutral-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeTab, setActiveTab] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
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

  const tabs = [
    {
      title: "For Individuals",
      description: "DCM.ai becomes your personal cognitive manager, handling everything from communication to life optimization.",
      items: [
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 8.5 7 7" /><path d="M11 13c-1.333-1-1-2.5 0-3s1.333-2 0-3" /><path d="M13 13c1.333-1 1-2.5 0-3s-1.333-2 0-3" /><path d="M16.5 10.5c1-1 1-3 0-3s-3 1-3 0" /><path d="M18.5 8.5 20 7" /><path d="M20.5 13.5c.828-.828.828-3.172 0-4" /><path d="M18.5 15.5c-1 1-3 1-3 0s1-3 0-3" /><path d="M16.5 13.5c-.828.828-3.172.828-4 0" /><path d="M13.5 15.5c-1 1-1 3 0 3s3-1 3 0" /><path d="M10.5 18.5c.828.828 3.172.828 4 0" /><path d="M8.5 15.5c1-1 3-1 3 0s-1 3 0 3" /><path d="M5.5 19.5 7 18" /><path d="M3.5 13.5c-.828.828-.828 3.172 0 4" /><path d="M5.5 10.5c1 1 1 3 0 3s-3-1-3 0" /><path d="M7.5 10.5c.828-.828 3.172-.828 4 0" /><path d="M10.5 5.5c1-1 1-3 0-3s-3 1-3 0" /><path d="M8.5 5.5c-.828-.828-3.172-.828-4 0" /><path d="M5.5 4.5 4 6" /><path d="M3.5 10.5c-.828-.828-.828-3.172 0-4" /></svg>,
          title: "Hyper-Personalized Digital Proxy",
          description: "Automatically responds to emails and messages in your tone."
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4" /><path d="M12 18v4" /><path d="m4.93 4.93 2.83 2.83" /><path d="m16.24 16.24 2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><path d="m4.93 19.07 2.83-2.83" /><path d="m16.24 7.76 2.83-2.83" /></svg>,
          title: "Life Optimizer",
          description: "Tracks and recommends actions for health, finances, productivity, and hobbies."
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 0-14h11l-4 4" /><path d="M15.5 19 12 15.5" /><path d="M15.5 19H20" /></svg>,
          title: "Unified Digital Identity",
          description: "Consolidates all your digital profiles and keeps them in sync with intelligent privacy controls."
        },
      ],
    },
    {
      title: "For Businesses",
      description: "DCM.ai integrates into your organization, automating tasks and optimizing workflows across teams.",
      items: [
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M8 16H10" /><path d="M14 16H16" /><path d="M12 8v4" /><path d="M12 12h2" /></svg>,
          title: "AI-Led Operational Assistant",
          description: "Handles customer support autonomously by understanding the company's tone and policies."
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M13 6h3a2 2 0 0 1 2 2v7" /><path d="M11 18H8a2 2 0 0 1-2-2V9" /></svg>,
          title: "Predictive Collaboration",
          description: "Suggests team collaborations based on project data, expertise, and workload analysis."
        },
        {
          icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M13 8H7" /><path d="M17 12H7" /></svg>,
          title: "Evolving Organizational Memory",
          description: "Creates a knowledge graph for organizations that evolves as employees interact and provide feedback."
        },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-neutral-50 opacity-0">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-neutral-200 rounded-full bg-white/80 backdrop-blur-sm">
            <span className="text-xs font-medium text-neutral-600">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Tailored for Every Need</h2>
          <p className="text-lg text-neutral-600">
            Whether you're an individual or a business, DCM.ai adapts to your unique requirements.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Tab navigation */}
          <div className="lg:w-1/3">
            <div className="bg-white shadow-sm rounded-xl p-1 inline-flex flex-col w-full lg:sticky lg:top-24">
              {tabs.map((tab, index) => (
                <button
                  key={index}
                  className={cn(
                    "text-left p-4 rounded-lg transition-all duration-300",
                    activeTab === index 
                      ? "bg-neutral-900 text-white" 
                      : "hover:bg-neutral-100"
                  )}
                  onClick={() => setActiveTab(index)}
                >
                  <span className="font-medium">{tab.title}</span>
                </button>
              ))}
            </div>
          </div>
          
          {/* Tab content */}
          <div className="lg:w-2/3">
            <div className="bg-white shadow-sm rounded-xl p-8 relative min-h-[450px]">
              {tabs.map((tab, index) => (
                <TabContent
                  key={index}
                  isActive={activeTab === index}
                  title={tab.title}
                  description={tab.description}
                  items={tab.items}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
