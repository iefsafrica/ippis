'use client';
import { useState } from 'react';

export default function VerificationForm() {
  const [ninError, setNinError] = useState(true);

  return (
    <form className='flex flex-col gap-4 text-black'>
        <h1>Step 1: Identity Verification</h1>
        <p>Please provide your Bank Verification Number (BVN) and National Identification Number (NIN) for verification.</p>
        
        <label htmlFor="bvn">Bank Verification Number (BVN)</label>
        <input 
          type="text" 
          id="bvn" 
          name="bvn"
          placeholder="Enter your 11-digit BVN" 
          className="border border-gray-300 rounded-md p-2"
          required 
        />
        
        <label htmlFor="nin">National Identification Number (NIN)</label>
        <input 
          type="text" 
          id="nin" 
          name="nin"
          placeholder="Enter your 11-digit NIN" 
          className="border border-gray-300 rounded-md p-2"
          required 
        />
        <p className="bg-yellow-100 p-2 rounded-md">Important <br/> Please ensure that you enter your correct BVN and NIN. These will be used to verify your identity and cannot be changed later.</p>
        
        <button className='w-[150px] float-right bg-green-600 text-white rounded-md p-2' type="submit">Verify & Continue</button>
    </form>
  );
}
