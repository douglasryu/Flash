import React from "react";
import { Link } from "react-router-dom";
import '../stylesheets/categorybar.css'


const CategoryBar = () => {

    return (
        <>
            <div className="category__bar">
                <div className="nav_dropdown">Cameras
                    <div className="dropdown_menu">
                        <Link to='/category/1'>DSLR and SLR Cameras</Link>
                        <Link to='/category/2'>Mirrorless Cameras</Link>
                        <Link to='/category/3'>Range Finder Cameras</Link>
                    </div>
                </div>
                <div className="nav_dropdown">Lens
                    <div className="dropdown_menu">
                        <Link to='/category/4'>DSLR Lens</Link>
                        <Link to='/category/5'>Mirrorless Lens</Link>
                        <Link to='/category/6'>Range Finder Lens</Link>
                    </div>
                </div>
                <div className="nav_dropdown">Lighting & Studio
                    <div className="dropdown_menu">
                        <Link to='/category/7'>Flashes & On-Camera Lighting</Link>
                        <Link to='/category/8'>Studio Lighting</Link>
                    </div>
                </div>
                <div className="nav_dropdown">Bags & Cases
                    <div className="dropdown_menu">
                        <Link to='/category/9'>Bags</Link>
                        <Link to='/category/10'>Cases</Link>
                    </div>
                </div>
                <div className="nav_dropdown">Camera Accessories
                    <div className="dropdown_menu">
                        <Link to='/category/11'>Camera Batteries</Link>
                        <Link to='/category/12'>Tripods</Link>
                        <Link to='/category/13'>Misc</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CategoryBar;
