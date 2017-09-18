import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import backgroundImage from '../../../images/Backgrounds/404page.png'
import '../styles/Error404.css'

class Error404 extends Component{

  render(){
    return (
      <div id="error404Container">

        <div id="imgContainer">
          <img src={backgroundImage} alt="Generic background" />
          <div id="errorTitle">
            <span id="leftFour">4</span>
            <span id="rightFour">4</span>
          </div>
          <div id="errorSubTitle">
            Looks like you're lost!
          </div>
          <div id="errorButtonLabel">
            Let's take a step back
          </div>
          <Link id="homeLink"
              to="/" >Homepage</Link>
        </div>

      </div>

    )
  }

}

export default Error404
