import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="https://th.bing.com/th/id/OIP.mb7ryKkAbUHxJeGZqsAOvQHaHS?w=175&h=180&c=7&o=5&pid=1.7"/>
                    <input placeholder="whats happening?" type="text"
                    />
                </div>
                   <input className="tweetBox_imageInput"placeholder="Enter image URL" type="text" />
                <Button className="tweet_Boxtbutton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
