import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Questions } from "@/components/Questions/index";


export default function Faqs () {
    return(
        <>
            <section>
                <Header />
            </section>
            <Questions />
            <section>
                <Footer />
            </section>
        </>
    )
}