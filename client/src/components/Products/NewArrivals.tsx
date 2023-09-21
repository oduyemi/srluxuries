"use client"
import React, { useState, useEffect } from 'react';
import { Carousel } from './Carousel';

export const NewArrivals: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <section className="new_arrivals_area section-padding-80 clearfix mt-5">
      <div className="container">
          <div className="w-full">
            <div className="section-heading text-center">
              <h2 className='text-4xl text-butter my-5'>Popular Products</h2>
            </div>
          </div>
      </div>

      <div className="container">
          <div className="col-12">
            <Carousel products={products} itemsPerPage={4} />
          </div>
      </div>
    </section>
  );
};

