'use client'
import { useState } from 'react';
import CounterDisplay from "@/components/counterDisplay";
import { VerificationForm } from '@/components/firstSection';
import { AddressForm } from '@/components/addressForm';
import { ProfessionalForm } from '@/components/professionalForm';
import { PreferencesForm } from '@/components/preferenceForm';
import { Confirmation } from '@/components/confirmationPage';

export interface FormData {
  // Step 1: Personal Information
  firstName: string;
  lastName: string;
  bvn: string;
  nin: string;
  dateOfBirth: string;

  // Step 2: Address Information
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;

  // Step 3: Professional Information
  occupation: string;
  company: string;
  experience: string;
  skills: string;

  // Step 4: Preferences
  newsletter: boolean;
  notifications: boolean;
  terms: boolean;
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  bvn: "",
  nin: "",
  dateOfBirth: "",
  address: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  occupation: "",
  company: "",
  experience: "",
  skills: "",
  newsletter: false,
  notifications: false,
  terms: false,
};

export default function Home() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [currentStep, setCurrentStep] = useState(1);

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const nextStep = () => setCurrentStep(prev => prev + 1);
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <VerificationForm
            initialData={formData}
            onSuccess={(data) => {
              updateFormData(data);
              nextStep();
            }}
          />
        );
      case 2:
        return (
          <AddressForm
            initialData={formData}
            onSuccess={(data) => {
              updateFormData(data);
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <ProfessionalForm
            initialData={formData}
            onSuccess={(data) => {
              updateFormData(data);
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <PreferencesForm
            initialData={formData}
            onSuccess={(data) => {
              updateFormData(data);
              nextStep();
            }}
            onBack={prevStep}
          />
        );
      case 5:
        return <Confirmation data={formData} onClick={() => { setCurrentStep(1); setFormData(initialFormData) }} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white py-8 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <CounterDisplay activeIndex={currentStep - 1} />
          <div className="mt-6">
            {renderStep()}
          </div>
        </div>
      </div>
    </div>
  );
}