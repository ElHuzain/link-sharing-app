import React from 'react'

const RelativeLoadingComponent = () => {
    return (
        <div className="flex-grow absolute flex-1 z-[100] h-full w-full bg-white flex items-center justify-center">
            <img alt="" src="/images/logo/logo-devlinks-large.svg" className="animate-pulse" />
        </div>
    )
}

export default RelativeLoadingComponent