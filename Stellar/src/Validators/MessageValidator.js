import PropTypes from 'prop-types'

export let MessagePropTypes = PropTypes.shape({
  messageId: PropTypes.number.isRequired,
  fromUserId: PropTypes.number.isRequired,
  toUserId: PropTypes.number.isRequired,
  timestamp: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  isRead: PropTypes.bool.isRequired
}).isRequired;
