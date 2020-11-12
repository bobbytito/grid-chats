import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from "./Post"


function Feed() {
    return (
        <div className='feed'>
            {/* Header */}
            <div className="feed_header">
                <h2>Home Widgets</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />


            {/* Post Section */}
            <Post displayName="Robo tito"
            username="bobby_tito_"
            verified={true}
            text="Yoo its workding"
            image="https://media2.giphy.com/media/r2jnl5GABxAvOY270o/giphy.webp"
            avatar="https://th.bing.com/th/id/OIP.mb7ryKkAbUHxJeGZqsAOvQHaHS?w=175&h=180&c=7&o=5&pid=1.7"
            />
            <Post />
            <Post />
            <Post />
            <Post />
            
        </div>
    )
}

export default Feed
