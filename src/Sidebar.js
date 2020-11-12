import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import MessageIcon from '@material-ui/icons/Message';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import { Button } from '@material-ui/core'
import AndroidIcon from '@material-ui/icons/Android';

function Sidebar() {
    return (
        <div className="sidebar">

            <AndroidIcon className='sidebar_twitterIcon'/>
            {/* Twitter icon  */}

            <SidebarOption active Icon={HomeIcon} text='Home'/>
            <SidebarOption Icon={SearchIcon} text='Explore'/>
            <SidebarOption Icon={NotificationsActiveIcon} text='Notifications'/>
            <SidebarOption Icon={MessageIcon} text='Messages' />
            <SidebarOption Icon={BookmarksIcon} text='Bookmarks' />
            <SidebarOption Icon={ListAltIcon} text='List' />
            <SidebarOption Icon={AccountBoxIcon} text='Profile' />
            <SidebarOption Icon={UnfoldMoreIcon} text='More' />

            <Button variant='outlined' className='sidebar_tweet' fullWidth>Post</Button>

        </div>
    )
}

export default Sidebar
