import React from "react";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";
import { Modal } from "@material-ui/core";

const ProductList = (props) => {
  //This is going to pull an array of product objects
  //where Brand or Category = X
  let list = [
    { name: "camera", price: 100 },
    { name: "bag", price: 50 },
  ];
  //List will have an if switch to work off of props.category or props.brand?

  return (
    <>
      <Modal />
      <Navigation />
      <CategoryBar />
      <div className="category__list">
        {list.map((product, i) => {
          let id = i;
          return (
            <div key={id} className="category__list-product" key={i}>
              <div className="category__list-product-img">Image</div>
              <div className="category__list-nameprice-container">
                <div className="category__list-product-name">
                  {product.name}
                </div>
                <div className="category__list-product-price">
                  ${product.price}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductList;
