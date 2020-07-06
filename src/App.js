import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import MainPage from "./components/MainPage";

const App = props => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={MainPage} />
        </BrowserRouter>
    );

}


export default App;
