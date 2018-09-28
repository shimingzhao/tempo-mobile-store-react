import * as types from '../constants/actionTypes'

const initialState = {
  manufacturer: [],
  storage: [],
  os: [],
  camera: [],
}

const arrayWithoutItem = (array, item) => array.filter(arrayItem => arrayItem !== item)

export default function filterReducer (state = initialState, action) {
  switch (action.type) {
    case types.MANUFACTURER_FILTER_ADD:
      return {
        ...state,
        manufacturer: [...state.manufacturer, action.payload]
      }

    case types.MANUFACTURER_FILTER_REMOVE:
      return {
        ...state,
        manufacturer: [...arrayWithoutItem(state.manufacturer, action.payload)]
      }

    case types.SCREENSIZE_FILTER_ADD:
      return {
        ...state,
        storage: [...state.storage, action.payload]
      }

    case types.SCREENSIZE_FILTER_REMOVE:
      return {
        ...state,
        storage: [...arrayWithoutItem(state.storage, action.payload)]
      }

    case types.OS_FILTER_ADD:
      return {
        ...state,
        os: [...state.os, action.payload]
      }

    case types.OS_FILTER_REMOVE:
      return {
        ...state,
        os: [...arrayWithoutItem(state.os, action.payload)]
      }

    case types.CAMERA_FILTER_ADD:
      return {
        ...state,
        camera: [...state.camera, action.payload]
      }

    case types.CAMERA_FILTER_REMOVE:
      return {
        ...state,
        camera: [...arrayWithoutItem(state.camera, action.payload)]
      }

    case types.CLEAR_FILTER:
      return {
        manufacturer: [],
        storage: [],
        os: [],
        camera: [],
      }

    default:
      return state
  }
}