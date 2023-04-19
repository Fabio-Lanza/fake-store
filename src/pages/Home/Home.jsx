import {useState, useEffect} from 'react'
import './Home.css'
import  axios from 'axios';
import ProductCard from '../../component/ProductCard/ProductCard';

function Home() {
const [products, setProducts] = useState([])

useEffect(()=> {
  axios.get('https://fakestoreapi.com/products')
  .then(res => {
    console.log(products)
    setProducts(res.data)
  })

}, [])


  return (
    <div className='home-container'>
      <div className='category-filter'></div>

      <div className='products-container'>
        {products.map((item)=> <ProductCard key={item.id} product={item}/>)}
      </div>

    </div>
  )
}

export default Home