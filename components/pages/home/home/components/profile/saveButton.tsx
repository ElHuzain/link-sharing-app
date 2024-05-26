import { Button } from '@/components/ui/button'
import React from 'react'

const SaveButton = ({ canSubmit }: { canSubmit: boolean }) => {

    return (
        <div className="bg-white border-t py-6 mt-auto border-t border-t-borders flex md:justify-end mt-10">
            <Button disabled={!canSubmit} type="submit" className="w-full md:w-fit">Save</Button>
        </div>
    )
}

export default SaveButton