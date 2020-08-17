export const ADD_TO_CART = 'flash/cart/ADD_ITEM';
export const REMOVE_FROM_CART = 'flash/cart/REMOVE_ITEM';


const addItem = (product) => ({ type: ADD_TO_CART, product });
const removeItem = (productId) => ({ type: REMOVE_FROM_CART, productId });

export const loadCart = () => dispatch => {
    const cartItems = JSON.parse(window.localStorage.getItem("flash/cart"));
    // if (cartItems) {
    //     cartItems.forEach(item => {
    //         dispatch(addToCart(item));
    //     });
    // }
}

let products = [];
export const addToCart = (productId, quantity) => dispatch => {
    products.push(productId);
    window.localStorage.setItem("flash/cart", JSON.stringify(products))
    dispatch(addItem(productId));
}

export const removeFromCart = (id) => dispatch => {
    // const cartItemsArray = JSON.parse(window.localStorage.getItem("flash/cart"));
    // window.localStorage.removeItem("flash/cart");
    // products.splice(products.indexOf(id), 1);
    // const newArray = cartItemsArray.filter(item => {
    //     return parseInt(item, 10) !== parseInt(id, 10);
    // })
    // cartItemsArray.map(item => {

    // })
    // window.localStorage.setItem("flash/cart", JSON.stringify(newArray));
    dispatch(removeItem(id));
}