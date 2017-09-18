import PropTypes from 'prop-types'

export const AstrologySign = {
  Constants: {
    Aquarius: 'aquarius',
    Aries: 'aries',
    Cancer: 'cancer',
    Capricorn: 'capricorn',
    Gemini: 'gemini',
    Leo: 'leo',
    Libra: 'libra',
    Pieces: 'pieces',
    Saggitarius: 'saggitarius',
    Scorpio: 'scorpio',
    Taurus: 'taurus',
    Virgo: 'virgo'
  },
  Signs: [
    'aquarius',
    'aries',
    'cancer',
    'capricorn',
    'gemini',
    'leo',
    'libra',
    'pieces',
    'saggitarius',
    'scorpio',
    'taurus',
    'virgo'
  ]
};

export let AstrologySignPropTypes = PropTypes.oneOf(AstrologySign.Signs).isRequired;
