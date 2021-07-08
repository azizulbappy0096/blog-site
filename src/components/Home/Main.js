import React from 'react'

// --- components
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main() {
    return (
        < >
            <div className="col-span-6 lg:col-span-4 lg:pr-8 lg:border-r-2 ">
                <MainLeft />
            </div>
            <div className="hidden lg:block col-span-2 pl-8">
                <MainRight />
            </div>
        </>
    )
}

export default Main
