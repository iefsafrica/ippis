import React from 'react'
import ProgressIndicator from './progress-indicator'
import StepOne from './StepOne'





const RegisterForm = async ({ searchParams }) => {
 

  const step = Number(searchParams?.['step']) || 1

  const steps = [1, 3, 4, 5, 5]; 
const currentStep = 1;


  return (
    <div className='w-full flex flex-col gap-y-5 max-w-4xl mx-auto px-4 py-6 animate-fade-in bg-white rounded-lg shadow-lg'>
      

        <div className="flex items-center justify-center space-x-4  w-full border-b border-muted/20 border-b-gray-300 pb-4 mb-4">
        {steps.map((step, index) => (
            <div key={index} className="flex items-center">
            
            <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold
                ${index === 0 ? 'bg-primary text-white' : 'bg-gray-200 text-gray-800'}
                `}
            >
                {step}
            </div>

        
            {index !== steps.length - 1 && (
                <div className="w-6 h-px bg-gray-300 mx-2"></div>
            )}
            </div>
        ))}
        </div>


        <div className="flex flex-col items-center justify-center gap-y-6 p-5  w-full  bg-white relative overflow-hidden animate-slide-in-up pb-10">
            
            {(!step || (step === 1)) && <StepOne />}
           

        </div>
    </div>
  )
}

export default RegisterForm