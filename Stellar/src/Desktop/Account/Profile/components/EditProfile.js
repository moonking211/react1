import React , { Component } from 'react'
import '../styles/Profile.css'
import Header from '../../../Header/components/Header'
import MainPanel from '../../../Common/components/MainPanel'
import ProfilePanel from './ProfilePanel'
import EditPicturesPanel from './EditPicturesPanel'
import daniel from '../../../images/UserIcons/Large/Daniel.png'
import danielMainPhoto from '../../../images/daniel.png'

export default class EditProfile extends Component {

  constructor(props) {
    super(props);
    let aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod' +
        ' tempor incididunt ut labore et dolore magna aliqua.';
    this.state = {
      user: {
        userId: 29024,
        thumbnail: daniel,
        firstName: 'Daniel',
        age: 24,
        gender: 'male',
        astrologySymbol: 'cancer',
        lookingFor: ['casual'],
        withGender: ['women'],
        city: 'New York',
        state: 'NY',
        country: 'United States of America',
        aboutMe: aboutText,
        education: 'Bachelors Degree in Computer Engineering',
        occupation: 'Lead Engineer at Stellar Inc.'
      },
      userPictures: [danielMainPhoto],
      disabled: {
        aboutMe: true,
        city: true,
        state: true,
        country: true,
        education: true,
        occupation: true
      }
    };
    this.isDisabledHandler = this.isDisabledHandler.bind(this);
    this.onKeypressHandler = this.onKeypressHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  render() {
    const { user, disabled, userPictures } = this.state;
    return (
      <div className="grayBackground">
        <Header/>
        <MainPanel title="Profile"
            verticalTextStyle={{transform : 'rotate(-90deg) translate(-130px, 20px)'}}>
          <div id="profileContainer">
            <ProfilePanel
                user={user}
                disabled={disabled}
                showEditButtons={true}
                isDisabledHandler={this.isDisabledHandler}
                onKeypressHandler={this.onKeypressHandler}
                onChangeHandler={this.onChangeHandler}
            />
            <EditPicturesPanel
                pictures={userPictures}
            />
          </div>
        </MainPanel>
      </div>
    )
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

  onKeypressHandler = (event) => {
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
  };

  onChangeHandler = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ ...this.state ,
      user : {
        ...this.state.user ,
        [name] : value
      }
    });
  };

}
