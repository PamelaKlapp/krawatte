import React from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  return (
    <div className="products-container container">
      <section className="products">
        <div className="products-intro">
          <div></div>
          <div className="products_text">
            <h2>Recycling - die neue Mode</h2>
            <p>
              Die Krawatten werden aus nachhaltigen Rohstoffen wie Bio-Baumwolle
              und Abfällen hergestellt. Wir arbeiten auch mit kleinen
              Familienbetrieben zusammen, die alles in Chile herstellen. Sie
              werden aus Textilabfällen hergestellt, die wiederverwertet werden,
              um ihnen ein zweites Leben zu geben. Sie sind also nicht nur
              einzigartig, sondern auch nachhaltig. Sie werden von lokalen
              Näherinnen mit exzellenter Handwerkskunst in Handarbeit
              hergestellt.
            </p>
          </div>
          <div></div>
        </div>
      </section>
      <Product />
    </div>
  );
};

export default Products;
