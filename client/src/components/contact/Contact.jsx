import React, { Component } from 'react';
import axios from 'axios';
import '../../static/css/contact.css';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendMsg = this.sendMsg.bind(this);

    this.state = {
        name: '',
        email: '',
        phone: '',
        message: '',
        success: '',
      }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendMsg = () => {
    let success = this.state.success;
    if(success) {
      return(
        <div className="alert alert-success" role="alert">
          Sent - We will reply as quick as possible.
        </div>
      )
    } else if(success === 'false') {
      return (
        <div className="alert alert-danger" role="alert">
          Oops - Something went wrong.
        </div>
      )
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    // Auto maps state to variables.
    const {name, email, phone, message} = this.state;
    
    await axios.post('/api/form', {
      name,
      email,
      phone,
      message
    })
    .then(
      this.setState({
        success: true
      }),
      console.log(this.state)
    )
    .catch((err) => {
      this.setState({
        success: 'false'
      }),
      console.log(this.state)
    })
  }

  render() {
    return (
      <div className="bm-contact container">
        <h2>Request a<br/> <span>Free</span> Quote</h2>
        <div className="wrapper">
          {this.sendMsg()}
          <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              required
              name="name"
              type="text"
              className="form-control" 
              id="input-name" 
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              required
              name="email"
              type="email"
              className="form-control" 
              id="input-email" 
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Nº (optional)</label>
            <input
              name="phone"
              type="text"
              className="form-control" 
              id="input-phone" 
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label required htmlFor="message">Comment</label>
            <textarea
              name="message"
              className="form-control" 
              id="text-box" 
              rows="3" 
              placeholder="Please briefly explain how we can help you."
              onChange={this.handleChange}
            >
            </textarea>
          </div>
          <button type="submit" className="btn btn-outline-info">Send</button>
          <p>Or send us an email to <a href="mailto:info@ecficio.com">info@ecficio.com</a></p>
        </form>
          
        </div>
      </div>
    );
  }
}

export default Contact;
