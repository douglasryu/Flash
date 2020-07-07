import React from 'react';
import Modal from "./Modal";
import { connect } from 'react-redux';
import { openModal } from '../actions/modalActions';
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";


const Cart = (props) => {

    return (
        <>
            <Modal />
            <Navigation />
            <CategoryBar />
            <main className='cart__main'>
                {/*Will map user's cart from state*/}
                <div className='cart__item'>
                    <div className='cart__item-img'>image</div>
                    <div className='cart__item-name'>Product Name</div>
                    <div className='cart__item-price'>$100.00</div>
                </div>
                <div>
                    <button onClick={() => props.openModal("checkout")}>Checkout</button>
                </div>
            </main>
        </>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    Cart
);
