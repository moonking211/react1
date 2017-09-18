import React, { Component } from 'react'
import PropTypes from 'prop-types'

import active_underline from '../../images/active_underline.png'
import inactive_underline from '../../images/inactive_underline.png'

export default class DotLink extends Component {

  static propTypes = {
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired,
    activeStyle: PropTypes.object
  };

  render() {
    const { active, text, clickHandler, activeStyle } = this.props;
    let linkClass = 'selected dotLink';
    let image = <img alt="underline" style={activeStyle} src={active_underline} />;

    if (!active) {
      linkClass = 'notSelected dotLink';
      image = <img className="notSelectedUnderline" alt="circle" src={inactive_underline} />;
    }

    return (
      <div className="dotLinkContainer">
        <a onClick={clickHandler} className={linkClass}> {text} </a>
        {image}
      </div>
    );
  }
}

