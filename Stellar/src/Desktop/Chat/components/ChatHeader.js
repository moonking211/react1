import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AstrologySymbolIcon from '../../Common/components/AstrologySymbolIcon'
import { AstrologySignPropTypes } from '../../../Validators/AstrologySignValidator'

import menu from '../../images/chatmenu.png'
import heart from '../../images/Icons/heart.png'

import '../styles/ChatHeader.css'

export default class ChatHeader extends Component {

  static propTypes = {
    thumbnail: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    astrologySymbol: AstrologySignPropTypes
  };

  render() {
    const { thumbnail, firstName, isFavorite, astrologySymbol } = this.props;
    let favoriteIconStyle = { display: 'none' };
    if (isFavorite) {
      favoriteIconStyle = null;
    }
    return (
      <div className="chatHeaderContainer">
        <div className="chatHeader">
          <div className="activeChatUserThumbnailWrapper">
            <img
                className="activeChatUserThumbnail"
                src={thumbnail}
                alt="User Thumbnail"
            />
            <img
                style={favoriteIconStyle}
                className="activeChatUserThumbnailFavoriteIcon"
                alt="Heart"
                src={heart}
            />
          </div>
          <span className="activeChatUserFirstName">{firstName}</span>
          <AstrologySymbolIcon
              imageClass="activeChatUserAstrologySign"
              sign={astrologySymbol}
              isPurple={true}
          />
        </div>
        <div className="menuContainer">
          <img className="menuIcon" src={menu} alt="menu"/>
        </div>
      </div>
    );
  }

};
