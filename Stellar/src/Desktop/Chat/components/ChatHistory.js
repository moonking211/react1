import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import PropTypes from 'prop-types'

import ChatEntry from './ChatEntry'

import { MessagePropTypes } from "../../../Validators/MessageValidator";

import '../styles/ChatHistory.css'

export default class ChatHistory extends Component {

  static propTypes = {
    localUserId: PropTypes.number.isRequired,
    messages: MessagePropTypes
  };

  componentDidMount() {
    this.scrollToBottomOfMessages();
  }

  componentDidUpdate() {
    this.scrollToBottomOfMessages();
  }

  render() {
    const { messages, localUserId } = this.props;
    return (
      <div id="chatHistoryContainer">

        {messages.map((msg) => {
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
    );
  }

  scrollToBottomOfMessages() {
    const node = findDOMNode(this.bottomOfMessages);
    node.scrollIntoView({ behavior: 'smooth' });
  }

}
