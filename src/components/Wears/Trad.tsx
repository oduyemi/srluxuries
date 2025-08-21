"use client"
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "../Home/ProductCatCard";


interface Products {
    productName: string;
    price: number;
    productImage: string;
    productHoverImage: string;
  }
  
  export const Trad = () => {
    const [tradProducts, setTradProducts] = useState<Products[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("/api/products/trad");
              if (!response.ok) {
                  console.error("HTTP error!", response.status, response.statusText);
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const data = await response.json();
              setTradProducts(data);
          } catch (error) {
              console.error("Error fetching data:", error);
      }
    };

      fetchData();
  }, []);
  
  
    return (
      <>
        <Box maxWidth="xl" className="mb-5 mx-auto">
          <Box className="collection mx-auto" id="trad">
            <Box className="abt-desc">
              <Typography variant="h6" className="font-extrabold text-goldie mt-8">SR LUXURIES</Typography>
              <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-white w-2/3 mb-4 mt-0">Trads</Typography>
            </Box>
          </Box>
        </Box>
        <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
          {tradProducts.map((product, index) => (
            <ProductCatCard
              key={index}
              normalImageSrc={product.productImage}  
              hoverImageSrc={product.productHoverImage}  
              productName={product.productName}  
              price={product.price} 
            />
          ))}
        </Box>
      </>
    );
  }
  