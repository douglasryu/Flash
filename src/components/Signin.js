import React, { useState } from "react";
import { connect } from "react-redux";
import { login } from "../actions/sessionActions";
import { closeModal } from "../actions/modalActions";

const Signin = props => {
    const [signinemail, setSigninEmail] = useState("");
    const [signinpassword, setSigninPassword] = useState("");

    const updateEmail = (event) => setSigninEmail(event.target.value);
    const updatePassword = (event) => setSigninPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        await props.login(signinemail, signinpassword);
        props.closeModal();
        // window.location.reload();
    };

    const handleDemoUser = async (event) => {
        event.preventDefault();
        await props.login("demouser@demouser.com", "demouser");
        props.closeModal();
        // window.location.reload();
    }

    return (
        <>
            <div className="modal__header">Welcome back!</div>
            <form className="form__container">
                <input type="email" onChange={updateEmail} className="form__input" value={signinemail} placeholder="Email address" />
                <input type="password" onChange={updatePassword} className="form__input" value={signinpassword} placeholder="Password" />
                <button className="form__button" onClick={handleSubmit}>Log In</button>
                <button className="demo__button" onClick={handleDemoUser}>Demo User</button>
            </form>
        </>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        login: (email, password) => dispatch(login(email, password)),
        closeModal: () => dispatch(closeModal())
    }
}

export default connect(
    null,
    mapDispatchToProps
)(
    Signin
);
