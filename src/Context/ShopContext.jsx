import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShopContext = createContext();

export default function ShopContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  
  useEffect(() => {
    const storedFav = localStorage.getItem("cartItems");
    if (storedFav !== null) {
      setCart(JSON.parse(storedFav));
    }
  }, []);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  const addToCart = (item) => {
    let newCart = [...cart, item];
    setCart(newCart);
    localStorage.setItem("cartItems", JSON.stringify(newCart));
  };

  const handleRemove = (item) => {
    const newCart = cart.filter((product) => product.id !== item);
    setCart(newCart);
  };

  console.log(cart)

  const value = {
    cart,
    setCart,
    addToCart,
    products,
    setProducts,
    handleRemove,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
