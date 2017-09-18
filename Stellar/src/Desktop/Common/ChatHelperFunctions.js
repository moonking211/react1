import moment from 'moment'

function closeChatWindow(userId, event) {
  let activeChatWindowUsers = this.state.activeChatWindowUsers;
  let index = activeChatWindowUsers.findIndex(item => { return item.userId === userId});
  if (index > -1) {
    activeChatWindowUsers.splice(index, 1);
    this.setState({ activeChatWindowUsers: activeChatWindowUsers });
  }
}

function toggleChatWindow(userId, event) {
  let activeChatWindowUsers = this.state.activeChatWindowUsers;
  let index = activeChatWindowUsers.findIndex(item => { return item.userId === userId});
  if (index > -1) {
    let showChatWindow = !activeChatWindowUsers[index].showChatWindow;
    activeChatWindowUsers[index].showChatWindow = showChatWindow;

    this.setState({ activeChatWindowUsers: activeChatWindowUsers });

    if (showChatWindow) {
      // TODO: Check if they are unread messages before
      this.markAllMessagesAsRead(userId);
    }
  }
}

function openChatWindow(userId, firstName, event) {
  let activeChatWindowUsers = this.state.activeChatWindowUsers;
  let indexOfChatWindow = activeChatWindowUsers.findIndex(item => { return item.userId === userId});
  if (indexOfChatWindow > -1) {
    activeChatWindowUsers[indexOfChatWindow].showChatWindow = true;
  } else {
    activeChatWindowUsers.push({
      userId: userId,
      firstName: firstName,
      showChatWindow: true
    });
  }
  this.setState({ activeChatWindowUsers: activeChatWindowUsers });
}

function toggleChatBuddyList() {
  this.setState({
    showChatBuddyList: !this.state.showChatBuddyList
  });
}

function getDistinctUserIdsWithUnreadMessages(messages, localUserId) {
  let distinctUserIds = [];

  messages.forEach(msg => {

    let remoteUserId = msg.fromUserId !== localUserId ? msg.fromUserId : msg.toUserId;

    if (msg.isRead === false && distinctUserIds.indexOf(remoteUserId < 0)) {
      distinctUserIds.push(remoteUserId);
    }

  });

  return distinctUserIds;
}

function getMessagesWithUserIdSortedByDate(messages, userId) {
  const currentDateFormat = 'YYYY-MM-DD HH:mm:ss';

  return messages.filter(msg => {

    return (msg.fromUserId === userId) ||
        (msg.toUserId === userId);

  }).sort((a, b) => {

    let momentA = moment(a.timestamp, currentDateFormat);
    let momentB = moment(b.timestamp, currentDateFormat);

    if (momentA.isBefore(momentB)) {
      return -1
    } else if (momentA.isAfter(momentB)) {
      return 1;
    }
    return 0;

  });
}

function onSendMessage(userId, event) {
  if (event.key === 'Enter') {
    let newMessage = {
      messageId: Math.random(),
      fromUserId: this.state.localUserId,
      toUserId: userId,
      message: event.target.value,
      timestamp: moment().format('YYYY-MM-DD HH:mm:ss'),
      isRead: true
    };
    let messages = this.state.messages;
    messages.push(newMessage);
    this.setState({
      messages: messages
    });
    event.target.value = ''
  }
}

function markAllMessagesAsRead(userId) {
  this.setState(state => {
    state.messages.forEach((msg) => {
      if (msg.fromUserId === userId || msg.toUserId === userId) {
        msg.isRead = true;
      }
    });
    return { messages: state.messages };
  });
}

export { toggleChatWindow, closeChatWindow, openChatWindow, toggleChatBuddyList, markAllMessagesAsRead, onSendMessage, getMessagesWithUserIdSortedByDate, getDistinctUserIdsWithUnreadMessages };
