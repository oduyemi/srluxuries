import { Accessories } from "@/components/Accessories/index";
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export default function accessories () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <Accessories />
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}