import React from 'react'
import { Tweet } from 'react-twitter-widgets'

function Tweets() {
    return (
        <Tweet 
            tweetId="1410316262224318464" 
            options={{
                align: "center",
                conversation: "none"
            }}
        />     
    )
}

export default Tweets
