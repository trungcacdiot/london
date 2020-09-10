import React from "react";
// import icon
import { GrMapLocation } from "react-icons/gr";
import { GrGroup } from "react-icons/gr";
import { FcCalendar, FcSearch } from "react-icons/fc";
import { FaCity } from "react-icons/fa";
// import local src
import "./App.css";
import London from "./london.jpg";
import Letsbegin from "./components/Letsbegin/Letsbegin";
function App() {
  return (
    <div className="App">
      <img className="App__Londonimg" src={London} alt="" />
      <div className="App__container">
        <div className="App__container__letsbegin">
          <div className="App__container__letsbegin__location">
            <Letsbegin name="LOCATION" icon={<GrMapLocation />}>
              3 Selecttions
            </Letsbegin>
          </div>
          <div className="App__container__letsbegin__group">
            <Letsbegin name="GROUP" icon={<GrGroup />}>
              Group Size
            </Letsbegin>
          </div>

          <div className="App__container__letsbegin__date">
            <Letsbegin name="DATE" icon={<FcCalendar />}>
              Select Date
            </Letsbegin>
          </div>

          <div className="App__container__letsbegin__interests">
            <Letsbegin
              name="INTERESTS"
              icon={<FaCity />}
              iconSearch={<FcSearch />}
            >
              Select at least 2 categories
            </Letsbegin>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
