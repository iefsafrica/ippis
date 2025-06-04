'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const StepTwo = () => {
    const router = useRouter()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleContinue = () => {
      console.log('Personal Info:', formData);
    router?.push("/register?step=3")
  };

  const handlePrev = () => {
    router?.push("/register?step=1")
  };

  return (
    <div className="w-full flex flex-col space-y-8">
      {/* Header */}
      <div className="p-1 space-y-3">
        <h2 className="text-xl font-semibold text-green-700">Step 1: Personal Information</h2>
        <p className="text-muted-foreground mt-1">
          Please provide your personal information for registration.
        </p>
      </div>

      {/* Input Fields */}
      <div className="space-y-6 p-5 border border-destructive/20 bg-white rounded-lg">
        {/* First Name */}
        <div className="space-y-2">
          <label htmlFor="firstName" className="font-medium text-sm">
            First Name
          </label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Enter first name"
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label htmlFor="lastName" className="font-medium text-sm">
            Last Name
          </label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Enter last name"
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="font-medium text-sm">
            Email Address
          </label>
          <Input
            id="email"
            name="email"
            required
            type="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label htmlFor="address" className="font-medium text-sm">
            Home Address
          </label>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Enter address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="font-medium text-sm">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            required
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Warning Notice */}
      <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-md ring-1 ring-yellow-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-.01-6a9 9 0 110 18 9 9 0 010-18z" />
        </svg>
        <div>
          <p className="font-semibold">Important</p>
          <p className="text-sm">
            Please ensure that all information entered is correct. These details will be used for your account creation and contact purposes.
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <div className="text-end flex flex-row items-center space-x-4 self-end">
        <Button onClick={handlePrev} className="bg-green-200 text-green-700">
          Previous
        </Button>
        <Button onClick={handleContinue} className="bg-green-700">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
