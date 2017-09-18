import React , { Component } from 'react'
import PropTypes from 'prop-types'

import heart from '../../images/Icons/heart.png'

import '../styles/UserItem.css'

class UserItem extends Component {

  static propTypes = {
    userId : PropTypes.number.isRequired ,
    isFavorite : PropTypes.bool.isRequired ,
    showUnreadMessagesIcon : PropTypes.bool.isRequired ,
    firstName : PropTypes.string.isRequired ,
    userThumbnail : PropTypes.string.isRequired ,
    lastMessageStatus : PropTypes.string.isRequired ,
    timeRemaining : PropTypes.string.isRequired ,
    onUserClick : PropTypes.func.isRequired
  };

  render() {
    const { userId , isFavorite , showUnreadMessagesIcon , firstName , userThumbnail , lastMessageStatus , timeRemaining , onUserClick } = this.props;

    let favoriteIconStyle = { display: 'none' }, unreadMessagesIconStyle = { display: 'none' };
    if (isFavorite) {
      favoriteIconStyle = null;
    }
    if (showUnreadMessagesIcon) {
      unreadMessagesIconStyle = null;
    }

    return (
      <div className="uiContainer" onClick={onUserClick.bind(this, userId)}>

        <div className="uiThumbnailWrapper">
          <img
              className="uiThumbnail"
              src={userThumbnail}
              alt="User Thumbnail"
          />
          <img
              style={favoriteIconStyle}
              className="uiThumbnailFavoriteIcon"
              alt="Heart"
              src={heart}
          />
        </div>

        <div className="nameStatusContainer">
          <div className="firstNameAndUnreadIconWrapper">
            <span className="firstName">{firstName}</span>
            <div className="uiUnreadMessagesIcon" style={unreadMessagesIconStyle} />
          </div>

          <span className="lastMessageStatus">{lastMessageStatus}</span>
        </div>

        <div className="timeRemainingContainer">{timeRemaining}</div>

      </div>
    )
  }

}

export default UserItem