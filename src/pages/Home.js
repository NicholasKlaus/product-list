import React from "react";
import { useSelector } from "react-redux";
import { Header } from "../components/Header";
import { ProductCard } from "../components/productCard";

export const Home = () => {

  const { products } = useSelector(({Products}) => Products)
  console.log(products);

  return (
    <div>
      <Header />
      <div className="container">
        {
          products.map(product => <ProductCard product={product} key={product.id} />)
        }
      </div>
    </div>
  );
}