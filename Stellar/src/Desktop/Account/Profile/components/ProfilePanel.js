import React , { Component } from 'react'
import PropTypes from 'prop-types'

import ProfilePanelHeader from './ProfilePanelHeader'
import InputBoxElement from '../../../Common/components/InputBoxElement'
import TextareaElement from '../../../Common/components/TextareaElement'

import { UserProfilePropTypes } from '../../../../Validators/UserValidator';

import '../styles/ProfilePanel.css'

export default class ProfilePanel extends Component {

  static propTypes = {
    user: UserProfilePropTypes,
    disabled: PropTypes.shape({
      aboutMe: PropTypes.bool.isRequired,
      city: PropTypes.bool.isRequired,
      state: PropTypes.bool.isRequired,
      country: PropTypes.bool.isRequired,
      education: PropTypes.bool.isRequired,
      occupation: PropTypes.bool.isRequired,
    }).isRequired,
    showEditButtons: PropTypes.bool.isRequired,
    isDisabledHandler: PropTypes.func.isRequired,
    onKeypressHandler: PropTypes.func.isRequired,
    onChangeHandler: PropTypes.func.isRequired
  };

  render() {
    const { user, disabled, showEditButtons, isDisabledHandler, onKeypressHandler, onChangeHandler } = this.props;
    return (
      <div id="ppContainer">

        <ProfilePanelHeader
            firstName={user.firstName}
            age={user.age}
            gender={user.gender}
            city={user.city}
            state={user.state}
            country={user.country}
            thumbnail={user.thumbnail}
            astrologySymbol={user.astrologySymbol}
            lookingFor={user.lookingFor}
            withGender={user.withGender}
        />

        <div className="ppSectionContainer">
          <TextareaElement
              title="About me:"
              name="aboutMe"
              content={user.aboutMe}
              isDisabled={disabled.aboutMe}
              titleClass="ppSectionHeaderContainer"
              inputClass=""
              showEditButton={showEditButtons}
              isDisabledHandler={isDisabledHandler}
              onChangeHandler={onChangeHandler}
          />
          <InputBoxElement
              title="City:"
              name="city"
              content={user.city}
              isDisabled={disabled.city}
              titleClass="ppSectionHeaderContainer"
              inputClass=""
              showEditButton={showEditButtons}
              isDisabledHandler={isDisabledHandler}
              onKeypressHandler={onKeypressHandler}
              onChangeHandler={onChangeHandler}
          />
          <InputBoxElement
              title="State:"
              name="state"
              content={user.state}
              isDisabled={disabled.state}
              titleClass="ppSectionHeaderContainer"
              inputClass=""
              showEditButton={showEditButtons}
              isDisabledHandler={isDisabledHandler}
              onKeypressHandler={onKeypressHandler}
              onChangeHandler={onChangeHandler}
          />
          <InputBoxElement
              title="Country:"
              name="country"
              content={user.country}
              isDisabled={disabled.country}
              titleClass="ppSectionHeaderContainer"
              inputClass=""
              showEditButton={showEditButtons}
              isDisabledHandler={isDisabledHandler}
              onKeypressHandler={onKeypressHandler}
              onChangeHandler={onChangeHandler}
          />
          <InputBoxElement
              title="Education:"
              name="education"
              content={user.education}
              isDisabled={disabled.education}
              titleClass="ppSectionHeaderContainer"
              inputClass=""
              showEditButton={showEditButtons}
              isDisabledHandler={isDisabledHandler}
              onKeypressHandler={onKeypressHandler}
              onChangeHandler={onChangeHandler}
          />
          <InputBoxElement
              title="Occupation"
              name="occupation"
              content={user.occupation}
              isDisabled={disabled.occupation}
              titleClass="ppSectionHeaderContainer"
              inputClass=""
              showEditButton={showEditButtons}
              isDisabledHandler={isDisabledHandler}
              onKeypressHandler={onKeypressHandler}
              onChangeHandler={onChangeHandler}
          />
        </div>

      </div>
    )
  }

}
