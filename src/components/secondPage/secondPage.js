import React, { Component } from "react";
import { FaCity } from "react-icons/fa";
import Block from "./block";
import "./secondPage.css";
import Content from "./Content";
class SecondPage extends Component {
  render() {
    return (
      <div className="secondPage">
        <div className="block">
          <div className="block1">
            <Block
              icon={<FaCity />}
              title="Tailor your search"
              content="Lorem ipsum dolor sit amet, consetetur elitr"
            />
          </div>
          <div className="block2">
            <Block
              icon={<FaCity />}
              title="Create & Customise"
              content="Lorem ipsum dolor sit amet, consetetur elitr"
            />
          </div>
          <div className="block3">
            <Block
              icon={<FaCity />}
              title="Collaborate with friends"
              content="Lorem ipsum dolor sit amet, consetetur elitr"
            />
          </div>
          <div className="block4">
            <Block
              icon={<FaCity />}
              title="Explore the real London"
              content="Lorem ipsum dolor sit amet, consetetur elitr"
            />
          </div>
        </div>
        <div className="content">
          {" "}
          <Content />
          <div className="button">
            <button className="button1">Get started</button>
            <button className="button2">More about us</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SecondPage;
