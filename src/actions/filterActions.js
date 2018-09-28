import * as types from '../constants/actionTypes'

export const ManufacturerFilter = (item, flag) => dispatch => {
  dispatch({
    type: flag ? types.MANUFACTURER_FILTER_ADD : types.MANUFACTURER_FILTER_REMOVE,
    payload: item
  })
}

export const ScreenSizeFilter = (item, flag) => dispatch => {
  dispatch({
    type: flag ? types.SCREENSIZE_FILTER_ADD : types.SCREENSIZE_FILTER_REMOVE,
    payload: item
  })
}

export const osFilter = (item, flag) => dispatch => {
  dispatch({
    type: flag ? types.OS_FILTER_ADD : types.OS_FILTER_REMOVE,
    payload: item
  })
}

export const cameraFilter = (item, flag) => dispatch => {
  dispatch({
    type: flag ? types.CAMERA_FILTER_ADD : types.CAMERA_FILTER_REMOVE,
    payload: item
  })
}

export const clearFilter = () => dispatch => {
  dispatch({
    type: types.CLEAR_FILTER
  })
}


