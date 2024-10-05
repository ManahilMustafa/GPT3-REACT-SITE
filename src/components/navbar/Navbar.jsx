import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [sticky, setSticky] = useState(false);

  // Sticky navbar effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`gpt3_navbar ${sticky ? 'sticky' : ''}`}>
      <div className="gpt3_navbar-links">
        <div className="gpt3_navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3_navbar-links_container">
          {/* Use Link components from react-scroll for smooth scrolling */}
          <p><Link to="home" smooth={true} duration={500} spy={true} activeClass="active">Home</Link></p>
          <p><Link to="wgpt3" smooth={true} duration={500} spy={true} activeClass="active">What is GPT3?</Link></p>
          <p><Link to="features" smooth={true} duration={500} spy={true} activeClass="active">Case Studies</Link></p>
          <p><Link to="possibility" smooth={true} duration={500} spy={true} activeClass="active">Open AI</Link></p>
          <p><Link to="blog" smooth={true} duration={500} spy={true} activeClass="active">Library</Link></p>
        </div>
      </div>
      <div className="gpt3_navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="gpt3_navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3_navbar-menu_container scale-up-center">
            <div className="gpt3_navbar-menu_container-links">
              <p><Link to="home" smooth={true} duration={500} spy={true} activeClass="active" onClick={() => setToggleMenu(false)}>Home</Link></p>
              <p><Link to="wgpt3" smooth={true} duration={500} spy={true} activeClass="active" onClick={() => setToggleMenu(false)}>What is GPT3?</Link></p>
              <p><Link to="possibility" smooth={true} duration={500} spy={true} activeClass="active" onClick={() => setToggleMenu(false)}>Open AI</Link></p>
              <p><Link to="features" smooth={true} duration={500} spy={true} activeClass="active" onClick={() => setToggleMenu(false)}>Case Studies</Link></p>
              <p><Link to="blog" smooth={true} duration={500} spy={true} activeClass="active" onClick={() => setToggleMenu(false)}>Library</Link></p>
            </div>
            <div className="gpt3_navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
