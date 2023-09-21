"use client"
import React, { useEffect, useState} from "react";
import ProductCatCard from "../Home/ProductCatCard";

export const Summer = () => {

    return(
        <>
            <section className="h-full w-full mb-5 mx-auto">
                <div className="collection mx-auto ">
                    <div className="abt-desc">
                        <h6 className="font-extrabold my-2 text-goldie">S R LUXURIES</h6>
                        <h2 className="text-5xl font-extrabold mb-2 text-white w-1/3 mb-4">Summer Wears</h2>
                        </div> 
                    </div>
                </section>
                <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-1.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-1b.jpg"
                    productName="Product Name 1"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-2.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-2b.jpg"
                    productName="Product Name 2"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-3.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-3bjpg"
                    productName="Product Name 3"
                    price="149"
                    originalPrice="199"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-4.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-4b.jpg"
                    productName="Product Name 1"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-5.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-5b.jpg"
                    productName="Product Name 2"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-6.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-6b.jpg"
                    productName="Product Name 3"
                    price="149"
                    originalPrice="199"
                />
                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-7.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-7b.jpg"
                    productName="Product Name 1"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-8.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-8b.jpg"
                    productName="Product Name 2"
                    price="149"
                    originalPrice="199"
                />

                <ProductCatCard
                    normalImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-9.jpg"
                    hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/accessories/summer/sm-9b.jpg"
                    productName="Product Name 3"
                    price="149"
                    originalPrice="199"
                />
            </section>
        </>
    )
}