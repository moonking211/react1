import React , { Component } from 'react'
import PropTypes from 'prop-types';
import '../styles/AccountPanel.css';
import fbLarge from '../../../images/fblarge.png';
import linkedinLarge from '../../../images/linkedinlarge.png';
import '../styles/AccountPanel.css'
import InputBoxElement from "../../../Common/components/InputBoxElement";

class AccountPanel extends Component{

  static propTypes = {
    settings: PropTypes.shape({
      userId: PropTypes.number.isRequired,
      username: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      timeOfBirth: PropTypes.string.isRequired
    }).isRequired,
    disabled: PropTypes.shape({
      username: PropTypes.bool.isRequired,
      password: PropTypes.bool.isRequired,
      firstName: PropTypes.bool.isRequired,
      lastName: PropTypes.bool.isRequired,
      city: PropTypes.bool.isRequired,
      state: PropTypes.bool.isRequired,
      country: PropTypes.bool.isRequired,
      dateOfBirth: PropTypes.bool.isRequired,
      timeOfBirth: PropTypes.bool.isRequired
    }).isRequired,
    isDisabledHandler: PropTypes.func.isRequired,
    onKeypressHandler: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired,
    onUpdateButtonClick: PropTypes.func.isRequired
  };

  render() {
    const { settings, disabled, isDisabledHandler, onKeypressHandler, onChangeHandler, onUpdateButtonClick } = this.props;
    return(
      <div id="accountPanelContainer">
        <form>
          <h3 className="panelTitle">Account</h3>

          <div id="settingsContainer">
            <InputBoxElement
                title="First Name"
                name="firstName"
                content={settings.firstName}
                isDisabled={disabled.firstName}
                showEditButton={true}
                titleClass="settingItemLabel"
                inputClass="settingItemValue"
                isDisabledHandler={isDisabledHandler}
                onKeypressHandler={onKeypressHandler}
                onChangeHandler={onChangeHandler}
            />
            <InputBoxElement
                title="Last Name"
                name="lastName"
                content={settings.lastName}
                isDisabled={disabled.lastName}
                showEditButton={true}
                titleClass="settingItemLabel"
                inputClass="settingItemValue"
                isDisabledHandler={isDisabledHandler}
                onKeypressHandler={onKeypressHandler}
                onChangeHandler={onChangeHandler}
            />
            <InputBoxElement
                title="Username"
                name="username"
                content={settings.username}
                isDisabled={disabled.username}
                showEditButton={true}
                titleClass="settingItemLabel"
                inputClass="settingItemValue"
                isDisabledHandler={isDisabledHandler}
                onKeypressHandler={onKeypressHandler}
                onChangeHandler={onChangeHandler}
            />
            <InputBoxElement
                title="Password"
                name="password"
                content={settings.password}
                isDisabled={disabled.password}
                showEditButton={true}
                titleClass="settingItemLabel"
                inputClass="settingItemValue"
                isDisabledHandler={isDisabledHandler}
                onKeypressHandler={onKeypressHandler}
                onChangeHandler={onChangeHandler}
            />
            <div id="cityAndStateSettingsContainer">
              <InputBoxElement
                  title="City"
                  name="city"
                  content={settings.city}
                  isDisabled={disabled.city}
                  showEditButton={true}
                  titleClass="settingItemLabel"
                  inputClass="settingItemValue"
                  isDisabledHandler={isDisabledHandler}
                  onKeypressHandler={onKeypressHandler}
                  onChangeHandler={onChangeHandler}
              />
              <InputBoxElement
                  title="State"
                  name="state"
                  content={settings.state}
                  isDisabled={disabled.state}
                  showEditButton={true}
                  titleClass="settingItemLabel"
                  inputClass="settingItemValue"
                  isDisabledHandler={isDisabledHandler}
                  onKeypressHandler={onKeypressHandler}
                  onChangeHandler={onChangeHandler}
              />
            </div>
            <InputBoxElement
                title="Country"
                name="country"
                content={settings.country}
                isDisabled={disabled.country}
                showEditButton={true}
                titleClass="settingItemLabel"
                inputClass="settingItemValue"
                isDisabledHandler={isDisabledHandler}
                onKeypressHandler={onKeypressHandler}
                onChangeHandler={onChangeHandler}
            />
            <div id="birthSettingsContainer">
              <InputBoxElement
                  title="Date of Birth"
                  name="dateOfBirth"
                  content={settings.dateOfBirth}
                  isDisabled={disabled.dateOfBirth}
                  showEditButton={true}
                  titleClass="settingItemLabel"
                  inputClass="settingItemValue"
                  isDisabledHandler={isDisabledHandler}
                  onKeypressHandler={onKeypressHandler}
                  onChangeHandler={onChangeHandler}
              />
              <InputBoxElement
                  title="Time"
                  name="timeOfBirth"
                  content={settings.timeOfBirth}
                  isDisabled={disabled.timeOfBirth}
                  showEditButton={true}
                  titleClass="settingItemLabel"
                  inputClass="settingItemValue"
                  isDisabledHandler={isDisabledHandler}
                  onKeypressHandler={onKeypressHandler}
                  onChangeHandler={onChangeHandler}
              />
            </div>
          </div>

          <div id="socialLinksContainer">
            <img alt="Facebook" src={fbLarge}/>
            <img alt="LinkedIn" src={linkedinLarge}/>
          </div>

          <a id="updateLink" onClick={onUpdateButtonClick}>Update</a>
         </form>
      </div>
    )
  }
}

export default AccountPanel;
