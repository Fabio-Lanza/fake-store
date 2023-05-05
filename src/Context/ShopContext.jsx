import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const ShopContext = createContext()

export default function ShopContextProvider({ children }){

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([])
 
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);


  const addToCart = (item)=> {
    cart.forEach((product)=> {
      if(item.id === product.id){
        return;
      }
    }) 
      setCart([...cart, item])
    }


  const handleRemove = (item)=> {
    const newCart = cart.filter((product) => product.id !== item)
      setCart(newCart)
    }
  
    const value = {cart, setCart, addToCart, products, setProducts, handleRemove}
    
  
    return(
      <ShopContext.Provider value={value}>
          {children}
      </ShopContext.Provider>
    )
  }