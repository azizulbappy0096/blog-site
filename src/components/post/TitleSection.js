import React from 'react'
import Image from "next/image"

function TitleSection() {
    return (
        <section className="container md:w-2/3 mx-auto">
                <h1 className="text-3xl md:text-5xl"> How to Detect Unused CSS or JavaScript in Your Code </h1>

                <div className="flex items-center justify-between my-8">
                    <div className="flex items-center">
                        <Image 
                            src="/sample-card.png"
                            layout="fixed"
                            width="45"
                            height="45"
                            className="rounded-full"
                        />

                        <div className="ml-3">
                            <section className="flex items-center">
                                <div>
                                    <span className="text-lg">
                                    <a className="hover:underline" href="#">
                                        Azizul Islam
                                    </a>
                                </span>
                                </div>
                                <button className="follow-button text-sm text-white px-3 py-1 rounded-3xl ml-2">Follow</button>
                            </section>
                            <section className="text-xl text-gray-500">
                                <small>Jun 20 · 4 min read</small>
                            </section>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
    )
}

export default TitleSection
