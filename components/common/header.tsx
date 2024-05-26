import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import Tabs from './tabs'
import useSubscribeToUserDetails from '@/hooks/useSubscribeToUserDetails'
import { MouseEventHandler } from 'react'

const Header = () => {

  const { userData } = useSubscribeToUserDetails();

  const handleCanPreview = (e: MouseEventHandler<HTMLAnchorElement>) => {
    if (!userData.username) {
      //@ts-ignore
      e.preventDefault();
      return console.error("Set a username");
    }
  }

  return (
    <div className="pb-6 md:p-6 flex">
      <header className="bg-white pl-6 md:pl-4 p-4 w-full rounded-[8px] max-w-content mx-auto">
        <nav className="flex justify-between items-center w-full">
          <Link href={"/"}>
            <Image height="27" width="27" alt="" src="/images/logo/logo-devlinks-small.svg" className="md:hidden" />
            <Image height="32" width="146" alt="" src="/images/logo/logo-devlinks-large.svg" className="hidden md:block" />
            <span className="sr-only">Go to homepage</span>
          </Link>

          <Tabs />

          <Button asChild size="sm" variant="outline">
            {/* @ts-ignore */}
            <Link onClick={handleCanPreview} href={"/preview/" + userData.username}>
              <Image height="13" width="19" alt="" src="/images/button/icon-preview-header.svg" className="md:hidden" />
              <span className="sr-only md:not-sr-only">Preview</span>
            </Link>
          </Button>

        </nav>
      </header>
    </div>
  )
}

export default Header