import React, { Component } from "react";
import ChatBot from "./ChatBot/ChatBot";
import NavBar from "./NavBar";
import Contests from "../Contests/Contests";

class HomePage extends Component {
  render() {
    return (
      <div className="chatbot_container">
        <NavBar data-aos-duration="2500" data-aos="fade-down" />
        <Contests />
        <ChatBot />
      </div>
    );
  }
}

export default HomePage;
