import React from 'react'

const Footer = () => {
    return (
        <div className='bg-white border-t border-gray-200 py-4'>
            <div className='container mx-auto flex items-center justify-center'>
                <img alt="IPPIS Logo" width="60" height="60" decoding="async" data-nimg="1" className="mr-3" style={{ color: "transparent" }} src="/images/ippis-logo.jpeg" />
                <p className="text-sm text-gray-600">© 2025 IPPIS Nigeria. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer