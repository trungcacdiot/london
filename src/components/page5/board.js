import React, { Component } from "react";
import { FcBusinesswoman, FcBusinessman, FcBiohazard } from "react-icons/fc";
class Board extends Component {
  render() {
    return (
      <div className="board">
        <div className="board__personpicture">
          <div className="circle">
            <div className="icon">
              <FcBusinesswoman />
            </div>
          </div>
          <div className="circle">
            <div className="icon">
              <FcBusinessman />
            </div>
          </div>

          <div className="circle">
            <div className="icon">
              <FcBiohazard />
            </div>
          </div>
        </div>
        <div className="board__contents">
          <div className="board__content">
            <h1>emshelx</h1>
            <p>
              Lorem ipsum dolor sit amet, conseteur sadipscing elitr,sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum.
            </p>
          </div>
          <div className="board__button">
            <button>See full intinerary</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
