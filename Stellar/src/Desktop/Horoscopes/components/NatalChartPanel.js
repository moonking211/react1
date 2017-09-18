import React , { Component } from 'react'
import PropTypes from 'prop-types'
import PlanetItem from './PlanetItem'
import { AstrologySignPropTypes } from '../../../Validators/AstrologySignValidator'

import sun from '../../images/Astrology/Planets/Sun.png'
import moon from '../../images/Astrology/Planets/Moon.png'
import mercury from '../../images/Astrology/Planets/Mercury.png'
import venus from '../../images/Astrology/Planets/Venus.png'
import mars from '../../images/Astrology/Planets/Mars.png'
import jupiter from '../../images/Astrology/Planets/Jupiter.png'
import saturn from '../../images/Astrology/Planets/Saturn.png'
import pluto from '../../images/Astrology/Planets/Pluto.png'
import neptune from '../../images/Astrology/Planets/Neptune.png'
import uranus from '../../images/Astrology/Planets/Uranus.png'

import '../styles/NatalChartPanel.css'

class NatalChartPanel extends Component{

  static propTypes = {
    astrologySymbol: AstrologySignPropTypes,
    natalChartPlanetItems: PropTypes.shape({
      Sun: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
      Moon: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
      Mercury: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
      Venus: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
      Mars: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
      Jupiter: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
      Saturn: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
      Uranus: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
      Neptune: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
      Pluto: PropTypes.shape({
        content: PropTypes.string.isRequired,
        showContent: PropTypes.bool.isRequired,
      }).isRequired,
    }).isRequired,
    togglePlanetItemContent: PropTypes.func.isRequired,
  };

  render(){
    const { astrologySymbol, natalChartPlanetItems, togglePlanetItemContent } = this.props;
    return (
      <div id="ncContainer">

        <h3 className="panelTitle">
          Natal Chart
        </h3>

        <div id="planetItemsContainer">
          <PlanetItem
              planetName="Sun"
              planetIcon={sun}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Sun"].content}
              showContent={natalChartPlanetItems["Sun"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
          <PlanetItem
              planetName="Moon"
              planetIcon={moon}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Moon"].content}
              showContent={natalChartPlanetItems["Moon"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
          <PlanetItem
              planetName="Mercury"
              planetIcon={mercury}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Mercury"].content}
              showContent={natalChartPlanetItems["Mercury"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
          <PlanetItem
              planetName="Venus"
              planetIcon={venus}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Venus"].content}
              showContent={natalChartPlanetItems["Venus"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
          <PlanetItem
              planetName="Mars"
              planetIcon={mars}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Mars"].content}
              showContent={natalChartPlanetItems["Mars"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
          <PlanetItem
              planetName="Jupiter"
              planetIcon={jupiter}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Jupiter"].content}
              showContent={natalChartPlanetItems["Jupiter"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
          <PlanetItem
              planetName="Saturn"
              planetIcon={saturn}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Saturn"].content}
              showContent={natalChartPlanetItems["Saturn"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
          <PlanetItem
              planetName="Uranus"
              planetIcon={uranus}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Uranus"].content}
              showContent={natalChartPlanetItems["Uranus"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
          <PlanetItem
              planetName="Neptune"
              planetIcon={neptune}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Neptune"].content}
              showContent={natalChartPlanetItems["Neptune"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
          <PlanetItem
              planetName="Pluto"
              planetIcon={pluto}
              astrologySymbol={astrologySymbol}
              content={natalChartPlanetItems["Pluto"].content}
              showContent={natalChartPlanetItems["Pluto"].showContent}
              handleArrowClick={togglePlanetItemContent}
          />
        </div>

      </div>
    )
  }
}


export default NatalChartPanel
