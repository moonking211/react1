import React , { Component } from 'react'
import Header from '../../../Header/components/Header'
import MainPanel from '../../../Common/components/MainPanel'
import DiscoverabilityPanel from './DiscoverabilityPanel'
import FavouritesPanel from './FavouritesPanel'

import sarah from '../../../images/UserIcons/Small/Sarah.png'
import allison from '../../../images/UserIcons/Small/Allison.png'
import andrea from '../../../images/UserIcons/Small/Andrea.png'
import grace from '../../../images/UserIcons/Small/Grace.png'

import '../styles/SearchPreferences.css'

class SearchPreferences extends Component {

  constructor(props) {
    super(props);

    this.state = {
      preferences: {
        userId: 29024,
        maxDistance: 50,
        ageRange: [ 21, 37 ],
        lookingFor: ['casual'],
        withGender: ['women'],
        lookingForFilters: ['casual']
      },
      favorites: [
        {
          userId: 1353,
          firstName: 'Sarah',
          thumbnail: sarah,
          astrologySymbol: 'virgo',
          lookingFor: ['relationship']
        },
        {
          userId: 1553,
          firstName: 'Allison',
          thumbnail: allison,
          astrologySymbol: 'pieces',
          lookingFor: ['casual']
        },
        {
          userId: 1399,
          firstName: 'Andrea',
          thumbnail: andrea,
          astrologySymbol: 'capricorn',
          lookingFor: ['friendship', 'casual']
        },
        {
          userId: 1953,
          firstName: 'Grace',
          thumbnail: grace,
          astrologySymbol: 'taurus',
          lookingFor: ['casual']
        }
      ]
    };

    this.onSliderChange = this.onSliderChange.bind(this)
    this.onRangeChange = this.onRangeChange.bind(this)
    this.onCheckBoxClick = this.onCheckBoxClick.bind(this)
    this.handleRemoveFriendItem = this.handleRemoveFriendItem.bind(this);
  }

  render() {
    const { preferences, favorites } = this.state;
    return (
      <div className="grayBackground">
        <Header/>
        <MainPanel title="Search Preferences"
            verticalTextStyle={{transform : 'rotate(-90deg) translate(-380px, 20px)', fontSize: '42px'}}>
          <div id="searchPreferencesContainer">
            <DiscoverabilityPanel
                preferences={preferences}
                onSliderChange={this.onSliderChange}
                onRangeChange={this.onRangeChange}
                onCheckBoxClick={this.onCheckBoxClick}
            />
            <FavouritesPanel
                lookingForFilters={preferences.lookingForFilters}
                favorites={favorites}
                onCheckBoxClick={this.onCheckBoxClick}
                handleRemoveFriendItem={this.handleRemoveFriendItem}
            />
          </div>
        </MainPanel>
      </div>
    )
  }

  handleRemoveFriendItem(userId) {
    // TODO: Add confirm or save feature
    let favorites = this.state.favorites;
    let index = favorites.findIndex((fav) => {
      return fav.userId === userId;
    });
    if (index > -1) {
      favorites.splice(index, 1);
      this.setState({ ...this.state, favorites: favorites });
    }
  }

  onCheckBoxClick(type, value, proxy, event) {
    let index = this.state.preferences[type].indexOf(value);
    let arr = this.state.preferences[type];
    if (index > -1) {
      arr.splice(index , 1)
    } else {
      arr.push(value)
    }
    this.setState({ ...this.state , preferences : {
      ...this.state.preferences ,
      [type] : arr
    }})
  }

  onSliderChange(value) {
    this.setState({ ...this.state , preferences : {
      ...this.state.preferences ,
      maxDistance : value
    }})
  }

  onRangeChange(value) {
    this.setState({ ...this.state , preferences : {
      ...this.state.preferences ,
      ageRange : value
    }})
  }

}

export default SearchPreferences
