import React from 'react'

const countDsiplay = [
    {
        number: 1,
        text: "Verification"
    },
    {
        number: 2,
        text: "Personal Information"
    },
    {
        number: 3,
        text: "Employment Information"
    },
    {
        number: 4,
        text: "Document Upload"
    },
    {
        number: 5,
        text: "Review & Submit"
    },
]
const counterDisplay = ({ activeIndex }: { activeIndex: number }) => {
    return (
        <div className="w-full py-4">
            <div className='flex justify-between items-center'>
                {countDsiplay.map((view, index) => (
                    <div className="flex flex-col items-center relative">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${activeIndex == index ? "border-green-700 bg-green-700 text-white" : " border-gray-300 bg-white text-gray-400"}`}><span>
                            {view.number}
                        </span>
                        </div>
                        <span className='text-xs mt-2 text-center hidden sm:block transition-colors duration-200 text-gray-500'>
                            {view.text}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default counterDisplay