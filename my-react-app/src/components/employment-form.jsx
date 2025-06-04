"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { FormField } from "./form-feild";
import { AlertCircle } from "lucide-react";

export function EmploymentInfoForm({ onSubmit, isLoading = false }) {
  const [formData, setFormData] = useState({
    companyName: "",
    jobTitle: "",
    workAddress: "",
    salary: "",
    employmentType: "",
    yearsOfExperience: "",
  });
  const [errors, setErrors] = useState({});

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Job title is required";
    }

    if (!formData.workAddress.trim()) {
      newErrors.workAddress = "Work address is required";
    }

    if (!formData.salary) {
      newErrors.salary = "Salary is required";
    }

    if (!formData.employmentType) {
      newErrors.employmentType = "Employment type is required";
    }

    if (!formData.yearsOfExperience) {
      newErrors.yearsOfExperience = "Years of experience is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="border-gray-200">
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="companyName"
              label="Company Name"
              placeholder="Enter your company name"
              value={formData.companyName}
              onChange={(value) => updateField("companyName", value)}
              required
              error={errors.companyName}
            />

            <FormField
              id="jobTitle"
              label="Job Title"
              placeholder="Enter your job title"
              value={formData.jobTitle}
              onChange={(value) => updateField("jobTitle", value)}
              required
              error={errors.jobTitle}
            />
          </div>

          <FormField
            id="workAddress"
            label="Work Address"
            placeholder="Enter your work address"
            value={formData.workAddress}
            onChange={(value) => updateField("workAddress", value)}
            required
            error={errors.workAddress}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="salary"
              label="Monthly Salary"
              placeholder="Enter your monthly salary"
              value={formData.salary}
              onChange={(value) => updateField("salary", value)}
              type="number"
              required
              error={errors.salary}
            />

            <FormField
              id="yearsOfExperience"
              label="Years of Experience"
              placeholder="Enter years of experience"
              value={formData.yearsOfExperience}
              onChange={(value) => updateField("yearsOfExperience", value)}
              type="number"
              required
              error={errors.yearsOfExperience}
            />
          </div>

          <div className="space-y-2">
            <label className="text-base text-left font-medium text-gray-900">
              Employment Type
            </label>
            <select
              value={formData.employmentType}
              onChange={(e) => updateField("employmentType", e.target.value)}
              className={`flex h-12 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-base ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${
                errors.employmentType
                  ? "border-red-500 focus:border-red-500"
                  : ""
              }`}
            >
              <option value="">Select employment type</option>
              <option value="full-time">Full Time</option>
              <option value="part-time">Part Time</option>
              <option value="contract">Contract</option>
              <option value="freelance">Freelance</option>
              <option value="self-employed">Self Employed</option>
            </select>
            {errors.employmentType && (
              <p className="text-sm text-red-600">{errors.employmentType}</p>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="bg-yellow-50 border-yellow-200 w-full rounded-lg border p-4">
        <div className="flex gap-2">
          <AlertCircle className="h-6 w-6 text-yellow-600" />
          <div>
            <h1 className="text-[16px] text-left ">Important</h1>
            <p className="mt-1 text-sm  ">
              Employment information will be verified with your employer or
              through official documents.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isLoading}
          className="bg-green-700 hover:bg-green-700 text-white px-8 py-2 h-12 text-base font-medium disabled:opacity-50"
        >
          {isLoading ? "Processing..." : "Next"}
        </Button>
      </div>
    </form>
  );
}
