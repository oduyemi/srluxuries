import { Accessories } from "@/components/Accessories/index";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Box } from "@mui/material";


export default function accessories () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <Accessories />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}