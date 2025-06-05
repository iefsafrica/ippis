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
    <main className="flex items-center justify-center bg-pink-50 p-5 md:p-24">
      <div className="w-full md:h-full bg-white p-8 rounded-lg shadow-md">
        <Stepper currentStep={currentStep} />
        {renderForm()}
      </div>
    </main>
  );
}
