import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchPreferenceConstants } from '../../../../Validators/SearchPreferenceConstants'
import { AstrologySignPropTypes } from '../../../../Validators/AstrologySignValidator'
import ProfileThumbnailWithMask from '../../../Common/components/ProfileThumbnailWithMask'
import AstrologySymbolIcon from '../../../Common/components/AstrologySymbolIcon'

import man from '../../../images/man.png'
import woman from '../../../images/woman.png'
import casual from '../../../images/casual.png'
import friendship from '../../../images/friendship.png'
import relationship from '../../../images/relationship.png'

export default class ProfilePanelHeader extends Component {

  static propTypes = {
    firstName: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    astrologySymbol: AstrologySignPropTypes,
    lookingFor : PropTypes.arrayOf(function(propValue , key , componentName , propFullName) {
      if (SearchPreferenceConstants.LookingForTypes.indexOf(propValue[key]) < 0) {
        return new Error(
            'Invalid value `' + propValue[key] + '` in ' +
            'prop `' + propFullName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
        )
      }
    }).isRequired ,
    withGender : PropTypes.arrayOf(function(propValue , key , componentName , propFullName) {
      if (SearchPreferenceConstants.WithGenderTypes.indexOf(propValue[key]) < 0) {
        return new Error(
            'Invalid value `' + propValue[key] + '` in ' +
            'prop `' + propFullName + '` supplied to' +
            ' `' + componentName + '`. Validation failed.'
        )
      }
    }).isRequired
  };

  render() {
    const { firstName, age, gender, city, state, thumbnail, astrologySymbol, lookingFor, withGender } = this.props;
    let lookingForImages = [], withGenderImages = [];
    lookingFor.forEach(function(item, i) {
      if (item === SearchPreferenceConstants.LookingFor.Casual) {
        lookingForImages.push(<img key={i * 17} alt="Casual" src={casual} />);
      } else if (item === SearchPreferenceConstants.LookingFor.Friendship) {
        lookingForImages.push(<img key={i * 17} alt="Friendship" src={friendship} />);
      } else if (item === SearchPreferenceConstants.LookingFor.Relationship) {
        lookingForImages.push(<img key={i * 17} alt="Relationship" src={relationship} />);
      }
    });
    withGender.forEach(function(item, i) {
      if (item === SearchPreferenceConstants.WithGender.Men) {
        withGenderImages.push(<img key={i * 19} alt="men" src={man} />)
      } else if (item === SearchPreferenceConstants.WithGender.Women) {
        withGenderImages.push(<img key={i * 19} alt="women" src={woman} />)
      }
    });

    return (
        <div id="ppHeaderContainer">

          <ProfileThumbnailWithMask
              thumbnail={thumbnail}
              containerStyle={{ height: '118px', width: '118px'}}
          />

          <div id="ppHeaderContentContainer">

            <div id="ppNameContainer">

              <div id="ppNameText" className="ppHeaderMainText">
                <span>{firstName}, {age}</span>
                {}
                <img
                    id="ppGenderIcon"
                    alt="gender"
                    src={gender === 'male' ? man : woman}
                />
                <AstrologySymbolIcon
                    imageClass="ppAstrologyIcon"
                    sign={astrologySymbol}
                    isPurple={true}
                />
              </div>

            </div>

            <div id="ppLocationText" className="ppHeaderSubText">
              <span>{`${city}, ${state}`}</span>
            </div>


            <div id="ppLookingforContainer" className="ppHeaderSubText">
              <span>Looking for:</span>
              <div className="ppLookingForImages">
                {lookingForImages}
                {withGenderImages}
              </div>
            </div>

          </div>

        </div>
    )
  }

}

