import React , { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/ViewPicturesPanel.css'
import leftArrow from '../../../images/leftarrow.png'
import rightArrow from '../../../images/rightarrow.png'
import relationship from '../../../images/relationshippurple.png'

export default class ViewPicturesPanel extends Component {

  static propTypes = {
    compatibilityText: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    onChangePicture: PropTypes.func.isRequired
  };

  render() {
    const { compatibilityText, picture, onChangePicture } = this.props;
    return (
      <div id="viewPicturePanelContainer">

        <div id="viewUserPictureContainer">
          <img
              src={leftArrow}
              className="arrow"
              alt="left arrow"
              onClick={onChangePicture.bind(this, -1)}
          />
          <img
              id="userPicture"
              src={picture}
              alt="user"
          />
          <img
              src={rightArrow}
              className="arrow"
              alt="right arrow"
              onClick={onChangePicture.bind(this, 1)}
          />
        </div>

        <div id="viewPicturePanelCompatibilityContainer">
          <img src={relationship} alt="relationship" />
          {compatibilityText}
        </div>

      </div>
    );
  }

}
