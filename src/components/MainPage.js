import React from "react";
import Modal from "./Modal";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";


const MainPage = props => {
    return (
        <>
            <Modal />
            <Navigation />
            <CategoryBar />
        </>
    );
}

export default MainPage;