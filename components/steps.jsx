
export default function Stepper({ currentStep = 1 }) {
  const steps = [
    "Verification",
    "Personal Information",
    "Employment Information",
    "Document Upload",
    "Review & Submit",
  ];

  return (
    <div className="flex items-center justify-between mb-6 border-b border-gray-300 pb-4">
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        return (
          <div
            key={index}
            className="flex flex-col items-center text-[14px] "
          >
            <div
              className={`rounded-full w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center transition-colors duration-300 ${
                isActive
                  ? "bg-green-600 text-white"
                  : "bg-transparent border-2 border-gray-300 text-gray-700"
              }`}
            >
              {stepNumber}
            </div>
            <span className="hidden md:block text-xs mt-2 text-gray-500 text-center">
              {step}
            </span>
          </div>
        );
      })}
    </div>
  );
}

