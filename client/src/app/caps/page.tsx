import { CapsPage } from "@/components/CapsPage/index";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Box } from "@mui/material";

export default function Caps () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <CapsPage />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}