import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import pressBanner from '../../images/Blurred_Press_Banner.png';
import horoscope from '../../images/horoscope.png';
import heart from '../../images/Icons/heart_purple.svg';
import smartSearch from '../../images/smartsearch.png';
import phone1 from '../../images/phone1.png';
import phone2 from '../../images/phone2.png';
import phone3 from '../../images/phone3.png';
import LandingHeader from '../../Header/components/LandingHeader';
import Footer from '../../Footer/components/Footer';
        

class Home extends Component{

  render(){

    return (

      <div className="homeContainer">
        <LandingHeader />
        <SubHeader/>
        <img id="pressBanner" src={pressBanner} alt="Press banner" />
        <InstructionsPanel/>
        <FeaturesPanel/>
        <Footer/>
      </div>

    )
  }
}

function SubHeader(){
  return (
    <div id="subHeaderContainer">

      <h1>Modern Dating App powered by an astrology algorithm</h1>

      Positive awareness delivered daily with<br/>
      customized matches and personalized<br/>
      horoscopes.

      <br/><br/>

      <Link to="/signup"
        id="homeSignupLink"
        className="roundedLink">Sign up</Link>

    </div>
  )
}

function InstructionsPanel(){
  return (
    <div>
      <br/><br/>
      <h1 className="purpleHeaderTitle centeredText">How it works</h1>
      <div id="instructionsMainContainer">
        <img id="phone2Img"
            src={phone2}
            alt="Background iphone 2"/>
        <div id="instructionsContainer">
          <ol>
            <li id="instructionOne">
              <span className="purpleHeader">Lorem ipsum dolor sit amet</span> <br/>
              <span className="infoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.</span>
            </li>
            <li id="instructionTwo">
              <span className="purpleHeader">Lorem ipsum dolor sit amet</span> <br/>
              <span className="infoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.</span>
            </li>
            <li id="instructionThree">
              <span className="purpleHeader">Lorem ipsum dolor sit amet</span> <br/>
              <span className="infoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.</span>
            </li>
          </ol>
        </div>
        <div >
          <img id="phone1Img"
               src={phone1}
               alt="Background iphone 1"/>
          <img src={phone3}
               alt="Background iphone 3"/>
        </div>
      </div>
      <div id="instructionsMainContainer_small">
        <div id="instructionsContainer">
          <ol>
            <li id="instructionOne">
              <span className="purpleHeader">Lorem ipsum dolor sit amet</span> <br/>
              <span className="infoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.</span>
              <img id="phone1Img"
              src={phone1}
              alt="Background iphone 2"/>
            </li>
            <li id="instructionTwo">
              <span className="purpleHeader">Lorem ipsum dolor sit amet</span> <br/>
              <span className="infoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.</span>
              <img id="phone2Img"
              src={phone2}
              alt="Background iphone 2"/>
            </li>
            <li id="instructionThree">
              <span className="purpleHeader">Lorem ipsum dolor sit amet</span> <br/>
              <span className="infoText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua.</span>
              <img id="phone3Img"
              src={phone3}
              alt="Background iphone 2"/>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

function FeaturesPanel(){
  return(
    <div id="featuresPanelContainer">

      <h1 className="centeredText purpleHeaderTitle">Features</h1>
      <br/>

      <div id="featuresContainer">

        <div className="featureContainer">
          <img src={smartSearch}
               className="imgFeature"
               alt="Smart Search Eye"/>
          <h4 className="featureHeaderText centeredText">Preferences</h4>
          <p>The beauty of astronomy is that anybody can do it. From the tiniest baby to the most</p>
        </div>

        <div className="featureContainer">
          <img src={heart}
               className="imgFeature"
               alt="Heart"/>
          <h4 className="featureHeaderText centeredText">Smart Matching</h4>
          <p>The beauty of astronomy is that anybody can do it. From the tiniest baby to the most</p>
        </div>

        <div className="featureContainer">
          <img src={horoscope}
               className="imgFeature"
               alt="Horoscope symbol"/>
          <h4 className="featureHeaderText centeredText">Horoscopes</h4>
          <p>The beauty of astronomy is that anybody can do it. From the tiniest baby to the most</p>
        </div>

      </div>

    </div>
  );
}
export default Home;
