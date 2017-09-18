import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { AstrologySignPropTypes } from '../../../Validators/AstrologySignValidator'
import AstrologySymbolIcon from '../../Common/components/AstrologySymbolIcon'

import heart from '../../images/Icons/heart.png'
import x from '../../images/x.png'

import '../styles/FriendItem.css'

export default class FriendItem extends Component{

  static propTypes = {
      userId: PropTypes.number.isRequired,
      thumbnail: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      astrologySymbol: AstrologySignPropTypes,
      handleRemoveFriendItem: PropTypes.func.isRequired
  };

  render(){
    const { userId, thumbnail, firstName, astrologySymbol, handleRemoveFriendItem } = this.props;
    return (
      <div className="fiContainer">
        <div className="userIconWrapper">
          <img className="userIcon" alt="User Thumbnail" src={thumbnail}/>
          <img className="favoriteIcon" alt="Heart" src={heart}/>
        </div>
        <span>{firstName}</span>
        <AstrologySymbolIcon
            imageClass="fiAstrologySymbolIcon"
            sign={astrologySymbol}
            isPurple={true}
        />
        <img alt="X Button" src={x} onClick={handleRemoveFriendItem.bind(this, userId)} />
      </div>
    )
  }
}
