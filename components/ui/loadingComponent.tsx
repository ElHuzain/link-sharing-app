import Image from 'next/image'
import React from 'react'

const LoadingComponent = () => {
  return (
    <div className="fixed w-full h-dvh top-0 left-0 flex flex-col gap-4 text-center items-center justify-center">
      <Image width="300" height="100" alt="loading" src="/images/logo/logo-devlinks-large.svg" className="animate-pulse"/>
    </div>
  )
}

export default LoadingComponent