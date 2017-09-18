import React , { Component } from 'react'
import moment from 'moment'
import '../styles/Chat.css'
import Header from '../../Header/components/Header.js'
import ChatHeader from './ChatHeader'
import ChatHistory from './ChatHistory'
import ChatFooter from './ChatFooter'
import UsersPanel from './UsersPanel'
import NewMatchesPanel from './NewMatchesPanel'

import globalChatState from '../../Common/DefaultChatState'
import { markAllMessagesAsRead, onSendMessage, getMessagesWithUserIdSortedByDate } from '../../Common/ChatHelperFunctions'

export default class Chat extends Component {

  constructor (props) {
    super(props);

    //const localUserId = 29024;
    const remoteUserId1 = 39398,
        //remoteUserId2 = 55775,
        //remoteUserId3 = 11852,
        remoteUserId4 = 55581,
        remoteUserId5 = 71833,
        remoteUserId6 = 77777;

    this.state = {
      activeChatUserId:  remoteUserId1,
      newMatches: [ remoteUserId1, remoteUserId4, remoteUserId5, remoteUserId6 ],
      localUserId: globalChatState.localUserId,
      chatUsers: globalChatState.chatUsers,
      messages: globalChatState.messages,
    };

    this.onSwitchActiveChatUser = this.onSwitchActiveChatUser.bind(this);
    this.onSendMessage = onSendMessage.bind(this);
    this.markAllMessagesAsRead = markAllMessagesAsRead.bind(this);
  }

  render() {
    const { activeChatUserId, localUserId, chatUsers, newMatches, messages } = this.state;

    let distinctChatUserIds = [], distinctUsersWithUnreadMessages = [], numberOfUnreadMessages = 0;
    let lastMessageDictionary = {};
    messages.forEach((msg) => {
      let remoteUserId = msg.fromUserId !== localUserId ? msg.fromUserId : msg.toUserId;

      // Add each user to distinctChatUserIds
      if (distinctChatUserIds.indexOf(remoteUserId) < 0) {
        distinctChatUserIds.push(remoteUserId);
        lastMessageDictionary[remoteUserId.toString()] = {};
      }

      // Store most recent message for each user in dictionary
      let dictionaryItem = lastMessageDictionary[remoteUserId.toString()];
      const msgTimestamp = moment(msg.timestamp, 'YYYY-MM-DD HH:mm:ss');
      if (dictionaryItem.timestamp) {
        if (msgTimestamp.isAfter(dictionaryItem.timestamp)) {
          dictionaryItem.timestamp = msgTimestamp;
          dictionaryItem.lastMessage = msg.message;
        }
      } else {
        dictionaryItem.timestamp = msgTimestamp;
        dictionaryItem.lastMessage = msg.message;
      }

      if (msg.isRead === false) {

        numberOfUnreadMessages++;

        if (distinctUsersWithUnreadMessages.indexOf(remoteUserId < 0)) {
          distinctUsersWithUnreadMessages.push(remoteUserId);
        }

      }
    });

    const usersPanelUsers = chatUsers.filter((user) => { return distinctChatUserIds.indexOf(user.userId) > -1; });

    const activeChatUser = chatUsers.find((user) => { return user.userId === activeChatUserId; });

    const newMatchesUsers = chatUsers.filter((user) => { return newMatches.indexOf(user.userId) > -1; });

    const activeChatMessages = getMessagesWithUserIdSortedByDate(messages, activeChatUserId);

    return (
      <div id="chatContainer">
        <Header/>
        <div id="greyContainer">
          <div id="whiteContainer">
            <NewMatchesPanel
                users={newMatchesUsers}
                onNewMatchClick={this.onSwitchActiveChatUser}
            />
            <div id="horizontalContainer">
              <UsersPanel
                  chatUsers={usersPanelUsers}
                  onUserClick={this.onSwitchActiveChatUser}
                  lastMessageDictionary={lastMessageDictionary}
                  unreadMessages={numberOfUnreadMessages}
                  usersWithUnreadMessages={distinctUsersWithUnreadMessages}
              />
              <div id="chatPanelContainer">
                <ChatHeader
                    thumbnail={activeChatUser.thumbnail}
                    firstName={activeChatUser.firstName}
                    isFavorite={activeChatUser.isFavorite}
                    astrologySymbol={activeChatUser.astrologySymbol}
                />
                 <ChatHistory
                     localUserId={localUserId}
                     messages={activeChatMessages}
                 />
                 <ChatFooter
                     toUser={activeChatUserId}
                     onChatInputKeyDown={this.onSendMessage}
                 />
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }

  onSwitchActiveChatUser(userId, event) {
    this.setState({ activeChatUserId: userId });
    // TODO: Check if they are unread messages before
    this.markAllMessagesAsRead(userId);
  }

}
