import { FootwearsPage } from "@/components/Footwears/index";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export default function Foot () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <FootwearsPage />
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}

