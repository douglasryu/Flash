import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";

import { logout } from "../actions/sessionActions";
import { openModal } from "../actions/modalActions";

const Navigation = props => {
    const token = props.token;

    if (!token) {
        return (
            <div className="nav__bar">
                <Link to="/" className="nav__logo">FLASH<img className="logo" src={require("../assets/camera.png")} alt="logo" /></Link>
                <form>
                    <SearchIcon className="nav__search--icon" />
                    <input className="nav__search" type="text" placeholder="Search for an item"></input>
                </form>
                <button className="nav__item nav__account">Account</button>
                <button className="nav__item" onClick={() => props.openModal("signin")}>Sign In</button>
                <button className="nav__item" onClick={() => props.openModal("signup")}>Sign Up</button>
                <Link to='/cart' className="nav__item">View Cart</Link>
            </div>
        );
    } else {
        return (
            <div className="nav__bar">
                <Link to="/" className="nav__logo">FLASH</Link>
                <form>
                    <input className="nav__search" type="text" placeholder="Search for an item" />
                </form>
                <button className="nav__item nav__account">Account</button>
                <button className="nav__item" onClick={() => props.openModal("signin")}>Sign Out</button>
                <Link to='/cart' className="nav__item">View Cart</Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        token: state.session.token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openModal: (modal) => dispatch(openModal(modal)),
        logout: () => dispatch(logout())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(
    Navigation
);
