import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { Tailor } from "@/components/Tailor/index";


export default function Services () {
    return(
        <>
            <section>
                <Header />
            </section>
            <Tailor />
            <section>
                <Footer />
            </section>
        </>
    )
}