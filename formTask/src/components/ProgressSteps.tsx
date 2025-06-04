/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const steps = [
  "Verification",
  "Personal Information",
  "Employment Information",
  "Document Upload",
  "Review & Submit",
];

const ProgressSteps = ({ currentStep }: any) => {
  return (
    <div className="relative flex items-center justify-between mb-8 px-4">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div
            key={stepNumber}
            className="flex-1 flex flex-col items-center relative"
          >
            {index < steps.length - 1 && (
              <div
                className={`absolute top-4 left-1/2 right-[-50%] h-1 ${
                  isCompleted ? "bg-green-400" : "bg-gray-300"
                } z-0`}
              />
            )}

            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-semibold z-10
                ${
                  isActive
                    ? "bg-green-700 text-white"
                    : isCompleted
                    ? "bg-green-400 text-white"
                    : "bg-gray-300 text-gray-800"
                }
              `}
            >
              {stepNumber}
            </div>

            <span
              className={`mt-2 text-sm text-center ${
                isActive ? "text-green-700 font-medium" : "text-gray-600"
              }`}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ProgressSteps;
