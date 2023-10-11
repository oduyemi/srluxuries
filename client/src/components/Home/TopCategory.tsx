import React from "react";
import Link from "next/link";
import { Box, Typography, Button } from "@mui/material";

export const TopCategory = () => {
    return(
        <Box className="cta-area">
            <Box className="container">
                <Box maxWidth="xl" sx={{ display:"flex", justifyItems:"center", alignItems:"center"}}>
                    <Box sx={{ display:"flex", justifyItems:"center", alignItems:"center"}} className="cta-content bg-img background-overlay"></Box>
                        <Box sx={{ display:"flex", justifyItems:"center", alignItems:"center"}} className="h-100">
                            <Box className="cta--text mr-10">
                                <Typography variant="h6" className="text-l text-butter">Custom Designs</Typography>
                                <Typography variant="h3" className="text-tan font-bold text-5xl">Tailored-To-Fit</Typography>
                                <Box className="my-4">
                                    <Link href="/services">
                                        <Button variant="contained" sx={{ backgroundColor:"#CD8F2C"}} className="rounded bg-goldie px-8 py-2 text-l hover:bg-tan hover:text-white border border-goldie
                                            hover:border-tan">Order Now</Button>
                                    </Link>
                                </Box>
                                
                            </Box>
                        </Box>
                </Box>
            </Box>
        </Box>
    )
}