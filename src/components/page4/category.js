import React, { Component } from "react";

class Category extends Component {
  render() {
    return (
      <div className="Category">
        <div className="Category__icon">{this.props.icon}</div>
        <div className="Category__title">{this.props.title}</div>
        <div className="Category__content">{this.props.content}</div>
      </div>
    );
  }
}

export default Category;
