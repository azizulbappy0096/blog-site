import React from 'react'
import Image from 'next/image'

function ContentImage() {
    return (
        <figure className="w-full text-center">
                <Image 
                    src="/sample-image.jpeg"
                    layout="intrinsic"
                    objectFit="cover"
                    width="1000"
                    height="500"
                    className="w-full"
                />
                <figcaption className="text-center">
                    <p className="text-gray-500"> Photo by <a href="#" className="underline">Christopher Robin Ebbinghaus</a> on <a href="#" className="underline">Unsplash</a>  </p>
                </figcaption>
        </figure>
    )
}

export default ContentImage
