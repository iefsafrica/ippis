"use client";
import { useState } from "react";

const steps = [
  "Verification",
  "Personal Information",
  "Employment Information",
  "Document Upload",
  "Review & Submit",
];

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Progress Indicator */}
      <div className="flex justify-between mb-8">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 ${
                currentStep === index + 1
                  ? "bg-green-400 text-white border-green-400"
                  : "bg-white text-gray-500 border-gray-300"
              }`}>
              {index + 1}
            </div>
            <span
              className={`mt-2 text-sm ${
                currentStep === index + 1
                  ? "text-green-400 font-semibold"
                  : "text-gray-500"
              }`}>
              {step}
            </span>
          </div>
        ))}
      </div>

      <hr className="mb-8" />

      {/* Step Content */}
      {currentStep === 1 && (
        <div>
          <h2 className="text-xl font-semibold mb-4">
            Step 1: Identity Verification
          </h2>
          <p className="mb-6">
            Please provide your Bank Verification Number (BVN) and National
            Identification Number (NIN) for verification.
          </p>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="bvn"
                className="block text-sm font-medium text-gray-700">
                BVN
              </label>
              <input
                type="number"
                max={11}
                min={11}
                id="bvn"
                name="bvn"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter your BVN"
              />
            </div>
            <div>
              <label
                htmlFor="nin"
                className="block text-sm font-medium text-gray-700">
                NIN
              </label>
              <input
                type="number"
                max={11}
                min={11}
                id="nin"
                name="nin"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                placeholder="Enter your NIN"
              />
            </div>
            <button
              type="button"
              onClick={() => setCurrentStep(currentStep + 1)}
              className="mt-4 bg-green-400 text-white px-4 py-2 rounded-md">
              Continue
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
