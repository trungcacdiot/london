import React, { Component } from "react";
import "./thirdPage.css";
import Box from "./box";
import Travel from "./travel.jpg";
import { GrMapLocation } from "react-icons/gr";
class ThirdPage extends Component {
  render() {
    return (
      <div className="thirdPage">
        <p className="title">
          <br />
          <br />
          <br />
          FEATURED EXPERIENCES <br />
          <br />
        </p>
        <p className="thirdPage__color"></p>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna.
        </p>
        <div className="thirdPage__box">
          <Box
            img={<img className="box__img" src={Travel} />}
            title="Travel like a local"
            icon={<GrMapLocation />}
          />
          <Box
            img={<img className="box__img" src={Travel} />}
            title="Travel like a local"
            icon={<GrMapLocation />}
          />
          <Box
            img={<img className="box__img" src={Travel} />}
            title="Travel like a local"
            icon={<GrMapLocation />}
          />
        </div>
      </div>
    );
  }
}

export default ThirdPage;
