"use client"

import { useState } from "react"
import { Button } from "./components/ui/button"
import { Card , CardContent} from "./components/ui/card"
import { FormField } from "./components/form-feild"
import { AlertCircle } from "lucide-react"
// import { ImportantNotice } from "./components/important-notice"

export function VerificationForm({ onSubmit, isLoading = false }) {
  const [bvn, setBvn] = useState("")
  const [nin, setNin] = useState("")
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    const newErrors = {}

    if (!bvn) {
      newErrors.bvn = "BVN is required"
    } else if (bvn.length !== 11 || !/^\d+$/.test(bvn)) {
      newErrors.bvn = "BVN must be exactly 11 digits"
    }

    if (!nin) {
      newErrors.nin = "NIN is required"
    } else if (nin.length !== 11 || !/^\d+$/.test(nin)) {
      newErrors.nin = "NIN must be exactly 11 digits"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      onSubmit({ bvn, nin })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Card className="border-red-200">
        <CardContent className="p-6 space-y-6">
          <FormField
            id="bvn"
            label="Bank Verification Number (BVN)"
            placeholder="Enter your 11-digit BVN"
            value={bvn}
            onChange={setBvn}
            maxLength={11}
            required
            error={errors.bvn}
          />

          <FormField
            id="nin"
            label="National Identification Number (NIN)"
            placeholder="Enter your 11-digit NIN"
            value={nin}
            onChange={setNin}
            maxLength={11}
            required
            error={errors.nin}
          />
        </CardContent>
      </Card>

      {/* <ImportantNotice message="Please ensure that you enter your correct BVN and NIN. These will be used to verify your identity and cannot be changed later." />
      */}
      <div className="bg-yellow-50 border-yellow-200 w-full rounded-lg border p-4">
        <div className="flex gap-2">
    <AlertCircle className="h-6 w-6 text-yellow-600" />
    <div>
      <h1 className="text-[16px] text-left ">Important</h1>
      <p className="mt-1 text-sm  ">
        Please ensure that you enter your correct BVN and NIN. These will be used to verify your identity and cannot be changed later.
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
          {isLoading ? "Verifying..." : "Verify & Continue"}
        </Button>
      </div>
    </form>
  )
}
