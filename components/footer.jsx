'use client';

import Image from 'next/image'; 

export default function Footer() {
    return (
        <footer className="bg-pink-50 text-gray-500 border-t border-gray-300 w-full flex items-center justify-center text-[18px] p-2 font-normal gap-4">
            <Image
            src="/ippis-logo.jpeg" 
            alt="Reason for choosing us" 
            width={94} 
            height={85} 
            className="object-cover" 
          />
            <p>&copy; {new Date().getFullYear()} LIF. All Rights Reserved.</p>
        </footer>
    );
}