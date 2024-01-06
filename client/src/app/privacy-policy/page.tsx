import { Privacy } from "@/components/Privacy/index";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Box } from "@mui/material";

export default function Caps () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box className="mt-10">
                <Privacy />
            </Box>
            <Box>
                <Footer openModal={openModal} />
            </Box>
        </>
    )
}