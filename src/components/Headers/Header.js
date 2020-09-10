import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Header__explore">Explore</div>
        <div className="Header__about">About</div>
        <div className="Header__partner">Become a Partner</div>
        <div className="Header__contact">Contact</div>
      </div>
    );
  }
}

export default Header;
