'use client';

import Head from 'next/head';
import { useState } from 'react';
import VerifyButton from '../components/VerifyButton'; // Adjust the import path as necessary

export default function RegisterPage() {
  const [bvn, setBvn] = useState('');
  const [nin, setNin] = useState('');

  const handleVerify = () => {
    if (bvn.length !== 11 || nin.length !== 11) {
      alert('Please enter valid 11-digit BVN and NIN.');
      return;
    }

    console.log('BVN:', bvn, 'NIN:', nin);
  };

  return (
    <>
      <Head>
        <title>IPPSHR | Register</title>
        <meta name="description" content="Identity Verification - IPPSHR Registration Page" />
      </Head>

      <div className="min-h-screen bg-pink-50 flex justify-center items-start py-10 px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-5xl">
          {/* Step Progress */}
          
          <div className="flex justify-between mb-8 text-center text-sm font-medium">
            {['Verification', 'Personal Information', 'Employment Information', 'Document Upload', 'Review & Submit'].map(
              (step, index) => (
                <div key={step} className="flex-1">
                  <div
                    className={`w-8 h-8 mx-auto mb-1 rounded-full flex items-center justify-center font-bold ${
                      index === 0 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className={index === 0 ? 'text-black' : 'text-gray-500'}>{step}</div>
                </div>
              )
            )}
          </div>
          <div className="border-t border-gray-300 mb-6"></div>

          {/* Step Heading */}
          <h2 className="text-xl font-semibold text-green-700 mb-2">Step 1: Identity Verification</h2>
          <p className="text-gray-700 mb-6">
            Please provide your Bank Verification Number (BVN) and National Identification Number (NIN) for verification.
          </p>

          {/* Form Section */}
          <div className="space-y-6 border border-red-200 p-5 rounded">
            <div>
              <label className="block font-medium text-gray-800 mb-1">Bank Verification Number (BVN)</label>
              <input
                type="text"
                maxLength={11}
                value={bvn}
                onChange={(e) => setBvn(e.target.value)}
                placeholder="Enter your 11-digit BVN"
                className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>

            <div>
              <label className="block font-medium text-gray-800 mb-1">National Identification Number (NIN)</label>
              <input
                type="text"
                maxLength={11}
                value={nin}
                onChange={(e) => setNin(e.target.value)}
                placeholder="Enter your 11-digit NIN"
                className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
          </div>

          {/* Warning Box */}
          <div className="bg-yellow-100 text-yellow-800 text-sm p-3 rounded border border-yellow-300 mt-6">
            <strong>Important:</strong> Please ensure that you enter your correct BVN and NIN. These will be used to verify
            your identity and cannot be changed later.
          </div>

          {/* Action Button */}
          <div className="mt-6">
            <VerifyButton onClick={handleVerify} />
          </div>
        </div>
      </div>
    </>
  );
}
