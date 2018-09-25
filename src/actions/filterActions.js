import * as types from '../constants/actionTypes'

export const ManufacturerFilter = (item) => dispatch => {
  dispatch({
    type: types.MANUFACTURER_FILTER,
    payload: item
  })
}

export const ScreenSizeFilter = (item) => dispatch => {
  dispatch({
    type: types.SCREENSIZE_FILTER,
    payload: item
  })
}

export const osFilter = (item) => dispatch => {
  dispatch({
    type: types.OS_FILTER,
    payload: item
  })
}

export const cameraFilter = (item) => dispatch => {
  dispatch({
    type: types.CAMERA_FILTER,
    payload: item
  })
}

export const clearFilter = () => dispatch => {
  dispatch({
    type: types.CLEAR_FILTER
  })
}

