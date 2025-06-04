

import LoadingOverlay from '@/components/loading-overlay'
import React, { Suspense } from 'react'
import RegisterForm from './RegisterForm'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Register | Uverus test',
  description: 'Register for a new account. Already have an account? Log in.',
 
}

const Page = async ({ searchParams: asyncSearchParams }) => {

    const searchParams = await asyncSearchParams
  
    return (
      <div className='p-2.5 sm:p-8 container mx-auto max-w-7xl flex flex-col items-center justify-center gap-y-5 py-10 h-full'>
          <Suspense fallback={<LoadingOverlay />}>
              <RegisterForm searchParams={searchParams} />
              <Footer />
          </Suspense>
      </div>
    )
  }
  
  export default Page

