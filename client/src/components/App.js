import React, { Component } from "react";
import { connect } from "react-redux";
import LandingPage from "./LandingPage/LandingPage";
import { Router, Route } from "react-router-dom";
import history from "../history";
import { fetchUser } from "../actions";
import ProfilePage from "./ProfilePage/ProfilePage";
import HomePage from "./HomePage/HomePage";
import "./App.css";
import Particles from "react-particles-js";
import ProfileForm from "./ProfileForm/ProfileForm";
// const LineLoader = () => {
//   return <div className="lineloader"></div>;
// };
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    // console.log(this.props.auth);
    return (
      <div className="appcontainer">
        <Particles
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
        <Router history={history}>
          {/* <Route path="/home/loading" exact component={LineLoader} /> */}
          {/* <Route path={"/eRrOrXxX"} exact component={Error} /> */}
          <Route path="/" exact component={LandingPage} />
          <Route path="/profile" exact component={ProfilePage} />
          <Route path="/home" exact component={HomePage} />
          <Route path="/FormProfile" exact component={ProfileForm} />
        </Router>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};

export default connect(mapStateToProps, { fetchUser })(App);
