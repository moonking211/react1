import React , { Component } from 'react'
import '../styles/Horoscopes.css'
import Header from '../../Header/components/Header'
import MainPanel from '../../Common/components/MainPanel'
import HoroscopePanel from './HoroscopePanel'

import GlobalChatFooter from '../../Common/components/GlobalChatFooter'
import globalChatState from '../../Common/DefaultChatState'
import { toggleChatWindow, closeChatWindow, openChatWindow, toggleChatBuddyList, markAllMessagesAsRead, onSendMessage, getDistinctUserIdsWithUnreadMessages } from '../../Common/ChatHelperFunctions'

class Horoscopes extends Component {

  constructor(props) {
    super(props);
    let horoscopeText = 'The chance to take a trip by air with friends or members of a group could come your way today. ' +
        'Cancer. This might involve an exhibition of some kind, as well as a chance to advance your knowledge in some ' +
        'way. Both the dissemination and the gathering of information are definitely involved. If you can, make the ' +
        'arrangements today. Whatever the journey, it could make a big difference in your life.';
    this.state = {
      astrologySymbol: 'cancer',
      activeTab: 'weekly',
      horoscopes: {
        daily: {
          date: 'Aug 9, 2017',
          content: horoscopeText
        },
        weekly: {
          date: 'Aug 6, 2017 - Aug 13, 2017',
          content: horoscopeText
        },
        monthly: {
          date: 'August 2017',
          content: horoscopeText
        }
      },

      /* Global Chat Default State */
      localUserId: globalChatState.localUserId,
      activeChatWindowUsers: globalChatState.activeChatWindowUsers,
      chatUsers: globalChatState.chatUsers,
      messages: globalChatState.messages,
      showChatBuddyList: globalChatState.showChatBuddyList

    };

    this.handleChangeTab = this.handleChangeTab.bind(this);

    /* Global Chat Functions */
    this.onSendMessage = onSendMessage.bind(this);
    this.toggleChatBuddyList = toggleChatBuddyList.bind(this);
    this.openChatWindow = openChatWindow.bind(this);
    this.toggleChatWindow = toggleChatWindow.bind(this);
    this.closeChatWindow = closeChatWindow.bind(this);
    this.markAllMessagesAsRead = markAllMessagesAsRead.bind(this);
  }

  render() {
    const { astrologySymbol, activeTab, horoscopes, localUserId, activeChatWindowUsers, chatUsers, messages, showChatBuddyList } = this.state;
    const distinctUsersWithUnreadMessages = getDistinctUserIdsWithUnreadMessages(messages);

    return (
      <div className="grayBackground">
        <Header/>
        <MainPanel title="Horoscopes"
            verticalTextStyle={{transform : 'rotate(-90deg) translate(-260px, 20px)'}}>
          <div id="horoscopesContainer">
            <HoroscopePanel
                astrologySymbol={astrologySymbol}
                activeTab={activeTab}
                horoscopes={horoscopes}
                handleChangeTab={this.handleChangeTab}
            />
          </div>
        </MainPanel>
        <GlobalChatFooter
            localUserId={localUserId}
            chatUsers={chatUsers}
            messages={messages}
            activeChatWindowUsers={activeChatWindowUsers}
            usersWithUnreadMessages={distinctUsersWithUnreadMessages}
            onClickChatWindowHeader={this.toggleChatWindow}
            onClickChatWindowHeaderClose={this.closeChatWindow}
            showChatBuddyList={showChatBuddyList}
            onClickBuddyListHeader={this.toggleChatBuddyList}
            onClickBuddyListItem={this.openChatWindow}
            onSendMessage={this.onSendMessage}
        />
      </div>
    )
  }

  handleChangeTab(newTab, event) {
    if (newTab === this.state.activeTab) {
      return;
    }
    this.setState({ activeTab: newTab });
  }

}

export default Horoscopes
