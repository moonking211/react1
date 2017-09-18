import  React , { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../Common/components/ProfileThumbnailWithMask'

import logo from '../../images/Logo.png'
import female from '../../images/female.png'
import smiley from '../../images/casual_search.png'
import searchIcon from '../../images/Icons/view_simple.png'
import msgIcon from '../../images/messages.png'
import signout from '../../images/Icons/signout.png'
import profile from '../../images/Icons/profile.png'
import settings from '../../images/Icons/settings.png'
import visible from '../../images/Icons/visible.png'
import personal_analysis from '../../images/Icons/personal_analysis.png'
import horoscope from '../../images/Icons/horoscope.png'
import info from '../../images/Icons/info.png'

import daniel from '../../images/UserIcons/Large/Daniel.png'

import '../styles/Header.css'
import ProfileThumbnailWithMask from "../../Common/components/ProfileThumbnailWithMask";

export default class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showProfileDropdownMenu: false
    };

    this.toggleProfileDropdownMenu = this.toggleProfileDropdownMenu.bind(this);
  }

  render() {
    const profileDropdownStyle = this.state.showProfileDropdownMenu ? {} : { display: 'none' };

    return (
      <div id="headerContainer">

        <Link to="/">
          <img src={logo} style={{ height: '49px'}} alt="Stellar logo"/>
        </Link>

        <div id="searchPanelContainer">
          <span>Looking for:</span>
          <img id="lookingForImage" className="searchParameterImage" src={smiley} alt="Smiley face"/>
          <span>With:</span>
          <img id="genderImage" className="searchParameterImage" src={female} alt="Gender"/>
          <span>Between:</span>
          <input id="betweenAgeInput" type="text" placeholder="21 - 37"/>
          <span>Location:</span>
          <input id="locationInput" type="text" placeholder="New York"/>
          <Link to="/exploration" id="searchButton">
            <img id="searchImage" src={searchIcon} alt="Search"/>
          </Link>
        </div>

        <div id="actionsContainer">

          <div className="actionsContainerButtonWrapper" onClick={this.toggleProfileDropdownMenu}>
            <ProfileThumbnailWithMask
                className="actionsContainerButtonIcon"
                thumbnail={daniel}
                containerStyle={{ height: '41px', width: '41px'}}
            />
          </div>

          <Link className="actionsContainerButtonWrapper" to="/chat">
            <img
                className="actionsContainerButtonIcon"
                id="messagesLinkImage"
                src={msgIcon}
                alt="Messages"
            />
          </Link>

          <Link className="actionsContainerButtonWrapper" to="/signin">
            <img
                className="actionsContainerButtonIcon"
                id="signoutLinkImage"
                src={signout}
                alt="Sign out"
            />
          </Link>

          <div id="profileLinkDropdownContainer" style={profileDropdownStyle}>
            <div id="profileLinkDropdown">

              <Link className="profileLinkDropdown-link" to="/editprofile">
                <div className="profileLinkDropdown-icon-wrapper">
                  <img className="profileLinkDropdown-icon" src={profile} alt="profile avatar" />
                </div>
                <div className="profileLinkDropdown-text-wrapper">
                  <div className="profileLinkDropdown-text">Profile</div>
                </div>
              </Link>

              <Link className="profileLinkDropdown-link" to="/preferences">
                <div className="profileLinkDropdown-icon-wrapper">
                  <img className="profileLinkDropdown-icon" src={visible} alt="eye" />
                </div>
                <div className="profileLinkDropdown-text-wrapper">
                  <div className="profileLinkDropdown-text">Search Preferences </div>
                </div>
              </Link>

              <Link className="profileLinkDropdown-link" to="/analysis">
                <div className="profileLinkDropdown-icon-wrapper">
                  <img className="profileLinkDropdown-icon" src={personal_analysis} alt="chart" />
                </div>
                <div className="profileLinkDropdown-text-wrapper">
                  <div className="profileLinkDropdown-text">Personal Analysis</div>
                </div>
              </Link>

              <Link className="profileLinkDropdown-link" to="/horoscopes">
                <div className="profileLinkDropdown-icon-wrapper">
                  <img className="profileLinkDropdown-icon" src={horoscope} alt="horoscope" />
                </div>
                <div className="profileLinkDropdown-text-wrapper">
                  <div className="profileLinkDropdown-text">Horoscopes</div>
                </div>
              </Link>

              <Link className="profileLinkDropdown-link" to="/settings">
                <div className="profileLinkDropdown-icon-wrapper">
                  <img className="profileLinkDropdown-icon" src={settings} alt="gears" />
                </div>
                <div className="profileLinkDropdown-text-wrapper">
                  <div className="profileLinkDropdown-text">Account Settings</div>
                </div>
              </Link>

              <Link className="profileLinkDropdown-link" to="/faq">
                <div className="profileLinkDropdown-icon-wrapper">
                  <img className="profileLinkDropdown-icon" src={info} alt="info" />
                </div>
                <div className="profileLinkDropdown-text-wrapper">
                  <div className="profileLinkDropdown-text">FAQ</div>
                </div>
              </Link>

            </div>
          </div>

        </div>

      </div>
    )
  }

  toggleProfileDropdownMenu() {
    this.setState({
      showProfileDropdownMenu: !this.state.showProfileDropdownMenu
    });
  }

}
