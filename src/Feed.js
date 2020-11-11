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
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
        </div>
    )
}

export default Feed
