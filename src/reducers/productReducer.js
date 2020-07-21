import { LOAD_PRODUCTS } from "../actions/productActions";

const productReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case LOAD_PRODUCTS:
            let newState = {};
            action.list.products.forEach(product => newState[product.id] = product);
            return Object.assign(nextState, newState);
        default:
            return state;
    }
};

export default productReducer;
