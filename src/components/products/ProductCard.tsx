import React from "react";
import Button from "../shared/Button";
import { useAppDispatch } from "../../store/hooks";
import { addToCart } from "../../store/cartSlice/cart";
import Product from "../../models/Product";
export interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="border border-coffee-brown-600 rounded p-3 w-full bg-coffee-brown-500">
      <div className="flex mb-3">
        <div className="w-24 h-24">
          <img src={product.image_url} alt={product.title}></img>
        </div>
        <div className="ml-3 text-white">
          <h3 className="font-bold text-2xl">{product.title}</h3>
          <div className="font-bold text-xl">R {product.price}</div>
          <Button onClick={() => dispatch(addToCart(product))}>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
