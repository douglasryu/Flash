import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import MainSearch from "./Mainsearch";
import { logout } from "../actions/sessionActions";
import { openModal } from "../actions/modalActions";

const Navigation = (props) => {
    const token = props.token;

    if (!token) {
        return (
            <div className="nav__bar">
                <Link to="/" className="nav__logo">FLASH<img className="logo" src={require("../assets/camera.png")} alt="logo" /></Link>
                <MainSearch {...props} />
                <button className="nav__item nav__signin" onClick={() => props.openModal("signin")}>Sign In</button>
                <button className="nav__item" onClick={() => props.openModal("signup")}>Sign Up</button>
                <Link to="/cart" className="nav__item">View Cart</Link>
            </div>
        );
    } else {
        return (
            <div className="nav__bar">
                <Link to="/" className="nav__logo">FLASH<img className="logo" src={require("../assets/camera.png")} alt="logo" /></Link>
                <MainSearch {...props} />
                <Link to="/profile" className="nav__item nav__account">Account</Link>
                <button className="nav__item" onClick={() => props.logout()}>Sign Out</button>
                <Link to="/cart" className="nav__item">View Cart</Link>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        token: state.session.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
