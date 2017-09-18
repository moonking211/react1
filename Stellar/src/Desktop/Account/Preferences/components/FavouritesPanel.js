import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchPreferenceConstants } from '../../../../Validators/SearchPreferenceConstants'
import { AstrologySignPropTypes } from '../../../../Validators/AstrologySignValidator'
import FriendItem from '../../../Common/components/FriendItem'

import checked from '../../../images/checked.png'
import unchecked from '../../../images/unchecked.png'

import '../styles/FavouritesPanel.css'

class FavouritesPanel extends Component {

  static propTypes = {
    lookingForFilters : PropTypes.arrayOf(PropTypes.oneOf(SearchPreferenceConstants.LookingForTypes).isRequired).isRequired ,
    favorites : PropTypes.arrayOf(PropTypes.shape({
      userId : PropTypes.number.isRequired ,
      firstName : PropTypes.string.isRequired ,
      thumbnail : PropTypes.string.isRequired ,
      astrologySymbol : AstrologySignPropTypes ,
      lookingFor : PropTypes.arrayOf(PropTypes.oneOf(SearchPreferenceConstants.LookingForTypes).isRequired).isRequired
    })).isRequired ,
    onCheckBoxClick: PropTypes.func.isRequired,
    handleRemoveFriendItem: PropTypes.func.isRequired
  };

  render() {
    let friendshipFilterCheck = false , relationshipFilterCheck = false , casualFilterCheck = false
    const lookingForConstants = SearchPreferenceConstants.LookingFor
    this.props.lookingForFilters.forEach(function(item) {
      if (item === lookingForConstants.Friendship) {
        friendshipFilterCheck = true
      } else if (item === lookingForConstants.Relationship) {
        relationshipFilterCheck = true
      } else if (item === lookingForConstants.Casual) {
        casualFilterCheck = true
      }
    });
    return (
      <div id="fpContainer">

        <h3 className="panelTitle">Favorites</h3>

        <div id="fpContentContainer">

          <div className="fpSubTitle">Show users looking for:</div>

          <div id="fpLookingForContainer">
            <div className="fpLookingForCheckBoxWrapper">
              <img alt="checkbox"
                  className="searchPreferencesCheckbox"
                src={friendshipFilterCheck ? checked : unchecked}
                onClick={this.props.onCheckBoxClick.bind(this , 'lookingForFilters' , lookingForConstants.Friendship)}
              />
              <span className="fpLookingForCheckBoxLabel">Friendship</span>
            </div>

            <div className="fpLookingForCheckBoxWrapper">
              <img alt="checkbox"
                  className="searchPreferencesCheckbox"
                  src={relationshipFilterCheck ? checked : unchecked}
                  onClick={this.props.onCheckBoxClick.bind(this , 'lookingForFilters' , lookingForConstants.Relationship)}
              />
              <span className="fpLookingForCheckBoxLabel">Relationship</span>
            </div>

            <div className="fpLookingForCheckBoxWrapper">
              <img alt="checkbox"
                  className="searchPreferencesCheckbox"
                  src={casualFilterCheck ? checked : unchecked}
                  onClick={this.props.onCheckBoxClick.bind(this , 'lookingForFilters' , lookingForConstants.Casual)}
              />
              <span className="fpLookingForCheckBoxLabel">Something Casual</span>
            </div>
          </div>

          <div id="ffContainer">
            {
              // Apply filtering of favorites based on user preferences
              this.props.favorites.map(function(fav) {
                let render = false;
                if (this.props.lookingForFilters.length !== 0) {
                  let intersection =
                      this.props.lookingForFilters.filter(function(f) {
                        return fav.lookingFor.indexOf(f) !== -1
                      })
                  if (intersection.length > 0) {
                    render = true
                  }
                }
                if (render) {
                  return (
                    <FriendItem
                      key={fav.userId}
                      userId={fav.userId}
                      thumbnail={fav.thumbnail}
                      firstName={fav.firstName}
                      astrologySymbol={fav.astrologySymbol}
                      handleRemoveFriendItem={this.props.handleRemoveFriendItem}
                    />
                  )
                } else {
                  return null
                }
              } , this)
            }
          </div>

        </div>
      </div>
    )
  }

}

export default FavouritesPanel
