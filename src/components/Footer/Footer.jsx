import React from 'react';
import { RiMailSendLine } from 'react-icons/ri';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="container">
        <div className="f1">
          <div className="logo">KRAWATTE</div>
          <p>Abonnieren Sie unseren Newsletter</p>
          <div className="subscribe">
            <input
              type="email"
              name=""
              id=""
              placeholder="Ihre E-Mail eingeben"
            />
            <button>
              <RiMailSendLine />
            </button>
          </div>
        </div>

        <div className="f2">
          <h4>Online Shop</h4>
          <ul>
            <li>
              <a href="#krawatte">Krawatten</a>
            </li>
            <li>
              <a href="#company">Unternehmen</a>
            </li>
            <li>
              <a href="#FAQ">FAQs</a>
            </li>
            <li>
              <a href="#contact"></a>Kontakt
            </li>
          </ul>
        </div>

        <div className="f3">
          <h4>Datenschutz</h4>
          <ul>
            <li>Datenschutzerklärung</li>
            <li>Bedingungen und Konditionen</li>
            <li></li>
          </ul>
        </div>

        <div className="f4">
          <h4>Kontakt</h4>
          <p>
            +49 1833839293 <br />
            hilfe@krawatte.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
