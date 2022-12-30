import React from 'react';
import './Company.css';
import CompanyImg from '../../assets/krawatte7.png';

const Company = () => {
  return (
    <section id="company" className="company-container container">
      <div className="company-title">
        <h4>Wir sind..</h4>
        <h2>Die neue Ära der Mode</h2>
      </div>
      <div className="content-company">
        <div className="left-side">
          <div className="company-img">
            <img src={CompanyImg} alt="" />
          </div>
        </div>
        <div className="right-side">
          <p>
            Unsere Produkte werden unter fairen Handelsbedingungen hergestellt.
            Wir sorgen für das Wohlergehen und die guten Beziehungen unseres
            Teams und unserer Lieferanten. Wir setzen uns für eine Arbeitskultur
            ein, die zu einer besseren Lebensqualität für uns alle beiträgt. Wir
            arbeiten vor allem mit hoch qualifizierten lokalen Produzenten
            zusammen und stellen sicher, dass wir sie fair bezahlen. Bei der
            Herstellung eines jeden Produkts gibt es einen Designprozess, der
            sich mit diesen Idealen auseinandersetzt, indem er eine
            Verschmelzung von Materialien, Prozessen, Lieferanten und Menschen
            anstrebt, um das ideale Produkt zu erreichen.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Company;
