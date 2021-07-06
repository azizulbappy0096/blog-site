import React from 'react'
import Image from "next/image"

// --- components
import TitleSection from './TitleSection'
import Content from './Content/Content'
import Bottom from "./Bottom/Bottom"

function Main() {
    return (
        <div className="container px-4 md:px-16 my-8 mx-auto min-h-screen">
            <TitleSection />
            <Content />
            <Bottom />
        </div>
    )
}

export default Main
