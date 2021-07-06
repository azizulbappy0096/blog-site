import React from 'react'
import Head from 'next/head'


// --- components
import Main from '../../../components/Post/Main'

function Post() {
    return (
        <div>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <header className="w-full h-20 header">
          
        </header>
  
        <main>
          <Main />
        </main>
      </div>
    )
}

export default Post
