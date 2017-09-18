import React, { Component } from 'react';
import plus from '../../../images/plus.png';
import '../styles/EmptySubscriptionItem.css';

class EmptySubscriptionItem extends Component {
  render() {
    return(
      <div id="emptySubItemContainer">
        <img alt="plus" src={plus} />
        <div><small>See what the stars <br/> have to say</small></div>
      </div>
    );
  }
}

export default EmptySubscriptionItem;
