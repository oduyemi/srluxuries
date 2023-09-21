import React, { useState, useRef, useEffect, useCallback } from "react";
import { CldImage } from "next-cloudinary";
import Link from "next/link";

interface Product {
  id: number;
  imageSrc: string;
  hoverImageSrc: string;
  name: string;
  price: number;
  description: string;
}

interface CarouselProps {
  products: Product[];
  itemsPerPage: number;
}

export const Carousel: React.FC<CarouselProps> = ({ products, itemsPerPage }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  var newIndex: number;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const moveCarousel = (direction: "next" | "prev"): void => {
    if (direction === "next") {
      newIndex = currentIndex + itemsPerPage;
      if (newIndex >= products.length) {
        newIndex = 0;
      }
    } else if (direction === "prev") {
      newIndex = currentIndex - itemsPerPage;
      if (newIndex < 0) {
        newIndex = products.length - itemsPerPage;
      }
    }
  
    setCurrentIndex(newIndex);
  
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        let nextIndex = newIndex + itemsPerPage;
        if (nextIndex >= products.length) {
          nextIndex = 0;
        }
        setCurrentIndex(nextIndex);
      }, 3000);
    }
  };
  
  

  const updateCarousel = useCallback(() => {
    if (carouselRef.current) {
      const offset = currentIndex * (100 / itemsPerPage);
      carouselRef.current.style.transform = `translateX(-${offset}%)`;
    }
  }, [currentIndex, itemsPerPage]);

  useEffect(() => {
    updateCarousel();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentIndex, updateCarousel]);

  
  return (
    <section className="new_arrivals_area section-padding-80 clearfix">
      <div
        className="popular-products-slides flex items-center justify-center"
        ref={carouselRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <CldImage
              width="400"
              height="400"
              alt="Product Image"
              src={currentIndex === product.id ? product.hoverImageSrc : product.imageSrc}
              className="object-cover"
              onMouseEnter={updateCarousel}
            />
             <div className="product-description text-center">
            <Link href="single-product-details.html">
              <h6 className="text-2xl">{product.name}</h6>
            </Link>
            <p className="product-price text-xl"> &#8358; {product.price}</p>
          </div>
          <div className="hover-content">
            <div className="add-to-cart-btn text-center">
              <Link href="">
                <button className="w-1/2 bg-goldie py-2 px-3 rounded-full font-bold hover:bg-tan hover:text-white border border-goldie
                hover:border-tan">Add to Cart</button>
              </Link>
            </div>
          </div>
          </div>
        ))}
      </div>
      <button className="next-btn" onClick={() => moveCarousel("next")}>
        Next
      </button>
      <button className="prev-btn" onClick={() => moveCarousel("prev")}>
        Previous
      </button>
    </section>
  );
};
