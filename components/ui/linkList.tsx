"use client"
import React from 'react'
import LinkComponent from './linkComponent'
import { Link } from '@/state/dataSlice'
import useSubscribeToUserDetails from '@/hooks/useSubscribeToUserDetails'

const LinkList = ({ size, data = null }: { size: string, data?: null | Link[] }) => {

    const { userData } = useSubscribeToUserDetails();

    const selectedArray = data ? data : userData.links

    const placeholderElements = size === "sm" ? 5 - userData.links.length : 0;

    return (
        <ul className="bg-white w-full max-h-[300px] h-full flex flex-col gap-[20px] w-full">
            {
                selectedArray.map((link: Link, i: number) => {
                    return <li key={i}><LinkComponent href={link.url} platform={link.platform} size={size} /></li>
                })
            }
            {
                size !== "sm" && selectedArray.length <= 0 && <p className="w-full text-center">No links added. :(</p>
            }
            {
                // @ts-ignore
                placeholderElements > 0 ? [...Array(placeholderElements).keys()].map((i: number) => <li key={i}><LinkComponent size="sm" /></li>) : null
            }
        </ul>
    )
}

export default LinkList