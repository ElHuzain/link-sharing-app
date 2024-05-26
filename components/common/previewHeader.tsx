import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import PreviewHeaderButton, { PreviewCopyButton } from './previewHeaderButton'

const PreviewHeader = () => {

  return (
    <div className="pb-6 md:p-6 flex">
      <header className="bg-white pl-6 z-[10] md:pl-4 p-4 w-full rounded-[8px] max-w-content mx-auto">
        <nav className="flex justify-between items-center gap-4 w-full">
          <PreviewHeaderButton />
          <PreviewCopyButton />
        </nav>
      </header>
    </div>
  )
}

export default PreviewHeader