import React from "react";
import Button from "../shared/Button";

export interface ProductCardProps {
  title: string;
  price: string;
  image_url: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  image_url,
}) => {
  return (
    <div className="border border-coffee-brown-600 rounded p-3 w-full bg-coffee-brown-500">
      <div className="flex mb-3">
        <div className="w-24 h-24">
          <img src={image_url} alt={title}></img>
        </div>
        <div className="ml-3 text-white">
          <h3 className="font-bold text-2xl">{title}</h3>
          <div className="font-bold text-xl">R {price}</div>
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
