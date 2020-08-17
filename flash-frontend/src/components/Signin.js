import React, { useState } from "react";
import { connect } from "react-redux";
import MuiAlert from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import { login } from "../actions/sessionActions";
import { closeModal } from "../actions/modalActions";

const Signin = props => {
    const [signinemail, setSigninEmail] = useState("");
    const [signinpassword, setSigninPassword] = useState("");
    const [error, setError] = useState("");
    const [open, setOpen] = useState(false);

    const updateEmail = (event) => setSigninEmail(event.target.value);
    const updatePassword = (event) => setSigninPassword(event.target.value);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (signinemail && signinpassword) {
            const res = await props.login(signinemail, signinpassword);
            const data = await res.json();
            if (data.error) {
                setError("Please check your email or password!");
                setOpen(true);
            }
        } else {
            setError("Please enter email and password!");
            setOpen(true);
        }
    };

    const handleDemoUser = async (event) => {
        event.preventDefault();
        await props.login("demouser@demouser.com", "demouser");
        props.closeModal();
        window.location.reload(true);
    }

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const Alert = props => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
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
            <Snackbar
                className="snackbar"
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={open}
                autoHideDuration={2000}
                onClose={handleClose}
                action={
                    <React.Fragment>
                        <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                            <CloseIcon fontSize="small" />
                        </IconButton>
                    </React.Fragment>
                }>
                <Alert onClose={handleClose} severity="error">{error}</Alert>
            </Snackbar>
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
