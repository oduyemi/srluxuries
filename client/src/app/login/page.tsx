import { LoginForm } from "@/components/Forms/Forms";
import { Header } from "@/components/navigation/Header";
import { Box } from "@mui/material";



export default function Login () {
    return(
        <>
            <Box>
                <Header />
            </Box>
            <Box>
                <LoginForm />
            </Box>
        </>
    )
}