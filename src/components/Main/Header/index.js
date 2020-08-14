import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

const Header = (props) => {
  return (
    <div className="wrapper">
    <div className="header">
    <div className="container">
      <div className="row">
        <div className="col-md-2 col-sm-2">
          <div className="logo"><a href="index.html"><img src="images2/logo.png" alt="FlatShop" /></a></div>
        </div>
        <div className="col-md-10 col-sm-10">
          <div className="header_top">
            <div className="row">
              <div className="col-md-3">
                <ul className="option_nav">
                  <li className="dorpdown">
                    <a href="#">Eng</a>
                    <ul className="subnav">
                      <li><a href="#">Eng</a></li>
                      <li><a href="#">Vns</a></li>
                      <li><a href="#">Fer</a></li>
                      <li><a href="#">Gem</a></li>
                    </ul>
                  </li>
                  <li className="dorpdown">
                    <a href="#">USD</a>
                    <ul className="subnav">
                      <li><a href="#">USD</a></li>
                      <li><a href="#">UKD</a></li>
                      <li><a href="#">FER</a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="topmenu">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">News</a></li>
                  <li><a href="#">Service</a></li>
                  <li><a href="#">Recruiment</a></li>
                  <li><a href="#">Media</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
              <div className="col-md-3">
                <ul className="usermenu">
                  <li><a href="checkout.html" className="log">Login</a></li>
                  <li><a href="checkout2.html" className="reg">Register</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="clearfix">
          </div>
          <div className="header_bottom">
      
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span className="sr-only">Toggle navigation</span><span className="icon-bar" />
                <span className="icon-bar" /><span className="icon-bar" /></button>
                </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
                <li ><Link to="/home">Home</Link></li>
                
               </ul> 
               
            </div>
            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
              <li><Link to="/shop">Shop</Link></li>
               </ul>
               </div>

               {/* <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
              <li><Link to="/detail">Details</Link></li>
               </ul>
               </div> */}


               <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
              <li><Link to="/about">About</Link></li>
               </ul>
               </div>
               

            <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
               <li><Link to="/contacts">contact us</Link></li>
               </ul>
               </div>

               {/* <div className="navbar-collapse collapse">
              <ul className="nav navbar-nav">
               <li><Link to="/cart">Cart</Link></li>
               </ul>
               </div> */}



          </div>
        </div>
      </div>
    </div>
  </div>
 <div>

 <div className="clearfix"></div>
            
  <div className="hom-slider">
    <div className="container">
      <div id="sequence">
        <div className="sequence-prev"><i className="fa fa-angle-left" /></div>
        <div className="sequence-next"><i className="fa fa-angle-right" /></div>
        <ul className="sequence-canvas">
          <li className="animate-in">
            <div className="flat-caption caption1 formLeft delay300 text-center"><span className="suphead">Paris show 2014</span></div>
            <div className="flat-caption caption2 formLeft delay400 text-center">
              <h1>Collection For Winter</h1>
            </div>
            <div className="flat-caption caption3 formLeft delay500 text-center">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="flat-button caption4 formLeft delay600 text-center"><a className="more" href="#">More Details</a></div>
            <div className="flat-image formBottom delay200" data-duration={5} data-bottom="true"><img src="images2/slider-image-01.png" alt="" /></div>
          </li>
          <li>
            <div className="flat-caption caption2 formLeft delay400">
              <h1>Collection For Winter</h1>
            </div>
            <div className="flat-caption caption3 formLeft delay500">
              <h2 >Etiam velit purus, luctus vitae velit sedauctor<br />egestas diam, Etiam velit purus.</h2>
            </div>
            <div className="flat-button caption5 formLeft delay600"><a className="more" href="#">More Details</a></div>
            <div className="flat-image formBottom delay200" data-bottom="true"><img src="images2/slider-image-02.png" alt="" /></div>
          </li>
          <li>
            <div className="flat-caption caption2 formLeft delay400 text-center">
              <h1>New Fashion of 2013</h1>
            </div>
            <div className="flat-caption caption3 formLeft delay500 text-center">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br />Lorem Ipsum is simply dummy text of the printing and typesetting</p>
            </div>
            <div className="flat-button caption4 formLeft delay600 text-center"><a className="more" href="#">More Details</a></div>
            <div className="flat-image formBottom delay200" data-bottom="true"><img src="images2/2slider-image-03.png" alt="" /></div>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <div className="promotion-banner">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="promo-box"><img src="images2/promotion-01.png" alt="" /></div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="promo-box"><img src="images2/promotion-02.png" alt="" /></div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-4">
            <div className="promo-box"><img src="images2/promotion-03.png" alt="" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>

 <div className="clearfix">
            </div>
      
    
  </div>

  
  );
};

Header.propTypes = {};

export default Header;
