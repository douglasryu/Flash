import { LOAD_REVIEWS, CREATE_REVIEW } from "../actions/reviewActions";

const reviewReducer = (state = {}, action) => {
  Object.freeze(state);

  let nextState = Object.assign({}, state);

  switch (action.type) {
    case CREATE_REVIEW:
      return state;
    case LOAD_REVIEWS:
      let newState = {};
      action.list.reviews.forEach((review) => (newState[review.id] = review));
      return newState;
    default:
      return state;
  }
};

export default reviewReducer;
