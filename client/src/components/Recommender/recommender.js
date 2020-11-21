import React, { Component } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
class Recommender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      problems: [],
    };
  }

  componentDidMount() {
    AOS.init({
      duration: 800,
    });
  }


  getProblems = async (handle) => {
    try {
      const resp = await axios.get("http://127.0.0.1:1234/get_problems", {
        params: {
          handle: "handle",
        },
      });
      console.log(resp);
      if (resp.statusText === "OK") {
        this.updateTimer();
      }
      var problems = JSON.parse('{{data | tojson}}');
      this.setState({
        problems: problems,
      });
    } catch (error) {
      console.log(error);
    }
  };

  

  render() {
    return (
        <div className="rec">
        <p>check console</p>
        
        {this.getProblems}
        </div>
    );
  }
}

export default Recommender;
