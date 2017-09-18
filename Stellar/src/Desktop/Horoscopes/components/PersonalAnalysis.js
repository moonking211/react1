import React , { Component } from 'react'
import '../styles/PersonalAnalysis.css'
import Header from '../../Header/components/Header'
import MainPanel from '../../Common/components/MainPanel'
import NatalChartPanel from './NatalChartPanel.js'
import ReportsPanel from './ReportsPanel.js'

class PersonalAnalysis extends Component {

  constructor(props) {
    super(props);
    const planetItemContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit elit ac ' +
        'lacus consectetur semper. Ut in diam a lorem auctor pretium sed ac ante. Etiam congue dui urna, ut sagittis ' +
        'eros varius id. Nullam tortor ante, malesuada id tempor et, mattis ac elit. Phasellus vestibulum venenatis ' +
        'auctor. Aenean accumsan nulla in purus auctor imperdiet. Vivamus viverra nunc a risus blandit viverra. Etiam ' +
        'convallis, felis ac aliquam interdum, urna tellus tempor turpis, euismod sagittis augue quam sit amet felis. ' +
        'Curabitur sem purus, placerat nec neque sit amet, venenatis sollicitudin lectus.';
    let reportContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum blandit elit ac lacus ' +
        'consectetur semper. Ut in diam a lorem auctor pretium sed ac ante. Etiam congue dui urna, ut sagittis eros ' +
        'varius id. Nullam tortor ante, malesuada id tempor et, mattis ac elit. Phasellus vestibulum venenatis auctor' +
        '. Aenean accumsan nulla in purus auctor imperdiet. Vivamus viverra nunc a risus blandit viverra. Etiam ' +
        'convallis, felis ac aliquam interdum, urna tellus tempor turpis, euismod sagittis augue quam sit amet felis. ' +
        'Curabitur sem purus, placerat nec neque sit amet, venenatis sollicitudin lectus. ' +
        'varius id. Nullam tortor ante, malesuada id tempor et, mattis ac elit. Phasellus vestibulum venenatis auctor' +
        'Curabitur sem purus, placerat nec neque sit amet, venenatis sollicitudin lectus.'
    this.state = {
      astrologySymbol: 'libra',
      natalChartPlanetItems: {
        Sun: { showContent: false, content: planetItemContent },
        Moon: { showContent: false, content: planetItemContent },
        Mercury: { showContent: false, content: planetItemContent },
        Venus: { showContent: false, content: planetItemContent },
        Mars: { showContent: false, content: planetItemContent },
        Jupiter: { showContent: false, content: planetItemContent },
        Saturn: { showContent: false, content: planetItemContent },
        Uranus: { showContent: false, content: planetItemContent },
        Neptune: { showContent: false, content: planetItemContent },
        Pluto: { showContent: false, content: planetItemContent }
      },
      reports: [
        { title: 'Personality Report', content: reportContent },
        { title: 'Love Compatibility Report', content: reportContent },
        { title: 'Friendship Report', content: reportContent },
        { title: 'Career Report', content: reportContent }
      ],
      selectedReportIndex: 0
    };
    this.togglePlanetItemContent = this.togglePlanetItemContent.bind(this);
    this.handleReportPagination = this.handleReportPagination.bind(this);
  }

  render() {
    const { astrologySymbol, natalChartPlanetItems, reports, selectedReportIndex } = this.state;
    return (
      <div className="grayBackground">
        <Header/>
        <MainPanel title="Personal Analysis"
            verticalTextStyle={{transform : 'rotate(-90deg) translate(-363px, 20px)', fontSize: '41px'}}>
          <div id="personalAnalysisContainer">
            <NatalChartPanel
                astrologySymbol={astrologySymbol}
                natalChartPlanetItems={natalChartPlanetItems}
                togglePlanetItemContent={this.togglePlanetItemContent}
            />
            <ReportsPanel
                reports={reports}
                selectedReportIndex={selectedReportIndex}
                handleReportPagination={this.handleReportPagination}
            />
          </div>
        </MainPanel>
      </div>
    )
  }

  togglePlanetItemContent(planetName, event) {
    this.setState({ ...this.state, natalChartPlanetItems: {
      ...this.state.natalChartPlanetItems,
      [planetName]: {
        ...this.state.natalChartPlanetItems[planetName],
        showContent: !this.state.natalChartPlanetItems[planetName].showContent
      }
    }});
  }

  handleReportPagination(index, event) {
    if (index === this.state.selectedReportIndex) {
      return;
    }
    this.setState({ selectedReportIndex: index });
  }

}

export default PersonalAnalysis
