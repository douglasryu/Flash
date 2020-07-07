import { baseUrl } from '../config';

export const TOKEN_KEY = "flash/authentication/token";
export const SET_TOKEN = "flash/authentication/SET_TOKEN";
export const REMOVE_TOKEN = "flash/authentication/REMOVE_TOKEN";

const removeToken = () => ({ type: REMOVE_TOKEN });
const setToken = (payload) => {
    return ({ type: SET_TOKEN, payload });
}

export const loadToken = () => dispatch => {
    const token = window.localStorage.getItem(TOKEN_KEY);
    const user = window.localStorage.getItem("flash/authentication/USER_ID");
    const firstName = window.localStorage.getItem("flash/authentication/firstName");
    const lastName = window.localStorage.getItem("flash/authentication/lastName");
    if (token) {
        dispatch(setToken({ token, user, firstName, lastName }));
    }
};

export const createUser = (firstName, lastName, email, password) => async dispatch => {
    const response = await fetch(`${baseUrl}/users/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password }),
    });

    if (response.ok) {
        const payload = await response.json();
        window.localStorage.setItem(TOKEN_KEY, payload.token);
        window.localStorage.setItem("flash/authentication/USER_ID", payload.user);
        window.localStorage.setItem("flash/authentication/firstName", payload.firstName);
        window.localStorage.setItem("flash/authentication/lastName", payload.lastName);
        dispatch(setToken(payload));
    }
}

export const login = (email, password) => async dispatch => {
    const response = await fetch(`${baseUrl}/users/session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        const payload = await response.json();
        window.localStorage.setItem(TOKEN_KEY, payload.token);
        window.localStorage.setItem("flash/authentication/USER_ID", payload.user);
        window.localStorage.setItem("flash/authentication/firstName", payload.firstName);
        window.localStorage.setItem("flash/authentication/lastName", payload.lastName);
        dispatch(setToken(payload));
    }
};

export const logout = () => (dispatch) => {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.removeItem("flash/authentication/USER_ID");
    window.localStorage.removeItem("flash/authentication/firstName");
    window.localStorage.removeItem("flash/authentication/lastName");
    dispatch(removeToken());
    window.location.href = "/";
};
