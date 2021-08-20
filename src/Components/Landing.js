import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

class Landing extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <div className="outer">

        <div className="inner-left">
          <div className="logo">
            <Fade bottom>
               <img className="logo_img" alt="" src={"images/flock_logo.png"} />
            </Fade>
          </div>
          <div className="text">
            <Fade bottom duration={1200}>
              <h1>{name}</h1>
            </Fade>
            <Fade bottom duration={2400}>
              <h2>Email us at <a href="mailto:hello@flocksf.com">hello@flocksf.com</a>.</h2>
            </Fade>
          </div>
        </div>

        <div className="inner-right">
          <Fade right>
            <div className="item-wrap">
              <img className="bg"  alt="" src={"images/flock_bg.jpg"} />
            </div>
          </Fade>
        </div>

      </div>
    );
  }
}

export default Landing;
