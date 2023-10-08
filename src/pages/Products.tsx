import React from "react";
import ProductCard from "../components/products/ProductCard";

const products = [
  {
    title: "Long Black",
    price: "30",
    image_url: "https://source.unsplash.com/Zgq3cqztoLI/100x100",
  },
  {
    title: "Cappuccino",
    price: "35",
    image_url: "https://source.unsplash.com/HnGNMt8sjnU/100x100",
  },
];

const Products: React.FC = () => {
  return (
    <div className="py-5">
      {products.map((product) => (
        <div className="mb-5">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;