import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SubscriptionPackageItem from './SubscriptionPackageItem'

import '../styles/ModalDialog.css'

export default class ModalDialog extends Component {

  static propTypes = {
    subscriptionPackages: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      includedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
      showTrialHeader: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onUpgradeButtonClick: PropTypes.func.isRequired,
    modalIsOpen: PropTypes.bool.isRequired,
    openModalHandler: PropTypes.func.isRequired
  };

  render() {
    const { subscriptionPackages, modalIsOpen, openModalHandler, onUpgradeButtonClick } = this.props;
    const style = modalIsOpen ? {display: 'block'} : {};
    return (
        <div>
          <div id='overlay' style={style} onClick={openModalHandler}></div>
          <div id='modal-container' style={style}>
            <div id='subscription-package-wrapper'>
            {
              subscriptionPackages.map((subPackage) => {
                const { title, icon, price, includedItems, showTrialHeader } = subPackage;
                return (
                  <SubscriptionPackageItem
                      key={title}
                      subscriptionPackageTitle={title}
                      subscriptionPackageIcon={icon}
                      subscriptionPackagePrice={price}
                      includedItems={includedItems}
                      showTrialHeader={showTrialHeader}
                      onUpgradeButtonClick={onUpgradeButtonClick.bind(title)}
                  />
                );
              })
            }
            </div>
          </div>
        </div>
    )
  }
}
