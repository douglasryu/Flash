import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

const MainCarousel = props => {
    const items = [
        {
            name: "fujifilm-x100v",
        },
        {
            name: "leica-typeM262",
        },
        {
            name: "nikond4",
        },
        {
            name: "sonya7",
        },
        {
            name: "olympusom-d",
        }
    ]


    return (
        <div className="mainCarousel">
            <Carousel className="mainCarousel__container">
                {
                    items.map(item => <Item key={item.name} item={item} />)
                }
            </Carousel >
        </div>
    );
}

const Item = props => {
    return (
        <>
            <Paper className="mainCarousel__imgContainer">
                <img className="mainCarousel__img" src={require(`../assets/carousel/${props.item.name}.jpg`)} alt="main-img" />
            </Paper>
        </>
    );
}

export default MainCarousel;