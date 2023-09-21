import React from "react";
import SingleProductCard from "./SingleProductCard";

export const SingleProduct = () => {
  return (
    <div>
      {/* Use the SingleProductCard component */}
      <SingleProductCard
        productName="2 Piece Senator Suit"
        imageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/product-img/sr-1.jpg"
        hoverImageSrc="https://res.cloudinary.com/dymd1jkbl/image/upload/v1691953768/srl/product-img/product-1b.avif" 
        price="40000.00"
        availability="In Stock"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed..."
      />
    </div>
  );
};


