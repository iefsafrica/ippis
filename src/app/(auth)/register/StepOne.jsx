'use client'

import React, { useState } from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';


const StepOne = () => {
  const [bvn, setBvn] = useState('');
  const [nin, setNin] = useState('');
  const [bvnStatus, setBvnStatus] = useState(null); 
  const [ninStatus, setNinStatus] = useState(null); 

  

  const handleVerify = () => {
   
    setBvnStatus(bvn.length === 11 ? 'valid' : 'invalid');
    setNinStatus(nin.length === 11 ? 'valid' : 'invalid');
  };

  return (
    <div className="w-full  space-y-8">
      <div className=' p-1 space-y-3'>
        <h2 className="text-xl font-semibold text-green-700">Step 1: Identity Verification</h2>
        <p className="text-muted-foreground mt-1">
          Please provide your Bank Verification Number (BVN) and National Identification Number (NIN) for verification.
        </p>
      </div>

      <div className="space-y-6 p-5 border border-destructive/20 bg-white rounded-lg">
        {/* BVN Input */}
        <div className="space-y-2">
          <label htmlFor="bvn" className="font-medium text-sm">
            Bank Verification Number (BVN)
          </label>
          <Input
            id="bvn"
            type="text"
            placeholder="Enter BVN"
            value={bvn}
            onChange={(e) => setBvn(e.target.value)}
            className={
              bvnStatus === 'valid'
                ? 'border-green-500 focus-visible:ring-green-500'
                : bvnStatus === 'invalid'
                ? 'border-red-500 focus-visible:ring-red-500'
                : ''
            }
          />
          {bvnStatus === 'valid' && (
            <div className="flex items-center text-green-600 text-sm mt-1">
              <CheckCircle className="w-4 h-4 mr-1" />
              BVN verified
            </div>
          )}
        </div>

        {/* NIN Input */}
        <div className="space-y-2">
          <label htmlFor="nin" className="font-medium text-sm">
            National Identification Number (NIN)
          </label>
          <Input
            id="nin"
            type="text"
            placeholder="Enter NIN"
            value={nin}
            onChange={(e) => setNin(e.target.value)}
            className={
              ninStatus === 'invalid'
                ? 'border-red-500 focus-visible:ring-red-500'
                : ninStatus === 'valid'
                ? 'border-green-500 focus-visible:ring-green-500'
                : ''
            }
          />
          {ninStatus === 'invalid' && (
            <div className="flex items-center text-red-600 text-sm mt-1">
              <XCircle className="w-4 h-4 mr-1" />
              Sorry, lookup failed. Please check the details and try again.
            </div>
          )}
        </div>
      </div>


<div className="flex items-start gap-3 p-4 0 bg-yellow-50 rounded-md ring-1 ring-yellow-300">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-.01-6a9 9 0 110 18 9 9 0 010-18z" />
  </svg>
  <div>
    <p className="">Important</p>
    <p className="text-sm">
      Please ensure that you enter your correct BVN and NIN. These will be used to verify your identity and cannot be changed later.
    </p>
  </div>
</div>


      {/* Button */}
      <div className="text-end ">
        <Button onClick={handleVerify} className=" bg-green-700"> Verify & Continue</Button>
      </div>
    </div>
  );
};

export default StepOne;
