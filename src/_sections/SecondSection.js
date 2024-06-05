import React, { Component } from "react";
import "./Style.css";
import data from "./data.json"
import { TypeAnimation } from 'react-type-animation';
import { GrLocationPin } from "react-icons/gr";

//import { SocialIcon } from "react-social-icons";
import FullpageDiv from "./FullpageDiv";
//import "./Sections.css";
//import { Element } from "react-scroll";

class SecondSection extends Component {

 Bgover = (id,color) => {
    document.getElementById(id).style.backgroundColor= color;
  }


  render() {
    return (
      <FullpageDiv id="SecondSection" className="Content2">
        <div className="MainText2" id="AboutFocus">
          <p className="Paragraph" id="para" onMouseOver={() => {this.Bgover("para","#ffa600");}} onMouseOut={() => {this.Bgover("para","");}}>
            
          <TypeAnimation
            sequence={[
              "I'm a Web Developer", //  Continuing previous Text
              2500,
              "I'm a Designer",
              1500,
              "I'm a Software Engineer",
              3500,
            ]}
            repeat={Infinity}
            deletionSpeed={70}

          />


          </p>

          <br />
          <br />
          <br />

          <p className="ParagraphEdu">
            {data.education1} <label className="uni">{data.uni1}</label>
            <br />
            {data.education2} <label className="uni">{data.uni2}</label>
            <br />
            <br />
            <GrLocationPin color="red"/> Location: London, UK

          </p>
        </div>

              
      </FullpageDiv>
    );
  }
}

export default SecondSection;
