import React from 'react'
import './Widget.css'
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search"

function Widget() {
    return (
        <div className="widget">
            <div className="widgets_input">
                <SearchIcon className="widgets_searchIcon" />
                <input placeholder="Search Twitter" types="text" />
            </div>

            <div className="widgers_widgerContainer">
                <h2>Whats Happening</h2>
                <TwitterTweetEmbed tweetId={"1326318723993636866"} />

            </div>
        </div>
    )
}

export default Widget
