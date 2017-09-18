import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { getMessagesWithUserIdSortedByDate } from "../ChatHelperFunctions"
import ChatWindow from './ChatWindow'
import { MessagePropTypes } from '../../../Validators/MessageValidator';

import '../styles/ActiveChatWindows.css'

export default class ActiveChatWindows extends Component {

  static propTypes = {
    localUserId: PropTypes.number.isRequired,
    activeChatWindowUsers: PropTypes.arrayOf(PropTypes.shape({
      userId: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      showChatWindow: PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    usersWithUnreadMessages: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    messages: PropTypes.arrayOf(MessagePropTypes).isRequired,
    onClickChatWindowHeader: PropTypes.func.isRequired,
    onClickChatWindowHeaderClose: PropTypes.func.isRequired,
    onSendMessage: PropTypes.func.isRequired
  };

  render() {
    const { localUserId, activeChatWindowUsers, usersWithUnreadMessages, messages, onClickChatWindowHeader, onClickChatWindowHeaderClose, onSendMessage } = this.props;

    return (
      <div id="active-chat-windows-wrapper">
        <div id="active-chat-windows">
          {activeChatWindowUsers.map(item => {
            const { userId, firstName, showChatWindow } = item;
            const filteredMessages = getMessagesWithUserIdSortedByDate(messages, userId);
            const showUnreadMessagesIcon = usersWithUnreadMessages.indexOf(userId) > -1;
            return <ChatWindow
                key={userId}
                localUserId={localUserId}
                userId={userId}
                firstName={firstName}
                messages={filteredMessages}
                showUnreadMessagesIcon={showUnreadMessagesIcon}
                showChatWindow={showChatWindow}
                onClickChatWindowHeader={onClickChatWindowHeader}
                onClickChatWindowHeaderClose={onClickChatWindowHeaderClose}
                onChatWindowInputKeyDown={onSendMessage}
            />;
          })}
        </div>
      </div>
    )
  }

}