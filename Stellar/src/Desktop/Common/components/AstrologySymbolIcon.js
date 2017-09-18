import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { AstrologySign, AstrologySignPropTypes } from "../../../Validators/AstrologySignValidator";

import aquarius_white from '../../images/Astrology/Signs/White/Aquarius.svg'
import aries_white from '../../images/Astrology/Signs/White/Aries.svg'
import cancer_white from '../../images/Astrology/Signs/White/Cancer.svg'
import capricorn_white from '../../images/Astrology/Signs/White/Capricorn.svg'
import gemini_white from '../../images/Astrology/Signs/White/Gemini.svg'
import leo_white from '../../images/Astrology/Signs/White/Leo.svg'
import libra_white from '../../images/Astrology/Signs/White/Libra.svg'
import pieces_white from '../../images/Astrology/Signs/White/Pieces.svg'
import saggitarius_white from '../../images/Astrology/Signs/White/Saggitarius.svg'
import scorpio_white from '../../images/Astrology/Signs/White/Scorpio.svg'
import taurus_white from '../../images/Astrology/Signs/White/Taurus.svg'
import virgo_white from '../../images/Astrology/Signs/White/Virgo.svg'

import aquarius_purple from '../../images/Astrology/Signs/Purple/Aquarius.svg'
import aries_purple from '../../images/Astrology/Signs/Purple/Aries.svg'
import cancer_purple from '../../images/Astrology/Signs/Purple/Cancer.svg'
import capricorn_purple from '../../images/Astrology/Signs/Purple/Capricorn.svg'
import gemini_purple from '../../images/Astrology/Signs/Purple/Gemini.svg'
import leo_purple from '../../images/Astrology/Signs/Purple/Leo.svg'
import libra_purple from '../../images/Astrology/Signs/Purple/Libra.svg'
import pieces_purple from '../../images/Astrology/Signs/Purple/Pieces.svg'
import saggitarius_purple from '../../images/Astrology/Signs/Purple/Saggitarius.svg'
import scorpio_purple from '../../images/Astrology/Signs/Purple/Scorpio.svg'
import taurus_purple from '../../images/Astrology/Signs/Purple/Taurus.svg'
import virgo_purple from '../../images/Astrology/Signs/Purple/Virgo.svg'

export default class AstrologySymbolIcon extends Component {

  static propTypes = {
    sign: AstrologySignPropTypes,
    imageClass: PropTypes.string,
    isPurple: PropTypes.bool.isRequired
  };

  render() {
    const { sign, imageClass, isPurple } = this.props;

    let imageSource = this.getImageBySignName(sign, isPurple);

    return (
        <img
            alt="Astrology Symbol"
            src={imageSource}
            className={imageClass}
        />
    )
  }

  getImageBySignName(sign, isPurple) {
    if (sign === AstrologySign.Constants.Aquarius) {
      return isPurple ? aquarius_purple : aquarius_white
    } else if (sign === AstrologySign.Constants.Aries) {
      return isPurple ? aries_purple : aries_white
    } else if (sign === AstrologySign.Constants.Cancer) {
      return isPurple ? cancer_purple : cancer_white
    } else if (sign === AstrologySign.Constants.Capricorn) {
      return isPurple ? capricorn_purple : capricorn_white
    } else if (sign === AstrologySign.Constants.Gemini) {
      return isPurple ? gemini_purple : gemini_white
    } else if (sign === AstrologySign.Constants.Leo) {
      return isPurple ? leo_purple : leo_white
    } else if (sign === AstrologySign.Constants.Libra) {
      return isPurple ? libra_purple : libra_white
    } else if (sign === AstrologySign.Constants.Pieces) {
      return isPurple ? pieces_purple : pieces_white
    } else if (sign === AstrologySign.Constants.Saggitarius) {
      return isPurple ? saggitarius_purple : saggitarius_white
    } else if (sign === AstrologySign.Constants.Scorpio) {
      return isPurple ? scorpio_purple : scorpio_white
    } else if (sign === AstrologySign.Constants.Taurus) {
      return isPurple ? taurus_purple : taurus_white
    } else if (sign === AstrologySign.Constants.Virgo) {
      return isPurple ? virgo_purple : virgo_white
    } else {
      return null;
    }
  }

}