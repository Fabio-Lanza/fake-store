import React from "react";
import "./ProductDetails.css";
import { CgEuro } from "react-icons/cg";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

function ProductDetails() {
  const [product, setProduct] = useState("");
  const [added, setAdded] = useState(false);
  const { id, title, description, price, image } = product;

  const { addToCart, handleRemove, cart } = useContext(ShopContext);

  const { productId } = useParams();

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="product-container">
      <div className="product-box">
        <img src={image} alt="" />
        <div className="product-details">
          <h3>{title}</h3>
          <h3>
            {price}
            <CgEuro />
          </h3>
          <span>Description</span>
          <p>{description}</p>
          {cart.find((item) => item.id === product.id) ? (
            <button onClick={() => handleRemove(id)}>Remove from Cart</button>
          ) : (
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
