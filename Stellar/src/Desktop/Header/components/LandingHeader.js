import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo_with_text.png'
import '../styles/LandingHeader.css'

class LandingHeader extends Component {
  handleCollapse(i){
    var x = document.getElementById("landingHeaderContainer");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  render() {
    return (
      /*<div id="landingHeaderContainer">
        <div id="landingHeaderLogoContainer">
          <Link to="/"><img src={logo} style={{height: '49px'}} alt="Stellar logo"/></Link>
        </div>
        <Link to="/product" className="landingHeaderLink">Product</Link>
        <Link to="/about" className="landingHeaderLink">About Us</Link>
        <Link to="/blog" className="landingHeaderLink">Blog</Link>
        <Link to="/signin" id="landingSigninLink" className="roundedLink">Sign in</Link>
      </div>*/
      <div className="topnav" id="landingHeaderContainer">
        <div id="landingHeaderLogoContainer">
          <Link to="/"><img src={logo} style={{height: '49px'}} alt="Stellar logo"/></Link>
        </div>
        <Link to="#" className="icon" onClick={() => this.handleCollapse()}>&#9776;</Link>
        <a className="clear"></a>
        <Link to="/product" className="landingHeaderLink">Product</Link>
        <Link to="/about" className="landingHeaderLink">About Us</Link>
        <Link to="/blog" className="landingHeaderLink">Blog</Link>
        <Link to="/signin" id="landingSigninLink" className="roundedLink">Sign in</Link>
      </div>
    )
  }

}

export default LandingHeader