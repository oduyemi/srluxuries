import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { AboutPage } from "@/components/AboutPage/index";
import { Questions } from "@/components/Questions";

export default function About () {
    return(
        <>
            <section>
                <Header />
            </section>
                <AboutPage />
            <section>
                <Questions />
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}