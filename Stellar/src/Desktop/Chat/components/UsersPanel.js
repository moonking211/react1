import React, { Component } from 'react'
import PropTypes from 'prop-types'
import UserItem from "./UserItem"

import { ChatUserPropTypes } from "../../../Validators/UserValidator";

import '../styles/UsersPanel.css'

export default class UsersPanel extends Component {

  static propTypes = {
    chatUsers: PropTypes.arrayOf(ChatUserPropTypes).isRequired,
    lastMessageDictionary: PropTypes.object.isRequired,
    onUserClick: PropTypes.func.isRequired,
    unreadMessages: PropTypes.number.isRequired,
    usersWithUnreadMessages: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
  };

  render() {
    const { chatUsers, lastMessageDictionary, onUserClick, unreadMessages, usersWithUnreadMessages } = this.props;
    return (
      <div className="upContainer">
        <div className="upchatHeaderContainer">
          <span className="activeChatPanelTitle">Chats</span>
          <div className="unreadMessageBadge">{unreadMessages}</div>
        </div>
        <div className="userItemsContainer">
          {chatUsers.map(user => {
            const { userId, isFavorite, firstName, thumbnail, timeRemaining } = user;

            let lastMessageStatus = '';
            const dictionaryItem = lastMessageDictionary[userId.toString()];
            if (typeof dictionaryItem === 'object' && dictionaryItem.hasOwnProperty('lastMessage')) {
              lastMessageStatus = dictionaryItem['lastMessage'];
            }

            const showUnreadMessagesIcon = usersWithUnreadMessages.indexOf(userId) > -1;

            return <UserItem
                key={userId}
                userId={userId}
                isFavorite={isFavorite}
                showUnreadMessagesIcon={showUnreadMessagesIcon}
                firstName={firstName}
                userThumbnail={thumbnail}
                lastMessageStatus={lastMessageStatus}
                timeRemaining={timeRemaining}
                onUserClick={onUserClick}
            />
          })}
        </div>
      </div>
    )
  }

}
