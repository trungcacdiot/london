import React, { Component } from "react";
import {
  FcBusinesswoman,
  FcBusinessman,
  FcButtingIn,
  FcBiohazard,
} from "react-icons/fc";
import "./page4.css";
import Category from "./category";
class Page4 extends Component {
  render() {
    return (
      <div className="page4">
        <div className="page4__content">
          <div>
            <div className="page4__content__explore">Explore</div>
            <div className="page4__content__our">Our Categories</div>
          </div>
          <div className="page4__content__content">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna.
          </div>
        </div>
        <div className="page4__category">
          <Category
            icon={<FcBusinesswoman />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBusinessman />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcButtingIn />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBiohazard />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBusinesswoman />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBusinessman />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBusinesswoman />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBiohazard />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBiohazard />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBusinesswoman />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBiohazard />}
            title="Alfresco"
            content="Single Line Subheading"
          />
          <Category
            icon={<FcBusinesswoman />}
            title="Alfresco"
            content="Single Line Subheading"
          />
        </div>
      </div>
    );
  }
}

export default Page4;
