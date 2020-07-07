import React from "react";
import '../stylesheets/categorybar.css'


const CategoryBar = () => {

    return (
        <>
            <div className="category__bar">
                <div className="nav_dropdown">Cameras
                <ul className="dropdown_menu">
                    <li>Mirrorless Cameras</li>
                    <li>DSLR and SLR Cameras</li>
                    <li>Digital Point and Shoot Cameras</li>
                    <li>Instant Cameras</li>
                    <li>Specialty Cameras</li>
                </ul>
                </div>
                <div className="nav_dropdown">Lens
                <ul className="dropdown_menu">
                    <li>Mirrorless Lens</li>
                    <li>SLR Lens</li>
                    <li>Medium Format Lens</li>
                    <li>Range Finder Lens</li>
                    <li>Specialty Lens</li>
                </ul>
                </div>
                <div className="nav_dropdown">Tripods & Supports
                <ul className="dropdown_menu">
                    <li>Tripods</li>
                    <li>Tripod Heads</li>
                    <li>Monopods</li>
                    <li>Quick Release</li>
                    <li>Mounts & Supports</li>
                </ul>
                </div>
                <div className="nav_dropdown">Lighting & Studio
                <ul className="dropdown_menu">
                    <li>Flashes &  On-Camera Lighteing</li>
                    <li>Continuous Lighting</li>
                    <li>Monolights & Strobes</li>
                    <li>Light Modifiers</li>
                    <li>Light Stands</li>
                </ul>
                </div>
                <div className="nav_dropdown">Bags & Cases
                <ul className="dropdown_menu">
                    <li>Canan</li>
                    <li>Nikon</li>
                    <li>Sony</li>
                    <li>Fujifilm</li>
                    <li>Panasonic</li>
                </ul>
                </div>
                <div className="nav_dropdown">Camera Accessories
                <ul className="dropdown_menu">
                    <li>Camera Batteries</li>
                    <li>Battery Grips</li>
                    <li>Camera Battery Chargers</li>
                    <li>Remote Controls</li>
                    <li>Camera Grips</li>
                </ul>
                </div>
            </div>
        </>
    );
}

export default CategoryBar;
