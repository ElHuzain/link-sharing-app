import { Button } from '@/components/ui/button'
import React from 'react'
import { useLinks } from './linksContainer';

const SaveButton = () => {

    const { onSubmit, canSubmit } = useLinks();

    return (
        <div className="bg-white relative border-t py-6 mt-auto border-t border-t-borders flex md:justify-end mt-10">
            <Button disabled={!canSubmit} onClick={onSubmit} type="button" className="w-full md:w-fit">Save</Button>
        </div>
    )
}

export default SaveButton