import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'
import ChatEntry from '../../Chat/components/ChatEntry'
import { MessagePropTypes } from '../../../Validators/MessageValidator'

import cancel from '../../images/Icons/cancel.png'

import '../styles/ChatWindow.css'

export default class ChatWindow extends Component {

  static propTypes = {
    localUserId: PropTypes.number.isRequired,
    userId: PropTypes.number.isRequired,
    firstName: PropTypes.string.isRequired,
    messages: PropTypes.arrayOf(MessagePropTypes).isRequired,
    showUnreadMessagesIcon: PropTypes.bool.isRequired,
    showChatWindow: PropTypes.bool.isRequired,
    onClickChatWindowHeader: PropTypes.func.isRequired,
    onClickChatWindowHeaderClose: PropTypes.func.isRequired,
    onChatWindowInputKeyDown: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.scrollToBottomOfMessages();
  }

  componentDidUpdate() {
    this.scrollToBottomOfMessages();
  }

  render() {
    const { localUserId, userId, firstName, messages, showUnreadMessagesIcon, showChatWindow, onClickChatWindowHeader, onClickChatWindowHeaderClose, onChatWindowInputKeyDown } = this.props;

    const chatWindowHeaderStyle = showChatWindow ? { bottom: '323px' } : {};
    const chatWindowBodyStyle = showChatWindow ? {} : { display: 'none' };
    const unreadMessagesIconStyle = showUnreadMessagesIcon ? {} : { display: 'none' };

    return (
      <div className="chat-window">

        <div
            className="chat-window-header"
            style={chatWindowHeaderStyle}
            onClick={onClickChatWindowHeader.bind(this, userId)}
        >
          <div className="chat-header-title-and-unread-message-icon-wrapper">
            <span className="chat-window-title">{firstName}</span>
            <div className="chat-header-unread-message-icon" style={unreadMessagesIconStyle} />
          </div>
          <div className="chat-window-close-button" onClick={onClickChatWindowHeaderClose.bind(this, userId)}>
            <img
                className="chat-window-close-button-image"
                alt="Close"
                src={cancel}
            />
          </div>
        </div>

        <div className="chat-window-body" style={chatWindowBodyStyle}>

          <div className="chat-window-messages-wrapper">
            {messages.map(msg => {
              return <ChatEntry
                  key={msg.messageId}
                  isOutgoingMessage={msg.fromUserId === localUserId}
                  message={msg.message}
                  timestamp={msg.timestamp}
              />;
            })}
            <div
                style={{ float: 'left', clear: 'both'}}
                ref={el => { this.bottomOfMessages = el; }}
            />
          </div>

          <div className="chat-window-footer-button-wrapper">
            <input
                type="text"
                placeholder="Type a message..."
                className="chat-window-footer-input"
                onKeyDown={onChatWindowInputKeyDown.bind(this, userId)}
            />
          </div>

        </div>

      </div>
    )
  }

  scrollToBottomOfMessages() {
    const node = findDOMNode(this.bottomOfMessages);
    node.scrollIntoView({ behavior: 'smooth' });
  }

}
