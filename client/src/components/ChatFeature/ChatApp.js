import React, { useEffect, useState } from "react";
import "./ChatApp.css";
import Sidebar from "./SideBarrr";
import Chat from "./Chattt";
import Pusher from "pusher-js";
import axios from "./axioss";
import Particles from "react-particles-js";
import NavBar from "./NavBar";

function ChatApp() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/messages/sync");
        setMessages(response.data);
      } catch {
        console.log("error");
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    // Pusher.logToConsole = true;

    const pusher = new Pusher("8d3361db75fa48d92ab2", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
      setMessages([...messages, data]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);
  return (
    <>
      <NavBar />
      <div className="app">
        <Particles
          className="parti"
          id="pari"
          params={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: true,
                  value_area: 1500,
                },
              },
              line_linked: {
                enable: true,
                opacity: 0.02,
              },
              move: {
                direction: "right",
                speed: 0.5,
              },
              size: {
                value: 1,
              },
              opacity: {
                anim: {
                  enable: true,
                  speed: 1,
                  opacity_min: 0.05,
                },
              },
            },
            interactivity: {
              events: {
                onclick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                push: {
                  particles_nb: 1,
                },
              },
            },
            retina_detect: true,
          }}
        />
        <div className="app_body">
          <Sidebar />
          <Chat messages={messages} />
        </div>
      </div>
    </>
  );
}

export default ChatApp;
