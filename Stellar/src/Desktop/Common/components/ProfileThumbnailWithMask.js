import React, { Component } from 'react'
import PropTypes from 'prop-types'

import mask from '../../images/UserIcons/UserIconMask.png'

import '../styles/ProfileThumbnailWithMask.css'

export default class ProfileThumbnailWithMask extends Component {

  static propTypes = {
    thumbnail: PropTypes.string.isRequired,
    containerStyle: PropTypes.shape({
      height: PropTypes.string.isRequired,
      width: PropTypes.string.isRequired,
    }).isRequired,
    maskStyle: PropTypes.object,
    thumbnailStyle: PropTypes.object
  };

  render() {
    const { thumbnail, containerStyle, maskStyle, thumbnailStyle } = this.props;
    return (
        <div style={containerStyle} className="profile-thumbnail-with-mask">
          <img
              style={maskStyle}
              className="profile-mask"
              alt="profile mask"
              src={mask}
          />
          <img
              style={thumbnailStyle}
              className="profile-thumbnail"
              alt="profile thumbnail"
              src={thumbnail}
          />
        </div>
    );
  }

}