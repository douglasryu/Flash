import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

import { loadToken } from "./actions/sessionActions";
import { loadCart } from "./actions/cartButtonActions";
import { fetchProducts } from "./actions/productActions";
import MainPage from "./components/MainPage";
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import ProductList from './components/ProductList';
import ProfilePage from './components/ProfilePage';


const App = props => {
    useEffect(() => {
        props.loadToken();
    });

    useEffect(() => {
        props.loadCart();
    });

    useEffect(() => {
        (async () => {
            await props.fetchProducts();
        })();
    });

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <BrowserRouter>
            <Route exact path="/" component={MainPage} />
            <Route path="/products/:productId" component={ProductPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/category/:categoryId" component={ProductList} />
            <Route path="/profile" component={ProfilePage} />
        </BrowserRouter>
    );

}

const mapDispatchToProps = dispatch => {
    return {
        loadToken: () => dispatch(loadToken()),
        loadCart: () => dispatch(loadCart()),
        fetchProducts: () => dispatch(fetchProducts())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    App
);
