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
    case types.MANUFACTURER_FILTER_ADD:
      console.log(typeof (state.manufacturer))
      return {
        ...state,
        manufacturer: state.manufacturer.add(action.payload),
      }

    case types.MANUFACTURER_FILTER_REMOVE:
      return {
        ...state,
        manufacturer: state.manufacturer.filter(existItem => existItem !== action.payload),
      }

    case types.SCREENSIZE_FILTER_ADD:
      return {
        ...state,
        storage: state.storage.add(action.payload),
      }

    case types.SCREENSIZE_FILTER_REMOVE:
      return {
        ...state,
        storage: state.storage.filter(existItem => existItem !== action.payload),
      }

    case types.OS_FILTER_ADD:
      return {
        ...state,
        os: state.os.push(action.payload),
      }

    case types.OS_FILTER_REMOVE:
      return {
        ...state,
        os: state.os.filter(existItem => existItem !== action.payload),
      }

    case types.CAMERA_FILTER_ADD:
      return {
        ...state,
        camera: state.camera.push(action.payload),
      }

    case types.CAMERA_FILTER_REMOVE:
      return {
        ...state,
        camera: state.camera.filter(existItem => existItem !== action.payload),
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