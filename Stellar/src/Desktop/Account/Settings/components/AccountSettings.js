import React , { Component } from 'react'
import '../styles/AccountSettings.css'
import Header from '../../../Header/components/Header'
import MainPanel from '../../../Common/components/MainPanel'
import AccountPanel from './AccountPanel'
import SubscriptionPanel from './SubscriptionPanel'

import lunarIcon from '../../../images/Icons/Lunar.png'
import stellarIcon from '../../../images/Icons/Stellar.png'
import cosmicIcon from '../../../images/Icons/Cosmic.png'

class AccountSettings extends Component {

  constructor(props) {
    super(props);

    this.state = {
      settings: {
        userId: 8390,
        username: 'DLav',
        password: '**********',
        firstName: 'Daniel',
        lastName: 'Lavenburg',
        city: 'New York',
        state: 'NY',
        country: 'United States of America',
        dateOfBirth: '05 / 07 / 1990',
        timeOfBirth: '04:16 PM'
      },
      disabled: {
        username: true,
        password: true,
        firstName: true,
        lastName: true,
        city: true,
        state: true,
        country: true,
        dateOfBirth: true,
        timeOfBirth: true
      },
      subscriptionPackages: [
        {
          title: 'Lunar',
          icon: lunarIcon,
          price: '$2.99 / mo',
          includedItems: [
            'Unlimited matches', 'Natal chart analysis', 'Daily horoscopes',
            'Weekly horoscope', 'Monthly horoscope'
          ],
          showTrialHeader: false
        },
        {
          title: 'Stellar',
          icon: stellarIcon,
          price: '$4.99 / mo',
          includedItems: [
            'Unlimited matches', 'Natal chart analysis', 'Unlimited chat',
            'Favourite options','Daily horoscopes', 'Weekly horoscope',
            'Monthly horoscope'
          ],
          showTrialHeader: true
        },
        {
          title: 'Cosmic',
          icon: cosmicIcon,
          price: '$0.99 / mo',
          includedItems: [
            'Unlimited matches', 'Natal chart analysis', 'Monthly horoscope'
          ],
          showTrialHeader: false
        },
      ],
      modalIsOpen: false
    };

    this.isDisabledHandler = this.isDisabledHandler.bind(this);
    this.onKeypressHandler = this.onKeypressHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onUpdateButtonClick = this.onUpdateButtonClick.bind(this);

    this.openModalHandler = this.openModalHandler.bind(this);
    this.onUpgradeButtonClick = this.onUpgradeButtonClick.bind(this);
  }

  render() {
    const { settings, disabled, subscriptionPackages, modalIsOpen } = this.state;
    return (
      <div className="grayBackground">
        <Header/>
        <MainPanel title="Account Settings"
            verticalTextStyle={{transform : 'rotate(-90deg) translate(-444px, 20px)'}}>
          <div id="accountSettingsContainer">
            <AccountPanel
                settings={settings}
                disabled={disabled}
                isDisabledHandler={this.isDisabledHandler}
                onKeypressHandler={this.onKeypressHandler}
                onChangeHandler={this.onChangeHandler}
                onUpdateButtonClick={this.onUpdateButtonClick}
            />
            <SubscriptionPanel
                subscriptionPackages={subscriptionPackages}
                onUpgradeButtonClick={this.onUpgradeButtonClick}
                modalIsOpen={modalIsOpen}
                openModalHandler={this.openModalHandler}
            />
          </div>
        </MainPanel>
      </div>
    )
  }

  onUpgradeButtonClick(packageTitle, event) {
  }

  openModalHandler() {
    this.setState({
      modalIsOpen: !this.state.modalIsOpen
    });
  }

  isDisabledHandler = (event) => {
    const target = event.target;
    const name = target.name;
    this.setState({ ...this.state ,
      disabled: {
        ...this.state.disabled ,
        [name] : !this.state.disabled[name]
      }
    });
  };

  onKeypressHandler(event) {
    if(event.key === 'Enter'){
      const target = event.target;
      const name = target.name;
      this.setState({ ...this.state ,
        disabled: {
          ...this.state.disabled ,
          [name] : !this.state.disabled[name]
        }
      });
    }
  }

  onChangeHandler(event) {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ ...this.state ,
      settings : {
        ...this.state.settings ,
        [name] : value
      }
    });
  }

  onUpdateButtonClick(event) {
    this.setState((state) => {
      let disabled = state.disabled;
      for (let prop in disabled) {
        if (disabled.hasOwnProperty(prop)) {
          disabled[prop] = true;
        }
      }
      return { disabled: disabled };
    });
  }

}

export default AccountSettings
