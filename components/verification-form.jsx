'use client';
import { useState } from 'react';

export default function VerificationForm({ onNextStep }) {
    const [bvn, setBvn] = useState('');
    const [nin, setNin] = useState('');
    const [hasError, setHasError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bvn.length !== 11 || nin.length !== 11) {
      setHasError(true);
    } else {
      setHasError(false);
      onNextStep(2); // Move to step 2
    }
  };
  

  return (
    <form className='w-full flex flex-col gap-4 text-black'>
        <h1 className='text-green-700 font-bold text-[32px]'>Step 1: Identity Verification</h1>
        <p className='text-gray-600'>Please provide your Bank Verification Number (BVN) and National Identification Number (NIN) for verification.</p>
        
        <label htmlFor="bvn">Bank Verification Number (BVN)</label>
        <input 
          type="text" 
          id="bvn" 
          name="bvn"
          value={bvn}
          onChange={(e) => setBvn(e.target.value)}
          placeholder="Enter your 11-digit BVN" 
          className="border border-gray-300 mb-2 rounded-md p-2"
          required 
        />
        
        <label htmlFor="nin">National Identification Number (NIN)</label>
        <input 
          type="text" 
          id="nin" 
          name="nin"
          value={nin}
          onChange={(e) => setNin(e.target.value)}
          placeholder="Enter your 11-digit NIN" 
          className="border border-gray-300 rounded-md p-2"
          required 
        />
        <p className="bg-yellow-100 p-2 rounded-md flex"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert h-5 w-5 text-yellow-600 mr-2 flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>Important <br/> Please ensure that you enter your correct BVN and NIN. These will be used to verify your identity and cannot be changed later.</p>
        
        
        <div className="w-full flex items-center justify-end">
        <button onClick={handleSubmit} className='w-[150px] right-0 bg-green-600 text-white rounded-md p-2' type="submit">Verify & Continue</button>
        </div>
    </form>
  );
}
