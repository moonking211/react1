import React, { Component } from 'react'
import PropTypes from 'prop-types'
import GlobalChatBuddyListItem from './GlobalChatBuddyListItem'
import { ChatUserPropTypes } from '../../../Validators/UserValidator';

import '../styles/GlobalChatBuddyList.css'

export default class GlobalChatBuddyList extends Component {

  static propTypes = {
    chatUsers: PropTypes.arrayOf(ChatUserPropTypes).isRequired,
    showChatBuddyList: PropTypes.bool.isRequired,
    onClickBuddyListHeader: PropTypes.func.isRequired,
    onClickBuddyListItem: PropTypes.func.isRequired
  };

  render() {
    const { chatUsers, showChatBuddyList, onClickBuddyListHeader, onClickBuddyListItem } = this.props;

    const numberOfChatUsersOnline = chatUsers.length;

    const buddyListBodyStyle = showChatBuddyList ? {} : { display: 'none' };

    return (
      <div id="chat-buddy-list">
        <div id="chat-buddy-list-header" onClick={onClickBuddyListHeader}>
          <span id="chat-buddy-list-title">Chat ({numberOfChatUsersOnline})</span>
        </div>
        <div id="chat-buddy-list-body" style={buddyListBodyStyle}>
          <div id="buddy-list-items">
            {chatUsers.map(user => {
              return (
                <GlobalChatBuddyListItem
                    key={user.userId}
                    user={user}
                    onBuddyItemClick={onClickBuddyListItem}
                />
              );
            })}
          </div>
          <div id="chat-buddy-list-search-wrapper">
            <input
                id="chat-buddy-list-search"
                type="text"
                placeholder="Search"
            />
          </div>
        </div>
      </div>
    )
  }

}
