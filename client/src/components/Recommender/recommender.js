import React, { Component } from "react";
import axios from "axios";
import AOS from "aos";
import "./recommender.css";
import "aos/dist/aos.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
class Recommender extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      problems: [],
    };
  }

  componentDidMount() {
    this.getProblems("lokesh011101");
    AOS.init({
      duration: 800,
    });
  }
  results = [];
  nestRemover = (def) => {
    if (def) {
      if (typeof def === "object" && !(typeof def[1] === "string")) {
        Object.keys(def).forEach((key) => {
          if (typeof def[key] === "string") {
            return;
          } else {
            this.nestRemover(def[key]);
          }
          this.nestRemover(def[key]);
        });
      } else {
        this.results.push(def);
      }
    }
  };
  getProblems = async (handle) => {
    try {
      const { data } = await axios.get("http://127.0.0.1:1234/get_problems", {
        params: {
          handle: "lokesh011101",
        },
      });
      console.log("resp: ", data);
      this.setState({
        problems: data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  renderContent = () => {
    return this.results.map((el) => (
      <>
        {console.log(el[0][4])}
        <li className="td-wrapper">
          <ul className="res-container">
            <li className="td-wrapper" style={{ color: "white" }}>
              Problem Name: {el[0][4]}
            </li>
            <li>
              <div class="buttons">
                <div class="reccontainer">
                  <a href={el[1]} class="btn effect04" target="_blank">
                    <span style={{ color: "white" }}>Problem Link</span>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </>
    ));
  };
  backk = () => {
    this.props.history.goBack();
  };
  render() {
    this.nestRemover(this.state.problems);
    if (this.state.problems) {
      this.results = this.results.filter(
        (thing, index, self) =>
          index === self.findIndex((t) => t[0] === thing[0])
      );
    }
    return (
      <div className="reccc">
        <IconButton onClick={() => this.backk()}>
          <ArrowBackIcon className="arr" />
        </IconButton>
        <h1 className="hhh">Problems that we recommend...</h1>
        <div className="rec">
          <ul className="res-container">
            {this.state.problems ? this.renderContent() : <div>Loading...</div>}
          </ul>
        </div>
      </div>
    );
  }
}

export default Recommender;
