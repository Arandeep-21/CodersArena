import React, { Component } from "react";
import anime from "animejs";
import "./LandingPage.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { connect } from "react-redux";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.ml3 = React.createRef();
  }
  componentDidMount() {
    // this.ml3.current.innerHTML = this.ml3.current.textContent.replace(
    //   /\S/g,
    //   "<span class='letter'>$&</span>"
    // );
    AOS.init({
      duration: 2500,
    });
  }
  render() {
    console.log(this.props.auth);
    // anime
    //   .timeline({ loop: true })
    //   .add({
    //     targets: ".ml3 .letter",
    //     opacity: [0, 1],
    //     easing: "easeInOutQuad",
    //     duration: 2250,
    //     delay: (el, i) => 150 * (i + 1),
    //   })
    //   .add({
    //     targets: ".ml3",
    //     opacity: 0,
    //     duration: 1000,
    //     easing: "easeOutExpo",
    //     delay: 1000,
    //   });
    return (
      <div className="landingpage">
        <div className="main">
          <div className="doodle">
            <div className="d1" data-aos="fade-right"></div>
            <div className="d2" data-aos="fade-right"></div>
            <div className="d3" data-aos="fade-up"></div>
            <div className="d4" data-aos="fade-left"></div>
          </div>
          {/* <button className="btn" type="button">
            Start
          </button> */}
          <div
            className="title_container"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <h1 className="ml3h1" ref={this.ml3}>
              Coder's Arena
            </h1>
          </div>
          <div className="login_button">
            <div className="loginn">
              <div className="l11">
                <a
                  href="http://localhost:5000/auth/google"
                  className="linked a1"
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <div className="span2">Login!</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return { auth };
};
export default connect(mapStateToProps)(LandingPage);
