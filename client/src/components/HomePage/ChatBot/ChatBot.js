import React, { Component } from "react";
import axios from "axios";
import "../HomePage.css";
import AOS from "aos";
import "aos/dist/aos.css";
class ChatBot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userMessages: [],
      botMessages: [],
      botGreeting:
        "Hi there! My name is CoderBOT. I will be helping you in getting started with programming.",
      botLoading: false,
      overlayStatus: "",
      timer: {
        minutes: 30,
        seconds: 0,
      },
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 800,
    });
  }
  updateTimer = () => {
    this.setState({
      overlayStatus: "active",
    });
  };

  updateUserMessages = async (newMessage) => {
    // Create a new array from current user messages
    var updatedUserMessagesArr = this.state.userMessages;

    // Create a new array from current bot messages
    var updatedBotMessagesArr = this.state.botMessages;

    // Render user message and bot's loading message
    this.setState({
      userMessages: updatedUserMessagesArr.concat(newMessage),
      botLoading: true,
    });
    try {
      const resp = await axios.get("http://127.0.0.1:1234/get_results", {
        params: {
          msg: newMessage,
        },
      });
      console.log(resp);
      if (resp.statusText === "OK") {
        this.updateTimer();
      }
      let botMessage = resp.data;
      this.setState({
        botMessages: updatedBotMessagesArr.concat(botMessage),
        botLoading: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  showMessages() {
    var userConvo = this.state.userMessages;

    // Show initial bot welcome message
    if (this.state.userMessages.length === 0) {
      return;
    }

    var updatedConvo = userConvo.map((data, index) => {
      var botResponse = this.state.botMessages[index];

      return (
        <div className="conversation-pair" key={"convo" + index}>
          <UserBubble message={data} key={"u" + index} />
          <BotBubble message={botResponse} key={"b" + index} />
        </div>
      );
    });

    return updatedConvo;
  }

  render() {
    return (
      <div id="app-container">
        <div className="convo-container">
          <BotBubble message={this.state.botGreeting} key="bot-00" />
          {this.showMessages()}
        </div>
        <UserInput
          userMessage={this.state.userMessage}
          updateUserMessages={this.updateUserMessages}
        />
      </div>
    );
  }
}

class UserBubble extends React.Component {
  render() {
    return (
      <div className="user-message-container">
        <div className="chat-bubble user">{this.props.message}</div>
      </div>
    );
  }
}

class BotBubble extends React.Component {
  componentDidMount = () => {
    var lastBubble = this.refs.chatBubble;
    lastBubble.scrollIntoView(true);
  };

  render() {
    return (
      <div className="bot-message-container">
        <div className="img-avatar-container">
          <img
            className="bot-avatar"
            src="https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_70,h_68/https://www.gavstech.com/wp-content/uploads/2017/07/solution-1.png"
            alt="bot avatar"
          />
        </div>

        <div className="chat-bubble bot" ref="chatBubble">
          {this.props.message ? this.props.message : "..."}
        </div>
      </div>
    );
  }
}

class UserInput extends React.Component {
  handleChange = (event) => {
    if (event.key === "Enter") {
      var userInput = event.target.value;

      // update state on parent component
      this.props.updateUserMessages(userInput);
      event.target.value = "";
    }
  };

  render() {
    return (
      <div className="input-container">
        <input
          id="chat"
          type="text"
          onKeyPress={this.handleChange}
          placeholder="type in your text to chat"
        />
      </div>
    );
  }
}

export default ChatBot;
