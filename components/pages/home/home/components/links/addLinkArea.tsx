import { Button } from '@/components/ui/button'
import { Link } from '@/state/dataSlice'
import React from 'react'
import { useLinks } from './linksContainer'

const AddLinkArea = () => {

  const { addLink } = useLinks();

  return (
    <div className="p-6 md:p-10 md:pb-6">
      <h1 className="text-heading-mobile md:text-heading-m font-bold">Customize your links</h1>
      <p className="text-gray text-body-m mb-10 mt-2">Add/edit/remove links below and then share all your profiles with the world!</p>
      <Button onClick={addLink} variant="outline" className="w-full">+ Add new link</Button>
    </div>
  )
}

export default AddLinkArea