import React, { useState, useEffect } from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from "./Post"
import db from './firebase'


function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
  //code..  
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))  
    }, [])

    return (
        <div className='feed'>
            {/* Header */}
            <div className="feed_header">
                <h2>Home Widgets</h2>
            </div>

            {/* TweetBox */}
            <TweetBox />


            {posts.map(post => (
                <Post displayName={post.displayName}
                username={post.username}
                verified={post.verified}
                text={post.text}
                image={post.image}
                avatar={post.avatar}
            />
                ))}
            <Post />
            <Post />
            <Post />
            <Post />
            
        </div>
    )
}

export default Feed
