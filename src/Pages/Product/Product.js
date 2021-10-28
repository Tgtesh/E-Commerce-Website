import React, { useEffect, useState, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import SimilarItems from "../../Components/SimilarItems/SimilarItems";
import CartContext from "../../Context/CartContext";
import "./product.css";

const Product = () => {
  const { id } = useParams();

  const [count, setCount] = useState(1);
  const { cart, setCart, product, setProduct } = useContext(CartContext);
  const history = useHistory();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const countDecrease= () => (count == 1 ? setCount(1) : setCount(count - 1))

  const imgStyles = {
    backgroundImage: `url(${product.image})`,
    width: "100%",
    height: "438px",
    backgroundSize: "content",
    backgroundPosition: "top",
    backgroundRepeat: "no-repeat"
  };

  return (
    <div>
    <div className="product_container">
      <div className="product_card">
        <div className="productDetailContainer">
          <div className="imagewidth"
        style={imgStyles}></div>
          <div className="detailsInfo">
          <h2 className="product_title">{product.title}</h2>
          <p className="product_description">{product.description}</p></div>
          
        </div>

        <div className="addContainer">
          <div>
            <button
              className="cntBtn"
              onClick={countDecrease}
            >
              -
            </button>
            {count}{" "}
            <button
              className="cntBtn"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
          <button
            onClick={()=>{setCart([...cart, {...product, count }])
               history.push("/")
            }}
            className="cntBtn"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
    <div>
      <SimilarItems productCategory={product.category}/>
    </div>
    </div>
  );
};

export default Product;
