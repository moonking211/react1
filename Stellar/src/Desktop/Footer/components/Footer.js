import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Logo.png'
import fblogo from '../../images/fblogo.png'
import iglogo from '../../images/iglogo.png'
import twlogo from '../../images/twlogo.png'
import '../styles/Footer.css'

class Footer extends Component {

  render() {
    return (
      <div id="footerContainer">
        <div className="footerRow">
          <Link to="/">
            <img id="footerLogo"
                 src={logo}
                 style={{height: '49px'}}
                 alt="Stellar logo"/>
          </Link>
        </div>
        <div className="footerRow">
            <Link to="/faq" className="footerTextLink">FAQ</Link>
            <Link to="/privacy" className="footerTextLink">Privacy</Link>
            <Link to="/toc" className="footerTextLink">Terms</Link>
            <Link to="/contact" className="footerTextLink">Contact</Link>
        </div>
        <div className="footerRow">
            <img className="socialMediaLogo" src={fblogo} alt="Facebook logo"/>
            <img className="socialMediaLogo" src={iglogo} alt="Instagram logo"/>
            <img className="socialMediaLogo" src={twlogo} style={{height: '18px'}} alt="Twitter logo"/>
        </div>
        <div className="footerRow">
          <div id="footerCopyrightText" className="centeredText">© Stellar</div>
        </div>
      </div>
    )
  }

}

export default Footer