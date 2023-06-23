import React from 'react';
import Welcome from '../../assets/welcome.png'
import './Header.css';

const Header = () => (
  <div className='Header section__padding' href="#home">
  <div className="Header-content">
    <div className="Header-contentmain">
    <p className="Header-subtitle">
    Chase the new Flavour
    </p>
    <h1 className="Header-title">
    The key to Fine dining
    </h1>
    <p className="Header-description">
    Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
    </p>
    <button className="Header-btn">
      Explore Menu
    </button>
    </div>
  </div>
  <div className="Header-image">
<img src={Welcome}  alt="Welcome" />
  </div>
  </div>
);

export default Header;
