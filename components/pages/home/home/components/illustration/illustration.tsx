import React from 'react'
import Image from 'next/image'
import LinkComponent from '@/components/ui/linkComponent'
import LinkList from '@/components/ui/linkList'
import ProfileDetailsPreview from './profileDetailsPreview'



const Illustration = () => {
    return (
        <div className="hidden lg:flex items-center justify-center bg-white w-full max-w-[560px] rounded-[8px]">
            <div className="relative">
                <Image width="307" height="631" alt="" src="/images/illustration/illustration-phone-mockup.svg" />
                <div className="absolute max-w-[284px] max-h-[583px] h-full w-full px-[22px] space-y-[56px] left-[10px] top-[37px] pt-[27px]">
                    <ProfileDetailsPreview size="sm" />
                    <LinkList size="sm" />
                </div>
            </div>
        </div>
    )
}

export default Illustration