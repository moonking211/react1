import React, { Component } from 'react'
import PropTypes from 'prop-types'
import pen from '../../images/pen.png'

export default class InputBoxElement extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    titleClass: PropTypes.string.isRequired,
    inputClass: PropTypes.string.isRequired,
    showEditButton: PropTypes.bool.isRequired,
    isDisabledHandler: PropTypes.func.isRequired,
    onKeypressHandler: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired
  };

  render() {
    const { isDisabled, title, name, content, titleClass, inputClass, showEditButton, isDisabledHandler, onKeypressHandler, onChangeHandler } = this.props;
    const inputStyle = isDisabled ? { border:0,background:'transparent', marginTop: '-10px' } : {};
    const editButtonStyle = showEditButton ? {} : { display: 'none' };
    return (
      <div>
        <div className={titleClass}>
          <span>{title}</span>
          <img
              alt="Edit Button"
              style={editButtonStyle}
              src={pen}
              name={name}
              onClick={isDisabledHandler}
          />
        </div>
        <input className={inputClass}
               name={name}
               value={content}
               style={inputStyle}
               disabled={isDisabled}
               onKeyDown={onKeypressHandler}
               onChange={onChangeHandler}
        />
      </div>
    )
  }

}
