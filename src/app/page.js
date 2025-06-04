"use client"

import LoadingOverlay from "@/components/loading-overlay";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default  function Home() {

  const router = useRouter()
  
  useEffect(() => {

    const timeoutId = setTimeout(() => {
      router.push('/register')
    }, 1500)

    return () => clearTimeout(timeoutId)
  }, [ router])
  

  
  return (
    <main className="bg-green-  flex flex-col items-center justify-center md:items-center md:justify-center min-h-screen">
       
   
      <LoadingOverlay isPending={true} loader="2" />
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-lg text-green-600">Redirecting you to the sign-up page...</p>
      </div>
    </main>
  );
}
