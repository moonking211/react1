import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'

import '../styles/ChatEntry.css'

export default class ChatEntry extends Component {

  static propTypes = {
    isOutgoingMessage: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired
  };

  render () {
    const { isOutgoingMessage, message, timestamp } = this.props;
    const oldDateFormat = 'YYYY-MM-DD HH:mm:ss',
          newDateFormat = 'h:mm A';

    let classes = isOutgoingMessage ?
        'chatEntryContainer outgoingChatMessage' :
        'chatEntryContainer incomingChatMessage';

    return (
        <div className={classes}>
          <div className="chatMessageContainer">
            <span className="chatMessageText">{message}</span>
          </div>
          <span className="chatTime">{moment(timestamp, oldDateFormat).format(newDateFormat)}</span>
        </div>
    )
  }

}

