import React, { Component } from 'react'
import PropTypes from 'prop-types'
import NewMatchItem from './NewMatchItem'

import { ChatUserPropTypes } from "../../../Validators/UserValidator";

import '../styles/NewMatchesPanel.css'

export default class NewMatchesPanel extends Component {

  static propTypes = {
    users: PropTypes.arrayOf(ChatUserPropTypes).isRequired,
    onNewMatchClick: PropTypes.func.isRequired
  };

  render() {
    const { users, onNewMatchClick } = this.props;
    return (
      <div className="newMatchesPanel">
        <h4 className="centeredText newMatchesPanelTitle">
          New Matches
        </h4>
        <div className="newMatchesPanelContainer">
          {users.map((u) => {
            return (
                <NewMatchItem
                    key={u.userId}
                    user={u}
                    onNewMatchClick={onNewMatchClick}
                />
            );
          })}
        </div>
      </div>
    );
  }
}