import React, { useState } from "react";
import { connect } from "react-redux";
import { openModal } from "../actions/modalActions";
import { fetchReviews, createReview } from "../actions/reviewActions";

const ReviewDiv = (props) => {
    let reviews = {};
    let newReviews = [];
    let [userRev, createRev] = useState('');

    if (props.reviews !== undefined) {
        reviews = props.reviews;

        Object.values(reviews).forEach((item) => {
            newReviews.push(item)
        });
    }

    const handleReview = (e) => {
        createRev(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        let userId = props.sessionId
        let firstName = props.firstName
        let lastName = props.lastName
        let productId = props.id
        let reviewBody = userRev

        await props.createReview(userId, firstName, lastName, productId, reviewBody);

        await props.fetchReviews(props.id);
        createRev('');
    }


    if (newReviews.length === 0 && !props.firstName) return (
        <>
            <div className="products__review--signin">To leave a review, Sign In</div>
            <button className="products__review--button" onClick={() => props.openModal("signin")}>Sign In</button>
        </>
    );

    if (newReviews.length === 0) return (
        <div className="products__review-container">
            <form className="products__review-form">
                <textarea
                    onChange={handleReview}
                    className="products__review-field"
                    type="text"
                    placeholder="Submit a review"
                    value={userRev}
                ></textarea>
                <button onClick={handleSubmit} className="products__review-submit">Submit</button>
            </form>
        </div>
    )

    if (!props.firstName && newReviews.length > 0) return (
        <div className="products__review-container">
            {newReviews.map((review, i) => {
                return (
                    <>
                        <div key={i} className="products__review-block">
                            <div className="products__review-author">{`${review.firstName} ${review.lastName}`}</div>
                            <div className="products__review-content">{review.reviewBody}</div>
                        </div>
                        <div className="products__review--signin2">To leave a review, Sign In</div>
                        <button className="products__review--button2" onClick={() => props.openModal("signin")}>Sign In</button>
                    </>
                );
            })}
        </div>
    )


    return (
        <div className="products__review-container">
            {newReviews.map((review, i) => {
                return (
                    <div key={i} className="products__review-block">
                        <div className="products__review-author">{`${review.firstName} ${review.lastName}`}:</div>
                        <div className="products__review-content">{review.reviewBody}</div>
                    </div>
                );
            })}

            <form className="products__review-form">
                <textarea
                    onChange={handleReview}
                    className="products__review-field"
                    type="text"
                    placeholder="Submit a review"
                    value={userRev}
                ></textarea>
                <button onClick={handleSubmit} className="products__review-submit">Submit</button>
            </form>
        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        reviews: state.reviews,
        sessionId: state.session.id,
        firstName: state.session.firstName,
        lastName: state.session.lastName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchReviews: (id) => dispatch(fetchReviews(id)),
        openModal: (modal) => dispatch(openModal(modal)),
        createReview: (userId, firstName, lastName, productId, reviewBody) => dispatch(createReview(userId, firstName, lastName, productId, reviewBody)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDiv);
