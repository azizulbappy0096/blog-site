import React, { useEffect } from 'react'


// --- components
import ContentImage from './Formatted/Image'
import Tweets from './Formatted/Tweets'
import List from "./Formatted/List"
import Code from './Formatted/Code'
import Paragraph from "./Formatted/Paragraph"
import Quote from "./Formatted/Quote"

function Header({ children }) {
    return(
        <h2 className="mt-4 font-semibold text-xl md:text-3xl">
            {children}
        </h2>
    )
}

function Tags({ children }) {
    return(
        <div className="mt-12 md:w-2/3 mx-auto">
                <ul className="flex flex-wrap space-x-2">
                   {children}
                </ul>
        </div>
    )
}

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

                <h2 className="mt-8 font-semibold text-xl md:text-3xl">
                    Use Helmet for web app
                </h2>

                <p className="mt-4">
                    Building Web Applications is so much fun. To make your coding even simpler, secure your application first.
                </p>

                <p className="mt-8">Use:</p>

                <List />

                <p className="mt-8">
                    If you find it doing the above practices a bit daunting, simply use the Helmet that will set them all to sensible default, and you would be able to tweak the required ones.
                </p>

                <p className="mt-8">
                    All you need to do is just use -
                </p>

                <Code />

                <p className="mt-8">
                    In your code and then add -
                </p>

                <Code />

                <p className="mt-8">
                Voila! You are good to go!
                </p>

                <Header>
                    Wrapping Up
                </Header>

                <Paragraph>
                No coding is difficult until you come across certain errors, and no language is easier until you find the best practices. So use the mentioned <span className="font-semibold"> Node.js backend best practices </span> in your project and make coding fun.
                </Paragraph>
            </article>

            <Tags>
                    <li className="p-2 mb-2 bg-gray-200 min-w-min"> JavaScript </li>
                    <li className="p-2 mb-2 bg-gray-200 min-w-min"> NodeJs </li>
                    <li className="p-2 mb-2 bg-gray-200 min-w-min"> CSS </li>
             </Tags>

        </section>
    )
}

export default Content
