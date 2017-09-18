import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { ChatUserPropTypes } from "../../../Validators/UserValidator";

import heart from '../../images/Icons/heart.png'

import '../styles/NewMatchItem.css'

export default class NewMatchesPanel extends Component {

  static propTypes = {
    user: ChatUserPropTypes,
    onNewMatchClick: PropTypes.func.isRequired
  };

  render() {
    const { user, onNewMatchClick } = this.props;
    const { userId, isFavorite, firstName, thumbnail } = user;
    let favoriteIconStyle = { display: 'none' };
    if (isFavorite) {
      favoriteIconStyle = null;
    }
    return (
      <div className="newMatchItemContainer" onClick={onNewMatchClick.bind(this, userId)}>
        <div className="newMatchThumbnailWrapper">
          <img
              className="newMatchThumbnail"
              src={thumbnail}
              alt="User Thumbnail"
          />
          <img
              style={favoriteIconStyle}
              className="newMatchThumbnailFavoriteIcon"
              alt="Heart"
              src={heart}
          />
        </div>
        <span className="newMatchFirstName">{firstName}</span>
      </div>
    );
  }
}
