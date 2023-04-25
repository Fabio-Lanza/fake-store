import React from "react";
import "./ProductCard.css";
import { CgEuro } from "react-icons/cg";
import { AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  const { id, title, category, price, image } = product;

  return (
    <>
      <Link to={`/details/${id}`} className="card">
        <div className="card-img">
          <img src={image} alt="" />
          <span>
            <AiFillHeart style={{ color: "#fff" }} />
          </span>
        </div>
        <h6>{title}</h6>
        <p>{category}</p>
        <p className="price">
          {price}
          <CgEuro />
        </p>
      </Link>
    </>
  );
}

export default ProductCard;
