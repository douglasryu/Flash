import React from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";

const Cart = (props) => {
  let cart = [
    { name: "camera", price: 100 },
    { name: "bag", price: 50 },
  ];

  return (
    <>
      <Modal />
      <Navigation />
      <CategoryBar />
      <main className="cart__main">
        {cart.map((product, i) => {
          return (
            <div className="cart__item">
              <div className="cart__item-img">image</div>
              <div className="cart__item-nameprice-container">
                <div className="cart__item-name">{product.name}</div>
                <div className="cart__item-price">${product.price}</div>
              </div>
            </div>
          );
        })}

        <div className="cart__checkout">
          <button onClick={() => props.openModal("checkout")}>Checkout</button>
        </div>
      </main>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
  };
};

export default connect(null, mapDispatchToProps)(Cart);
