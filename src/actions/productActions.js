import { baseUrl } from '../config';

export const LOAD_PRODUCTS = "flash/productData/LOAD_PRODUCTS";

const loadProducts = list => ({ type: LOAD_PRODUCTS, list });

export const fetchProducts = () => async (dispatch) => {

    const response = await fetch(`${baseUrl}/api/products`);

    if (response.ok) {
        const list = await response.json();
        dispatch(loadProducts(list));
    }
}
