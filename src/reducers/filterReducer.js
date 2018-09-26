import * as types from '../constants/actionTypes'

const initialState = {
  manufacturer: [],
  storage: [],
  os: [],
  camera: []
}

const toggleCheckbox = (filters, label) => {
  if (!filters.includes(label)) {
    filters.push(label)
  } else {
    filters.filter(existLabel => label !== existLabel)
  }
}

export default function filterReducer (state = initialState, action) {
  switch (action.type) {
    case types.MANUFACTURER_FILTER:
      return {
        ...state,
        manufacturer: [...toggleCheckbox(state.manufacturer, action.payload)],
      }

    case types.SCREENSIZE_FILTER:
      return {
        ...state,
        storage: [...toggleCheckbox(state.storage, action.payload)],
      }

    case types.OS_FILTER:
      return {
        ...state,
        os: [...toggleCheckbox(state.os, action.payload)],
      }

    case types.CAMERA_FILTER:
      return {
        ...state,
        camera: [...toggleCheckbox(state.camera, action.payload)],
      }

    case types.CLEAR_FILTER:
      return {
        manufacturer: [],
        storage: [],
        os: [],
        camera: []
      }

    default:
      return state
  }
}