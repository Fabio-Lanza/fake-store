import React from "react";
import "./Cart.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import Modal from "react-modal";

function Cart() {
  const { cart, handleRemove } = useContext(ShopContext);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)", 
    },
  };

  Modal.setAppElement(document.getElementById("root"));

  return (
    <div className="cart-container">
      <div className="cart-box">
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Price</th>
              <th>Qnty</th>
              <th>Remove</th>
            </tr>
          </thead>
          {cart?.map((item) => (
            <tbody>
              <tr>
                <td className="item">
                  <img src={item.image} alt="" />
                  {item.title}
                </td>
                <td>$ {item.price}</td>
                <td>1</td>
                <td>
                  <BsTrash onClick={() => handleRemove(item.id)} />
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <p>Total $218</p>
        <button onClick={() => setModalIsOpen(true)}>Checkout</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="modal"
      >
        <div className="modal-box">
            <AiOutlineClose onClick={()=>setModalIsOpen(false)}/>
          <div className="modal-content">
            <p>Your Order was successful!</p>
            <p>
              Check your email for the order confirmation. Thank you for
              shopping with Fake Store!
            </p>
          </div>
          <Link to="/">
            <button>Return to MainPage</button>
          </Link>
        </div>
      </Modal>
    </div>
  );
}

export default Cart;
