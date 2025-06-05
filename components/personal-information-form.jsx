'use client';
import { useState } from 'react';

export default function PersonalInformationForm({ onNextStep }) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically validate the form data
        onNextStep(3); // Move to step 3
    };

    return (
        <form className='w-full flex flex-col gap-4 text-black'>
            <h1 className='text-green-700 font-bold text-[32px]'>Step 2: Personal Information</h1>
            <p className='text-gray-600'>Please provide your personal details to continue with the verification process.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input 
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required 
                    />
                </div>
                
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                        type="text" 
                        id="lastName" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded-md p-2"
                        required 
                    />
                </div>
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required 
                />
            </div>

            <div>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required 
                />
            </div>

            <div>
                <label htmlFor="dateOfBirth">Date of Birth</label>
                <input 
                    type="date" 
                    id="dateOfBirth" 
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    required 
                />
            </div>

            <div>
                <label htmlFor="address">Address</label>
                <textarea 
                    id="address" 
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md p-2"
                    rows="3"
                    required 
                />
            </div>

            <div className="w-full flex items-center justify-end">
                <button 
                    onClick={handleSubmit} 
                    className='w-[150px] bg-green-600 text-white rounded-md p-2' 
                    type="submit"
                >
                    Continue
                </button>
            </div>
        </form>
    );
} 