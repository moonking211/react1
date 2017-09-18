import React , { Component } from 'react'
import PropTypes from 'prop-types'

import '../styles/MainPanel.css'

class MainPanel extends Component {

  static propTypes = {
    title : PropTypes.string.isRequired ,
    verticalTextStyle : PropTypes.shape({
      transform : PropTypes.string.isRequired
    }).isRequired
  };

  render() {
    return (
      <div id="mainContainer">
        <div id="childrenContainer">
          <div id="leftPanelContainer">
            <h1 className="verticalText" style={this.props.verticalTextStyle}>
              {this.props.title}
            </h1>
          </div>
          {this.props.children}
        </div>
      </div>
    )
  }

}
export default MainPanel
