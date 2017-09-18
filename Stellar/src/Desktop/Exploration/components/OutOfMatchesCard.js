import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import handIcon from '../../images/Icons/Hand.png'

import '../styles/OutOfMatchesCard.css'


export default class OutOfMatchesCard extends Component {

  render() {
    return (
      <div className="outOfMatchesCard">
        <img className="outOfMatchesIcon" alt="Hand" src={handIcon} />
        <div className="outOfMatchesTitle">Hold it right there!</div>
        <div className="outOfMatchesText">
          Unfortunately, we cannot find any more matches in you're area.
          <br />
          <br />
          Please try again later or try updating your&nbsp;
          <Link className="searchPreferencesLink" to="/preferences">
           Preferences
          </Link>.
        </div>
      </div>
    )
  }

}
