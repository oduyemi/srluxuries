import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Button } from "@mui/material";

export const TopCategory = () => {
    return(
        <Box className="cta-area">
            <Box className="container">
                <Box maxWidth="xl" sx={{ display:"flex", justifyItems:"center", alignItems:"center"}}>
                    <Box maxWidth="l" sx={{ display:"flex", justifyItems:"center", alignItems:"center"}} className="bg-img background-overlay">
                        <Image
                            src="/assets/images/custom.jpg"
                            alt="Top Category"
                            width={100}
                            height={100}
                            className="h-80 w-80 object-contain ml-4"
                        />
                            <Box sx={{ display:"flex", justifyItems:"center", alignItems:"center"}} className="h-100">
                                <Box maxWidth="sm" className="ml-4">
                                    <Typography variant="h6" className="text-l text-butter spaced_title">Custom Designs</Typography>
                                    <Typography variant="h3" className="text-tan font-bold text-5xl spaced_title">Tailored-To-Fit</Typography>
                                    <Box className="my-4">
                                        <Link href="/services">
                                            <Button variant="contained" sx={{ backgroundColor:"#CD8F2C"}} className="rounded bg-goldie px-6 py-2 text-l hover:bg-tan hover:text-white border border-goldie
                                                hover:border-tan">Order Now</Button>
                                        </Link>
                                    </Box>
                                    
                                </Box>
                            </Box>
                        </Box>
                </Box>
            </Box>
        </Box>
    )
}