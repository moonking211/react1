import andrea from '../images/UserIcons/Large/Andrea.png'
import nadia from '../images/UserIcons/Large/Nadia.png'
import paula from '../images/UserIcons/Large/Paula.png'
import allison from '../images/UserIcons/Large/Allison.png'
import carly from '../images/UserIcons/Large/Carly.png'
import tina from '../images/UserIcons/Large/Tina.png'

const localUserId = 29024;
const remoteUserId1 = 39398,
    remoteUserId2 = 55775,
    remoteUserId3 = 11852,
    remoteUserId4 = 55581,
    remoteUserId5 = 71833,
    remoteUserId6 = 77777;

let globalChatState = {
  localUserId: localUserId,
  activeChatWindowUsers: [
    {userId: remoteUserId1, firstName: 'Andrea', showChatWindow: false},
    {userId: remoteUserId2, firstName: 'Nadia', showChatWindow: false}
  ],
  chatUsers: [
    {
      userId: remoteUserId1,
      isFavorite: true,
      firstName: 'Andrea',
      thumbnail: andrea,
      astrologySymbol: 'gemini',
      timeRemaining: '7 days left'
    },
    {
      userId: remoteUserId2,
      isFavorite: false,
      firstName: 'Nadia',
      thumbnail: nadia,
      astrologySymbol: 'pieces',
      timeRemaining: '3 days left'
    },
    {
      userId: remoteUserId3,
      isFavorite: true,
      firstName: 'Paula',
      thumbnail: paula,
      astrologySymbol: 'capricorn',
      timeRemaining: '2 days left'
    },
    {
      userId: remoteUserId4,
      isFavorite: true,
      firstName: 'Allison',
      thumbnail: allison,
      astrologySymbol: 'capricorn',
      timeRemaining: '7 days left'
    },
    {
      userId: remoteUserId5,
      isFavorite: true,
      firstName: 'Carly',
      thumbnail: carly,
      astrologySymbol: 'cancer',
      timeRemaining: '7 days left'
    },
    {
      userId: remoteUserId6,
      isFavorite: false,
      firstName: 'Tina',
      thumbnail: tina,
      astrologySymbol: 'saggitarius',
      timeRemaining: '7 days left'
    },
  ],
  messages: [
    {
      messageId: 3903903,
      fromUserId: localUserId,
      toUserId: remoteUserId1,
      timestamp: '2017-07-06 14:15:49',
      message: 'So that\'s my dog!',
      isRead: true
    },
    {
      messageId: 3903904,
      fromUserId: localUserId,
      toUserId: remoteUserId1,
      timestamp: '2017-07-06 14:15:55',
      message: 'Her name\'s Venus. ',
      isRead: true
    },
    {
      messageId: 3903905,
      fromUserId: remoteUserId1,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:17:13',
      message: 'I love dogs!',
      isRead: true
    },
    {
      messageId: 3903906,
      fromUserId: localUserId,
      toUserId: remoteUserId1,
      timestamp: '2017-07-06 14:18:49',
      message: 'Really?',
      isRead: true
    },
    {
      messageId: 3903907,
      fromUserId: remoteUserId1,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:19:13',
      message: 'Yeah, But my cat beats your dog',
      isRead: true
    },
    {
      messageId: 3903908,
      fromUserId: localUserId,
      toUserId: remoteUserId1,
      timestamp: '2017-07-06 14:20:49',
      message: 'What?',
      isRead: true
    },
    {
      messageId: 3903909,
      fromUserId: remoteUserId1,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:21:13',
      message: 'haha, no offense :)',
      isRead: true
    },

    {
      messageId: 3885661,
      fromUserId: localUserId,
      toUserId: remoteUserId2,
      timestamp: '2017-07-06 14:15:55',
      message: 'Titanic',
      isRead: true
    },
    {
      messageId: 3885662,
      fromUserId: remoteUserId2,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:17:13',
      message: 'huh?',
      isRead: true
    },
    {
      messageId: 3885663,
      fromUserId: localUserId,
      toUserId: remoteUserId2,
      timestamp: '2017-07-06 14:18:49',
      message: 'Sorry.....not a very good icebreaker.',
      isRead: true
    },
    {
      messageId: 3885664,
      fromUserId: remoteUserId2,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:19:13',
      message: 'Haha!',
      isRead: false
    },

    {
      messageId: 8862692,
      fromUserId: localUserId,
      toUserId: remoteUserId3,
      timestamp: '2017-07-06 14:15:49',
      message: 'Are you religious?',
      isRead: true
    },
    {
      messageId: 8862693,
      fromUserId: remoteUserId3,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:17:13',
      message: 'Yes. Why?',
      isRead: true
    },
    {
      messageId: 8862694,
      fromUserId: localUserId,
      toUserId: remoteUserId3,
      timestamp: '2017-07-06 14:18:49',
      message: 'Because you are the answer to all of my prayers.',
      isRead: true
    },
    {
      messageId: 8862695,
      fromUserId: remoteUserId3,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:19:13',
      message: 'Hahahaha',
      isRead: true
    },
    {
      messageId: 8862696,
      fromUserId: remoteUserId3,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:19:33',
      message: 'Awwwwwwww :)',
      isRead: true
    },
    {
      messageId: 8862697,
      fromUserId: localUserId,
      toUserId: remoteUserId3,
      timestamp: '2017-07-06 14:20:00',
      message: 'Would you like to go out tonight?',
      isRead: true
    },
    {
      messageId: 8862698,
      fromUserId: remoteUserId3,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:21:43',
      message: 'I\'m actually busy tonight',
      isRead: true
    },
    {
      messageId: 8862699,
      fromUserId: remoteUserId3,
      toUserId: localUserId,
      timestamp: '2017-07-06 14:21:55',
      message: 'How about Friday?',
      isRead: false
    }
  ],
  showChatBuddyList: false
};

export default globalChatState;