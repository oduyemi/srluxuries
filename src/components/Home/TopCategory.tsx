import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Typography, Button,Grid } from "@mui/material";

export const TopCategory = () => {
    return(
        <Box maxWidth="xl">
            <Box maxWidth="l" sx={{ display:"flex", justifyItems:"center", alignItems:"center"}} className="bg-img background-overlay">
                <Grid maxWidth="l" className="mx-auto">
                    <Image
                        src="/assets/images/custom.jpg"
                        alt="Top Category"
                        width={400}
                        height={400}
                        className="h-full w-full object-contain ml-4"
                    />
                </Grid>
                <Grid container maxWidth="sm">
                    <Grid maxWidth="sm" sx={{ display:"flex", justifyItems:"center", alignItems:"center"}}>
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
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}