import { Button } from '@/components/ui/button'
import { Link } from '@/state/dataSlice'
import Image from 'next/image'
import React from 'react'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Label } from '@/components/ui/label'
import { useLinks } from './linksContainer'

const LinkForm = ({ linkItem, number, id }: { linkItem: Link, number: number, id: string }) => {

  const { updateLink, removeLink, platforms } = useLinks();
  const selectedPlatform = linkItem ? linkItem.platform : "github"

  if (platforms) return (
    <form id={id} className="p-6 bg-light-gray rounded-[12px]">
      <div className="flex justify-between w-full items-center">
        <div className="gap-2 mb-3 cursor-grab items-center flex">
          <Image width="12" height="6" alt="drag-icon" src="/images/button/icon-drag-and-drop.svg" />
          <h2>Link #{number}</h2>
        </div>
        <Button onClick={() => removeLink(id)} variant="ghost" type="button" className="text-gray active:bg-transparent p-0">Remove</Button>
      </div>

      <div className="space-y-3">
        <div className="space-y-1">
          <Label htmlFor={`platform-${id}`}>Platform</Label>
          <Select onValueChange={(value) => { updateLink(id, "platform", value) }} defaultValue={selectedPlatform}>
            <SelectTrigger id={`platform-${id}`} className="w-full">
              <SelectValue placeholder="Platform" />
            </SelectTrigger>
            <SelectContent>
              {
                platforms.map((platform, i: number) => <SelectItem key={i} value={platform.name.split(" ").join("").toLowerCase()}>
                  <div className="flex items-center gap-2">
                    <span>{platform.name}</span>
                  </div>
                </SelectItem>)
              }
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label htmlFor={`link-${id}`}>Link</Label>
          {/* @ts-ignore */}
          <div className={"bg-white group flex py-3 items-center border focus-within:border-purple focus-within:shadow-xl focus-within:!shadow-active rounded-[8px]"}>
            <div className="mx-4">
              <Image width="16" height="16" alt="" src="/images/button/icon-link.svg" />
            </div>

            <input
              id={`link-${id}`}
              onChange={(e) => { updateLink(id, "url", e.target.value.toLowerCase()) }}
              value={linkItem ? linkItem.url : ""}
              className={"flex w-full text-dark-gray rounded-md bg-background text-sm border-0 outline-0 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50"}
            />

            {/* <FormMessage className="mx-4 whitespace-nowrap text-red text-body-s" /> */}
          </div>
        </div>

      </div>
    </form>
  )
}

export default LinkForm