"use client"
import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import ProductCatCard from "../Home/ProductCatCard";
import "animate.css";



interface Products {
    productName: string;
    price: number;
    productImage: string;
    productHoverImage: string;
  }

export const Accessories = () => {
    const [beadsProducts, setBeadsProducts] = useState<Products[]>([]);
    const [beltsProducts, setBeltsProducts] = useState<Products[]>([]);
    const [capsProducts, setCapsProducts] = useState<Products[]>([]);

    useEffect(() => {
        const fetchBeadsData = async () => {
          try {
            const response = await fetch("/api/products/beads");
            const beadsdata = await response.json();
            setBeadsProducts(beadsdata);
          } catch (error) {
            console.error('Error fetching product beads:', error);
          }
        };
    
        const fetchBeltsData = async () => {
          try {
            const response = await fetch("/api/products/belts");
            const beltsdata = await response.json();
            setBeltsProducts(beltsdata);
          } catch (error) {
            console.error('Error fetching product belts:', error);
          }
        };
    
        const fetchCapsData = async () => {
          try {
            const response = await fetch("/api/products/caps");
            const capsdata = await response.json();
            setCapsProducts(capsdata);
          } catch (error) {
            console.error('Error fetching product caps:', error);
          }
        };
        
        fetchBeadsData();
        fetchBeltsData();
        fetchCapsData();
      }, []);
    return(
        <>
            <Box maxWidth="xl" className="mb-5 mx-auto">
                <Box className="collection mx-auto" id="accessories">
                    <Box className="abt-desc">
                        <Typography variant="h6" className="font-extrabold text-goldie">S R LUXURIES</Typography>
                        <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-white w-2/3 mb-4 mt-0">Accesories</Typography>
                        </Box> 
                    </Box>
                </Box>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/beads">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/beads" className="animate__animated animate__flash animate__delay-10s"> Beads</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                {beadsProducts.map((product, index) => (
                    <ProductCatCard
                    key={index}
                    normalImageSrc={product.productImage}  
                    hoverImageSrc={product.productHoverImage}  
                    productName={product.productName}  
                    price={product.price} 
                    />
                ))}
            </Box>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/belts">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/belts" className="animate__animated animate__flash animate__delay-10s"> Belts</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                {beltsProducts.map((product, index) => (
                    <ProductCatCard
                    key={index}
                    normalImageSrc={product.productImage}  
                    hoverImageSrc={product.productHoverImage}  
                    productName={product.productName}  
                    price={product.price} 
                    />
                ))}
            </Box>
            <Box>
            <Box className="container">
                <Box className="justify-center mb-5 p-4 mt-10">
                    <Box maxWidth="xl" className="text-center">
                        <Typography variant="h2" className=" text-gray-50 font-extrabold text-9xl sm:text-6xl gold_title mt-0 mb-4">
                            <span><Link href="/caps">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/caps" className="animate__animated animate__flash animate__delay-10s"> Caps</Link>
                        </Typography>
                    </Box>
                </Box>
            </Box>
            </Box>
            <Box maxWidth="xl" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-2 mb-5">
                {capsProducts.map((product, index) => (
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
    )
}