import * as types from '../constants/actionTypes'

export const addToCart = (item) => dispatch => {
  dispatch({
    type: types.ADD_TO_CART,
    payload: item
  })
}

export const removeFromCart = (item) => dispatch => {
  dispatch({
    type: types.REMOVE_FROM_CART,
    payload: item
  })
}

export const removeAllFromCart = (item) => dispatch => {
  dispatch({
    type: types.REMOVE_ALL_FROM_CART,
    payload: item
  });
}
