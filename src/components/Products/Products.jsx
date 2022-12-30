import React from 'react';
import DisplayProducts from '../DisplayProducts/DisplayProducts';
import './Products.css';

const Products = () => {
  return (
    <section id="products" className="container">
      <div className="products-container">
        <h2>Recycling - New Collection</h2>
        <div className="product-display">
          <DisplayProducts />
        </div>
      </div>
    </section>
  );
};

export default Products;
