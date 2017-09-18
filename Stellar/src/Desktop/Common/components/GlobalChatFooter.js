import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GlobalChatBuddyList from './GlobalChatBuddyList'
import ActiveChatWindows from './ActiveChatWindows'
import { ChatUserPropTypes } from '../../../Validators/UserValidator'
import { MessagePropTypes } from '../../../Validators/MessageValidator'

import '../styles/GlobalChatFooter.css'

export default class GlobalChatFooter extends Component {

  static propTypes = {
    localUserId: PropTypes.number.isRequired,
    chatUsers: PropTypes.arrayOf(ChatUserPropTypes).isRequired,
    usersWithUnreadMessages: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
    activeChatWindowUsers: PropTypes.arrayOf(PropTypes.shape({
      userId: PropTypes.number.isRequired,
      firstName: PropTypes.string.isRequired,
      showChatWindow: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    messages: PropTypes.arrayOf(MessagePropTypes).isRequired,
    showChatBuddyList: PropTypes.bool.isRequired,
    onClickBuddyListHeader: PropTypes.func.isRequired,
    onClickBuddyListItem: PropTypes.func.isRequired,
    onClickChatWindowHeader: PropTypes.func.isRequired,
    onClickChatWindowHeaderClose: PropTypes.func.isRequired,
    onSendMessage: PropTypes.func.isRequired
  };

  render() {
    const { localUserId, chatUsers, usersWithUnreadMessages, activeChatWindowUsers, messages, showChatBuddyList, onClickBuddyListHeader, onClickBuddyListItem, onClickChatWindowHeader, onClickChatWindowHeaderClose, onSendMessage } = this.props;

    return (
      <div id="global-chat-footer">
        <div id="global-chat-footer-container">
          <ActiveChatWindows
              localUserId={localUserId}
              activeChatWindowUsers={activeChatWindowUsers}
              usersWithUnreadMessages={usersWithUnreadMessages}
              messages={messages}
              onClickChatWindowHeader={onClickChatWindowHeader}
              onClickChatWindowHeaderClose={onClickChatWindowHeaderClose}
              onSendMessage={onSendMessage}
          />
          <GlobalChatBuddyList
              chatUsers={chatUsers}
              showChatBuddyList={showChatBuddyList}
              onClickBuddyListHeader={onClickBuddyListHeader}
              onClickBuddyListItem={onClickBuddyListItem}
          />
        </div>
      </div>
    )
  }

}