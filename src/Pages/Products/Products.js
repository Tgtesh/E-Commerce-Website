import React, { useContext, useEffect, useState } from "react";
import CategoriesList from "../../Components/CategoriesList/CategoriesList";
import Item from "../../Components/Item/Item";
import CartContext from "../../Context/CartContext";
import "./products.css";

const Products = () => {
  const {products, setProducts, category, setCategory}= useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
    {category==="All" ?
   (<div className="product_list_container">
      {products.map((product, index) => (
        <Item key={index} product={product} />
      ))}</div>):(<CategoriesList/>)
    }
   </div>
  );
};

export default Products;
