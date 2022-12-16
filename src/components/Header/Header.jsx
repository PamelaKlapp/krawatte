import React from 'react';
import Img from '../../assets/krawatte1.png';
import { CiDeliveryTruck } from 'react-icons/ci';
import './Header.css';

const Header = () => {
  return (
    <header id='home' className="header-container container">
      
      <div className="info">
        <div className="delivery">
          <small className='delivery_text'>Kostenlose Lieferung weltweit</small>
          <span className="icon-truck">
            <CiDeliveryTruck />
          </span>
        </div>
        <h1>Original recyclen Krawatten. </h1>
        <p>Jede Krawatte wird aus wiederverwendeten Stoffen hergestellt.</p>
        <div className="cta">
          <a href="#krawatte" className="btn btn-primary">
            Mehr Krawatten
          </a>
        </div>
      </div>

      <div className="header-img">
        <img src={Img} alt="Bunte Krawatte" />
      </div>

      <div className="details">
        <div className="details-container">
          <h3>Krawatte Toto</h3>
          <br />
          <p>Die perfekte Krawatte, um aufzufallen und der Mittelpunkt der Party zu sein.</p>
          <br />
          <h4>€24.95</h4>
          <br />
          <button className='btn btn-secundary'>ZUM WARENKORB</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
