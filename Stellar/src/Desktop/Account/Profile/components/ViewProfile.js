import React , { Component } from 'react'
import Header from '../../../Header/components/Header'
import ButtonPanel from '../../../Common/components/ButtonPanel'
import ProfilePanel from './ProfilePanel'
import ViewPicturesPanel from './ViewPicturesPanel'
import ActionModal from '../../../Common/components/ActionModal'

import profilepic from '../../../images/UserIcons/Large/Emily.png'
import emily from '../../../images/emily.png'

import '../styles/Profile.css'

export default class ViewProfile extends Component {

  constructor(props) {
    super(props);
    let aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
        ' tempor incididunt ut labore et dolore magna aliqua.';
    const compatibilityText = 'A sexual relationship between Cancer and Aquarius can be stressful ' +
        'for both partners. Although Cancer is considered the most sensitive sign of the zodiac, ' +
        'governed by the Moon, they can be quite rough and distant when they feel the need to set ' +
        ' strong boundaries. Aquarius, is known as the innovator, someone to make the change, but in fact, '+
        'they are fixed sign, pretty set in their ways and as a paradox unchangable.'
    this.state = {
      user: {
        userId: 29024,
        thumbnail: profilepic,
        firstName: 'Emily',
        age: 23,
        gender: 'female',
        astrologySymbol: 'aquarius',
        lookingFor: ['casual'],
        withGender: ['men'],
        city: 'New York',
        state: 'NY',
        country: 'United States of America',
        aboutMe: aboutText,
        education: 'Bachelors Degree in Business Administration',
        occupation: 'Business Analyst at Stellar Inc.'
      },
      disabled: {
        aboutMe: true,
        city: true,
        state: true,
        country: true,
        education: true,
        occupation: true
      },
      compatibilityText: compatibilityText,
      userPictures: [emily],
      selectedUserPictureIndex: 0,
      showModals: {
        liked: false,
        notInterested: false,
        favourited: false,
        matched: false
      }
    };

    this.onChangePicture = this.onChangePicture.bind(this);
    this.toggleModalHandler = this.toggleModalHandler.bind(this);
  }

  render() {
    const { user, disabled, compatibilityText, userPictures, selectedUserPictureIndex, showModals } = this.state;
    const doNothing = this.doNothing;
    let picture = userPictures[selectedUserPictureIndex];
    if (userPictures.length === 0) {
      // TODO: Set default picture
    }
    return (
      <div className="grayBackground">
        <Header/>
        <ButtonPanel
            onFavouriteClick={this.toggleModalHandler.bind(this, 'favourited', user.userId)}
            onLikeClick={this.toggleModalHandler.bind(this, 'liked', user.userId)}
            onNotInterestedClick={this.toggleModalHandler.bind(this, 'notInterested', user.userId)}
        >
          <div id="profileContainer">
            <ProfilePanel
                user={user}
                disabled={disabled}
                showEditButtons={false}
                isDisabledHandler={doNothing}
                onKeypressHandler={doNothing}
                onChangeHandler={doNothing}
            />
            <ViewPicturesPanel
                compatibilityText={compatibilityText}
                picture={picture}
                onChangePicture={this.onChangePicture}
            />
          </div>
        </ButtonPanel>
        <ActionModal
            type="liked"
            modalIsOpen={showModals.liked}
            toggleModalHandler={this.toggleModalHandler}
        />
        <ActionModal
            type="favourited"
            modalIsOpen={showModals.favourited}
            toggleModalHandler={this.toggleModalHandler}
        />
        <ActionModal
            type="notInterested"
            modalIsOpen={showModals.notInterested}
            toggleModalHandler={this.toggleModalHandler}
        />
      </div>
    )
  }

  doNothing() { }

  toggleModalHandler(type, userId, event) {
    this.setState({ ...this.state,
      showModals: {
        ...this.state.showModals,
        [type]: !this.state.showModals[type]
      }
    });
  }

  onChangePicture(indexOffset, event) {
    let index = this.state.selectedUserPictureIndex + indexOffset;
    let maxIndex = this.state.userPictures.length-1;
    if (index < 0) {
      index = maxIndex;
    } else if (index > maxIndex) {
      index = 0;
    }
    this.setState({ selectedUserPictureIndex: index });
  }

}
