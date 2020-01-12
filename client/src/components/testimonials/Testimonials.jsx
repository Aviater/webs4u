import React, { Component } from 'react';
import '../../static/css/testimonials.css';

class Testimonials extends Component {

  render() {
    return (
      <div className="bm-testimonials container">
        <h2>Some of our <br/> <span>Reviews</span></h2>
        <div className="wrapper">
            <p>
                Thank you very much for making the website for my office Exceptional Marbella. 
                I am very satisfied with it and it was pleasant to work together.
                As well as their after-service is certainly optimal.
                <br/>
                <span>Veerle, Exceptional Marbella S.L.</span>
            </p>
            <p>
                Last year i had the privilige of Ecficio working on our website doing an outstanding job,
                keeping it updated and helping with all the advertising that any company needs to grow and be competitive.
                I will definitely recommend them to any business that needs some help in this new technology times.
                <br/>
                <span>Carlos, Ocean Drive Lounge Bar</span>
            </p>
            <p>
                Ecficio put together a very artistic and creative colourful website to promote my work.
                Bringing new ideas to the table, the developer explained clearly how certain size photos and colours
                would play a huge part in my work being viewed. Communication was exceptionally outstanding proving
                the developers and designers can work under pressure for the deadline I gave.
                <br/>
                <span>Simone, Simone Catania Hair &amp; Makeup</span>
            </p>
            <p>
                As an interior designer I required a sleek, modern looking website to showcase projects to potential clients.
                Ecficio went above and beyond to deliver exactly that with everything I asked for and faster than the initially calculated timeframe.
                Communication and transparency was excellent also.
                <br/>
                <span>Katia, Katia Ortmann Interior Design</span>
            </p>
        </div>
      </div>
    );
  }
}

export default Testimonials;
