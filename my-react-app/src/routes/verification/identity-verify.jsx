"use client";

import { useState } from "react";
import { Stepper } from "../../components/stepper";
import { StepHeader } from "../../components/step-header";
import { VerificationForm } from "../../verification-form";
import { PersonalInfoForm } from "../../components/personal-information";
import { EmploymentInfoForm } from "../../components/employment-form";

const steps = [
  { id: 1, title: "Verification" },
  { id: 2, title: "Personal Information" },
  { id: 3, title: "Employment Information" },
  { id: 4, title: "Document Upload" },
  { id: 5, title: "Review & Submit" },
];

export default function IdentityVerification() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    verification: null,
    personalInfo: null,
    employmentInfo: null,
  });

  const handleVerificationSubmit = (data) => {
    console.log("Verification data:", data);
    setFormData((prev) => ({ ...prev, verification: data }));
    setCurrentStep(2);
  };

  const handlePersonalInfoSubmit = (data) => {
    console.log("Personal info data:", data);
    setFormData((prev) => ({ ...prev, personalInfo: data }));
    setCurrentStep(3);
  };

  const handleEmploymentInfoSubmit = (data) => {
    console.log("Employment info data:", data);
    setFormData((prev) => ({ ...prev, employmentInfo: data }));
    setCurrentStep(4);
  };

    const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1))
  }


  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <>
            <StepHeader
              stepNumber={1}
              title="Identity Verification"
              description="Please provide your Bank Verification Number (BVN) and National Identification Number (NIN) for verification."
            />
            <VerificationForm onSubmit={handleVerificationSubmit} />
          </>
        );
      case 2:
        return (
          <>
            <StepHeader
              stepNumber={2}
              title="Personal Information"
              description="Please provide your personal details for account setup and verification."
                 
            />
            <PersonalInfoForm onSubmit={handlePersonalInfoSubmit} onBack={handleBack}/>
          </>
        );
      case 3:
        return (
          <>
            <StepHeader
              stepNumber={3}
              title="Employment Information"
              description="Please provide your employment details for income verification."
               
            />
            <EmploymentInfoForm onSubmit={handleEmploymentInfoSubmit} onBack={handleBack}/>
          </>
        );
      case 4:
        return (
          <>
            <StepHeader
              stepNumber={4}
              title="Document Upload"
              description="Please upload required documents for verification."
            />
            <div className="text-center py-12">
              <p className="text-gray-500">
                Document upload form coming soon...
              </p>
            </div>
          </>
        );
      case 5:
        return (
          <>
            <StepHeader
              stepNumber={5}
              title="Review & Submit"
              description="Please review all information before submitting your application."
            />
            <div className="text-center py-12">
              <p className="text-gray-500">Review form coming soon...</p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 border border-gray-300 rounded-lg shadow bg-white ">
      <Stepper steps={steps} currentStep={currentStep} />
      <div className="space-y-6">{getStepContent()}</div>
    </div>
  );
}
