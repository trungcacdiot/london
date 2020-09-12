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
        <div className="App__logo">
          <div className="logo">logo</div>
          <div>
            <button className="signin">sign in</button>
          </div>
        </div>
        <div className="Headers">
          <Header />
        </div>
      </div>
      <div className="App__slogan"><p id="first"><span >Discover</span> the real London.</p>
       <p id="second">Creat a bestpoke intinerary in the city of London for you and up to three friends.</p> </div>
   
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
