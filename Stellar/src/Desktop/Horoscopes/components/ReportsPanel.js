import React , { Component } from 'react'
import PropTypes from 'prop-types'
import Report from './Report'

import circledot from '../../images/circledot.png'
import circle from '../../images/inactive_underline.png'
import '../styles/ReportsPanel.css'

export default class ReportsPanel extends Component{

  static propTypes = {
    reports: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
    }).isRequired).isRequired,
    selectedReportIndex: PropTypes.number.isRequired,
    handleReportPagination: PropTypes.func.isRequired
  };

  render(){
    const { reports, selectedReportIndex, handleReportPagination } = this.props;
    const report = reports[selectedReportIndex];
    return (
      <div id="rpContainer">

        <h3 className="panelTitle">Reports</h3>
        <Report
            title={report.title}
            content={report.content}
        />
        <div id="rpPaginationContainer">
          {
            reports.map(function(report, index){
              const image = index === selectedReportIndex ? circledot : circle;
              return (
                <img
                    src={image}
                    alt="circle"
                    key={report.title}
                    onClick={handleReportPagination.bind(this, index)}
                />
              )
            }, this)
          }

        </div>
      </div>
    )
  }

}
