import React from 'react'
import Image from "next/image"

// --- components
import TitleSection from './TitleSection'
import Content from './Content'

function Main() {
    return (
        <div className="container px-4 md:px-16 my-8 mx-auto min-h-screen">
            <TitleSection />
            <Content />
        </div>
    )
}

export default Main
