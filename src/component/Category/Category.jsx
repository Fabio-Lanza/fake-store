import React from "react";
import "./Category.css";
import { useState, useEffect } from "react";
import axios from "axios";



function Category({ products, setProducts }) {
 const [categories, setCategories] = useState([])

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

//   useEffect(()=> {
//     axios.get(`https://fakestoreapi.com/products/categories`)
//     .then((res) => {
//       setCategories(res.data);
//     }); 
//   }, [])

//   const filterMenu = (e) => {
//     const category = e.currentTarget.id;
//     const menuCategory = products.filter((Item) => {
//       if (Item.category == category) {
//         return Item;
//       }
//     });
 


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







//   useEffect(()=> {
//     axios.get(`https://fakestoreapi.com/products/categories`)
//     .then((res) => {
//       setCategories(res.data);
//     }); 
//   }, [])

//   const filterMenu = (e) => {
//     const category = e.currentTarget.id;
//     const menuCategory = products.filter((Item) => {
//       if (Item.category == category) {
//         return Item;
//       }
//     });
 

{/* <div className="category-btn">   
{categories.map((list, index)=> (
<button
 key={index}
 id={list}
 onClick={()=>filterMenu(event)}>{list}</button>))}
</div> */}