"use client"
import React, { useEffect, useState} from "react";
import ProductCatCard from "../Home/ProductCatCard";

export const Corporate = () => {

    return(
        <>
            <section className="h-full w-full mb-5 mx-auto">
                <div className="collection mx-auto" id="corporate">
                    <div className="abt-desc">
                        <h6 className="font-extrabold text-goldie">S R LUXURIES</h6>
                        <h2 className="text-5xl font-extrabold mb-2 text-white w-1/3 mb-4 mt-0">Corporate Wears</h2>
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
        </>
    )
}


