import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import sessionReducer from "./sessionReducer";
import productReducer from "./productReducer";
import reviewReducer from "./reviewReducer";
import transactionReducer from "./transactionReducer";
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
    modal: modalReducer,
    session: sessionReducer,
    products: productReducer,
    transactions: transactionReducer,
    reviews: reviewReducer,
    cart: cartReducer,
});

export default rootReducer;
