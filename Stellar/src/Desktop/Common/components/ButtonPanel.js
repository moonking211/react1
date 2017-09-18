import React , { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/MainPanel.css'
import '../styles/ButtonPanel.css'
import notInterestedIcon from '../../images/Icons/NotInterested.png'
import likeIcon from '../../images/Icons/Like.png'
import favouriteIcon from '../../images/Icons/Favourite.png'

export default class ButtonPanel extends Component {

  static propTypes = {
    onLikeClick: PropTypes.func.isRequired,
    onNotInterestedClick: PropTypes.func.isRequired,
    onFavouriteClick: PropTypes.func.isRequired
  };

  render() {
    const { onLikeClick, onNotInterestedClick, onFavouriteClick } = this.props;
    return (
        <div id="mainContainer">
          <div id="childrenContainer">
            <div id="leftPanelContainer">
              <div id="buttonPanelContainer">
                <img
                    className="buttonPanelButton"
                    src={notInterestedIcon}
                    alt="Not Interested"
                    onClick={onNotInterestedClick}
                />
                <img
                    className="buttonPanelButton"
                    src={likeIcon}
                    alt="Like"
                    onClick={onLikeClick}
                />
                <img
                    className="buttonPanelButton"
                    src={favouriteIcon}
                    alt="Favourite"
                    onClick={onFavouriteClick}
                />
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
    )
  }

}
