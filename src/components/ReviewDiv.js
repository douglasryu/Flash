import React from 'react'

class ReviewDiv extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // productID: this.props.productID
        }
    }

   //Todo - get data from backend, set to this.state.reviews

   //todo Post review function

   //Todo, possible Edit/Delete functions

    render(){
        return(
            <div>
                {/* Todo - map this.state.reviews for productID into separate divs */}
                <div className='profile__review-block'>
                    <div className='profile__review-author'>Author</div>
                    <div className='profile__review-content'>Review content</div>
                    <button className='profile__review-button'>Delete/Edit (maybe)</button>
                </div>

                <form className='profile__review-form'>
                    {/* onSubmit = this.postReview function */}
                    <textarea className='profile__review-field' type='text' placeholder='Submit a review'></textarea>
                    <button className='profile__review-submit'>Submit</button>
                </form>
            </div>
        )
    }

}

export default ReviewDiv;