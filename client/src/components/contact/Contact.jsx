import React, { Component } from 'react';
import '../../static/css/contact.css';

class Contact extends Component {

  render() {
    return (
      <div className="bm-contact container">
        <h2>Request a<br/> <span>Free</span> Quote</h2>
        <div className="wrapper">
          
          <form method="POST">
          <div className="form-group">
            <label htmlFor="input-name">Full Name</label>
            <input required type="text" className="form-control" id="input-name" placeholder="John Doe"/>
          </div>
          <div className="form-group">
            <label htmlFor="input-email">Email Address</label>
            <input required type="email" className="form-control" id="input-email" placeholder="name@example.com"/>
          </div>
          <div className="form-group">
            <label htmlFor="input-phone">Phone Nº (optional)</label>
            <input type="email" className="form-control" id="input-phone" placeholder="(+00) 000 000 000"/>
          </div>
          <div className="form-group">
            <label required htmlFor="text-box">Comment</label>
            <textarea className="form-control" id="text-box" rows="3" placeholder="Please briefly explain how we can help you."></textarea>
          </div>
          <button type="submit" className="btn btn-outline-info">Send</button>
        </form>

        </div>
      </div>
    );
  }
}

export default Contact;
