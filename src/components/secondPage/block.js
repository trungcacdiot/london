import React, { Component } from "react";
class Block extends Component {
  render() {
    return (
      <div className="blockContainer">
        <div className="blockContainer__icon">{this.props.icon}</div>
        <div className="blockContainer__content">
          <div className="title">{this.props.title}</div>
          <div className="contents">{this.props.content}</div>
        </div>
      </div>
    );
  }
}
export default Block;
