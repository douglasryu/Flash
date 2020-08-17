import React, { useState } from "react";
import { connect } from "react-redux";

import { closeModal } from "../actions/modalActions";
import { createTransaction } from "../actions/transactionActions";

const CheckOut = (props) => {
    const userId = props.sessionId;
    const total = props.total;
    const cartItems = props.cartItems;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [tel, setTel] = useState("");
    const [address, setAddress] = useState("");
    const [zip, setZip] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [number, setNumber] = useState("");
    const [month, setMonth] = useState("");
    const [year, setYear] = useState("");
    const [cvv, setCvv] = useState("");
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const handleChange = event => {
        if (event.target.name === "name") {
            setName(event.target.value);
        } else if (event.target.name === "email") {
            setEmail(event.target.value);
        } else if (event.target.name === "tel") {
            setTel(event.target.value);
        } else if (event.target.name === "address") {
            setAddress(event.target.value);
        } else if (event.target.name === "zip") {
            setZip(event.target.value);
        } else if (event.target.name === "city") {
            setCity(event.target.value);
        } else if (event.target.name === "state") {
            setState(event.target.value);
        } else if (event.target.name === "number") {
            setNumber(event.target.value);
        } else if (event.target.name === "month") {
            setMonth(event.target.value);
        } else if (event.target.name === "year") {
            setYear(event.target.value);
        } else if (event.target.name === "cvv") {
            setCvv(event.target.value);
        }
    }

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

    const handleChildClick = event => {
        event.stopPropagation();
    }


    return (
        <>
            <div onClick={handleBackgroundClick} className="checkout__bg">
                <div onClick={handleChildClick} className="checkout__main">
                    <form className="checkout__billing-container">
                        <input onChange={handleChange} type="text" name="name" value={name} className="checkout__form checkout__form-name" placeholder="Demo User" required />
                        <input onChange={handleChange} name="email" type="email" value={email} className="checkout__form checkout__form-email" placeholder="demouser@demouser.com" />
                        <input onChange={handleChange} name="tel" value={tel} type="tel" className="checkout__form checkout__form-tel" placeholder="(555) 555-5555" />
                        <input onChange={handleChange} name="address" value={address} type="address" className="checkout__form checkout__form-address" placeholder="123 Demo St." />
                        <div className="checkout__inner">
                            <input onChange={handleChange} name="zip" value={zip} type="zip" className="checkout__form checkout__form-zip" placeholder="12345" />
                            <input onChange={handleChange} name="city" value={city} type="city" className="checkout__form checkout__form-city" placeholder="Demo City" />
                        </div>
                        <input onChange={handleChange} name="state" value={state} type="state" className="checkout__form checkout__form-state" placeholder="Demo State" />
                    </form>
                    <form className="checkout__card-container">
                        <input onChange={handleChange} name="number" value={number} type="text" className="checkout__card checkout__card-number" placeholder="1234 5555 0000 7895" />
                        <div className="card__info">
                            <input onChange={handleChange} name="month" value={month} type="text" className="checkout__card-back checkout__card-date" placeholder="12" />
                            <input onChange={handleChange} name="year" value={year} type="text" className="checkout__card-back checkout__card-date" placeholder="2020" />
                            <input onChange={handleChange} name="cvv" value={cvv} type="text" className="checkout__card-back checkout__card-cvv" placeholder="123" />
                            {/* <FaCreditCard className="fa_card" /> */}
                        </div>
                        <div className="subtotal__container">
                            <div className="checkout__total-name">Total:</div>
                            <div className="checkout__total checkout__total-cart">${(props.total / 100).toFixed(2)}</div>
                            <div className="checkout__payment">Payment Type: Card</div>
                            <button className="checkout__button" onClick={handleClick}>Checkout</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
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
