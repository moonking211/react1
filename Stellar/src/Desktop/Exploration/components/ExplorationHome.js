import React , { Component } from 'react'
import Header from '../../Header/components/Header'
import FunFactCard from './FunFactCard'
import OutOfMatchesCard from './OutOfMatchesCard'
import UserCard from './UserCard'
import ActionModal from '../../Common/components/ActionModal'

import GlobalChatFooter from '../../Common/components/GlobalChatFooter'
import globalChatState from '../../Common/DefaultChatState'
import { toggleChatWindow, closeChatWindow, openChatWindow, toggleChatBuddyList, markAllMessagesAsRead, onSendMessage, getDistinctUserIdsWithUnreadMessages } from '../../Common/ChatHelperFunctions'

import kimpic from '../../images/kim.png'
import emilypic from '../../images/emily.png'
import leftArrow from '../../images/leftarrow.png'
import rightArrow from '../../images/rightarrow.png'

import '../styles/ExplorationHome.css'

class ExplorationHome extends Component{

  constructor(props) {
    super(props);

    const bio = 'Buying the right telescope to take your love of astronomy to the next level.'
    this.state = {
      usersToMatchViewIndex: 0,
      usersToMatch: [
        {
          userId: 399933,
          firstName: 'Kim',
          age: 25,
          city: 'New York',
          state: 'NY',
          country: 'United States of America',
          astrologySymbol: 'aries',
          aboutMe: bio,
          mainPicture: kimpic,
          favorite: false
        },
        {
          userId: 873895,
          firstName: 'Emily',
          age: 23,
          city: 'New York',
          state: 'NY',
          country: 'United States of America',
          astrologySymbol: 'aquarius',
          aboutMe: bio,
          mainPicture: emilypic,
          favorite: true
        }
      ],
      funFact: {
        astrologySymbol: 'cancer',
        content: 'Cancers are cardial signs and regarded as dynamic, initiatory, and provide strong and clear direction.'
      },
      showModals: {
        liked: false,
        notInterested: false,
        favourited: false,
        matched: false
      },

      /* Global Chat Default State */
      localUserId: globalChatState.localUserId,
      activeChatWindowUsers: globalChatState.activeChatWindowUsers,
      chatUsers: globalChatState.chatUsers,
      messages: globalChatState.messages,
      showChatBuddyList: globalChatState.showChatBuddyList

    };

    this.toggleModalHandler = this.toggleModalHandler.bind(this);
    this.createUserCard = this.createUserCard.bind(this);
    this.createFunFactCard = this.createFunFactCard.bind(this);
    this.createOutOfMatchesCard = this.createOutOfMatchesCard.bind(this);
    this.onRightArrowClick = this.onRightArrowClick.bind(this);
    this.onLeftArrowClick = this.onLeftArrowClick.bind(this);

    /* Global Chat Functions */
    this.onSendMessage = onSendMessage.bind(this);
    this.toggleChatBuddyList = toggleChatBuddyList.bind(this);
    this.openChatWindow = openChatWindow.bind(this);
    this.toggleChatWindow = toggleChatWindow.bind(this);
    this.closeChatWindow = closeChatWindow.bind(this);
    this.markAllMessagesAsRead = markAllMessagesAsRead.bind(this);
  }

  render() {
    const { showModals, usersToMatchViewIndex, usersToMatch, funFact,
      localUserId, activeChatWindowUsers, chatUsers, messages, showChatBuddyList } = this.state;
    let remainingUsers = usersToMatch.slice(usersToMatchViewIndex);

    let card1, card2, card3;
    card2 = this.createFunFactCard(funFact);

    if (remainingUsers.length > 1) {
      card1 = this.createUserCard(remainingUsers[0]);
      card3 = this.createUserCard(remainingUsers[1]);
    } else if (remainingUsers.length > 0) {
      card1 = this.createUserCard(remainingUsers[0]);
      card3 = this.createOutOfMatchesCard();
    } else {
      card1 = this.createOutOfMatchesCard();
      card3 = this.createOutOfMatchesCard();
    }

    const distinctUsersWithUnreadMessages = getDistinctUserIdsWithUnreadMessages(messages);

    return (
      <div id="ehContainer">
        <Header/>
        <div id="cardsContainer">
          <img
              id="leftArrow"
              src={leftArrow}
              alt="leftArrow"
              onClick={this.onLeftArrowClick}
          />

          {card1}
          {card2}
          {card3}

          <img
              id="rightArrow"
              src={rightArrow}
              alt="rightArrow"
              onClick={this.onRightArrowClick}
          />
        </div>
        <ActionModal
            type="liked"
            modalIsOpen={showModals.liked}
            toggleModalHandler={this.toggleModalHandler}
        />
        <ActionModal
            type="favourited"
            modalIsOpen={showModals.favourited}
            toggleModalHandler={this.toggleModalHandler}
        />
        <ActionModal
            type="notInterested"
            modalIsOpen={showModals.notInterested}
            toggleModalHandler={this.toggleModalHandler}
        />
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
    );
  }

  onRightArrowClick(event) {
    let newIndex = this.state.usersToMatchViewIndex + 1;
    let maxIndex = this.state.usersToMatch.length - 1;
    if (newIndex <= maxIndex) {
      this.setState({usersToMatchViewIndex: newIndex});
    }
  }

  onLeftArrowClick(event) {
    let newIndex = this.state.usersToMatchViewIndex - 1;
    let minIndex = 0;
    if (newIndex >= minIndex) {
      this.setState({usersToMatchViewIndex: newIndex});
    }
  }

  createOutOfMatchesCard(content) {
    return (
        <OutOfMatchesCard content={content} />
    );
  }

  createFunFactCard(funFact) {
    return (
      <FunFactCard
          astrologySymbol={funFact.astrologySymbol}
          funFactText={funFact.content}
      />
    );
  }

  createUserCard(user) {
    return (
        <UserCard
            user={user}
            onLikeButtonClick={this.toggleModalHandler}
            onFavouriteButtonClick={this.toggleModalHandler}
            onNotInterestedButtonClick={this.toggleModalHandler}
        />
    )
  }

  toggleModalHandler(type, userId, event) {
    this.setState({ ...this.state,
      showModals: {
        ...this.state.showModals,
        [type]: !this.state.showModals[type]
      }
    });
  }

}


export default ExplorationHome
