"use client"
import React, { useEffect, useState} from "react";
import ProductCatCard from "../Home/ProductCatCard";
// import { response } from "express";

export const CollectionPage = () => {
    // const [message, setMessage] = useState("loading...")

    // useEffect(()=> {
    //     fetch("http://localhost:8080/api/collection").then(
    //         response => response.json()
    //     ).then(
    //         data => {
    //             setMessage(data.message);
    //         }
    //     )
    // }, [])
    return(
        <>
            <section className="h-full w-full mb-5 mx-auto">
                <div className="collection mx-auto ">
                    <div className="abt-desc">
                        <h6 className="font-extrabold my-2 text-goldie">S R LUXURIES</h6>
                        <h2 className="text-5xl font-extrabold mb-2 text-white w-1/3 mb-4">Collection</h2>
                        </div> 
                    </div>
                </section>
                <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/product-img/sr-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/product-img/sr-1b.jpg"
                    productName="Product Name 1"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/product-img/sr-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/product-img/sr-2b.jpg"
                    productName="Product Name 2"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/product-img/sr-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/product-img/sr-3b.jpg"
                    productName="Product Name 3"
                    price="149"
                    originalPrice="199"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/hover.jpg"
                    productName="Product Name 1"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/hover.jpg"
                    productName="Product Name 2"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/cw-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/corporatewears/hover.jpg"
                    productName="Product Name 3"
                    price="149"
                    originalPrice="199"
                />
            </section>
        </>
    )
}