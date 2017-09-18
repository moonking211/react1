import React , { Component } from 'react'
import PropTypes from 'prop-types'
import { AstrologySignPropTypes } from '../../../Validators/AstrologySignValidator'
import AstrologySymbolIcon from '../../Common/components/AstrologySymbolIcon'

import funFactBackground from '../../images/fun_fact_background.png'

import '../styles/FunFactCard.css'


class FunFactCard extends Component {

  static propTypes = {
    astrologySymbol: AstrologySignPropTypes,
    funFactText: PropTypes.string.isRequired
  };

  render() {
    const { astrologySymbol, funFactText } = this.props;
    return (
      <div className="funFactCard">
        <img className="funFactBackground" src={funFactBackground} alt="background"/>
        <AstrologySymbolIcon
            imageClass="funFactAstrologySymbol"
            sign={astrologySymbol}
            isPurple={false}
        />
        <div className="funFactText">{funFactText}</div>
      </div>
    )
  }

}

export default FunFactCard
