import RelativeLoadingComponent from '@/components/ui/relativeLoadingComponent'
import Image from 'next/image'
import React from 'react'

const UploadImageInput = ({ loading, handleImageUpload, imageSrc, uploadedImageReference }: { loading: boolean | null, imageSrc: string | null, uploadedImageReference: string | null, handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void }) => {

  return (
    <div className="grid relative grid-cols-1 md:grid-cols-[1fr_2fr] md:items-center gap-4 md:gap-6 items-start bg-light-gray p-[20px] rounded-[12px]">
      {
        loading && <RelativeLoadingComponent />
      }
      <p className="text-gray text-body-m w-full">Profile Picture</p>
      <div className="flex flex-col md:flex-row gap-4 md:items-center">
        <label className="group w-[193px] min-w-[193px] h-[193px] focus-within:border relative overflow-hidden border-purple bg-light-purple rounded-[12px] flex flex-col justify-center gap-2 items-center hover:opacity-80 cursor-pointer">
          {
            imageSrc || uploadedImageReference ? <>
              {/* @ts-ignore */}
              <Image alt="" height="193" width="193" className="absolute w-full h-full" src={uploadedImageReference ? uploadedImageReference : imageSrc} />
              <div aria-hidden className="w-full h-full bg-black top-0 left-0 absolute group-hover:opacity-40 transition-opacity opacity-0"></div>
              <div className="z-10 w-full h-full opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 transition-all flex flex-col justify-center gap-2 items-center">
                <Image alt="" height="27" width="32" src="/images/input/icon-upload-image-white.svg" />
                <span className="text-heading-s font-semibold text-white">Change Image</span>
              </div>
            </>
              : <>
                <Image alt="" height="27" width="32" src="/images/input/icon-upload-image.svg" />
                <span className="text-heading-s font-semibold text-purple">+ Upload Image</span>
              </>
          }

          <input className="opacity-0 absolute" type="file" onChange={handleImageUpload} />
        </label>
        <p className="text-body-s text-gray">Image must be below 1024x1024px. Use PNG or JPG format.</p>
      </div>
    </div>
  )
}

export default UploadImageInput