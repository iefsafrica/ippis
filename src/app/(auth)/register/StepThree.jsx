'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

const StepThree = () => {
    const router = useRouter()
  const [formData, setFormData] = useState({
    employmentStatus: '',
    employerName: '',
    jobTitle: '',
    workAddress: '',
    monthlyIncome: '',
    workEmail: '',
    yearsOfExperience: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.employmentStatus) newErrors.employmentStatus = 'Employment status is required.';
    if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required.';
    if (formData.employmentStatus === 'employed' && !formData.employerName.trim())
      newErrors.employerName = 'Employer name is required for employed individuals.';
    if (!formData.workAddress.trim()) newErrors.workAddress = 'Work address is required.';

    if (!formData.monthlyIncome) {
      newErrors.monthlyIncome = 'Monthly income is required.';
    } else if (isNaN(formData.monthlyIncome)) {
      newErrors.monthlyIncome = 'Monthly income must be a number.';
    }

    if (!formData.yearsOfExperience) {
      newErrors.yearsOfExperience = 'Years of experience is required.';
    } else if (isNaN(formData.yearsOfExperience)) {
      newErrors.yearsOfExperience = 'Years of experience must be a number.';
    }

    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      newErrors.workEmail = 'Enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleContinue = () => {
    if (validate()) {
      console.log('Employment Info Submitted:', formData);
      
      // Proceed to next step
    router?.push("/register?step=3")
    toast.success("Yeah Info submitted!!")
 
    }
  };

  const handlePrev = () => {
    router?.push("/register?step=2")
  };

  return (
    <div className="w-full space-y-8 flex flex-col">
      <div className="p-1 space-y-3">
        <h2 className="text-xl font-semibold text-green-700">Step 3: Employment Information</h2>
        <p className="text-muted-foreground mt-1">Please provide your employment details.</p>
      </div>

      <div className="space-y-6 p-5 border border-destructive/20 bg-white rounded-lg">
        {/* Employment Status */}
        <div className="space-y-2">
          <label htmlFor="employmentStatus" className="font-medium text-sm">Employment Status</label>
          <Select
            onValueChange={(value) => {
              setFormData((prev) => ({ ...prev, employmentStatus: value }));
              setErrors((prev) => ({ ...prev, employmentStatus: '' }));
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="employed">Employed</SelectItem>
              <SelectItem value="self-employed">Self-employed</SelectItem>
              <SelectItem value="unemployed">Unemployed</SelectItem>
              <SelectItem value="student">Student</SelectItem>
            </SelectContent>
          </Select>
          {errors.employmentStatus && (
            <p className="text-red-500 text-xs mt-1">{errors.employmentStatus}</p>
          )}
        </div>

        {/* Employer Name */}
        {formData.employmentStatus === 'employed' && (
          <div className="space-y-2">
            <label htmlFor="employerName" className="font-medium text-sm">Employer Name</label>
            <Input
              id="employerName"
              name="employerName"
              type="text"
              placeholder="Enter employer name"
              value={formData.employerName}
              onChange={handleChange}
            />
            {errors.employerName && (
              <p className="text-red-500 text-xs mt-1">{errors.employerName}</p>
            )}
          </div>
        )}

        {/* Job Title */}
        <div className="space-y-2">
          <label htmlFor="jobTitle" className="font-medium text-sm">Job Title / Occupation</label>
          <Input
            id="jobTitle"
            name="jobTitle"
            type="text"
            placeholder="Enter job title"
            value={formData.jobTitle}
            onChange={handleChange}
          />
          {errors.jobTitle && <p className="text-red-500 text-xs mt-1">{errors.jobTitle}</p>}
        </div>

        {/* Work Address */}
        <div className="space-y-2">
          <label htmlFor="workAddress" className="font-medium text-sm">Work Address</label>
          <Input
            id="workAddress"
            name="workAddress"
            type="text"
            placeholder="Enter work address"
            value={formData.workAddress}
            onChange={handleChange}
          />
          {errors.workAddress && <p className="text-red-500 text-xs mt-1">{errors.workAddress}</p>}
        </div>

        {/* Monthly Income */}
        <div className="space-y-2">
          <label htmlFor="monthlyIncome" className="font-medium text-sm">Monthly Income (₦)</label>
          <Input
            id="monthlyIncome"
            name="monthlyIncome"
            type="number"
            placeholder="e.g. 150000"
            value={formData.monthlyIncome}
            onChange={handleChange}
          />
          {errors.monthlyIncome && <p className="text-red-500 text-xs mt-1">{errors.monthlyIncome}</p>}
        </div>

        {/* Work Email */}
        <div className="space-y-2">
          <label htmlFor="workEmail" className="font-medium text-sm">Work Email</label>
          <Input
            id="workEmail"
            name="workEmail"
            type="email"
            placeholder="Enter work email"
            value={formData.workEmail}
            onChange={handleChange}
          />
          {errors.workEmail && <p className="text-red-500 text-xs mt-1">{errors.workEmail}</p>}
        </div>

        {/* Years of Experience */}
        <div className="space-y-2">
          <label htmlFor="yearsOfExperience" className="font-medium text-sm">Years of Experience</label>
          <Input
            id="yearsOfExperience"
            name="yearsOfExperience"
            type="number"
            placeholder="e.g. 3"
            value={formData.yearsOfExperience}
            onChange={handleChange}
          />
          {errors.yearsOfExperience && (
            <p className="text-red-500 text-xs mt-1">{errors.yearsOfExperience}</p>
          )}
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

export default StepThree;
