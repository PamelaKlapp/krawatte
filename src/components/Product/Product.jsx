import React from 'react';
import './Product.css';
import Img from '../../assets/krawatte2.png'

function Product() {
  return (
    <article>
      <div className="image">
        <img src={Img} alt="" />
      </div>
      <div className="product-info">
        <h2>Krawatte Le Wein</h2>
        <p>
          Farbe: Burgunder, Weinrot oder Bordeaux, es kommt ganz darauf an, wie
          man diese Farbe nennt. Perfekt für ein gutes Gespräch mit einem guten
          Merlot bei einem romantischen Date. Oder für Menschen, die erröten,
          ist diese Krawatte die perfekte Ergänzung.
        </p>
        <a href="">Mehr..</a>
      </div>
    </article>
  );
}

export default Product;
