import { LoginForm } from "@/components/Forms/Forms";
import { Header } from "@/components/navigation/Header";

export default function Login () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <LoginForm />
            </section>
        </>
    )
}