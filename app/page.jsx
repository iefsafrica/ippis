'use client';

import { useState } from 'react';
import Stepper from "@/components/steps";
import VerificationForm from "@/components/verification-form";
import PersonalInformationForm from "@/components/personal-information-form";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = (step) => {
    setCurrentStep(step);
  };

  const renderForm = () => {
    switch (currentStep) {
      case 1:
        return <VerificationForm onNextStep={handleNextStep} />;
      case 2:
        return <PersonalInformationForm onNextStep={handleNextStep} />;
      default:
        return <VerificationForm onNextStep={handleNextStep} />;
    }
  };

  return (
    <main className="min-h-screen bg-pink-50 py-10 px-24">
      <div className="w-full max-w-3xl mx-auto bg-white p-24 rounded-lg shadow-md">
        <Stepper currentStep={currentStep} />
        {renderForm()}
      </div>
    </main>
  );
}
