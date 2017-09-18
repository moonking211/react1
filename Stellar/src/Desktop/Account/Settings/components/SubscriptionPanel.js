import React , { Component } from 'react'
import PropTypes from 'prop-types'
import '../styles/SubscriptionPanel.css'
import SubscriptionItem from './SubscriptionItem'
import EmptySubscriptionItem from './EmptySubscriptionItem'
import ModalDialog from './ModalDialog'
import triangle from '../../../images/Triangle.png'
import '../styles/SubscriptionPanel.css'

class SubscriptionPanel extends Component{

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

  render(){
    const { subscriptionPackages, onUpgradeButtonClick, modalIsOpen, openModalHandler } = this.props;
    return (
      <div id="subPanelContainer">
        <h3 className="panelTitle">Subscription:</h3>
        <div>
          <SubscriptionItem/>
          <EmptySubscriptionItem />
          <a id="packagesLink" onClick={openModalHandler}>
              VIEW PACKAGES &nbsp;
            <img id="triangle" alt="triangle" src={triangle}  />
          </a>
        </div>
        <ModalDialog
            subscriptionPackages={subscriptionPackages}
            onUpgradeButtonClick={onUpgradeButtonClick}
            modalIsOpen={modalIsOpen}
            openModalHandler={openModalHandler}
        />
      </div>
    )
  }

}

export default SubscriptionPanel
