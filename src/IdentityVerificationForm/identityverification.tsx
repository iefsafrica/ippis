import React from 'react';
import './identityverification.css';

const IdentityVerificationForm = () => {
  return (
    <div className="form-wrapper">
      <div className="steps">
        {['Verification', 'Personal Information', 'Employment Information', 'Document Upload', 'Review & Submit'].map((label, index) => (
          <div className={`step ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="step-circle">{index + 1}</div>
            <div className="step-label">{label}</div>
          </div>
        ))}
      </div>

      <h2 className="form-title">Step 1: Identity Verification</h2>
      <p className="form-subtitle">
        Please provide your Bank Verification Number (BVN) and National Identification Number (NIN) for verification.
      </p>

      <form className="form-card">
        <label>
          Bank Verification Number (BVN)
          <input type="text" placeholder="Enter your 11-digit BVN" />
        </label>

        <label>
          National Identification Number (NIN)
          <input type="text" placeholder="Enter your 11-digit NIN" />
        </label>
      </form>

      <div className="warning-box">
        <span className="icon">⚠️</span>
        <div>
          <strong>Important</strong><br />
          Please ensure that you enter your correct BVN and NIN. These will be used to verify your identity and cannot be changed later.
        </div>
      </div>

      <button className="submit-button">Verify & Continue</button>
    </div>
  );
};

export default IdentityVerificationForm;
