import React, { Component } from 'react';
import aura from '../../../images/aura.png';
import check from '../../../images/check_mark.png';
import '../styles/SubscriptionItem.css';

class SubscriptionItem extends Component {

  render() {
    return (
      <div id="subItemContainer">

        <h5 id="subItemHeader">Aura</h5>
        <img alt="aura symbol" src={aura}/>
        <span id="price">$.00 / mo</span>

        <ul id="subItemList">
          <li className="subItemListItem">
            <img className="subItemListImage" src={check} alt="Check Mark"/>
            <div className="subItemListText">
              <strong>Unlimited</strong> matches
            </div>
          </li>
          <li className="subItemListItem">
            <img className="subItemListImage" src={check} alt="Check Mark"/>
            <div className="subItemListText">
              Natal chart analysis
            </div>
          </li>
        </ul>

      </div>
    );
  }
}

export default SubscriptionItem;
