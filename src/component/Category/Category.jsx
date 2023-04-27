import React from "react";
import "./Category.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Category({ products, setProducts }) {
  const [categories, setCategories] = useState([]);

   //Calling categories dynamic
   useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/categories`).then((res) => {
      setCategories(res.data);
    });
  }, []);

  
  const handleClick = (categories) => {
    axios
      .get(`https://fakestoreapi.com/products/category/${categories}`)
      .then((res) => {
        setProducts(res.data);
      });
  };

  const handleClickAll = () => {
    axios.get(`https://fakestoreapi.com/products`).then((res) => {
      setProducts(res.data);
    });
  };

 

  return (
    <div className="category-btn">
      <button onClick={handleClickAll}>All</button>

      {categories.map((list, index) => (
        <button key={index} id={list} onClick={() => handleClick(list)}>
          {list}
        </button>
      ))}
    </div>
  );
}

export default Category;
