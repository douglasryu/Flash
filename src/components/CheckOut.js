import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../actions/modalActions';


const CheckOut = props => {

    const handleClick = event => {
        event.preventDefault();
        // await checkout / post to transactions
        props.closeModal();
    }

    return (
        <div>
            <div>Total</div>
            <div>Payment Type: Card</div>
            <button onClick={handleClick}>Checkout</button>
        </div>
    )

}




const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    CheckOut
);
