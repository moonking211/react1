import React , { Component } from 'react'
import PropTypes from 'prop-types'
import pen from '../../images/pen.png'

export default class TextareaElement extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    titleClass: PropTypes.string.isRequired,
    inputClass: PropTypes.string.isRequired,
    showEditButton: PropTypes.bool.isRequired,
    isDisabledHandler: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired
  };

  render() {
    const { title, name, content, isDisabled, titleClass, inputClass, showEditButton, isDisabledHandler, onChangeHandler } = this.props;
    const textAreaStyle = isDisabled ? {border: 0, background: 'transparent'} : {};
    const editButtonStyle = showEditButton ? {} : {display: 'none'};
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
          <textarea className={inputClass}
                    style={textAreaStyle}
                    name={name}
                    disabled={isDisabled}
                    value={content}
                    onChange={onChangeHandler}
          />
        </div>
    )
  }

}
