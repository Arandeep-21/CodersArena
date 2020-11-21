import React, { Component } from "react";
//import anime from "animejs";
import NavBar from "../NavBar/NavBar";
import "./ProfilePage.css";
import { fetch_problem_data } from "../../actions";
import { connect } from "react-redux";

class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetch_problem_data("tourist");
  }
  render() {
    console.log(this.props.auth);
    return (
      <div className="ProfilePage">
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700"
          rel="stylesheet"
        />
        <div className="header-wrapper">
          <NavBar />
        </div>
        <div className="main-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-8 m-auto order-xl-2 mb-5 mb-xl-0">
                <div className="card card-profile shadow">
                  <div className="row justify-content-center">
                    <div className="col-lg-3 order-lg-2">
                      <div className="card-profile-image">
                        <a href="/profile">
                          {this.props.auth ? (
                            <img
                              src={this.props.auth.userImage}
                              className="rounded-circle"
                              alt="your pic man!"
                            ></img>
                          ) : (
                            <></>
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"></div>
                  <button className="btn" type="button">Edit</button>
                  <div className="card-body pt-0 pt-md-4">
                    <div className="row">
                      <div className="col">
                        <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                          <div>
                            {this.props.auth ? (
                              <span className="heading">
                                {this.props.auth.name}
                              </span>
                            ) : (
                              <></>
                            )}
                            <span className="description">Name</span>
                          </div>
                          <div>
                            <span className="heading">22</span>
                            <span className="description">Age</span>
                          </div>
                          <div>
                            <span className="heading">Student</span>
                            <span className="description">Occupation</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="h3pp">
                        {this.props.auth ? (
                          <span>{this.props.auth.email}</span>
                        ) : (
                          <></>
                        )}
                      </h3>
                      <div className="h5 font-weight-300">
                        <i className="ni location_pin mr-2"></i>Email
                      </div>
                      <hr className="my-4" />
                      <h2 className="aaaaa">Welcome To Our Platform!</h2>
                      <h4>Your Skills</h4>
                      <ul>
                        <li>C++</li>
                        <li>JS</li>
                        <li>Machine Learning</li>
                      </ul>
                      {this.props.numOfProblems ? (
                        <>
                          <h5 className="h5pp">
                            Number of questions solved in codeforces
                          </h5>
                          <p>{this.props.numOfProblems}</p>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = ({ numOfProblems, auth }) => {
  return { numOfProblems, auth };
};
export default connect(mapStateToProps, { fetch_problem_data })(ProfilePage);
