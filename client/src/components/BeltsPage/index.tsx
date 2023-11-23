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
  
  export const BeltsPage = () => {
    const [beltsProducts, setBeltsProducts] = useState<Products[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("https://api.srl.yemi.dev/products/belts");
              if (!response.ok) {
                  console.error("HTTP error!", response.status, response.statusText);
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const data = await response.json();
              setBeltsProducts(data);
          } catch (error) {
              console.error("Error fetching data:", error);
      }
    };

      fetchData();
  }, []);

    return(
        <>
            <Box maxWidth="xl" className="mb-5 mx-auto">
                <Box className="collection mx-auto" id="belts">
                    <Box className="abt-desc">
                        <Typography variant="h6" className="font-extrabold text-goldie">S R LUXURIES</Typography>
                        <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-bluey w-2/3 mb-4 mt-0">Belts</Typography>
                    </Box> 
                </Box>
            </Box>
            <Box>
                    {beltsProducts.map((product, index) => (
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