import Image from 'next/image'
import React from 'react'

const Success = ({ imageSrc, message }: { imageSrc?: string, message: string }) => {
    return (
        <div className="px-6 py-4 bg-dark-gray text-white flex rounded-[8px] items-center gap-2">
            {
                imageSrc && <Image alt="" src={imageSrc} width="20" height="20" />
            }
            <span>{message}</span>
        </div>
    )
}

export default Success