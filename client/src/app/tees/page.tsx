import { Tees } from "@/components/Tees/index";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Box } from "@mui/material";


export default function tees () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <Tees />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}

