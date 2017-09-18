import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'react-collapse'
import { AstrologySignPropTypes } from '../../../Validators/AstrologySignValidator'
import AstrologySymbolIcon from '../../Common/components/AstrologySymbolIcon'

import rightArrow from '../../images/rarrow.png'
import downArrow from '../../images/downarrow.png'

export default class PlanetItem extends Component {

  static propTypes = {
    planetName: PropTypes.string.isRequired,
    planetIcon: PropTypes.string.isRequired,
    astrologySymbol: AstrologySignPropTypes,
    content: PropTypes.string.isRequired,
    showContent: PropTypes.bool.isRequired,
    handleArrowClick: PropTypes.func.isRequired
  };

  render(){
    const { planetName, planetIcon, astrologySymbol, content, showContent, handleArrowClick } = this.props;
    let arrow = showContent ? downArrow : rightArrow;
    return (
        <div className="piContainer" onClick={handleArrowClick.bind(this, planetName)}>

          <div className="piVisibleContainer">
            <div className="line" style={{width: '29px'}} />
            <div className="planetImageWrapper">
              <img alt="planet" src={planetIcon} />
            </div>
            <span className="piTitle">{planetName}</span>
            <div className="line" />
            <img className="piArrow" alt="arrow" src={arrow} />
            <div className="line" />
          </div>

          <Collapse isOpened={showContent} >
            <div className="detailsContainer">
              <div className="detailsHeader">
                <span>{planetName} in {astrologySymbol}</span>
                <div className="planetInSignWrapper">
                  <img className="planetImage" alt="Planet" src={planetIcon}/>
                  <div className="line planetInAstroLine" />
                  <AstrologySymbolIcon
                      imageClass="astroSignImage"
                      sign={astrologySymbol}
                      isPurple={true}
                  />
                </div>
              </div>
              <div className="detailsContent">
                {content}
              </div>
            </div>
          </Collapse>

        </div>
    )
  }

}
