import { baseUrl } from "../config";

export const CREATE_REVIEW = "flash/productData/CREATE_REVIEW";
export const LOAD_REVIEWS = "flash/productData/LOAD_REVIEWS";

const makeReview = () => ({ type: CREATE_REVIEW });
const loadReviews = (list) => ({ type: LOAD_REVIEWS, list });


export const createReview = (userId, firstName, lastName, productId, reviewBody) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/api/reviews/${productId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ userId, firstName, lastName, productId, reviewBody })
  })

  if (res.ok) {
    dispatch(makeReview());
  }
}


export const fetchReviews = (id) => async (dispatch) => {
  const res = await fetch(`${baseUrl}/api/reviews/${id}`);

  if (res.ok) {
    const list = await res.json();
    dispatch(loadReviews(list));
  }
};

