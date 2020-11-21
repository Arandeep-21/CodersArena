import React, { Component } from "react";
import "./Contests.css";
import axios from "axios";
class Contests extends Component {
  componentDidMount() {
    this.contests();
  }
  state = { contests: {} };
  contests = async () => {
    const { data } = await axios.get("/api/cnts");
    this.setState({ contests: data.objects });
  };

  render() {
    if (this.state.contests) {
      let x = this.state.contests;
      console.log(x);
      const y = Object.keys(x).map((cnt) => {
        console.log(x[cnt]);
        return (
          <li className="tdcnt-wrapper cntn" style={{ color: "black" }}>
            <a className="cnta" href={x[cnt].href}>
              {x[cnt].event}
            </a>
          </li>
        );
      });
      return (
        <div className="cntcont">
          <h2 className="h2cnt">Contests</h2>
          <ul className="rescnt-container">{y}</ul>
        </div>
      );
    } else {
      return <div className="cntcont">ksdfb</div>;
    }
  }
}

export default Contests;
