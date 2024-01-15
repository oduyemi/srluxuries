import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

export const Tailor = () => {
  return (
    <>
        <Box maxWidth="xl" className="mb-5 mx-auto">
                <Box className="serv mx-auto ">
                    <Box className="abt-desc">
                        <h6 className="font-extrabold">services</h6>
                        <Typography variant="h2" className="text-5xl font-extrabold mb-2 text-butter w-2/3 mb-4 spaced_title">Tailored-To-Fit<span><Typography variant="h2" className="text-[#39A9DB] spaced_title">D E S I G N S</Typography></span></Typography>
                        <Typography variant="h5" className="text-xs w-1/4 xs:w-full" paragraph>
                            Our tailored to fit gives an
                            opportunity to present your imaginary designs and our expert tailors
                            will produce high quality and luxury pieces bringing your designs
                            to limelight. 
                        </Typography>
                        <Box className="mt-5">
                            <Link href="/custom-image">
                                <Button sx={{ backgroundColor:"#CD8F2C" }} className="rounded bg-goldie px-4 py-2 text-sm hover:bg-tan hover:text-white
                                    text-black border border-goldie hover:border-tan"> 
                                    Upload Style
                                </Button>
                            </Link>  
                        </Box>
                    </Box> 
                </Box>
        </Box>
        <Box className="mx-auto">
            <Box className="container mb-0 pt-5 pt-lg-6">
            <Box className="container mb-0">
            <Box className="flex flex-col mb-5 md:flex-row">
                <Box className="w-2/3 mx-auto mt-5">
                    <Typography variant="h2" className="text-center text-5xl text-third-color text-tan spaced_title">
                    <strong className="text-goldie">SR LUXURIES </strong>serves the best...{" "}
                    </Typography>
                </Box>
                </Box>

                {/* Consultancy */}
                <Box>
                <Box sx={{ display:"flex", justifyContent:"center", alignItems:"center" }} className="mb-5 consult">
                <Box maxWidth="xl" className="order-2 md:order-1 mb-5 md:mb-0">
                    <Box className="h-100 flex items-center justify-center">
                    <Box maxWidth="xl" className="mx-auto md:ml-0 imgbox">
                        <Image
                            src="/assets/images/consultancy.png"
                            alt="Consultancy collage"
                            width={602}
                            height={660}
                            className="object-cover w-800 h-660 ml-4"
                        />
                        
                    </Box>
                    </Box>
                </Box>
                <Box maxWidth="xl" className="order-1 md:order-2 mb-5 md:mb-0 md:ml-4">
                    <Box sx={{ display:"flex", alignItems:"center" }} className="h-100">
                    <Box className="ml-0 md:ml-4 mr-4">
                        <Typography variant="h2" className="mb-4 text-goldie text-3xl gold_title spaced">
                        CONSULTANCY
                        </Typography>
                        <Typography variant="h5" className="mb-5 w-2/3 gold_title spaced" paragraph>
                        &quot;SR LUXURIES consultancy has grown into a highly personalized experience...&quot;
                        </Typography>
                        <Typography variant="h5" className="mb-5 w-2/3 spaced_title spaced" paragraph>
                            <strong>
                                Do you need expert advice on your project or occasion? Book an appointment today.
                            </strong>
                        </Typography>
                        <Box sx={{ display:"flex" }}>
                            <Link href="/appointment">
                                <Button variant="contained" sx={{ backgroundColor:"#CD8F2C" }} className="spaced rounded bg-goldie px-6 py-2 text-sm hover:bg-tan hover:text-white
                                border border-goldie hover:border-tan"> 
                                    Book Appointment
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                    </Box>
                </Box>
                </Box>
                </Box>
            </Box>
            </Box>
      </Box>
    </>
  );
};
