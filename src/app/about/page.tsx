import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { AboutPage } from "@/components/AboutPage/index";
import { Questions } from "@/components/Questions/index";
import { Box } from "@mui/material";


export default function About () {
 
    return(
        <>
            <AboutPage />
            <Box>
                <Questions />
            </Box>
        </>
    )
}