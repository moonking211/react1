import React , { Component } from 'react'
import PropTypes from 'prop-types'
import DotLink from './DotLink'
import { AstrologySignPropTypes } from '../../../Validators/AstrologySignValidator'
import AstrologySymbolIcon from '../../Common/components/AstrologySymbolIcon'

import leftarrow from '../../images/leftarrow.png'
import rightarrow from '../../images/rightarrow.png'

import '../styles/HoroscopePanel.css'

export class HoroscopePanel extends Component{

  static propTypes = {
    astrologySymbol: AstrologySignPropTypes,
    activeTab: PropTypes.string.isRequired,
    horoscopes: PropTypes.shape({
      daily: PropTypes.shape({
        date: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      }).isRequired,
      weekly: PropTypes.shape({
        date: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      }).isRequired,
      monthly: PropTypes.shape({
        date: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired
      }).isRequired
    }).isRequired,
    handleChangeTab: PropTypes.func.isRequired
  };

  render() {
    const { astrologySymbol, activeTab, horoscopes, handleChangeTab } = this.props;
    const activeHoroscope = horoscopes[activeTab];
    return (
      <div id="hpContainer">

        <img alt="left arrow" src={leftarrow}/>

        <div id="hpMidContainer">
          <div id="hpLinksContainer">
            <DotLink
                active={activeTab === 'daily'}
                activeStyle={{width: '60px', height: '6.7px'}}
                text="Daily"
                clickHandler={handleChangeTab.bind(this, 'daily')}
            />
            <DotLink
                active={activeTab === 'weekly'}
                activeStyle={{width: '80px'}}
                text="Weekly"
                clickHandler={handleChangeTab.bind(this, 'weekly')}
            />
            <DotLink
                active={activeTab === 'monthly'}
                activeStyle={{width: '90px'}}
                text="Monthly"
                clickHandler={handleChangeTab.bind(this, 'monthly')}
            />
          </div>

          <AstrologySymbolIcon
              imageClass="horoscopeAstrologySymbol"
              sign={astrologySymbol}
              isPurple={true}
          />
          <h4 id="horoscopeDate"> {activeHoroscope.date}</h4>
          <div id="horoscopeText">{activeHoroscope.content}</div>
        </div>

        <img alt="right arrow" src={rightarrow}/>

      </div>
    )
  }
}

export default HoroscopePanel
