"use client";
import React, { useState } from 'react';
import { AlertTriangle, Check } from 'lucide-react';

const IPPISRegistrationForm = () => {
  const [bvn, setBvn] = useState('');
  const [nin, setNin] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  const steps = [
    { number: 1, title: 'Verification', active: true },
    { number: 2, title: 'Personal Information', active: false },
    { number: 3, title: 'Employment Information', active: false },
    { number: 4, title: 'Document Upload', active: false },
    { number: 5, title: 'Review & Submit', active: false }
  ];

  const handleVerify = () => {
    if (bvn.length === 11 && nin.length === 11) {
      // Proceed to next step logic would go here
      console.log('Verification submitted:', { bvn, nin });
    }
  };

  const isFormValid = bvn.length === 11 && nin.length === 11;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFF7F7' }}>
      {/* Header with steps */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                    step.active 
                      ? 'bg-green-600 text-white' 
                      : 'bg-gray-200 text-gray-600'
                  }`}>
                    {step.active ? <Check size={16} /> : step.number}
                  </div>
                  <span className={`mt-2 text-sm ${
                    step.active ? 'text-green-600 font-medium' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-px bg-gray-300 mx-4 mt-[-20px]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-sm border p-8">
          <h1 className="text-2xl font-semibold text-gray-900 mb-2">
            Step 1: Identity Verification
          </h1>
          <p className="text-gray-600 mb-8">
            Please provide your Bank Verification Number (BVN) and National Identification Number (NIN) for verification.
          </p>

          <div className="space-y-6">
            {/* BVN Field */}
            <div>
              <label htmlFor="bvn" className="block text-sm font-medium text-gray-700 mb-2">
                Bank Verification Number (BVN)
              </label>
              <input
                type="text"
                id="bvn"
                value={bvn}
                onChange={(e) => setBvn(e.target.value.replace(/\D/g, '').slice(0, 11))}
                placeholder="Enter your 11-digit BVN"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                maxLength={11}
              />
            </div>

            {/* NIN Field */}
            <div>
              <label htmlFor="nin" className="block text-sm font-medium text-gray-700 mb-2">
                National Identification Number (NIN)
              </label>
              <input
                type="text"
                id="nin"
                value={nin}
                onChange={(e) => setNin(e.target.value.replace(/\D/g, '').slice(0, 11))}
                placeholder="Enter your 11-digit NIN"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-colors"
                maxLength={11}
              />
            </div>

            {/* Important Notice */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-medium text-yellow-800 mb-1">Important</h4>
                  <p className="text-sm text-yellow-700">
                    Please ensure that you enter your correct BVN and NIN. These will be used to verify your identity and cannot be changed later.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                onClick={handleVerify}
                disabled={!isFormValid}
                className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                  isFormValid
                    ? 'bg-green-600 hover:bg-green-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Verify & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IPPISRegistrationForm;