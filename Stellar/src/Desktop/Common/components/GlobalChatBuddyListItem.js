import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ChatUserPropTypes } from '../../../Validators/UserValidator'
import AstrologySymbolIcon from './AstrologySymbolIcon'

import heart from '../../images/Icons/heart.png'

import '../styles/GlobalChatBuddyListItem.css'

export default class GlobalChatBuddyListItem extends Component {

  static propTypes = {
    user: PropTypes.shape(ChatUserPropTypes).isRequired,
    onBuddyItemClick: PropTypes.func.isRequired
  };

  render() {
    const { user, onBuddyItemClick } = this.props;
    const { userId, isFavorite, firstName, thumbnail, astrologySymbol } = user;
    const favoriteIconStyle = isFavorite ? {} : { display: 'none' };
    return (
      <div className="chat-buddy-list-item" onClick={onBuddyItemClick.bind(this, userId, firstName)}>
        <div className="chat-buddy-thumbnail-wrapper">
          <img
              className="chat-buddy-thumbnail-favorite-icon"
              style={favoriteIconStyle}
              alt="favorite"
              src={heart}
          />
          <img
              className="chat-buddy-thumbnail-icon"
              alt="User Thumbnail"
              src={thumbnail}
          />
        </div>
        <div className="chat-buddy-first-name">{firstName}</div>
        <AstrologySymbolIcon
            sign={astrologySymbol}
            imageClass="chat-buddy-astrology-sign"
            isPurple={true}
        />
      </div>
    )
  }

}
