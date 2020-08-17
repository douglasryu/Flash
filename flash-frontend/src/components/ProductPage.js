import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import ReviewDiv from "./ReviewDiv";
import Modal from "./Modal";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";
import { fetchReviews } from "../actions/reviewActions";
import { addToCart } from "../actions/cartButtonActions";


const ProductPage = (props) => {
    let id = Number(props.match.params.productId);
    const [quantity, setQuantity] = useState(1);
    const [message, setMessage] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        (async () => {
            await props.fetchReviews(id);
        })();
    }, [id]);

    let product = props.products[id];

    if (!product) return null;

    let { description, imgUrl, name, price } = props.products[id];

    const handleQuantity = event => {
        setQuantity(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        setMessage(`${name} was added to your cart`);
        setOpen(true);
        for (let i = 0; i < quantity; i++) {
            props.addToCart(id);
        }
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const Alert = props => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }

    return (
        <>
            <Modal />
            <Navigation {...props} />
            <CategoryBar />
            <main className="products__main">
                <div className="products__container-main">
                    <div className="products__img">
                        <img src={imgUrl} alt={`${product.name}`} />
                    </div>
                    <div className="products__container-inner">
                        <div className="products__name">{name}</div>
                        <div className="products__price">${(price / 100).toFixed(2)}</div>

                        <form className="products__cart--container" onSubmit={handleSubmit}>
                            <label className="products__label">Quantity: <input className="products__quantity" onChange={handleQuantity} type="number" min="0" placeholder="0" /></label>
                            <button className="products__cart">Add to Cart</button>
                        </form>
                    </div>
                </div>
                <div className='products__details--header'>Details:</div>
                <div className="products__details--body">{description}</div>
                <div className="products__review-header">Reviews:</div>
                <ReviewDiv id={id} />
            </main>
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
                <Alert onClose={handleClose} severity="success">{message}</Alert>
            </Snackbar>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        products: state.products,
        reviews: state.reviews,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: (id) => dispatch(fetchReviews(id)),
        addToCart: (productId) => dispatch(addToCart(productId))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
