import React from 'react'

// --- components
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main() {
    return (
        < >
            <div className="col-span-6 md:col-span-4 md:pr-8 md:border-r-2 ">
                <MainLeft />
            </div>
            <div className="hidden md:block col-span-2 px-8">
                <MainRight />
            </div>
        </>
    )
}

export default Main
