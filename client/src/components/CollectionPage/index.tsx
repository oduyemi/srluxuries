import Link from "next/link";
import ProductCatCard from "../Home/ProductCatCard";
import "animate.css";

export const CollectionPage = () => {
    return(
        <>
            <section className="h-full w-full mb-5 mx-auto">
                <div className="collection mx-auto">
                    <div className="abt-desc">
                        <h6 className="font-extrabold text-goldie">S R LUXURIES</h6>
                        <h2 className="text-5xl font-extrabold mb-2 text-white w-1/3 mb-4 mt-0">Collection</h2>
                        </div> 
                    </div>
                </section>
            <section>
            <div className="container">
                <div className="justify-center mb-5 p-4 mt-10">
                    <div className="w-full text-center">
                        <h2 className=" text-gray-50 font-extrabold text-9xl mt-0 mb-4">
                            <span><Link href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/trad-wears" className="animate__animated animate__flash animate__delay-10s"> Trads</Link>
                        </h2>
                    </div>
                </div>
            </div>
            </section>
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-1b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-2b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-3b.jpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-4b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-5.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-5b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-6.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/trad/td-6b.jpg"
                />
            </section>
            <section>
            <div className="container">
                <div className="justify-center mb-5 p-4 mt-10">
                    <div className="w-full text-center">
                        <h2 className=" text-gray-50 font-extrabold text-9xl mt-0 mb-4">
                            <span><Link href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/corporate-wears" className="animate__animated animate__flash animate__delay-10s"> Corporate</Link>
                        </h2>
                    </div>
                </div>
            </div>
            </section>
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-1b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-2b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-3bjpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-4b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-5.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-5b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-2b.jpg"
                />
            </section>
            <section>
            <div className="container">
                <div className="justify-center mb-5 p-4 mt-10">
                    <div className="w-full text-center">
                        <h2 className=" text-gray-50 font-extrabold text-9xl mt-0 mb-4">
                            <span><Link href="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" 
                                className="bi bi-arrow-right inline text-gray-50" viewBox="0 0 16 16"> 
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0
                                .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg></Link>
                            </span><Link href="/summer-wears" className="animate__animated animate__flash animate__delay-10s"> Summer</Link>
                        </h2>
                    </div>
                </div>
            </div>
            </section>
            <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-1b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-2b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-3bjpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-4b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-5.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-5b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-6.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-6b.jpg"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-7.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-7b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-8.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-8b.jpg"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-9.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-9b.jpg"
                />
            </section>
        </>
    )
}