import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bvn: '',
    nin: ''
  });
  const [errors, setErrors] = useState({
    bvn: '',
    nin: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    
    // Clear error when user types
    if (errors[id]) {
      setErrors(prev => ({
        ...prev,
        [id]: ''
      }));
    }
  };

  const validateFields = () => {
    let isValid = true;
    const newErrors = {
      bvn: '',
      nin: ''
    };

    // BVN validation
    if (!formData.bvn.trim()) {
      newErrors.bvn = 'BVN is required';
      isValid = false;
    } else if (formData.bvn.length < 11) {
      newErrors.bvn = 'BVN must be 11 digits';
      isValid = false;
    }

    // NIN validation
    if (!formData.nin.trim()) {
      newErrors.nin = 'NIN is required';
      isValid = false;
    } else if (formData.nin.length < 11) {
      newErrors.nin = 'NIN must be 11 digits';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateFields()) {
      if (step < 5) setStep(prev => prev + 1);
    }
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
      
        <div className="thin-ash-line"></div>
        <div className="form-content">
          {step === 1 && (
            <div>
              <h2>Step 1: Identity Verification</h2>
              <p>Please provide your Bank Verification Number (BVN) and National Identification Number (NIN) for verification.</p>
              
              <div className='input-container'>
                <div className="input-group">
                  <label htmlFor="bvn">Bank Verification Number (BVN)</label>
                  <input 
                    type="text" 
                    id="bvn" 
                    placeholder="Enter your 11-digits BVN" 
                    maxLength="11"
                    value={formData.bvn}
                    onChange={handleChange}
                    className={errors.bvn ? 'error' : ''}
                  />
                  {errors.bvn && <span className="error-message">{errors.bvn}</span>}
                </div>
                
                <div className="input-group">
                  <label htmlFor="nin">National Identification Number (NIN)</label>
                  <input 
                    type="text" 
                    id="nin" 
                    placeholder="Enter your 11-digits NIN" 
                    maxLength="11"
                    value={formData.nin}
                    onChange={handleChange}
                    className={errors.nin ? 'error' : ''}
                  />
                  {errors.nin && <span className="error-message">{errors.nin}</span>}
                </div>
              </div>
            </div>
          )}
          
          {/* Other steps remain the same */}
          {step === 2 && (
            <div>
              <h2>Step 2: Personal Information</h2>
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
              verify & continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;