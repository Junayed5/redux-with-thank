import {
  ADD_PRODUCT,
  ADD_TO_CART,
  LOAD_PRODUCTS,
  LOAD_SINGLE_PRODUCTS,
  PRODUCT_LOADED,
  REMOVE_FROM_CART,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actionTypes/actionTypes";

export const loadProducts = (data) => {
  return {
    type: LOAD_PRODUCTS,
    payload: data
  }
}
export const updateProduct = (data) => {
  return {
    type: UPDATE_PRODUCT,
    payload: data
  }
}
export const loadSingleProducts = (data) => {
  return {
    type: LOAD_SINGLE_PRODUCTS,
    payload: data
  }
}
export const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

export const removeProduct = (id) => {
  return {
    type: REMOVE_PRODUCT,
    payload: id,
  };
};

export const addToCart = (product) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const removeFromCart = (product) => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  };
};

export const loaded = (products) => {
  return {
    type: PRODUCT_LOADED,
    payload: products,
  };
};
