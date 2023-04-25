import React from 'react'
import './Footer.css'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <footer className='footer'>
      <p>Made with <AiFillHeart/> by Fabio Lanza</p>
      <Link to='/contact'>Contact us</Link>
    </footer>
  )
}

export default Footer