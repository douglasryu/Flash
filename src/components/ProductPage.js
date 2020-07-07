import React from "react";
import ReviewDiv from "./ReviewDiv";
import Modal from "./Modal";
import Navigation from "./Navigation";
import CategoryBar from "./CategoryBar";

const ProductPage = (props) => {
  return (
    <>
      <Modal />
      <Navigation />
      <CategoryBar />
      <main className="products__main">
        <div className="products__container-main">
          <div className="products__img">Image</div>
          <div className="products__container-inner">
            <div className="products__name">Name</div>
            <div className="products__price">Price</div>
          </div>
        </div>

        <div className="products__desc">description</div>

        <div className="products__review-header">Reviews</div>

        <ReviewDiv productID={1} />
      </main>
    </>
  );
};

export default ProductPage;
