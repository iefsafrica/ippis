export default function Stepper({ currentStep = 1 }) {
    const steps = [
      "Verification", "Personal Information", "Employment Information",
      "Document Upload", "Review & Submit"
    ];
  
    return (
      <div className="flex items-center justify-between mb-6 border-b border-gray-200 pb-4 ">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center text-[14px]">
            <div className={`rounded-full w-15 h-15 flex items-center justify-center ${index + 1 === currentStep ? 'bg-green-600 text-white' : 'bg-transparent border border-gray-300 text-black'}`}>
              {index + 1}
            </div>
            <span className="text-xs mt-2 text-gray-500">{step}</span>
          </div>
        ))}
      </div>
    );
  }
  