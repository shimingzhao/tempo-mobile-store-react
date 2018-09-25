import * as types from '../constants/actionTypes'

const initialState = {
  cart: [],
}

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

const shoppingCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      const cartItem = itemInCart(state.cart, action.payload)
      return {
        ...state,
        cart: cartItem === undefined
          ? [...cartWithoutItem(state.cart, action.payload), {...action.payload, quantity: 1}]
          : [...cartWithoutItem(state.cart, action.payload), {...cartItem, quantity: cartItem.quantity + 1}]
      }

    case types.REMOVE_FROM_CART:
      return {
        ...state,
        cart: action.payload.quantity === 1
          ? [...cartWithoutItem(state.cart, action.payload)]
          : [...cartWithoutItem(state.cart, action.payload), {
            ...action.payload,
            quantity: action.payload.quantity - 1
          }]
      }

    case types.REMOVE_ALL_FROM_CART:
      return {
        cart: [...cartWithoutItem(state.cart, action.payload)]
      }

    default:
      return state
  }
}

export default shoppingCartReducer