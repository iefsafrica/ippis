import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="bg-white p-4 flex items-center justify-center w-full border-t border-t-gray-200">

        <div className=' w-ful h-[80px] flex flex-row items-center space-x-6 justify-between'>
            <Image
            src="/ippis-logo.jpg"
            alt="Logo"
            width={70}
            height={70}
            />
            <p className="text-center text-sm text-gray-600">
                &copy; {new Date().getFullYear()} IPPIS Nigeria. All rights reserved.
            </p>

        </div>
    </div>
  )
}

export default Footer