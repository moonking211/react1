import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import likeIcon from '../../images/Icons/correct-blue.png'
import favouriteIcon from '../../images/Icons/heart_purple.svg'
import notInterestedIcon from '../../images/Icons/cancel.png'

import '../styles/ActionModal.css'

export default class ActionModal extends Component {

  static propTypes = {
    modalIsOpen: PropTypes.bool.isRequired,
    toggleModalHandler: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    onContinueButtonClick: PropTypes.func,
    onPreferencesButtonClick: PropTypes.func,
    onCancelButtonClick: PropTypes.func
  };

  render() {
    const { modalIsOpen, type } = this.props;
    const style = modalIsOpen ? {display: 'block'} : {};
    let toggleModalHandler = this.props.toggleModalHandler.bind(this, type);
    let icon, iconLabelText, modalText, actions = [];

    if (type === 'liked') {
      icon = likeIcon;
      iconLabelText = 'Liked!';
      modalText = 'If they like you back, you can start chatting!';
      actions.push(
          <a key={11 * 119} className="action-modal-button action-modal-button-blue" onClick={toggleModalHandler}>Continue</a>
      );
    } else if (type === 'favourited') {
      icon = favouriteIcon;
      iconLabelText = 'Favourited!';
      modalText = 'This profile will appear under preferences';
      actions.push(
          <Link key={13 * 117} className="action-modal-button action-modal-button-blue" to="/preferences">Preferences</Link>
      );
    } else if (type === 'notInterested') {
      icon = notInterestedIcon;
      iconLabelText = 'Not Interested?';
      modalText = 'Skip this user secretly. You will not be visible on each others\' feeds';
      actions.push(
          <a key={17 * 117} className="action-modal-button action-modal-button-blue" onClick={toggleModalHandler}>Continue</a>
      );
      actions.push(
          <a key={19 * 119} className="action-modal-button action-modal-button-light-blue" onClick={toggleModalHandler}>Cancel</a>
      );
    } else if (type === 'matched') {
      // TODO: Create It's a match modal.
    } else {
      // TODO: Handle Error
    }

    return (
        <div>
          <div className='overlay' style={style} onClick={toggleModalHandler}></div>
          <div className='modal-container' style={style}>
            <div className='action-modal'>
              <img className='action-modal-icon' src={icon} alt={iconLabelText} />
              <div className='action-modal-title'>{iconLabelText}</div>
              <div className='action-modal-text'>{modalText}</div>
              <div className="action-modal-button-wrapper">
                {actions}
              </div>
            </div>
          </div>
        </div>
    )
  }
}
