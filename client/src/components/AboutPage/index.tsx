import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const AboutPage = () => {
    return(
        <>
            <Box maxWidth="xl">
                <Box className="abt mx-auto ">
                    <Box className="abt-desc">
                        <Typography variant="h6" className="font-extrabold">about</Typography>
                        <Typography variant="h2" className="text-4xl font-extrabold mb-2 text-butter w-1/3 mt-0 gold_title">
                            Samuel Rowland
                            <span><h2 className="text-[#39A9DB] sm:text-3xl spaced_title">L U X U R I E S </h2></span>
                        </Typography>
                        <Typography variant="h5"className="text-sm pl-2">
                            It&apos;s not just the outfit. We build dreams.
                        </Typography>
                        </Box> 
                    </Box>
            </Box>
            <Box className="my-4">
                <Box className="">
                    <Box className="w-full md:w-2/3 my-5 mx-auto">
                        <Box className="md:ms-5 my-3"> 
                        <Typography variant="h4" className="text-2xl sm:text-xl font-light mb-4">
                            SR Luxuries was created out to the niche to provide affordable luxury with a true style indulgence showing <span><h2 className="text-bluey inline">the authentic YOU</h2>.</span><br /><br />
                            Our designes are inspired by the latest fashion trends and tailored to fit your individual style.
                            Join us on this fashionable journey and let us make a statement together.
                            <Typography variant="h4" className="text-2xl sm:text-xl font-light my-4">
                                SR Luxuries is a fashion brand that creates bespoke menswear producing high quality, luxury pieces with exceptional craftsmanship and tailoring. We offer tailored garments, ready to wear pieces and corporate wears.
                            </Typography>
                            <Typography variant="h4" className="text-2xl sm:text-xl font-light">
                                We believe that accessories accentuates your outlook providing you a complete and unique style.
                                Our available accessories are footwears, belt,  traditional caps, luxury beads and luxury stones.
                            </Typography>
                        </Typography> 
                           
                        </Box>
                    </Box>
                    
                </Box>
            </Box>
        </>       
    )
}