import axios from 'axios'
import * as types from '../constants/actionTypes'

const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN
})

const fetchProductsSuccess = products => ({
  type: types.FETCH_PRODUCTS_SUCCESS,
  payload: {products},
})

const fetchProductsFailure = error => ({
  type: types.FETCH_PRODUCTS_FAILURE,
  payload: {error}
})

export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchProductsBegin())
    return axios.get('products.json')
      .then(json => {
        console.log(json.data)
        dispatch(fetchProductsSuccess(json.data))
        return json.data
      })
      .catch(error => dispatch(fetchProductsFailure(error)))
  }
}