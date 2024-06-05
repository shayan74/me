import React, { Component } from "react";
import "./Style.css";
import data from "./data.json"
//import { SocialIcon } from "react-social-icons";
import FullpageDiv from "./FullpageDiv";
//import "./Sections.css";
//import { Element } from "react-scroll";
import SkillBox from "./SkillBox";

class FourthSection extends Component {
  componentDidMount = () => {
    document.getElementById("me").style.color= "#e4e3e3";
  }
  Bgover = (id,color) => {
    document.getElementById(id).style.color= color;
  }

  render() {
    return (
      <FullpageDiv id="FourthSection" className="Content4">
        <div className="Copy">
        Code and design by: <lable className="uni" id="me" onMouseOver={() => {this.Bgover("me","");}} onMouseOut={() => {this.Bgover("me","#e4e3e3");}}> ME !</lable> 
        </div>      
      </FullpageDiv>
    );
  }
}

export default FourthSection;
