import React from 'react'

function Quote({ children }) {
    return (
        <div className="md:w-2/3 mx-auto mt-8">
            <blockquote className="text-xl leading-relaxed  px-4 py-1 md:-ml-5 border-l-4 border-black">
                {children}
                
            </blockquote>
            </div>
    )
}

export default Quote
