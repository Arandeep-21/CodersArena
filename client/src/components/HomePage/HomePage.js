import React, { Component } from "react";
import ChatBot from "./ChatBot/ChatBot";
import NavBar from "./NavBar";

class HomePage extends Component {
  models = [
    "https://go.echoar.xyz/MM6L",
    "https://go.echoar.xyz/Z1LF",
    "https://go.echoar.xyz/ZFhR",
    "https://go.echoar.xyz/Mv44",
    "https://go.echoar.xyz/aJUz",
    "https://go.echoar.xyz/Ee9s",
    "https://go.echoar.xyz/ygDw",
    "https://go.echoar.xyz/Cfuh",
  ];
  state = { count: 0 };
  render3D = () => {
    return (
      <>
        <iframe
          src={this.models[this.state.count]}
          allow="camera *"
          id="iframe"
          title="title"
        ></iframe>
      </>
    );
  };
  render() {
    return (
      <div className="chatbot_container">
        <NavBar data-aos-duration="2500" data-aos="fade-down" />
        <h1 className="modelll">Visualize amazing Data Structures...</h1>
        <select id="selds" className="drpdn">
          <option value="item-1">BFS</option>
          <option value="item-2">DFS</option>
          <option value="item-3">Selection Sort</option>
          <option value="item-4">Other</option>
        </select>
        {this.render3D()}
        <div className="buttonss">
          <div className="reccontainer">
            <button
              onClick={(e) => {
                console.log(this.state.count);
                if (this.state.count === 0) {
                  this.setState({ count: 7 });
                } else {
                  this.setState({ count: this.state.count - 1 });
                }
              }}
              className="btnn effect05"
              target="_blank"
            >
              <span style={{ color: "white" }}>Back</span>
            </button>
            <button
              onClick={(e) => {
                console.log(this.state.count);
                this.setState({ count: (this.state.count + 1) % 8 });
              }}
              id="leftt"
              className="btnn effect05"
              target="_blank"
            >
              <span style={{ color: "white" }}>Next</span>
            </button>
          </div>
        </div>

        <ChatBot />
      </div>
    );
  }
}

export default HomePage;
