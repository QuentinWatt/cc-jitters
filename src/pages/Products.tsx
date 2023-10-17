import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { firebase } from "../firebase";
import {
  getDatabase,
  ref,
  onValue,
} from "firebase/database";
import Product from "../models/Product";

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const database = getDatabase(firebase);
    const productsRef = ref(database, "products");

    onValue(productsRef, (snapshot) => {
      setProducts(snapshot.val());
    });
  }, []);

  return (
    <div className="py-5">
      {products &&
        products.map((product, key) => (
          <div key={key} className="mb-5">
            <ProductCard product={product} />
          </div>
        ))}
    </div>
  );
};

export default Products;
