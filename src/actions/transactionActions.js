import { baseUrl } from "../config";

export const CREATE_TRANSACTION = "flash/transaction/CREATE_TRANSACTION";
export const GET_TRANSACTION = "flash/transaction/GET_TRANSACTION";

const makeTransaction = () => ({ type: CREATE_TRANSACTION });
const getTransaction = (transactions) => ({ type: GET_TRANSACTION, transactions });

export const createTransaction = (userId, products, total) => async (dispatch) => {
    const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, products, total })
    };

    const response = await fetch(`${baseUrl}/api/transactions`, options);

    if (response.ok) {
        dispatch(makeTransaction());
    }
}

export const fetchTransaction = (userId) => async (dispatch) => {
    const response = await fetch(`${baseUrl}/api/transactions/${userId}`);

    if (response.ok) {
        const transactions = await response.json();
        dispatch(getTransaction(transactions));
    }
}
