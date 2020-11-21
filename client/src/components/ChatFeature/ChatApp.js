import React from 'react'
import "./ChatApp.css"
import Sidebar from "./SideBarrr";
import Chat from "./Chattt";

function ChatApp() {
    return (
        <div className="app">
          <div className="app_body">
            <Sidebar />
            <Chat/>   
          </div>
        </div>
    )
}

export default ChatApp
