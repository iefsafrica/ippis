'use client';

import React from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

const personalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  address: z.string().min(1, 'Address is required'),
  phone: z.string().min(10, 'Phone number is required'),
});



const StepTwo = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(personalInfoSchema),
  });

  const onSubmit = (data) => {
    console.log('Personal Info:', data);
    router.push('/register?step=3');
    toast.success("Yeah Info submitted!!")

  };

  const handlePrev = () => {
    router.push('/register?step=1');

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col space-y-8">
      {/* Header */}
      <div className="p-1 space-y-3">
        <h2 className="text-xl font-semibold text-green-700">Step 2: Personal Information</h2>
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
            type="text"
            placeholder="Enter first name"
            {...register('firstName')}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div className="space-y-2">
          <label htmlFor="lastName" className="font-medium text-sm">
            Last Name
          </label>
          <Input
            id="lastName"
            type="text"
            placeholder="Enter last name"
            {...register('lastName')}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="font-medium text-sm">
            Email Address
          </label>
          <Input
            id="email"
            type="email"
            placeholder="Enter email"
            {...register('email')}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        {/* Address */}
        <div className="space-y-2">
          <label htmlFor="address" className="font-medium text-sm">
            Home Address
          </label>
          <Input
            id="address"
            type="text"
            placeholder="Enter address"
            {...register('address')}
          />
          {errors.address && (
            <p className="text-sm text-red-500">{errors.address.message}</p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label htmlFor="phone" className="font-medium text-sm">
            Phone Number
          </label>
          <Input
            id="phone"
            type="tel"
            placeholder="Enter phone number"
            {...register('phone')}
          />
          {errors.phone && (
            <p className="text-sm text-red-500">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Warning Notice */}
      <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-md ring-1 ring-yellow-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mt-1 text-yellow-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-.01-6a9 9 0 110 18 9 9 0 010-18z"
          />
        </svg>
        <div>
          <p className="font-semibold">Important</p>
          <p className="text-sm">
            Please ensure that all information entered is correct. These details will be used for your account creation and contact purposes.
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="text-end flex flex-row items-center space-x-4 self-end">
        <Button type="button" onClick={handlePrev} className="bg-green-200 text-green-700">
          Previous
        </Button>
        <Button type="submit" className="bg-green-700">
          Continue
        </Button>
      </div>
    </form>
  );
};

export default StepTwo;
