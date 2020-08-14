import React from "react";
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <div className="site-wrap">
    <div className="clearfix" />
  <div className="footer">
    <div className="footer-info">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo"><a href="#"><img src="images2/logo.png" alt="" /></a></div>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="title">Contact <strong>Info</strong></h4>
            <p>No. 08, Nguyen Trai, Hanoi , Vietnam</p>
            <p>Call Us : (084) 1900 1008</p>
            <p>Email : michael@leebros.us</p>
          </div>
          <div className="col-md-3 col-sm-6">
            <h4 className="title">Customer<strong> Support</strong></h4>
            <ul className="support">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Payment Option</a></li>
              <li><a href="#">Booking Tips</a></li>
              <li><a href="#">Infomation</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4 className="title">Get Our <strong>Newsletter </strong></h4>
            <p>Lorem ipsum dolor ipsum dolor.</p>
            <form className="newsletter">
              <input type="text" name placeholder="Type your email...." />
              <input type="submit" defaultValue="SignUp" className="button" />
            </form>
          </div>
        </div>
      </div>
    </div>
    <div className="copyright-info">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>Copyright © 2012. Designed by <a href="#">Michael Lee</a>. All rights reseved</p>
          </div>
          <div className="col-md-6">
            <ul className="social-icon">
              <li><a href="#" className="linkedin" /></li>
              <li><a href="#" className="google-plus" /></li>
              <li><a href="#" className="twitter" /></li>
              <li><a href="#" className="facebook" /></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
