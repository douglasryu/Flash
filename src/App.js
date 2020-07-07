import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import ProductPage from './components/ProductPage';
import Cart from './components/Cart';
import ProductList from './components/ProductList';

const App = props => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={MainPage} />
            <Route path="/products/:productId" component={ProductPage} />
            <Route path="/cart" component={Cart} />
            <Route path="/category/:categoryId" component={ProductList} />
        </BrowserRouter>
    );

}


export default App;
