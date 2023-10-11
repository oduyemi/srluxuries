import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export const Promotions = () => {
    return(
        <>
            <Box maxWidth="xl" className="mb-5">
                <Box className="serv deals mx-auto">
                    <Box className="abt-desc">
                        <Typography variant="h6" className="font-extrabold my-2 text-tan">promotions</Typography>
                        <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-butter w-1/3">
                            SRL<span>
                                    <Typography variant="h2" className="pl-2 text-[#39A9DB] inline">&nbsp;Specials</Typography>
                                </span>
                        </Typography>
                        <Typography variant="h5" className="text-sm pl-2 text-tan" paragraph>
                            Don&apos;t miss out on another good deal.
                        </Typography>
                        <Box className="mt-4">
                            <Link href="/shop">
                                <Button variant="contained" sx={{ backgroundColor:"#CD8F2C"}}
                                    className="rounded-full bg-goldie px-8 py-2 text-xl hover:bg-tan hover:text-white
                                    border border-goldie hover:border-tan"> 
                                    Shop Now
                                </Button>
                            </Link>
                        </Box>
                        </Box> 
                    </Box>
                </Box>
            <Box>
                
            </Box>
        </>
    )
}