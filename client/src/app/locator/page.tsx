import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Location } from "@/components/Location/index";
import { Box } from "@mui/material";


export default function Locator () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Location />
            <Box>
                <Footer openModal={openModal} />
            </Box>
        </>  
    )
}