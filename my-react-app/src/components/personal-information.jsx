"use client"

import { useState } from "react"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { FormField } from "./form-feild"
import { AlertCircle } from "lucide-react"

export function PersonalInfoForm({ onSubmit, isLoading = false }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    age: "",
    email: "",
  })
  const [errors, setErrors] = useState({})

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }

    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else if (!/^\d{10,11}$/.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Phone number must be 10-11 digits"
    }

    if (!formData.age) {
      newErrors.age = "Age is required"
    } else if (Number.parseInt(formData.age) < 18 || Number.parseInt(formData.age) > 100) {
      newErrors.age = "Age must be between 18 and 100"
    }

    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="border-red-200">
        <CardContent className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="firstName"
              label="First Name"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={(value) => updateField("firstName", value)}
              required
              error={errors.firstName}
            />

            <FormField
              id="lastName"
              label="Last Name"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={(value) => updateField("lastName", value)}
              required
              error={errors.lastName}
            />
          </div>

          <FormField
            id="address"
            label="Address"
            placeholder="Enter your full address"
            value={formData.address}
            onChange={(value) => updateField("address", value)}
            required
            error={errors.address}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              id="phone"
              label="Phone Number"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(value) => updateField("phone", value)}
              type="tel"
              required
              error={errors.phone}
            />

            <FormField
              id="age"
              label="Age"
              placeholder="Enter your age"
              value={formData.age}
              onChange={(value) => updateField("age", value)}
              type="number"
              required
              error={errors.age}
            />
          </div>

          <FormField
            id="email"
            label="Email Address"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(value) => updateField("email", value)}
            type="email"
            required
            error={errors.email}
          />
        </CardContent>
      </Card>

     <div className="bg-yellow-50 border-yellow-200 w-full rounded-lg border p-4">
            <div className="flex gap-2">
        <AlertCircle className="h-6 w-6 text-yellow-600" />
        <div>
          <h1 className="text-[16px] text-left ">Important</h1>
          <p className="mt-1 text-sm  ">
            Please ensure all information is accurate as it will be used for verification purposes..
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
  )
}
