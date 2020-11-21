import React from 'react'
import "./Chattt.css"
import { Avatar, IconButton } from '@material-ui/core';
import MicIcon from "@material-ui/icons/Mic"
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon"
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';


function Chat() {
    return (
        <div className="chat">
            <div className = "chat__header">
            <Avatar />
         <div className = "chat__headerInfo">
             <h3>Room name</h3>
             <p>Last seen at..</p>
         </div>
         <div className = "chat__headerRight">
            <IconButton>
                <SearchOutlined/>
            </IconButton>
            <IconButton>
                <AttachFile/>
            </IconButton>
            <IconButton>
                <MoreVert/>
            </IconButton>
            </div>
            </div>
         <div className="chat--body">
             <p className="chat_message">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>

             <p className="chat_message chat_reciever">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>

             <p className="chat_message ">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>

             <p className="chat_message ">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>

             <p className="chat_message ">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>

             <p className="chat_message ">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>

             <p className="chat_message ">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>

             <p className="chat_message ">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>


             <p className="chat_message ">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>


             <p className="chat_message ">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>


             <p className="chat_message ">
                 <span className = "chat__name">Sonny</span>
                 this is a message
                 <span className="chat__timestamp">
                     {new Date().toUTCString()}
                 </span>
             </p>

             


         </div>
         <div className = "chat__footer">
            <InsertEmoticonIcon/>
            <form>
                <input placeholder="Type a message" type="text" />
                <button type = "submit">Send a message</button>
            </form>
            <MicIcon /> 
         </div>
        </div>
    )
}

export default Chat
