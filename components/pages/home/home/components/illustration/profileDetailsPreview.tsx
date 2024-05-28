"use client"
import useSubscribeToUserDetails from '@/hooks/useSubscribeToUserDetails'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

const ProfileDetailsPreview = ({ size, data = null }: { size?: string, data?: null | { username: string, description: string, imageSrc: string }; }) => {

  const { userData } = useSubscribeToUserDetails();
  const { username, description, imageSrc } = data ? data : userData;

  return (
    <div className={cn("bg-white w-full justify-center text-center text-dark-gray", size === "sm" && "h-[158px]")}>

      {/* Profile Photo */}
      <div className={cn("w-[96px] h-[96px] flex items-center justify-center border-[4px] border-purple rounded-full bg-[#EEEEEE] mx-auto overflow-hidden", !imageSrc && "border-transparent")}>
        {
          imageSrc && <Image width="96" height="96" alt="" className="w-full h-full object-cover" src={imageSrc} />
        }
      </div>

      {/* Username */}
      <div className={cn("rounded-full w-full max-w-[100px] mx-auto mt-[18px] mb-[10px]", username && "max-w-full")}>
        {
          username ? <p className={cn("font-bold !text-heading-m text-dark-gray truncate", size === "sm" && "!text-heading-mobile")}>{username}</p>
            : <div className="bg-[#EEEEEE] w-full h-[16px] rounded-full"></div>
        }
      </div>

      {/* Description */}
      <div className="rounded-full w-full">
        {
          description ? <p className={cn("text-gray text-body-m truncate whitespace-wrap text-wrap", size === "sm" && "text-body-s")}>{description}</p>
            : <div className="bg-[#EEEEEE] w-full h-[12px] rounded-full"></div>
        }
      </div>

    </div >
  )
}

export default ProfileDetailsPreview