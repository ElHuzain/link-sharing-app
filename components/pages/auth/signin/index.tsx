import SignInForm from "./components/form"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const SignInPage = () => {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center fixed top-0 left-0 bg-white md:bg-light-gray">
      <Image width="182" height="40" alt="logo" className="absolute md:relative md:top-0 md:left-0 md:mb-10 top-8 left-6" src="/images/logo/logo-devlinks-large.svg" />
      <section className="w-full md:max-w-[476px] px-8 md:p-10 bg-white">
        <h1 className="text-heading-m font-bold">Login</h1>
        <p className="text-body-m text-gray mb-6 mt-2">Add your details below to get back into the app</p>
        <SignInForm />
        <div className="mt-4 w-full text-center">
          <span className="text-body-m text-gray">{"Don't have an account?"} <Button variant="ghost" className="p-0 text-purple"><Link href="/signup">Create account</Link></Button></span>
        </div>
      </section>
    </div>
  )
}

export default SignInPage