import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import { BiMenu } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <div className="nav_container container">
        
        <a href="#home" className='logo'>KRAWATTE</a>

        <ul>
          <li>
            <a href="#home" className='active'>Home</a>
          </li>
          <li>
            <a href="#products">Krawatten</a>
          </li>
          <li>
            <a href="#company">Über uns</a>
          </li>
          <li>
            <a href="#faq">FAQs</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>

        <div className="icons">
          <a href="">
            <CiSearch />
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
