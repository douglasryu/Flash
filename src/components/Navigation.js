import React from "react";
import CategoryBar from "./CategoryBar";

const Navigation = () => {
    return (
        <>
            <div className="nav__bar">
                <div className="nav__logo">FLASH</div>
                <form>
                    <input className="nav__search" type="text" placeholder="Search for an item" />
                </form>
                <button className="nav__item">Account</button>
                <button className="nav__item">Sign In</button>
                <button className="nav__item">Sign Up</button>
                <button className="nav__item">View Cart</button>
            </div>
           <CategoryBar/>
        </>
    );
}

export default Navigation;