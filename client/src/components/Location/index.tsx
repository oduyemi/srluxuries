import { Box, Typography } from "@mui/material";
import Link from "next/link";


export const Location = () => {
    return(
        <Box maxWidth="xl" sx={{ display:"flex", alignItems:"center", justifyContent:"center", flexWrap:"wrap" }} className="mt-10 mb-5 locate">
            <Box maxWidth="md" sx={{ marginRight:"20px" }}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3221598913547!2d3.3459221748366965!3d6.606830722189691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922c2a96a9bd%3A0x1b4ca3112411efbb!2s117%20Obafemi%20Awolowo%20Way%2C%20Ikeja%20101233%2C%20Ikeja%2C%20Lagos!5e0!3m2!1sen!2sng!4v1694439529083!5m2!1sen!2sng"
                    width="560" height="450" className="border border-0 mx-auto" loading="lazy"></iframe>
            </Box>

            <Box maxWidth="sm" className="contact-info">
                <Typography variant="h2" gutterbottom className="text-goldie">How to Find <span><Typography variant="h2" className="inline text-bluey">SR LUXURIES</Typography></span></Typography>
                <Typography sx={{ fontWeight:"light" }} variant="h6" className="mb-4" paragraph>
                    Need something? Our team is here to help! Please feel free to reach us with
                    the details below, or fill the Contact Form and we will get back to you shortly.
                </Typography>

                <Box className="contact-address mt-50">
                    <Typography variant="h5" sx={{ display:"inline" }} className="text-tan">Address:<span><Typography variant="h5" sx={{ fontWeight:"light", display:"inline" }} paragraph> 117, Obafemi Awolowo Way, Ikeja, Lagos</Typography></span></Typography>
                    <Typography variant="h5"  className="text-tan">Telephone:<span><Typography variant="h5" sx={{ fontWeight:"light", display:"inline" }} paragraph> +234 915 999 9965</Typography></span></Typography>
                    <Typography variant="h5" paragraph><Link href="mailto:contact@srluxuries.com" className="text-butter">contact@srluxuries.com</Link></Typography>
                </Box>
            </Box>
        </Box>
    )
}