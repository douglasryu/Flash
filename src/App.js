import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./components/MainPage";
import ProductPage from './components/ProductPage';

const App = props => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={MainPage} />
            <Route path="/products/1" component={ProductPage} />
        </BrowserRouter>
    );

}


export default App;
