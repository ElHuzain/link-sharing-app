"use client"

import { createContext, useContext } from 'react'
import AddLinkArea from './addLinkArea'
import Links from './links'
import RelativeLoadingComponent from '@/components/ui/relativeLoadingComponent'
import useManageLinks from '@/hooks/useManageLinks'

const linksContext = createContext<any>({});
export const useLinks = () => useContext(linksContext);

const LinksContainer = () => {

    const { links, addLink, updateLink, removeLink, onSubmit, loading } = useManageLinks();
    const value = { links, addLink, updateLink, removeLink, onSubmit }

    if (loading) return <RelativeLoadingComponent />

    return (
        <linksContext.Provider value={value}>
            <section className="bg-white w-full rounded-[8px] h-full">

                {/* Contains the button to add a link */}
                <AddLinkArea addLink={addLink} />

                {/* Contains links themselves, and submit button */}
                <Links />

            </section>
        </linksContext.Provider>
    )
}

export default LinksContainer