import React, { useContext } from "react";
import CartContext from "../../Context/CartContext";

import Item from "../Item/Item";

const SimilarItems = (props) => {
  const { products } = useContext(CartContext);
  const filteredProducts = products.filter((product) => {
    return props.productCategory === product.category;
  });
  return (
    <div className="similarItemContainer">
      <h1 className="similarItemText">Similar Items:</h1>
      <div className="product_list_container">
        {filteredProducts.map((product, index) => (
          <Item key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SimilarItems;
