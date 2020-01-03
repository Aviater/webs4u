import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../../static/css/landing.css';

class Landing extends Component {

  render() {
    return (
      <div className="bm-landing container">
        <h1>Custom Web Solutions<br/> <span>FOR YOU</span></h1>

        <Particles
            params={{
              "particles": {
                "number": {
                  "value": 120
                },
                "size": {
                  "value": 0
                }
              },
              "interactivity": {
                "events": {
                  "onhover": {
                    "enable": true,
                     "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  }
                }
              },
              "retina-detect": true
            }}
          />
      </div>
    );
  }
}

export default Landing;
