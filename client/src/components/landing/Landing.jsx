import React, { Component } from 'react';
import Particles from 'react-particles-js';
import '../../static/css/landing.css';

class Landing extends Component {

  componentDidMount() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  detectViewport() {
    if(window.innerWidth > 700) {
      return 120
    } else {
      return 60
    }
  }

  render() {
    return (
      <div className="bm-landing container">
        <h1>Custom Web Solutions<br/> <span>FOR YOU</span></h1>

        <Particles
            params={{
              "particles": {
                "number": {
                  "value": this.detectViewport()
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
