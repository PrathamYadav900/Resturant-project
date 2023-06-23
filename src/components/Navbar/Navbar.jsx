import React, { useState } from 'react';
import gericht from '../../assets/gericht.png'
import './Navbar.css';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md'
const Navbar = () => {
  const[toggleMenu,setToggleMenu]= useState(false)
  return(

  <div className='Navbar'>
    <div className="Navbar-logo">
        <img src={gericht} alt="Logo" />
    </div>
    <div className="Navbar-menu">
    <ul>
      <li> <a href="#home">Home</a></li>
      <li><a href="#Pages">Pages</a></li>
      <li><a href="#Contact">Contact Us</a></li>
      <li><a href="#BLog">Blog</a></li>
      <li><a href="#Landing">Landing </a></li>
    </ul>
    </div>
    <div className="Navbar-Login">
       <p>Log In/Register </p>
       <div></div>
       <p>Book Table</p>
    </div>
    <div className="Navbar-smallscreen">
      <GiHamburgerMenu color="#fff" fontSize={27} onClick={()=> setToggleMenu (true)}/>

        {toggleMenu &&(

      <div className="Navbar__smallscreen-overlay">
      <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=> setToggleMenu(false)}/>      
      <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#Pages">Pages</a></li>
      <li><a href="#Contact">Contact Us</a></li>
      <li><a href="#BLog">Blog</a></li>
      <li><a href="#Landing">Landing </a></li>
    </ul>
    </div>
    )}
    </div>
  </div>
)
}

export default Navbar;
