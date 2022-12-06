import React from 'react';
import Img from '../../assets/krawatte2.png';
import './Products.css';

const Products = () => {
  return (
    <div className="products-container">
      <section className="products">
        <div></div>
        <div className="products-intro">
          <h2>Recycling - die neue Mode</h2>
          <p>
            Die Krawatten werden aus nachhaltigen Rohstoffen wie Bio-Baumwolle
            und Abfällen hergestellt. Wir arbeiten auch mit kleinen
            Familienbetrieben zusammen, die alles in Chile herstellen. Sie
            werden aus Textilabfällen hergestellt, die wiederverwertet werden,
            um ihnen ein zweites Leben zu geben. Sie sind also nicht nur
            einzigartig, sondern auch nachhaltig. Sie werden von lokalen
            Näherinnen mit exzellenter Handwerkskunst in Handarbeit hergestellt.
          </p>
        </div>
        <div></div>
        <div></div>
        <article>
          <div className="image">
            <img src={Img} alt="" />
          </div>
          <div className="product-info">
            <h2>Krawatte Le Wein</h2>
            <p>
              Farbe: Burgunder, Weinrot oder Bordeaux, es kommt ganz darauf an,
              wie man diese Farbe nennt. Perfekt für ein gutes Gespräch mit
              einem guten Merlot bei einem romantischen Date. Oder für Menschen,
              die erröten, ist diese Krawatte die perfekte Ergänzung.
            </p>
            <a href="">Mehr..</a>
          </div>
        </article>
        <div></div>
      </section>
    </div>
  );
};

export default Products;
