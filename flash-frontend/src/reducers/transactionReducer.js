import { CREATE_TRANSACTION, GET_TRANSACTION } from "../actions/transactionActions";

const transactionReducer = (state = {}, action) => {
    Object.freeze(state);

    let nextState = Object.assign({}, state);

    switch (action.type) {
        case CREATE_TRANSACTION:
            return state;
        case GET_TRANSACTION:
            let newState = {};
            action.transactions.transactions.forEach(transaction => newState[transaction.id] = transaction);
            return Object.assign(nextState, newState);
        default:
            return state;
    }
};

export default transactionReducer;
