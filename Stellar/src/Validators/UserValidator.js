import PropTypes from 'prop-types'
import { SearchPreferenceConstants } from './SearchPreferenceConstants'
import { AstrologySignPropTypes } from './AstrologySignValidator'

export let UserProfilePropTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  thumbnail: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  gender: PropTypes.PropTypes.oneOf(['male', 'female']).isRequired,
  astrologySymbol: AstrologySignPropTypes,
  lookingFor: PropTypes.arrayOf(PropTypes.oneOf(SearchPreferenceConstants.LookingForTypes).isRequired).isRequired,
  withGender: PropTypes.arrayOf(PropTypes.oneOf(SearchPreferenceConstants.WithGenderTypes).isRequired).isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  aboutMe: PropTypes.string.isRequired,
  education: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired
}).isRequired;

export let UserProfileMatchPropTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  astrologySymbol: AstrologySignPropTypes,
  aboutMe: PropTypes.string.isRequired,
  mainPicture: PropTypes.string.isRequired,
  favorite: PropTypes.bool.isRequired
});

export let ChatUserPropTypes = PropTypes.shape({
  userId: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  astrologySymbol: AstrologySignPropTypes,
  timeRemaining: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired
}).isRequired;
