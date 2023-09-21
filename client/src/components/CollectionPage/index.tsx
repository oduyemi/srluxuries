"use client"
import React, { useEffect, useState} from "react";
import SingleProductCard from "../Products/SingleProductCard";
import { response } from "express";

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
                <section className="">
                    <div className="">
                        <div className="my-5">
                            <SingleProductCard
                                productName="2 Piece Senator Suit"
                                imageSrc="/../../public/assets/images/product-img/sr-1.jpg"
                                hoverImageSrc="/../../public/assets/images/product-img/sr-1b.avif" 
                                price="40000.00"
                                availability="In Stock"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed..."
                            />
                        </div>

                        <div className="my-5">
                            <SingleProductCard
                                productName="Kaftan Dashiki"
                                imageSrc="/../../public/assets/images/product-img/sr-2.jpg"
                                hoverImageSrc="/../../../public/assets/images/product-img/sr-2b.jpg" 
                                price="38500.00"
                                availability="In Stock"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed..."
                            />
                        </div>

                        <div className="my-5">
                            <SingleProductCard
                                productName="3 Piece Dashiki Outfit"
                                imageSrc="/../../public/assets/images/product-img/sr-3.jpg"
                                hoverImageSrc="../../../public/assets/images/product-img/sr-3b.webp" 
                                price="47600.00"
                                availability="In Stock"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed..."
                            />
                        </div>

                        <div className="my-5">
                            <SingleProductCard
                                productName="Afrinspiration"
                                imageSrc="/../../public/assets/images/product-img/sr-4.jpg"
                                hoverImageSrc="../../../public/assets/images/product-img/sr-4b.jpg" 
                                price="25000.00"
                                availability="In Stock"
                                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed..."
                            />
                        </div>
                    </div>

                
            </section>
        </>
    )
}