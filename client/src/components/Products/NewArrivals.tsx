"use client"
import React, { useState, useEffect } from 'react';
import { Box, Typography } from "@mui/material";
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
    <Box className="new_arrivals_area section-padding-80 clearfix mt-5">
      <Box className="container">
          <Box maxWidth="xl">
            <Box className="section-heading text-center">
              <Typography variant="h2" className='text-4xl text-butter my-5'>Popular Products</Typography>
            </Box>
          </Box>
      </Box>

      <Box className="container">
          <Box className="col-12">
            <Carousel products={products} itemsPerPage={4} />
          </Box>
      </Box>
    </Box>
  );
};

