"use client";
import React, { useEffect, useMemo } from 'react'
import { Button } from '../ui/button'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'

const Tabs = () => {

  const params = useSearchParams();
  const currentTab = params.get("tab");

  const getSelectedTab = () => {
    switch (currentTab) {
      case "links": return "links";
      case "profile": return "profile";
      default: return "links";
    }
  }

  const selectedTab = useMemo(() => getSelectedTab(), [currentTab])

  return <div className="flex">
    <Button asChild variant="ghost" className={cn("flex gap-2", selectedTab === "links" && "bg-light-purple text-purple")}>
      <Link href="/home?tab=links">
        <span aria-hidden="true">
          <Image height="20" width="20" alt="" src="/images/button/icon-link.svg" className={cn("hidden", selectedTab !== "links" && "block")} />
          <Image height="20" width="20" alt="" src="/images/button/active/icon-link.svg" className={cn("hidden", selectedTab === "links" && "block")} />
        </span>
        <span className="sr-only md:not-sr-only">Links</span>
      </Link>
    </Button>

    <Button asChild variant="ghost" className={cn("flex gap-2", selectedTab === "profile" && "bg-light-purple text-purple")}>
      <Link href="/home?tab=profile">
        <span aria-hidden="true">
          <Image height="20" width="20" alt="" src="/images/button/icon-profile-details-header.svg" className={cn("hidden", selectedTab !== "profile" && "block")} />
          <Image height="20" width="20" alt="" src="/images/button/active/icon-profile-details-header.svg" className={cn("hidden", selectedTab === "profile" && "block")} />
        </span>
        <span className="sr-only md:not-sr-only">Profile Details</span>
      </Link>
    </Button>
  </div>
}

export default Tabs