import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    if (step < 5) setStep(prev => prev + 1);
  };

  const steps = [1, 2, 3, 4, 5];
  const stepLabels = [
    'Verification',
    'Personal Information',
    'Employment Information',
    'Document Upload',
    'Review & Submit',
  ];

  return (
    <div className="app-container">
      <div className="form-container">
        {/* Step Indicator */}
        <div className="step-indicator">
          {steps.map((num, index) => (
            <div key={num} className="step-item">
              <div className={`step-circle ${step === num ? 'active' : ''}`}>
                {num}
              </div>
              <div className="step-label">{stepLabels[index]}</div>
            </div>
          ))}
        </div>

        {/* Step Content */}
        <div className="form-content">
          {step === 1 && (
            <div>
              <h2>Step 1: Verification</h2>
              <div>
                
              </div>
            </div>
          )}
          {step === 2 && (
            <div>
              <h2>Step 2: Personal Information</h2>
              <input type="text" placeholder="Enter your name" />
            </div>
          )}
          {step === 3 && (
            <div>
              <h2>Step 3: Employment Information</h2>
             
            </div>
          )}
          {step === 4 && (
            <div>
              <h2>Step 4: Document Upload</h2>
             
            </div>
          )}
          {step === 5 && (
            <div>
              <h2>Step 5: Review & Submit</h2>
              
            </div>
          )}

          {step < 5 && (
            <button className="next-button" onClick={handleNext}>
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
