import React , { Component } from 'react'
import PropTypes from 'prop-types'

import leftarrow from '../../../images/leftarrow.png'
import rightarrow from '../../../images/rightarrow.png'

import '../styles/EditPicturesPanel.css'

export default class EditPicturesPanel extends Component {

  static propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
  };

  render() {
    const { pictures } = this.props;
    let mainPicture;
    if (pictures.length > 0) {
      mainPicture = pictures[0];
    } else {
      // TODO: Set default empty main picture
    }

    return (
      <div id="picpanContainer">

        <div id="picpanSelectedPicContainer">
          <img alt="left arrow" src={leftarrow} />
          <img alt="main profile" src={mainPicture} />
          <img alt="right arrow" src={rightarrow} />
        </div>

        <div id="picpanEmptyPicContainer">
          <EmptyPicture/>
          <EmptyPicture/>
          <EmptyPicture/>
          <EmptyPicture/>
        </div>

      </div>
    )
  }
}

function EmptyPicture(){
  return (
    <div className="emptyPicture"></div>
  )
}
