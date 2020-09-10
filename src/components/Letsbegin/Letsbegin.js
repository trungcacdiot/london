import React, { Component } from "react";
import { GrMapLocation } from "react-icons/gr";
import "./Letsbegin.css";
class Letsbegin extends Component {
  render() {
    return (
      <div className="container-option">
        <div className="option">
          <div className="option__icon">{this.props.icon}</div>
          <div className="option__selection">
            <div className="option__name">{this.props.name}</div>
            <div className="option__action">{this.props.children}</div>
          </div>
        </div>
        <div className="iconSearch">{this.props.iconSearch}</div>
      </div>
    );
  }
}

export default Letsbegin;
