import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";;



export const ProductSlider: React.FC = () => {
  const products = [
    {
      id: 1,
      imageSrc: "/assets/images/product-img/product-1.JPG",
      hoverImageSrc: "/assets/images/product-img/product-1b.avif",
      name: "2 Piece Senator Suit",
      price: "&#8358;40000.00",
    },

    {
      id: 2,
      imageSrc: "/assets/images/product-img/product-2.jpg",
      hoverImageSrc: "/assets/images/product-img/product-2b.jpg",
      name: "Kaftan Dashiki",
      price: "&#8358;38500",
    },

    {
      id: 3,
      imageSrc: "/assets/images/product-img/product-3.jpg",
      hoverImageSrc: "/assets/images/product-img/product-3b.webp",
      name: "3 Piece Dashiki Outfit",
      price: "&#8358;47600.00",
    },

    {
      id: 4,
      imageSrc: "/assets/images/product-img/product-4.jpg",
      hoverImageSrc: "/assets/images/product-img/product-4b.jpg",
      name: "2 Piece Senator Suit",
      price: "&#8358;40000.00",
    },
    // Add more products here
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? products.length - 1 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === products.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <section className="new_arrivals_area section-padding-80 clearfix">
      <div className="col-12">
        <div className="popular-products-slides owl-carousel">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`single-product-wrapper ${index === currentSlide ? "active" : ""}`}
            >
              {/* Product Image */}
              <div className="product-img">
                <Image src={product.imageSrc} alt={product.name} width={1} height={1} />
                {/* Hover Thumb */}
                <Image
                  src={product.hoverImageSrc}
                  alt={product.name}
                  width={1}
                  height={1}
                  className="hover-img"
                />
                {/* Favourite */}
                <div className="product-favourite">
                  <Link href="#" className="favme fa fa-heart"></Link>
                </div>
              </div>
              {/* Product Description */}
              <div className="product-description">
                <span>{product.name}</span>
                <Link href="">
                  <h6>{product.name}</h6>
                </Link>
                <p className="product-price">{product.price}</p>
                {/* Hover Content */}
                <div className="hover-content">
                  {/* Add to Cart */}
                  <div className="add-to-cart-btn">
                    <Link href="#" className="btn essence-btn">
                      Add to Cart
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="prev-btn" onClick={handlePrevSlide}>
        Previous
      </button>
      <button className="next-btn" onClick={handleNextSlide}>
        Next
      </button>
    </section>
  );
};

