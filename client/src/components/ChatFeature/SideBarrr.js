import React from 'react'
import SidebarChat from './SidebarChat';
import "./SideBarrr.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { Avatar, IconButton } from '@material-ui/core';
import ChatIcon from "@material-ui/icons/Chat";
import MoreVerIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons"


function Sidebar() {
    return (
        <div className="sidebar">
        <div className="sidebar__header">
        <Avatar src = "https://www.flaticon.com/svg/static/icons/svg/149/149452.svg"/>
        <div className="sidebar__headerRight">
            <IconButton>
            <DonutLargeIcon />
            </IconButton>

            <IconButton>
            <ChatIcon />
            </IconButton>

            <IconButton>
            <MoreVerIcon />
            </IconButton>
        
            </div>
            </div>
        <div className = "sidebar__search">
            <div className = "sidebar__searchContainer">
                <SearchOutlined />
              <input placeholder="Search or start new chat" type = "text" /> 
            </div>
        
        </div>
        <div className = "sidebar__chats">
            <SidebarChat/>
            <SidebarChat/>
            <SidebarChat/>
        </div>
        </div>
    )
}

export default Sidebar

