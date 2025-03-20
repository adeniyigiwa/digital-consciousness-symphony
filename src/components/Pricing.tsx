
import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface PlanFeature {
  title: string;
  included: boolean;
}

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isPopular?: boolean;
  buttonText?: string;
}

const PricingPlan: React.FC<PlanProps> = ({
  name,
  price,
  description,
  features,
  isPopular = false,
  buttonText = "Get Started"
}) => {
  return (
    <div 
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-300 hover-lift",
        isPopular 
          ? "border-2 border-neutral-900 shadow-lg" 
          : "border border-neutral-200 shadow-sm"
      )}
    >
      {isPopular && (
        <div className="absolute top-0 right-0 bg-black text-white text-xs font-medium px-3 py-1">
          Popular
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-3xl font-semibold">{price}</span>
          {price !== "Custom" && <span className="text-neutral-500">/month</span>}
        </div>
        <p className="text-neutral-600 text-sm mb-6">{description}</p>
        
        <button 
          className={cn(
            "w-full py-3 rounded-lg font-medium transition-colors mb-6",
            isPopular 
              ? "bg-black text-white hover:bg-neutral-800" 
              : "bg-neutral-100 hover:bg-neutral-200"
          )}
        >
          {buttonText}
        </button>
        
        <div className="space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              {feature.included ? (
                <svg className="w-5 h-5 text-green-500 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-neutral-300 mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              )}
              <span className={cn(
                "text-sm", 
                feature.included ? "text-neutral-700" : "text-neutral-400"
              )}>
                {feature.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly'|'yearly'>('monthly');
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

  const commonFeatures = [
    { title: "Digital Twin Creation", included: true },
    { title: "Context-Aware Decision-Making", included: true },
    { title: "Unified Digital Identity", included: true },
    { title: "24/7 Availability", included: true },
  ];
  
  const plans = [
    {
      name: "Individual",
      price: billingPeriod === 'monthly' ? "$19" : "$190",
      description: "Perfect for personal productivity and digital life management.",
      features: [
        ...commonFeatures,
        { title: "Up to 5 Digital Profiles", included: true },
        { title: "Basic Email Management", included: true },
        { title: "Calendar Optimization", included: true },
        { title: "Advanced Analytics", included: false },
        { title: "Team Collaboration", included: false },
      ],
    },
    {
      name: "Professional",
      price: billingPeriod === 'monthly' ? "$49" : "$490",
      description: "Ideal for freelancers and professionals with complex digital needs.",
      features: [
        ...commonFeatures,
        { title: "Up to 15 Digital Profiles", included: true },
        { title: "Advanced Email Management", included: true },
        { title: "Calendar Optimization", included: true },
        { title: "Advanced Analytics", included: true },
        { title: "Team Collaboration", included: false },
      ],
      isPopular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for organizations of any size.",
      features: [
        ...commonFeatures,
        { title: "Unlimited Digital Profiles", included: true },
        { title: "Advanced Email Management", included: true },
        { title: "Calendar Optimization", included: true },
        { title: "Advanced Analytics", included: true },
        { title: "Team Collaboration", included: true },
      ],
      buttonText: "Contact Sales",
    },
  ];

  return (
    <section ref={sectionRef} id="pricing" className="py-24 bg-neutral-50 opacity-0">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center px-3 py-1.5 mb-6 border border-neutral-200 rounded-full bg-white/80 backdrop-blur-sm">
            <span className="text-xs font-medium text-neutral-600">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-medium mb-6">Choose the Right Plan</h2>
          <p className="text-lg text-neutral-600 mb-8">
            Select the perfect plan that matches your needs, from individual users to enterprise organizations.
          </p>
          
          <div className="inline-flex p-1 items-center bg-white border border-neutral-200 rounded-lg mb-8">
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded transition-colors",
                billingPeriod === 'monthly' 
                  ? "bg-neutral-900 text-white" 
                  : "hover:bg-neutral-100"
              )}
              onClick={() => setBillingPeriod('monthly')}
            >
              Monthly
            </button>
            <button
              className={cn(
                "px-4 py-2 text-sm font-medium rounded transition-colors",
                billingPeriod === 'yearly' 
                  ? "bg-neutral-900 text-white" 
                  : "hover:bg-neutral-100"
              )}
              onClick={() => setBillingPeriod('yearly')}
            >
              Yearly <span className="text-xs">Save 20%</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <PricingPlan
              key={index}
              name={plan.name}
              price={plan.price}
              description={plan.description}
              features={plan.features}
              isPopular={plan.isPopular}
              buttonText={plan.buttonText}
            />
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-sm text-neutral-500">
            All plans include a 14-day free trial. No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
