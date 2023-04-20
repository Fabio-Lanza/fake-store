import React from "react";
import "./Category.css";
import { useState } from "react";
import axios from "axios";


function Category({ products, setProducts }) {
 

  const handleClick = (categories) => {
    axios.get(`https://fakestoreapi.com/products/category/${categories}`)
    .then((res) => {
      setProducts(res.data);
    }); 
  };

  const handleClickAll = () => {
    axios.get(`https://fakestoreapi.com/products`)
    .then((res) => {
      setProducts(res.data);
    }); 
  };

  return (
    <div className="category-btn">   
      <button onClick={handleClickAll}>All</button>
      <button onClick={()=> handleClick("electronics")}>Electronics</button>
      <button onClick={()=> handleClick("jewelery")}>Jewelery</button>
      <button onClick={()=> handleClick("men's clothing")}>Men's Clothing</button>
      <button onClick={()=> handleClick("women's clothing")}>Women's Clothing</button>
    </div>
  );
}

export default Category;


