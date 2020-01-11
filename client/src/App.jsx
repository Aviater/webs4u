import React, { Component } from 'react';
import $ from 'jquery';
import './static/css/app.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Landing from './components/landing/Landing';
import About from './components/about/About';
import Services from './components/services/Services';
import Portfolio from './components/portfolio/Portfolio';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

class App extends Component {

  componentDidMount() {
    var cube = document.querySelector('.cube');
    var radioGroup = document.querySelector('.radio-group');
    var currentClass = '';

    function changeSide() {
      var checkedRadio = radioGroup.querySelector(':checked');
      var showClass = 'show-' + checkedRadio.value;
      if ( currentClass ) {
        cube.classList.remove( currentClass );
      }
      cube.classList.add( showClass );
      currentClass = showClass;
    }
    // set initial side
    changeSide();

    radioGroup.addEventListener( 'change', changeSide );
  }

  render() {
    return (
      <div className="site-wrapper">
        
        <div className="cube">
          <div className="cube__face cube__face--front">
            <Landing />
          </div>
          <div className="cube__face cube__face--back">
            <Services />
          </div>
          <div className="cube__face cube__face--right">
            <About />
          </div>
          <div className="cube__face cube__face--left">
            <Portfolio />
          </div>
          <div className="cube__face cube__face--top">
            <Testimonials />
          </div>
          <div className="cube__face cube__face--bottom">
            <Contact />
          </div>
        </div>
        
        <div className="switch radio-group">
            <label htmlFor="one" className="switch__label" >Portfolio</label>
            <input id="one" type="radio" name="rotate-cube-side" value="left" />
            <label htmlFor="two" className="switch__label">Home</label>
            <input id="two" type="radio" name="rotate-cube-side" value="front" defaultChecked />
            <label htmlFor="three" className="switch__label">About</label>
            <input id="three" type="radio" name="rotate-cube-side" value="right" />
            <label htmlFor="four" className="switch__label" >Services</label>
            <input id="four" type="radio" name="rotate-cube-side" value="back" />
            <label htmlFor="five" className="switch__label" >Testimonials</label>
            <input data-toggle="tooltip" data-placement="top" title="Coming soon!" id="five" type="radio" name="rotate-cube-side" value="top" />
            <label htmlFor="six" className="switch__label" >Contact</label>
            <input id="six" type="radio" name="rotate-cube-side" value="bottom" />
            <div className="switch__indicator"></div>
        </div>

      </div>
    );
  }
}

export default App;
