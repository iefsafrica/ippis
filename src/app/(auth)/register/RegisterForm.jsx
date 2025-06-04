import React from 'react'
import StepOne from './StepOne'
import StepTwo from './StepTwo';
import StepThree from './StepThree';





const RegisterForm = async ({ searchParams }) => {
 

  const step = Number(searchParams?.['step']) || 1
  const stepIndicator = Number(searchParams?.['step']) || 1

//   const steps = [1, 3, 4, 5, 5]; 
  const steps = [{"step": 1, label:"Verification"}, {"step": 2, label:"Personal Information"}, {"step": 3, label:"Employment Information"}, {"step": 4, label:"Document Upload"}, {"step": 5, label:"Review & Submit"}]; 


  return (
    <div className='w-full flex flex-col gap-y-5 max-w-5xl mx-auto px-4 py-6 animate-fade-in bg-white rounded-lg shadow-lg'>
      

        <div className="flex items-center  justify-center space-x-4  w-full border-b-2 py-4 border-muted/20 border-b-gray-300 pb-4 mb-4">
        {steps.map((step, index) => (
            <div key={index} className="flex items-center">
            
            <div className=' flex flex-col items-center space-y-4'>
            <div
                className={`w-12 h-12 rounded-full ring-2 ring-gray-200 flex items-center justify-center text-sm font-semibold
                ${step?.step === stepIndicator ? 'bg-green-700 text-white' : 'bg-white text-gray-800'}
                `}
            >
                {step?.step}
            </div>

            <p className="text-muted-foreground mt-1">{step?.label}</p>

            </div>

        
            {index !== steps.length - 1 && (
                <div className="w-6 h-px bg-gray-300 mx-2"></div>
            )}
            </div>
        ))}
        </div>


        <div className="flex flex-col items-center justify-center gap-y-6 p-5  w-full  bg-white relative overflow-hidden animate-slide-in-up pb-10">
              {(!step || (step === 1)) && <StepOne />}

              {((step === 2)) && <StepTwo  />}

              {((step === 3)) && <StepThree  />}
        </div>
    </div>
  )
}

export default RegisterForm