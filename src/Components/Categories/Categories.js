import React, { useContext, useEffect } from "react";

import CartContext from "../../Context/CartContext";
import { useHistory } from "react-router";
import "./Categories.css"

const Categories = () => {
 
  const { categories, setCategories,products, category, setCategory } = useContext(CartContext);
  const history=useHistory()
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
     const filteredProducts= products.filter((product)=>{
        return category===product.category;
   })
  return (
    <div>
      <span className="categoryText">
        Shop by category
      </span>
      <select className="categorySelect" value={category} 
      onChange={(e) => setCategory(e.target.value)}>
       <option onClick={()=>history.push("/")} value="All">
         All
         </option>
        {categories.map((category, index) => (
          <option key={index} onClick={filteredProducts} value={category}>{category}</option>
        ))}
      </select>
 
    </div>
  );
};

export default Categories;
