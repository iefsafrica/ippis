import React, { useState } from "react";
import { useForm } from "react-hook-form";
import ProgressSteps from "../../components/ProgressSteps";

const IdentityVerificationForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ data }) => {
    const isBVNValid = /^[0-9]{11}$/.test(data.bvn);
    const isNINValid = /^[0-9]{11}$/.test(data.nin);

    if (!isBVNValid || !isNINValid) {
      return;
    }

    setCurrentStep(2);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <ProgressSteps currentStep={currentStep} />

      {currentStep === 1 && (
        <>
          <h2 className="text-2xl font-semibold text-green-700 mb-2">
            Step 1: Identity Verification
          </h2>
          <p className="text-gray-600 mb-6">
            Please provide your Bank Verification Number (BVN) and National
            Identification Number (NIN) for verification.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Bank Verification Number (BVN)
              </label>
              <input
                type="text"
                placeholder="Enter your 11-digit BVN"
                maxLength={11}
                {...register("bvn", {
                  required: "BVN is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "BVN must be 11 digits",
                  },
                })}
                className={`w-full border p-2 rounded-md outline-none ${
                  errors.bvn ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-green-600`}
              />
              {errors.bvn && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bvn.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                National Identification Number (NIN)
              </label>
              <input
                type="text"
                placeholder="Enter your 11-digit NIN"
                maxLength={11}
                {...register("nin", {
                  required: "NIN is required",
                  pattern: {
                    value: /^[0-9]{11}$/,
                    message: "NIN must be 11 digits",
                  },
                })}
                className={`w-full border p-2 rounded-md outline-none ${
                  errors.nin ? "border-red-500" : "border-gray-300"
                } focus:ring-2 focus:ring-green-600`}
              />
              {errors.nin && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.nin.message}
                </p>
              )}
            </div>

            <div className="bg-yellow-100 text-yellow-800 text-sm p-4 rounded-md border border-yellow-300">
              <strong className="block mb-1">Important</strong>
              Please ensure that you enter your correct BVN and NIN. These will
              be used to verify your identity and cannot be changed later.
            </div>

            <div className="text-right">
              <button
                type="submit"
                className="bg-green-700 text-white px-5 py-2 rounded-md hover:bg-green-800 transition"
              >
                Verify & Continue
              </button>
            </div>
          </form>
        </>
      )}

      {currentStep === 2 && (
        <div className="text-center text-green-700 text-xl font-medium">
          ✅ Identity verified! Continue to Step 2: Personal Information
        </div>
      )}
    </div>
  );
};

export default IdentityVerificationForm;
