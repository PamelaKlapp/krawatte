import React from 'react';
import Img from '../../assets/krawatte1.png';
import { CiDeliveryTruck } from 'react-icons/ci';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="container">
      <div className="home-content">
        <div className="delivery">
          <small className="delivery-text">Kostenlose Lieferung weltweit</small>
          <span className="icon-truck">
            <CiDeliveryTruck />
          </span>
        </div>
        <div className="home-content-main">
          <div className="info">
            <h1>Original recyclen Krawatten</h1>
            <p>Jede Krawatte wird aus wiederverwendeten Stoffen hergestellt.</p>
            <div className="cta">
              <a href="#krawatte" className="btn btn-primary">
                Shop now
              </a>
            </div>
          </div>

          <div className="home-img">
            <img src={Img} alt="Toto-Krawatte" />
          </div>
        </div>
      </div>
    </section>

  );
};

export default Home;
