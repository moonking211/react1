import React, { Component } from 'react'
import PropTypes from 'prop-types'

import checkmark from '../../../images/check_mark.png'

import '../styles/SubscriptionPackageItem.css'

export default class SubscriptionPackageItem extends Component {

  static propTypes = {
    subscriptionPackageTitle: PropTypes.string.isRequired,
    subscriptionPackageIcon: PropTypes.string.isRequired,
    subscriptionPackagePrice: PropTypes.string.isRequired,
    includedItems: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    showTrialHeader: PropTypes.bool.isRequired,
    onUpgradeButtonClick: PropTypes.func.isRequired
  };

  render() {
    const { subscriptionPackageTitle, subscriptionPackageIcon, subscriptionPackagePrice, includedItems, onUpgradeButtonClick, showTrialHeader } = this.props;
    let trialHeader = null;
    if (showTrialHeader) {
      trialHeader = <div className="trial-header">3 months free trial</div>;
    }
    return (
        <div className="subscription-item">
          {trialHeader}
          <div className="subscription-package-title">{subscriptionPackageTitle}</div>
          <br/>
          <img className="subscription-package-icon" src={subscriptionPackageIcon} alt={subscriptionPackageTitle} />
          <br/>
          <div className="subscription-price">{subscriptionPackagePrice}</div>
          <br/>
          <ul className="included-item-list">
            {
              includedItems.map((item, i) => {
                let includedItemText;
                let index = item.toLowerCase().indexOf('unlimited');
                if (index === 0 ) {
                  includedItemText =
                    <div className="included-item-text">
                      <strong>Unlimited</strong>
                      {item.slice(9)}
                    </div>;
                } else {
                  includedItemText = <div className="included-item-text">{item}</div>
                }
                return (
                    <li key={i * 17 * 19} className="included-item">

                      <img alt="checkmark" className="included-item-check" src={checkmark} />
                      {includedItemText}
                    </li>
                );
              })
            }
          </ul>
          <br/>
          <br/>
          <a className="upgrade-button" onClick={onUpgradeButtonClick}>UPGRADE</a>
        </div>
    );
  }

}
