import React, { Component } from "react";
import Title from "./title";
import Travel from "../thirdPage/travel.jpg";
import "./Page6.css";
import { FiInstagram } from "react-icons/fi";
class Page6 extends Component {
  render() {
    return (
      <div className="page6">
        <div className="page6_left">
          <div className="latest_news">
            <h1>LATEST NEWS</h1>
            <p>
              {" "}
              Keep up to date with the lastest news and events from Tailored
              Experiences...
            </p>
          </div>
          <div className="Titles">
            <Title title="EVENTS">
              Erat, sed diam voluptuat vero eos et accusam et justo duo.
            </Title>
            <Title title="COMPANY NEWS">
              Erat, sed diam voluptuat vero eos et accusam et justo duo.
            </Title>
            <Title title="INFLUENCERS">
              Erat, sed diam voluptuat vero eos et accusam et justo duo.
            </Title>
          </div>
        </div>
        <div className="page6_right">
          <div className="top_right">
            <FiInstagram className="icon_insta" /> @ tailoredexperiences
          </div>

          <div className="page6_right__img">
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
            <img className="right_img" src={Travel} />
          </div>
        </div>
      </div>
    );
  }
}

export default Page6;
