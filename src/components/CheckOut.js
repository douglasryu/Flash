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
        <div className='checkout__main'>
            <div className='checkout__total'>Total</div>
            <div className='checkout__payment'>Payment Type: Card</div>
            <button className='checkout__button' onClick={handleClick}>Checkout</button>
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
