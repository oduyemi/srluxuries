import { Header } from "@/components/navigation/Header";
import { Banner } from "@/components/Home/Banner";
import { SingleCategory } from "@/components/Home/SingleCategory";
import { TopCategory } from "@/components/Home/TopCategory";
import { Brands } from "@/components/Home/Brands";
import { Footer } from "@/components/navigation/Footer";
import { ProductCat1 } from "@/components/Home/ProductCat1";
import { ProductCat2 } from "@/components/Home/ProductCat2";
import { ProductCat3 } from "@/components/Home/ProductCat3";
import { Promotions } from "@/components/Promotions/index";


// fetch('/api/home')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });

export default function Home() {
  return (
    <main className="">
      <section>
        <Header />
        <Banner />
      </section>
      <section>
        <ProductCat1 />
      </section>
      <section className="my-8">
        <TopCategory />
      </section>
        <ProductCat2 />
      <section>
      </section>
      <section className="my-8">
        <Promotions />
      </section>
        <ProductCat3 />
      <section>
      </section>
      <section>
        <Brands />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  )
}
