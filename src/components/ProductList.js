import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";
import Modal from "./Modal";

const ProductList = (props) => {
    if (props.products.length === 0) return null;

    let products = props.products
    let category = (props.match.params.categoryId);

    if (typeof (category) === "string" && category.length > 2) {
        const matchedProducts = products.filter(product => {
            return product.brand === (category.slice(0, 1).toUpperCase() + category.slice(1));
        })

        return (
            <>
                <Modal />
                <Navigation />
                <CategoryBar />
                <div className="category__list">
                    <div className="category__title-container">
                        <div className='category__title'>{(category.slice(0, 1).toUpperCase() + category.slice(1))}</div>
                    </div>
                    <div className='category__map-container'>
                        {matchedProducts.map((product, i) => {
                            return (
                                <div className="category__list-product" key={i}>
                                    <div className="category__list-nameprice-container">
                                        <Link className="category__list-product-name" to={`/products/${product.id}`}>{product.name}</Link>
                                        <div className="category__list-product-price">${(product.price / 100.00).toFixed(2)}</div>
                                        <Link className="category__list-product-img" to={`/products/${product.id}`}><img className="product__item--img" src={product.imgUrl} alt="product-img" /></Link>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }

    const productsArray = ["DSLR and SLR Cameras", "Mirrorless Cameras", "Range Finder Cameras", "DSLR Lens", "Mirrorless Lens", "Range Finder Lens", "Flashes & On-Camera Lighting", "Studio Lighting", "Bags", "Cases", "Camera Batteries", "Tripods", "Misc"];
    if (typeof (parseInt(category, 10)) === "number") {
        const matchedProducts = products.filter(product => {
            return product.category === (parseInt(category, 10));
        })

        return (
            <>
                <Modal />
                <Navigation />
                <CategoryBar />
                <div className="category__list">
                    <div className='category__title-container'>
                        <div className='category__title'>{productsArray[parseInt(category, 10) - 1]}</div>
                        <br></br>
                    </div>
                    <div className='category__map-container'>
                        {matchedProducts.map((product, i) => {
                            return (
                                <div className="category__list-product" key={i}>
                                    <div className="category__list-nameprice-container">
                                        <Link className="category__list-product-name" to={`/products/${product.id}`}>{product.name}</Link>
                                        <div className="category__list-product-price">${(product.price / 100.00).toFixed(2)}</div>
                                    </div>
                                    <Link className="category__list-product-img" to={`/products/${product.id}`}><img className="product__item--img" src={product.imgUrl} alt="product-img" /></Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        products: Object.values(state.products),
    };
};


export default connect(
    mapStateToProps
)(
    ProductList
);