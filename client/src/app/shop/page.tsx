import { ShopPage } from "@/components/ShopPage/index"
import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";

export default function Shop () {
    return(
        <>
            <section>
                <Header />
            </section>
            <section>
                <ShopPage />
            </section>
            <section>
                <Footer />
            </section>
        </>
    )
}

