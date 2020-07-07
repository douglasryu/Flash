import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";

const CheckOut = (props) => {
  const handleClick = (event) => {
    event.preventDefault();
    // await checkout / post to transactions
    props.closeModal();
  };

  return (
    <div className="checkout__bg">
      <div className="checkout__main">
        <div className="checkout__total-container">
          <div className="checkout__total-name">Total</div>
          <div className="checkout__total-num">{props.total}</div>
        </div>
        <div className="checkout__payment">Payment Type: Card</div>
        <button className="checkout__button" onClick={handleClick}>
          Checkout
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(null, mapDispatchToProps)(CheckOut);
