import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ManufacturerFilter, ScreenSizeFilter, osFilter, cameraFilter } from '../actions/filterActions'

class Checkbox extends Component {
  state = {
    isChecked: false,
  }

  toggleCheckboxChange = () => {
    const {ManufacturerFilter, ScreenSizeFilter, osFilter, cameraFilter, label, flag} = this.props
    this.setState({isChecked: !this.state.isChecked})
    // switch (flag) {
    //   case 'manufacturer':
    //     return ManufacturerFilter(label)
    //     break
    //   case 'storage':
    //     return ScreenSizeFilter(label)
    //     break
    //   case 'os':
    //     return osFilter(label)
    //     break
    //   case 'camera':
    //     return cameraFilter(label)
    //     break
    // }
  }


  render () {
    const {label} = this.props
    const { isChecked } = this.state;
    return (
      <label>
        <input
          name={label}
          type="checkbox"
          value={label}
          checked={isChecked}
          onChange={this.toggleCheckboxChange}
        />
        {label}
      </label>
    )
  }
}

const mapStateToProps = state => {
  return {
    manufacturer: state.products_stuff.manufacturer,
    storage: state.products_stuff.storage,
    os: state.products_stuff.os,
    camera: state.products_stuff.camera,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ManufacturerFilter, ScreenSizeFilter, osFilter, cameraFilter}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)