import React, { useState } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";
import { removeFromCart } from "../actions/cartButtonActions";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const Cart = (props) => {
    const currentUser = window.localStorage.getItem("flash/authentication/USER_ID");
    const cartItemsArray = props.cartItemsArray;
    const [cartArray, setCartArray] = useState(cartItemsArray);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);
    // const [quantities, setQuantities] = useState("");
    const targetProducts = cartItemsArray.map(item => props.productsObj[item]);
    let total = 0;

    // let originalTotal;
    const handleRemove = event => {
        props.removeFromCart(event.target.id);
    }

    const cartMemo = {};

    const cleanRender = () => {
        let itemNum = 0;
        targetProducts.map((product, i) => {
            total += product.price;

            const cart = JSON.parse(window.localStorage.getItem("flash/cart"));
            itemNum = cart.filter(x => parseInt(x, 10) === product.id).length;
            // let productInfo = {};
            // productInfo[product.id] = itemNum;
            cartMemo[product.id] = itemNum;
        });
    }

    cleanRender();
    let quantity = 0;
    // console.log(targetProducts);
    let checkRender = new Set();

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const Alert = props => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    const handleCheckout = (event) => {
        if (total === 0) {
            setError("Please add at least one item to the cart!");
            setOpen(true);
        } else {
            props.openModal("checkout")
        }
    }

    return (
        <>
            <Navigation />
            <CategoryBar />
            <div className="cart__container">
                <div className="cart__header">My Cart</div>
                {targetProducts.map((product, i) => {
                    if (!checkRender.has(product.id)) {
                        checkRender.add(product.id);
                        return (
                            <div key={i} className="cart__item--container">
                                <div className="cart__item">
                                    <div className="cart__item--img"><img src={product.imgUrl} alt={product.id} /></div>
                                </div>
                                <div className="cart__item--text">
                                    <div className="cart__item--name">{product.name}</div>
                                    <div className="cart__item--quantity"> Quantity: <div className={`quantity quantity${product.id}`}>{cartMemo[product.id]}</div></div>
                                    <div className="cart__item--price">$<div className={`price price${product.id}`}>{(product.price / 100).toFixed(2)}</div></div>
                                    <button onClick={handleRemove} id={product.id} className="cart__item--remove">Remove</button>
                                </div>
                            </div>
                        );
                    }
                })}
                <div className="cart__total">Total: $ <div className="cart__total--price">{(total / 100).toFixed(2)}</div></div>
                {currentUser ? <button className="cart__checkout--button" onClick={handleCheckout}>Checkout</button> : <button onClick={() => props.openModal("signin")} className="cart__checkout--button">Sign In</button>}

            </div>
            <Modal total={total} setCartArray={setCartArray} {...props} />
            <Snackbar
                className="snackbar"
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }>
                <Alert onClose={handleClose} severity="error">{error}</Alert>
            </Snackbar>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        cartItemsArray: state.cart,
        productsObj: state.products,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        removeFromCart: (id) => dispatch(removeFromCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
