import { LoginForm } from "@/components/Forms/Forms";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Box } from "@mui/material";



export default function Login () {

    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box className="mt-10">
                <LoginForm />
            </Box>
            <Box>
                <Footer />
            </Box>
        </>
    )
}