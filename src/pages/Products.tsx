import React, { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { firebase } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

const Products: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const database = getDatabase(firebase);
    const productsRef = ref(database, "products");

    onValue(productsRef, (snapshot) => {
      console.log(snapshot.val());
      const products = snapshot.val();
      setProducts(products);
    });
  }, []);

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
