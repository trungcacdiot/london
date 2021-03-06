import React, { Component } from "react";

class Box extends Component {
  render() {
    return (
      <div className="box">
        <div className="box__icon">{this.props.icon}</div>
        <div className="box__img">{this.props.img}</div>
        <div className="title box__title ">{this.props.title}</div>
        <div className="box__content">
          looking for something a bit different in the city? How does a ball-pit
          bar sound? One of London's most sought after activities, Ballie
          Ballerson are leaders when it comes to unusual night out ...
          <br />
        </div>
        <div className="box__buttom">
          <div className="box__icon1">{this.props.icon1}</div>
          <div>{this.props.location}</div>
        </div>
      </div>
    );
  }
}

export default Box;
