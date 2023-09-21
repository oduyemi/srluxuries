import { CapsPage } from "@/components/CapsPage/index";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export default function Caps () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <CapsPage />
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}