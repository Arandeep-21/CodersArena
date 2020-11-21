import React from "react";
import NavBar from "../NavBar/NavBar";
import "./ProfileForm.css";

function ProfileForm() {
  return (
    <div className="Profileform">
      <div className="header-wrapper">
        <NavBar />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h2 id="header" >Update Details</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xs-offset-3">
            <form
              id="contact-form"
              class="form"
              action="#"
              method="POST"
              role="form"
            >
              <div class="form-group">
                <label class="form-label" for="name">
                  Age
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  tabindex="1"
                  required
                ></input>
                /
              </div>
              <div class="form-group">
                <label class="form-label" for="name">
                  Occupation
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  tabindex="1"
                  required
                ></input>
              </div>
              <div class="form-group">
                <label class="form-label" for="message">
                  Skills
                </label>
                <textarea
                  rows="5"
                  cols="50"
                  name="message"
                  class="form-control"
                  id="message"
                  tabindex="4"
                  required
                ></textarea>
              </div>
              <div class="form-group">
                <label class="form-label" for="message">
                  Description
                </label>
                <textarea
                  rows="5"
                  cols="50"
                  name="message"
                  class="form-control"
                  id="message"
                  tabindex="4"
                  required
                ></textarea>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-start-order">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;