import React from "react";
import "./ProductDetails.css";
import { CgEuro } from "react-icons/cg";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [product, setProduct] = useState("");
  const { id, title, description, price, image } = product;

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
          <h3>{price}<CgEuro /></h3>
          <span>Description</span>
          <p>{description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
