import React, { Component } from "react";
import "./Style.css";
import data from "./data.json"
//import { SocialIcon } from "react-social-icons";
import FullpageDiv from "./FullpageDiv";
//import "./Sections.css";
//import { Element } from "react-scroll";
import SkillBox from "./SkillBox";

class ThirdSection extends Component {

  render() {
    return (
      <FullpageDiv id="ThirdSection" className="Content3">

        <h2 className="SectionsTitle" id="SkillsFocus">{data.sections[0].title}</h2>
        <div className="SkilksContainer">
            {data.sections[0].items.map((task) => {
              return [
                <SkillBox skill={task}/>
              ];
            })}
        </div>      
      </FullpageDiv>
    );
  }
}

export default ThirdSection;
