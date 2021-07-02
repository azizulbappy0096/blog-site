import React, { useEffect } from 'react'


// --- components
import ContentImage from './Image'
import Tweets from './Tweets'

function Content() {

    return (
        <section className="mt-6">
            <ContentImage />

            <article className="text-xl leading-relaxed md:w-2/3 mt-12 mx-auto">
                <p>How often have we come across situations where your project has a lot of code that may have been used at an earlier stage to build a <a href="#" className="underline"> MVP </a> and then years later it is just lying there because someone did not do a proper job of refactoring it?</p>

                <p className="mt-8">‘Often’ would be the obvious answer.</p>

                <p className="mt-8">Since the real world applications have various developers working across multiple locations, the task can be equally tedious for a developer who has been working for quite some time on the same codebase or someone who is new to the team. Sounds like an overwhelming job, isn’t it, especially if it is a very large code base with several modules in it</p>

                <p className="mt-8">Here’s where you can breathe easy by using a very powerful tool provided by Google — <a href="#" className="underline"> Chrome DevTools </a>.</p>

                <p className="mt-8"> <span className="font-semibold">Open the DevTools on your Chrome tab</span> by right clicking and inspecting using ‘Inspect’ or pressing F12 from your keyboard</p>

                <p className="mt-8"> <span className="font-semibold">Type in ‘Show Coverage’</span> and the new Coverage tab will open as shown in the screen below:</p>
            </article>

            <div className="mt-12">
                <Tweets />
            </div>

            <article className="text-xl leading-relaxed md:w-2/3 mt-12 mx-auto">
                <p>How often have we come across situations where your project has a lot of code that may have been used at an earlier stage to build a <a href="#" className="underline"> MVP </a> and then years later it is just lying there because someone did not do a proper job of refactoring it?</p>

                <p className="mt-8">‘Often’ would be the obvious answer.</p>
            </article>
        </section>
    )
}

export default Content
