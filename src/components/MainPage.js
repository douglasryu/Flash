import React from "react";
import Modal from "./Modal";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";
import MainCarousel from "./MainCarousel";
import FeaturedItem from "./FeaturedItem";
import BrandLogos from "./BrandLogos";
import Footer from "./Footer";


const MainPage = props => {
    return (
        <>
            <Modal />
            <Navigation />
            <CategoryBar />
            <MainCarousel />
            <FeaturedItem />
            <BrandLogos />
            <Footer />
        </>
    );
}

export default MainPage;