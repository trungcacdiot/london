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
import Header from "./components/Headers/Header";

function App() {
  return (
    <div className="App">
      <img className="App__Londonimg" src={London} alt="" />
      <div className="App__gradient">
        <a href="https://xd.adobe.com/view/86965aff-eaa5-4211-8b48-d21a67093d70-d3c5/screen/9ada8a9c-ec61-4f76-a5ed-0a379291f870?fbclid=IwAR0lBOXNQ3niSJyQskWFQ-ZPcGXBbFpxZccf_2zBoZx1n-92tY-FuGwx8OY"></a>
        <div>logo</div>
        <div className="Headers">
          <Header />
        </div>
        <div>sign in</div>
      </div>
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
