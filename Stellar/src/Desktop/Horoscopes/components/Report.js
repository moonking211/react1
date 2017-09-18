import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Report extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
  };

  render() {
    const { title, content } = this.props;
    return (
      <div id="reportContainer">
        <h4 className="reportPanelTitle">{title}</h4>
        <div className="reportPanelContent">
          {content}
        </div>
      </div>
    );
  }

}
