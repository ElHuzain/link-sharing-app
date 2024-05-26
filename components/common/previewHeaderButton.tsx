"use client";

import { AuthContext } from "@/providers/authProvider";
import { useContext, useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const PreviewHeaderButton = () => {

    const { isLoggedIn, loading } = useContext(AuthContext);

    if (loading) return <Button variant="outline" className="animate-pulse w-full md:w-fit">Loading..</Button>

    if (isLoggedIn) return <Button asChild variant="outline" className="w-full md:w-fit"><Link href="/home">Back to Editor</Link></Button>

    return <Button variant="outline" className="w-full md:w-fit"><Link href={"/signin"}>Sign In</Link></Button>

}

export const PreviewCopyButton = () => {
    const [copied, setCopied] = useState(false);
    const timeoutRef = useRef<Timeout | null>(null);

    const pathname = usePathname();

    const handleCopy = async () => {
        await navigator.clipboard.writeText(`https://devlinks.vercel.app${pathname}`);
        setCopied(true);
        timeoutRef.current = setTimeout(() => setCopied(false), 2000);
    }

    useEffect(() => clearTimeout(timeoutRef.current), [])

    return <Button disabled={copied} onClick={handleCopy} className="w-full md:w-fit">
        {
            copied ? "Copied!" : "Share Link"
        }
    </Button>
}

export default PreviewHeaderButton