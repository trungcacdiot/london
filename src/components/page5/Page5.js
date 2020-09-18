import React, {Component} from 'react';
import "./Page5.css";
import Box from "../thirdPage/box";
import Travel from "../thirdPage/travel.jpg";
import { GrMapLocation } from "react-icons/gr";
import { FcMusic } from "react-icons/fc";
class Page5 extends Component{
    render(){
        return(<div>
            <Box
            img={<img className="box__img" src={Travel} />}
            title="Travel like a local"
            icon={<GrMapLocation />}
            icon1={<FcMusic />}
            location="Hackney"
          />
          <Box
            img={<img className="box__img" src={Travel} />}
            title="Travel like a local"
            icon={<GrMapLocation />}
            icon1={<FcMusic />}
            location="Hackney"
          />
          <Box
            img={<img className="box__img" src={Travel} />}
            title="Travel like a local"
            icon={<GrMapLocation />}
            icon1={<FcMusic />}
            location="Hackney"
          />
        </div>);

    }
}


export default Page5