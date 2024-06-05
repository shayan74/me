import './App.css';
import AnimatedCursor from "react-animated-cursor"
import FirstSection from './_sections/FirstSection';
import SecondSection from './_sections/SecondSection';
import ThirdSection from './_sections/ThirdSection';
import FourthSection from './_sections/FourthSection';
import React, { Component }  from 'react';
import "./_sections/Style.css";

function App() {
  return (
    <div className="App">
        <AnimatedCursor 
        color='46, 45, 45'
        clickables={[
          'a',
          {
            target: '.uni',
          }

        ]}
        />

        <FirstSection></FirstSection>
        <SecondSection></SecondSection>
        <ThirdSection></ThirdSection>
        <FourthSection></FourthSection>
    </div>
  );
}

export default App;
