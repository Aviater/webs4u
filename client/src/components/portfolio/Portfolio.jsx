import React, { Component } from 'react';
import '../../static/css/portfolio.css';

class Portfolio extends Component {

  render() {
    return (
      <div className="bm-portfolio container">
        <h2>Some of Our Previous<br/> <span>Projects</span></h2>
        <div className="wrapper">
          <div className="row">
            <div className="col-sm-4">
              <a href="https://oceandriveloungebar.com" target="_blank">
                <img src="/img/ocean-drive.jpg" alt="Ocean Drive Lounge Bar"/>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="https://alphaquants.io" target="_blank">
                <img src="/img/alphaquants.png" alt="Alphaquants"/>
              </a>
            </div>
            <div className="col-sm-4">
              <a href="http://katiaortmann.com" target="_blank">
                <img src="/img/katia-ortmann.png" alt="Katia Ortmann"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
