import React from 'react';
import Img from '../../assets/krawatte1.png';
import { CiDeliveryTruck } from 'react-icons/ci';
import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <div className="info">
        <div className="delivery">
          <small>Kostenlose Lieferung weltweit</small>
          <span className="icon-truck">
            <CiDeliveryTruck />
          </span>
        </div>
        <h1>Original recyclen Krawatten. </h1>
        <p>Jede Krawatte wird aus wiederverwendeten Stoffen hergestellt.</p>
        <div className="cta">
          <a href="" className="btn btn-primary">
            Mehr Krawatten
          </a>
        </div>
      </div>

      <div className="header-img">
        <img src={Img} alt="Bunte Krawatte" />
      </div>

      <div className="details">
        <div className="details-container">
          <h4>Krawatte Toto</h4>
          <br />
          <p>Die perfekte Krawatte, um aufzufallen und der Mittelpunkt der Party zu sein.</p>
          <br />
          <h4>€24.95</h4>
          <br />
          <button className='btn btn-secundary'>ZUM WARENKORB</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
