import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { SearchPreferenceConstants } from '../../../../Validators/SearchPreferenceConstants.js'
import checked from '../../../images/checked.png'
import unchecked from '../../../images/unchecked.png'
import man from '../../../images/man.png'
import woman from '../../../images/woman.png'
import locateme from '../../../images/locateme.png'
import Slider , { Range } from 'rc-slider'
import 'rc-slider/assets/index.css'
import '../styles/DiscoverabilityPanel.css'

class DiscoverabilityPanel extends Component{

  static propTypes = {
    preferences : PropTypes.shape({
      maxDistance : PropTypes.number.isRequired ,
      ageRange : PropTypes.arrayOf(PropTypes.number).isRequired ,
      lookingFor : PropTypes.arrayOf(PropTypes.oneOf(SearchPreferenceConstants.LookingForTypes).isRequired).isRequired ,
      withGender : PropTypes.arrayOf(PropTypes.oneOf(SearchPreferenceConstants.WithGenderTypes).isRequired).isRequired
    }).isRequired ,
    onSliderChange : PropTypes.func.isRequired ,
    onRangeChange : PropTypes.func.isRequired ,
    onCheckBoxClick : PropTypes.func.isRequired
  };

  render(){
    const { maxDistance , ageRange , lookingFor , withGender } = this.props.preferences
    const lookingForConstants = SearchPreferenceConstants.LookingFor
    const withGenderConstants = SearchPreferenceConstants.WithGender

    // Determine which check boxes to tick
    let friendshipCheck = false , relationshipCheck = false , casualCheck = false ,
      womenCheck = false , menCheck = false
    lookingFor.forEach(function(item) {
      if (item === lookingForConstants.Friendship) {
        friendshipCheck = true
      } else if (item === lookingForConstants.Relationship) {
        relationshipCheck = true
      } else if (item === lookingForConstants.Casual) {
        casualCheck = true
      }
    })
    withGender.forEach(function(item) {
      if (item === withGenderConstants.Women){
        womenCheck = true
      } else if (item === withGenderConstants.Men) {
        menCheck = true
      }
    })

    return (
      <div id="dpContainer">
        <h3 className="panelTitle">Discoverability</h3>

        <div id="dpContentContainer">
          <div className="dpContentSection">
            <div className="dpContentContainerLabel">Looking for:</div>

            <div id="dpLookingForContainer">
              <div className="lookingForCheckBoxWrapper">
                <span className="lookingForCheckBoxLabel">Friendship</span>
                <img alt="checkbox"
                    className="searchPreferencesCheckbox"
                    src={friendshipCheck ? checked : unchecked}
                    onClick={this.props.onCheckBoxClick.bind(this , 'lookingFor' , lookingForConstants.Friendship)}
                />
              </div>
              <div className="lookingForCheckBoxWrapper">
                <span className="lookingForCheckBoxLabel">Relationship</span>
                <img alt="checkbox"
                    className="searchPreferencesCheckbox"
                  src={relationshipCheck ? checked :unchecked}
                  onClick={this.props.onCheckBoxClick.bind(this , 'lookingFor' , lookingForConstants.Relationship)}
                />
              </div>
              <div className="lookingForCheckBoxWrapper">
                <span className="lookingForCheckBoxLabel">Something Casual</span>
                <img alt="checkbox"
                    className="searchPreferencesCheckbox"
                    src={casualCheck ? checked : unchecked}
                    onClick={this.props.onCheckBoxClick.bind(this , 'lookingFor' , lookingForConstants.Casual)}
                />
              </div>
            </div>
          </div>

          <div className="dpContentSection">
            <div className="dpContentContainerLabel">With:</div>
            <div id="dpWithContainer">
              <div className="withCheckBoxWrapper">
                <img alt="checkbox"
                    className="searchPreferencesCheckbox"
                  src={menCheck ? checked : unchecked}
                    onClick={this.props.onCheckBoxClick.bind(this , 'withGender' , withGenderConstants.Men)}
                />
                <img className="genderImg" alt="man" src={man}/>
                <span className="genderCheckBoxLabel">Men</span>
              </div>
              <div className="withCheckBoxWrapper">
                <img alt="checkbox"
                    className="searchPreferencesCheckbox"
                    src={womenCheck ? checked : unchecked}
                    onClick={this.props.onCheckBoxClick.bind(this , 'withGender' , withGenderConstants.Women)}
                />
                <img className="genderImg" alt="woman" src={woman}/>
                <span className="genderCheckBoxLabel">Women</span>
              </div>
            </div>
          </div>

          <div className="dpContentSection" id="dpBetweenContainer">
            <div className="dpContentContainerLabel" id="dpBetweenHeader">
              Between:
              <span className="dpBetweenValue sliderValue">{ageRange[0]} - {ageRange[1]}</span>
            </div>
            <Range value={ageRange} min={18} max={90} onChange={this.props.onRangeChange} />
          </div>

          <div className="dpContentSection">
            <div id="dpLocatedContainer">
              <span className="dpContentContainerLabel">Located:</span>
              <span className="dpLocationText">New York</span>
              <img alt="my location" src={locateme}/>
              <span className="dpLocationMaxDistanceValue sliderValue">{maxDistance}mi.</span>
            </div>
            <Slider value={maxDistance} onChange={this.props.onSliderChange}/>
          </div>

        </div>
      </div>
    )
  }

}

export default DiscoverabilityPanel
