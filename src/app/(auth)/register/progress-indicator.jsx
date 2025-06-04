import React from 'react';
import { Check, User, AtSign, ImageIcon, School } from 'lucide-react';
import { cn } from '@/lib/utils';



const ProgressIndicator = ({ currentStep }) => {
  const steps = [
    { id: 1, icon: School, label: 'About the School' },
    { id: 2, icon: User, label: 'About You' },
    // { id: 3, icon: ImageIcon, label: 'Avatar' },
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-[35%] left-0 w-full h-0.5 border-primary/30 bg-secondar  border-[2px] border-dashed transform -translate-y-1/2 z-0" />
        
        {/* Steps */}
        <div className="flex justify-between md:justify-center md:items-center md:space-x-44 w-full relative z-10">
          {steps.map((step) => {
            const isCompleted = currentStep > step.id;
            const isActive = currentStep === step.id;
            
            return (
              <div key={step.id} className="flex flex-col items-center">
                <div 
                  className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300",
                    isCompleted ? "bg-green-500 text-white" : 
                    isActive ? "bg-primary text-primary-foreground ring-4 ring-primary/20" : 
                    "bg-secondary text-secondary-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5" />
                  ) : (
                    <step.icon className="w-5 h-5" />
                  )}
                </div>
                <span 
                  className={cn(
                    "mt-2 text-xs font-medium transition-all duration-300",
                    isActive ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;
