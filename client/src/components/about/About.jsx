import React, { Component } from 'react';
import '../../static/css/about.css';

class About extends Component {

  render() {
    return (
      <div className="bm-about container">
        <h2>Professional Website<br/> Design <span>&amp;</span> Development</h2>
        <div className="wrapper">
          <p>Here at Webs For You we build websites from scratch that tailor to your needs and requirements. From small to big, simple to complex and everything in-between, we do our very best to make sure you get exactly what you’re looking for.</p>
          <p>From the domain registration and hosting of your soon-to-be website all the way through to the possible search engine optimisation and maintenance. Our goal is to be as transparent as possible, whether you’re new to having a website made and don’t understand all the technicalities or you already have experience with how the process goes and just need a website built; we’ll make sure the process goes as smoothly, quickly and effortlessly as possible.</p>
        </div>
      </div>
    );
  }
}

export default About;
