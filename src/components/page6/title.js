import React, { Component } from "react";
import Travel from "../thirdPage/travel.jpg";
class Title extends Component {
  render() {
    return (
      <div className="Title">
        <img className="Title__img" src={Travel} />
        <div className="Title__content">
          <h1>{this.props.title}</h1>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export default Title;
