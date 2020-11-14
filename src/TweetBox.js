import { Avatar, Button } from '@material-ui/core'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')
    
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displayName: 'Hakim ziyech',
            username: 'HakimZ',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://th.bing.com/th/id/OIP.mb7ryKkAbUHxJeGZqsAOvQHaHS?w=175&h=180&c=7&o=5&pid=1.7"

        })
        setTweetMessage('');
        setTweetImage('');

    }

    const tweet = (e) => {
        setTweetMessage(e.target.value)
    }

    const image = (e) => {
        setTweetImage(e.target.value)
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://th.bing.com/th/id/OIP.mb7ryKkAbUHxJeGZqsAOvQHaHS?w=175&h=180&c=7&o=5&pid=1.7"/>
                    <input
                     onChange={tweet}   value={tweetMessage} placeholder="whats happening?" type="text"
                    />
                </div>
                   <input
                   onChange={image} value={tweetImage} className="tweetBox_imageInput"placeholder="Enter image URL" type="text" />
                <Button 
                    onClick={sendTweet}
                    type="submit"
                    className="tweet_Boxtbutton">Post</Button>
            </form>
        </div>
    )
}

export default TweetBox
