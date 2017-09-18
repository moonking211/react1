import React, { Component } from 'react'
import PropTypes from 'prop-types'

import plusCircle from '../../images/Icons/plus_circle.png'

import '../styles/ChatFooter.css'

export default class ChatFooter extends Component {

  static propTypes = {
    onChatInputKeyDown: PropTypes.func.isRequired,
    toUser: PropTypes.number.isRequired
  };

  render() {
    const { onChatInputKeyDown, toUser } = this.props;
    return (
      <div id="chatFooter">
        <div>
          <input
              id="chatInput"
              placeholder="Write message..."
              onKeyDown={onChatInputKeyDown.bind(this, toUser)}
          />
        </div>
        <img id="chatAddIcon" src={plusCircle} alt="plus"/>
      </div>
    );
  }

}
