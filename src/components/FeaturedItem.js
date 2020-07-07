import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const FeaturedItem = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 5
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 5
        }
    };



    return (
        <Carousel className="featured__carousel" responsive={responsive} infinite >
            <div className="featured__item"><img className="featured__item--img" src={require("../assets/carousel/fujifilm-x100v.jpg")} /></div>
            <div className="featured__item">Item 2</div>
            <div className="featured__item">Item 3</div>
            <div className="featured__item">Item 4</div>
            <div className="featured__item">Item 5</div>
            <div className="featured__item">Item 6</div>
            <div className="featured__item">Item 7</div>
            <div className="featured__item">Item 8</div>
        </Carousel >
    );
}




// const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3 // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1 // optional, default to 1.
//     }
//   };
//   <Carousel
//     swipeable={false}
//     draggable={false}
//     showDots={true}
//     responsive={responsive}
//     ssr={true} // means to render carousel on server-side.
//     infinite={true}
//     autoPlay={this.props.deviceType !== "mobile" ? true : false}
//     autoPlaySpeed={1000}
//     keyBoardControl={true}
//     customTransition="all .5"
//     transitionDuration={500}
//     containerClass="carousel-container"
//     removeArrowOnDeviceType={["tablet", "mobile"]}
//     deviceType={this.props.deviceType}
//     dotListClass="custom-dot-list-style"
//     itemClass="carousel-item-padding-40-px"
//   >
//     <div>Item 1</div>
//     <div>Item 2</div>
//     <div>Item 3</div>
//     <div>Item 4</div>
//   </Carousel>;

export default FeaturedItem;