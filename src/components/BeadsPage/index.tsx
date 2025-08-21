"use client"
import { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import ProductCatCard from "../Home/ProductCatCard";

interface Products {
    ProductName: string;
    Price: number;
    ProductImage: string;
    ProductHoverImage: string;
  }
  
  export const BeadsPage = () => {
    const [beadsProducts, setBeadsProducts] = useState<Products[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch("https://api.srl.yemi.dev/products/beads");
              if (!response.ok) {
                  console.error("HTTP error!", response.status, response.statusText);
                  throw new Error(`HTTP error! Status: ${response.status}`);
              }
              const data = await response.json();
              setBeadsProducts(data);
          } catch (error) {
              console.error("Error fetching data:", error);
      }
    };

      fetchData();
  }, []);

    return(
        <>
            <Box maxWidth="xl" className="mb-5 mx-auto">
                <Box className="collection mx-auto" id="beads">
                    <Box className="abt-desc">
                        <Typography variant="h6" className="font-extrabold text-goldie">S R LUXURIES</Typography>
                        <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-white w-2/3 mb-4 mt-0">Luxury Beads</Typography>
                        </Box> 
                    </Box>
                </Box>
                <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {beadsProducts.map((product, index) => (
                        <ProductCatCard
                            key={index}
                            normalImageSrc={product.ProductImage}  
                            hoverImageSrc={product.ProductHoverImage}  
                            productName={product.ProductName}  
                            price={product.Price} 
                        />
                        ))};

                </Box>
            {/* <Box className="mt-6">
                <Box className="my-6 mx-auto text-center">
                    <Link href="/stones">
                        <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie hover:bg-tan px-8 py-2 text-l  hover:text-white border border-goldie
                        hover:border-tan">Go to Luxury Stones</Button>
                    </Link>
                </Box>
            </Box> */}
        </>
    )
}
