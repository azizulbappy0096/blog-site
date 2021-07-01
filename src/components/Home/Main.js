import React from 'react'

// --- components
import MainLeft from './MainLeft'
import MainRight from './MainRight'

function Main() {
    return (
        <div className="container grid grid-cols-4 px-4 md:px-16 my-8 min-h-screen">
            <div className="col-span-4 md:col-span-3 md:pr-8 md:border-r-2 ">
                <MainLeft />
            </div>
            <div className="hidden md:block">
                <MainRight />
            </div>
        </div>
    )
}

export default Main
