import React, { Component } from "react";
import "./Page5.css";
import Box from "../thirdPage/box";
import Board from "./board";
import Travel from "../thirdPage/travel.jpg";
import { GrMapLocation } from "react-icons/gr";
import { FcMusic } from "react-icons/fc";
class Page5 extends Component {
  render() {
    return (
      <div className="page5">
        <div className="boards">
          <Board />
        </div>
        <div className="page5__boxs">
          <Box
            img={<img className="box__img" src={Travel} />}
            title="Travel like a local"
            icon={<GrMapLocation />}
            icon1={<FcMusic />}
            location="Hackney"
          />
          <Box
            img={<img className="box__img" src={Travel} />}
            title="Travel like a local"
            icon={<GrMapLocation />}
            icon1={<FcMusic />}
            location="Hackney"
          />
          <Box
            img={<img className="box__img" src={Travel} />}
            title="Travel like a local"
            icon={<GrMapLocation />}
            icon1={<FcMusic />}
            location="Hackney"
          />
        </div>
      </div>
    );
  }
}

export default Page5;
