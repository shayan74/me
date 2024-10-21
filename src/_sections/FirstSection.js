import React, { Component } from "react";
import "./Style.css";
import data from "./data.json"
import FullpageDiv from "./FullpageDiv";
import { Link , Element } from "react-scroll";
import { FaLinkedinIn  , FaInstagram , FaGithub   } from 'react-icons/fa';
import { AiOutlineMail  } from 'react-icons/ai';



class FirstSection extends Component {

  MouseOver = (id,decoration) => {
    document.getElementById(id).style.textDecorationLine=decoration;
  }

  ContactMover = (id,color) => {
    document.getElementById(id).style.color=color;
  }
    componentDidMount () {
      this.ContactMover("Git","black");
      this.ContactMover("Linkedin","black");
      this.ContactMover("Instagram","black");
      this.ContactMover("Email","black");
      function changeWidth() {
 
        var scroll = (window.pageYOffset) + ((window.pageYOffset) * 0.07);
        var width = Math.min(scroll / 12.5);
        var newWindowHeight = window.innerHeight;
        var WindowWidth = window.innerWidth;

        document.getElementById('LeftBubble').style.width = width + 'vw';
        document.getElementById('LeftBubble').style.height = width + 'vw';
    
        
          if(newWindowHeight <= 900)
          {
            console.log("899");
            console.log(newWindowHeight);
            document.getElementById('LeftBubble').style.marginTop = (width * 1.6) + 'vw';
            //document.getElementById('hder').style.backgroundColor="#0000004d";

          }else if(newWindowHeight >= 900 & WindowWidth <= 1600){
            console.log("901");
            console.log(newWindowHeight);
            console.log(WindowWidth);
            document.getElementById('LeftBubble').style.marginTop = (width * 1.5) + 'vw';
            
          }else if(newWindowHeight >= 900 & WindowWidth <= 2100){
            console.log("901");
            console.log(newWindowHeight);
            console.log(WindowWidth);
            document.getElementById('LeftBubble').style.marginTop = (width * 1.1) + 'vw';

          }else if(newWindowHeight >= 900 & WindowWidth >= 2000 ){
            console.log("Else IF 2");
            console.log(newWindowHeight);
            console.log(WindowWidth);

            document.getElementById('LeftBubble').style.marginTop = (width * 0.85) + 'vw';
          }
          // else{
          //   console.log("Else1");
          //   console.log(newWindowHeight);
          //   //document.getElementById('LeftBubble').style.marginTop = (width * 1.45) + 'vw';
          // }
         





          // if (width >= 7) {
          //    //document.getElementById('LeftBubble').style.left = '-8vw'; // Maintain the original left position
          // } else {
          // console.log("Else2");
          // console.log(newWindowHeight);
          // document.getElementById('LeftBubble').style.marginTop = '7vw';
          // }

    }
    
    changeWidth();


    window.addEventListener('scroll', function () {
        requestAnimationFrame(changeWidth);
        document.getElementById('ContactDiv').style.display='grid';

    });
  }


  
  render() {
    return (
      
      <FullpageDiv id="FirstSection" className="Content">

      <div className="TopCircle"></div>
        <div className="Header" id="hder"> 
            <div className="LeftHeader">Shayan Ebrahimi</div>
            <div className="RightHeader">
              <ul>
                <li>
                  <Link 
                    activeClass="active" 
                    to="AboutFocus" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={1000} 
                  >
                  <a id="about" onMouseOver={() => {this.MouseOver("about","underline");}} onMouseOut={() => {this.MouseOver("about","");}} >
                    About
                  </a>
                  </Link>
                </li>
                <li>
                  <Link 
                    activeClass="active" 
                    to="SkillsFocus" 
                    spy={true} 
                    smooth={true} 
                    offset={-20} 
                    duration={1000} 
                  >
                  <a id="skills" onMouseOver={() => {this.MouseOver("skills","underline");}} onMouseOut={() => {this.MouseOver("skills","");}}>
                    Skills
                  </a>
                  </Link>
                </li>
                <li>
                  <Link 
                    activeClass="active" 
                    to="ContactFocus" 
                    spy={true} 
                    smooth={true} 
                    offset={-100} 
                    duration={500} 
                  >
                  <a id="contactLable" onMouseOver={() => {this.MouseOver("contactLable","underline");}} onMouseOut={() => {this.MouseOver("contactLable","");}} >
         
                    Contact
                  
                  </a>
                  </Link>
                </li>
              </ul>
            </div>
        </div>
        <div className="LeftBubble" id="LeftBubble">
            <div className="Contact" id="ContactDiv">   
            <div className="ContactIcons"><a href={data.links.Git} target="_blank"><FaGithub id="Git" onMouseOver={() => {this.ContactMover("Git","#ffa600");}} onMouseOut={() => {this.ContactMover("Git","black");}} /></a></div>       
            <div className="ContactIcons"><a href={data.links.LinkedIn} target="_blank"><FaLinkedinIn id="Linkedin"  onMouseOver={() => {this.ContactMover("Linkedin","#ffa600");}} onMouseOut={() => {this.ContactMover("Linkedin","black");}}/></a></div>
            <div className="ContactIcons"><a href={data.links.Instagram} target="_blank"><FaInstagram id="Instagram" onMouseOver={() => {this.ContactMover("Instagram","#ffa600");}} onMouseOut={() => {this.ContactMover("Instagram","black");}} /></a></div>
            <div className="ContactIcons"><a href={data.links.Email} target="_blank"><AiOutlineMail id="Email" onMouseOver={() => {this.ContactMover("Email","#ffa600");}} onMouseOut={() => {this.ContactMover("Email","black");}} /></a></div>
          </div>
        </div>
        <div className="RightBubble"></div>
        <div className="BigBubble">
        </div>
        <div className="BottomCircle"></div>
        <Element name="ContactFocus">
        
        <div className="MainText">
          <p>
            {data.title}
          </p>
          <p>
            {data.subtitle}
          </p>
        </div>
        </Element>
        <script></script>
      </FullpageDiv>
    );
  }
}

export default FirstSection;
