"use client"
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ProductCatCard from "../Home/ProductCatCard";

interface Products {
    ProductName: string;
    Price: number;
    ProductImage: string;
    ProductHoverImage: string;
  }
  
  export const Tees = () => {
    const [teesProducts, setTeesProducts] = useState<Products[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("https://api.srl.yemi.dev/products/tees");
              if (!response.ok) {
                  console.error("HTTP error!", response.status, response.statusText);
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const data = await response.json();
              setTeesProducts(data);
          } catch (error) {
              console.error("Error fetching data:", error);
      }
    };

      fetchData();
  }, []);
    return(
        <>
            <Box maxWidth="xl" className="mb-5 mx-auto">
                <Box className="collection mx-auto" id="tees">
                    <Box className="abt-desc">
                        <Typography variant="h6" className="font-extrabold text-goldie">S R LUXURIES</Typography>
                        <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-white w-2/3 mb-4 mt-0">Tee-Shirts</Typography>
                        </Box> 
                    </Box>
                </Box>
                <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {teesProducts.map((product, index) => (
                        <ProductCatCard
                            key={index}
                            normalImageSrc={product.ProductImage}  
                            hoverImageSrc={product.ProductHoverImage}  
                            productName={product.ProductName}  
                            price={product.Price} 
                        />
                        ))}
            </Box>
        </>
    )
}

