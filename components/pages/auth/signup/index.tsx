import React from 'react'
import SignUpForm from './components/form'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const SignUpPage = () => {
  return <div className="w-full h-dvh flex flex-col items-center justify-center fixed top-0 left-0 bg-white md:bg-light-gray">
    <Image width="182" height="40" alt="logo" className="absolute md:relative md:top-0 md:left-0 md:mb-10 top-8 left-6" src="/images/logo/logo-devlinks-large.svg" />
    <section className="w-full md:max-w-[476px] px-8 md:p-10 bg-white">
      <h1 className="text-heading-m font-bold">Create account</h1>
      <p className="text-body-m text-gray mb-6 mt-2">{"Let's get you started sharing your links!"}</p>
      <SignUpForm />
      <div className="mt-4 w-full text-center">
        <span className="text-body-m text-gray text-center">Already have an account? <Button variant="ghost" className="p-0 text-purple"><Link href="/signin">Login</Link></Button></span>
      </div>
    </section>
  </div>

}

export default SignUpPage