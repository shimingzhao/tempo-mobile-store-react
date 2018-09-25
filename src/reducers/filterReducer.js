import * as types from '../constants/actionTypes'

const initialState = {
  manufacturer: '',
  storage: 0,
  os: '',
  camera: 0
}

export default function filterReducer (state = initialState, action) {
  switch (action.type) {
    case types.MANUFACTURER_FILTER:
      return {
        ...state,
        manufacturer: action.payload,
      }
    case types.SCREENSIZE_FILTER:
      return {
        ...state,
        storage: action.payload,
      }
    case types.OS_FILTER:
      return {
        ...state,
        os: action.payload,
      }
    case types.CAMERA_FILTER:
      return {
        ...state,
        camera: action.payload,
      }

    case types.CLEAR_FILTER:
      return {
        manufacturer: '',
        storage: 0,
        os: '',
        camera: 0
      }

    default:
      return state
  }
}