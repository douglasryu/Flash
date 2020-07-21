import React, { useState } from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";
import { createTransaction } from "../actions/transactionActions";

const CheckOut = (props) => {
    const userId = props.sessionId;
    const total = props.total;
    const cartItems = props.cartItems;

    // const [cartArray, setCartArray] = useState(cartItems);

    const handleBackgroundClick = event => {
        props.closeModal();
    }

    const handleClick = event => {
        props.createTransaction(userId, cartItems, total);
        window.localStorage.removeItem("flash/cart");
        props.setCartArray("");
        props.history.push('/profile');
        props.closeModal();
    }

    return (
        <div onClick={handleBackgroundClick} className="checkout__bg">
            <div className="checkout__main">
                <div className="checkout__total-container">
                    <div className="checkout__total-name">Total:</div>
                    <div className="checkout__total-num">${(props.total / 100).toFixed(2)}</div>
                </div>
                <div className="checkout__payment">Payment Type: Card</div>
                <button className="checkout__button" onClick={handleClick}>Checkout</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        reviews: state.reviews,
        sessionId: state.session.id,
        firstName: state.session.firstName,
        cartItems: state.cart,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal()),
        createTransaction: (userId, products, total) => dispatch(createTransaction(userId, products, total)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
