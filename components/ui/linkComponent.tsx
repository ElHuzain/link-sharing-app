import { cn } from '@/lib/utils'
import { addSecure } from '@/utils/formatUrl'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const LinkComponent = ({ href, platform, size }: { href?: string, platform?: string, size?: string }) => {

    const getPlatform = () => {
        switch (platform) {
            case "github": return { color: "bg-black", icon: "github", name: "GitHub" };
            case "frontendmentor": return { color: "bg-white border border-borders", icon: "frontendmentor", name: "Frontend Mentor" };
            case "twitter": return { color: "bg-[#43B7E9]", icon: "twitter", name: "Twitter" };
            case "linkedin": return { color: "bg-[#2D68FF]", icon: "linkedin", name: "LinkedIn" };
            case "youtube": return { color: "bg-[#EE3939]", icon: "youtube", name: "YouTube" };
            case "facebook": return { color: "bg-[#2442AC]", icon: "facebook", name: "Facebook" };
            case "twitch": return { color: "bg-[#EE3FC8]", icon: "twitch", name: "Twitch" };
            case "devto": return { color: "bg-dark-gray", icon: "devto", name: "Dev.to" };
            case "codewars": return { color: "bg-[#8A1A50]", icon: "codewars", name: "Codewars" };
            case "freecodecamp": return { color: "bg-[#302267]", icon: "freecodecamp", name: "FreeCodeCamp" };
            case "gitlab": return { color: "bg-[#EB4925]", icon: "gitlab", name: "GitLab" };
            case "hashnode": return { color: "bg-[#0330D1]", icon: "hashnode", name: "Hashnode" };
            case "stackoverflow": return { color: "bg-[#EC7100]", icon: "stackoverflow", name: "Stack Overflow" };
            default: return { color: "bg-[#EEEEEE]", icon: "", name: "Some" };
        }
    }

    const getSize = () => {
        switch (size) {
            case "sm": return "px-4 py-[11px]";
            default: return "p-4"
        }
    }

    const currentPlatform = getPlatform();
    const currentPlatformImage = `/images/platforms/display/icon-${currentPlatform?.icon}.svg`;
    const currentSize = getSize();
    const imgSize = size === "sm" ? "20" : "28";

    return platform ? <Link target='_blank' href={addSecure(href!)} className={cn("rounded-[8px] gap-2 flex items-center hover:opacity-75 transition-opacity", currentSize, currentPlatform?.color)}>
        <Image width={imgSize} height={imgSize} alt="" src={currentPlatformImage} />
        <span className="w-full text-white">{currentPlatform?.name}</span>
        <Image width={imgSize} height={imgSize} alt="" src="/images/button/icon-arrow-right.svg" />
    </Link>
        : <div className={cn("rounded-[8px] gap-2 flex items-center animate-pulse duration-400", currentSize, currentPlatform?.color)}>
            <span className="text-transparent">{currentPlatform?.name}</span>
        </div>
}

export default LinkComponent