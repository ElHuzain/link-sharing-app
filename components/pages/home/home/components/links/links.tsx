import React from 'react'
import SaveButton from './saveButton'
import Image from 'next/image'
import LinkForm from './linkForm'
import { useLinks } from './linksContainer'
import { localLink } from '@/hooks/useManageLinks'

const NoLinksState = () => {
    return <div className="bg-light-gray h-full text-dark-gray flex flex-col justify-center gap-6 md:gap-10 p-[20px] h-fit md:h-full rounded-md text-center">
        <Image width="0" height="0" className="max-w-[125px] md:max-w-[250px] mx-auto w-full max-h-[152px]" alt="" src="/images/illustration/illustration-empty.svg" />
        <h2 className="text-heading-mobile md:text-heading-m font-bold">{"Let's get you started"}</h2>
        <p className="text-gray">{"Use the \"Add new link\" button to get started. Ocnce you have more than one link. You can reorder and edit them. We're here to help you share your profiles with everyone!"}</p>
    </div>
}

const Links = () => {

    const { links } = useLinks();

    return <div className={"px-6 md:px-10 space-y-3"}>
        <div className="h-[330px] md:h-[479px] overflow-y-scroll space-y-6 mb-6">
            {
                links.length ? links.map((linkItem: localLink, i: number) => <LinkForm key={linkItem.id} id={linkItem.id} number={i + 1} linkItem={linkItem} />)
                    : <NoLinksState />
            }
        </div>
        <SaveButton />
    </div>


}

export default Links