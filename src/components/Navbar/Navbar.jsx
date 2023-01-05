import React from 'react';
import { CiUser } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import './Navbar.css'
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#home')
  return (
    <nav>
      <div className="nav-container container">
        
        <a href="#home" className='logo'>KRAWATTE</a>

        <ul>
          <li>
            <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "#home" ? 'active' : ' '}>Home</a>
          </li>
          <li>
            <a href="#products" onClick={() => setActiveNav('#products')} className={activeNav === "#products" ? 'active' : ' '}>Krawatten</a>
          </li>
          <li>
            <a href="#company" onClick={() => setActiveNav('#company')} className={activeNav === "#company" ? 'active' : ' '}>Über uns</a>
          </li>
          <li>
            <a href="#faq" onClick={() => setActiveNav('#faq')} className={activeNav === "#faq" ? 'active' : ' '}>FAQs</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ' '}>Kontakt</a>
          </li>
        </ul>

        <div className="icons">
          <a href="">
            <CiUser />
          </a>
          <a href="">
            <CiShoppingCart />
          </a>
        </div>

        <button id="menu-btn">
          <BiMenu />
        </button>
        <button id="close-menu-btn">
          <AiOutlineClose />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
