import React from "react";
import "./ProductCard.css";
import { CgEuro } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";

function ProductCard({ product }) {
  const { title, category, price, image } = product;

  return (
    <div className="card">
      <div className="card-img">
        <img src={image} alt="" />
        <span>
          <AiFillHeart style={{color: '#fff' }}/>
        </span>
      </div>
      <h6>{title}</h6>
      <p>{category}</p>
      <p className="price">
        {price}
        <CgEuro />
      </p>
    </div>
  );
}

export default ProductCard;
