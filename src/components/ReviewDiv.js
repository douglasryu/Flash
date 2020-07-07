import React from 'react'

const ReviewDiv = (props) => {
    return (
        <div className='products__review-container'>
            {/* Todo - map this.state.reviews for productID into separate divs */}
            <div className='products__review-block'>
                <div className='products__review-author'>Author</div>
                <div className='products__review-content'>Review content</div>
                <button className='products__review-button'>Delete/Edit (maybe)</button>
            </div>

            <form className='products__review-form'>
                {/* onSubmit = this.postReview function */}
                <textarea className='products__review-field' type='text' placeholder='Submit a review'></textarea>
                <button className='products__review-submit'>Submit</button>
            </form>
        </div>
    )
}



//Todo - get data from backend, set to this.state.reviews

//todo Post review function

//Todo, possible Edit/Delete functions

export default ReviewDiv;
