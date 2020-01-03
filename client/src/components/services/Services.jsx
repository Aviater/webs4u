import React, { Component } from 'react';
import '../../static/css/services.css';

class Services extends Component {

  render() {
    return (
      <div className="bm-services container">
        <h2>Our Services Tailored<br/> <span>FOR YOU</span></h2>
        <div className="wrapper">
          <div className="row">
            <div className="col-sm-3">
              <img src="/img/web-design.png" alt="Web Design"/>
              <h3>Website Design</h3>
              <p>We design a tailor made website layout that's unique to your brand and requirements, every detail is carefully planned.</p>
            </div>
            <div className="col-sm-3">
              <img src="/img/web-development.png" alt="Web Development"/>
              <h3>Website Development</h3>
              <p>Using only the latest and most advanced technologies, we strive to deliver a premium quality product.</p>
            </div>
            <div className="col-sm-3">
              <img src="/img/seo.png" alt="SEO"/>
              <h3>SEO</h3>
              <p>Short for search engine optimisation, we make sure that search engines such as Google or Yahoo find your website.</p>
            </div>
            <div className="col-sm-3">
              <img src="/img/sem.png" alt="SEM"/>
              <h3>SEM</h3>
              <p>Our search engine marketing team can research how to best direct traffic to your website using paid advertising.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-3">
              <img src="/img/logo-design.png" alt="Logo Design"/>
              <h3>Logo Design</h3>
              <p>Our graphic team makes professional and beautiful logo designs that will give a lasting impression.</p>
            </div>
            <div className="col-sm-3">
              <img src="/img/cms.png" alt="CMS"/>
              <h3>CMS</h3>
              <p>Content managment systems that are personalised for your needs giving you the option to add, modify or delete content.</p>
            </div>
            <div className="col-sm-3">
              <img src="/img/domain.png" alt="Domain Registration"/>
              <h3>Domain Registration</h3>
              <p>We check if the domain name that you request is available and manage the registration and upkeep.</p>
            </div>
            <div className="col-sm-3">
              <img src="/img/hosting.png" alt="Hosting Support"/>
              <h3>Hosting Support</h3>
              <p>We strive to give you the most cost effective hosting solution and manage it for you internally.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
