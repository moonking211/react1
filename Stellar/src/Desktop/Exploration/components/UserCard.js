import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import AstrologySymbolIcon from '../../Common/components/AstrologySymbolIcon'
import { UserProfileMatchPropTypes } from '../../../Validators/UserValidator'

import whiteHeart from '../../images/Icons/heart_white.svg'
import purpleHeart from '../../images/Icons/heart_purple.svg'
import checkmark from '../../images/Icons/correct-white.png'
import close from '../../images/close.png'

import '../styles/UserCard.css'

class UserCard extends Component {

  static propTypes = {
    user: UserProfileMatchPropTypes,
    onLikeButtonClick: PropTypes.func.isRequired,
    onNotInterestedButtonClick: PropTypes.func.isRequired,
    onFavouriteButtonClick: PropTypes.func.isRequired
  };

  render() {
    const { user, onLikeButtonClick, onNotInterestedButtonClick, onFavouriteButtonClick } = this.props;
    return (
      <div className="cardContainer">

        <img src={user.mainPicture} alt="User"/>

        <img
            className="favouriteIcon"
            src={user.favorite ? purpleHeart : whiteHeart}
            alt="favourite"
            onClick={onFavouriteButtonClick.bind(this, 'favourited', user.userId)}
        />

        <div className="cardTextContainer">

          <div className="nameContainer">
            <Link to="/viewprofile">
              {user.firstName}, {user.age}
            </Link>
            <AstrologySymbolIcon
                imageClass="signImg"
                sign={user.astrologySymbol}
                isPurple={true}
            />
          </div>
          <span className="locationContainer">{`${user.city}, ${user.state}`}</span>

          <div className="cardBioContainer">
            {user.aboutMe}
          </div>

        </div>

        <div className="cardButtonsContainer">
          <div
            className="cardButton"
            onClick={onLikeButtonClick.bind(this, 'liked', user.userId)}
          >
            <img
                className="checkmarkImage"
                src={checkmark}
                alt="Liked"
            />
          </div>
          <div className="cardButtonsSeparator"></div>
          <div
            className="cardButton"
            onClick={onNotInterestedButtonClick.bind(this, 'notInterested', user.userId)}
          >
            <img
                src={close}
                alt="Not Interested"
            />
          </div>

        </div>
      </div>
    )
  }

}

export default UserCard