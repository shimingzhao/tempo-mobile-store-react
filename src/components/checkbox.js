import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {ManufacturerFilter, ScreenSizeFilter, osFilter, cameraFilter} from '../actions/filterActions'

class Checkbox extends Component {
  constructor() {
    super();
    this.state = {isChecked: false};
    this.handleChecked = this.handleChecked.bind(this);
  }

    handleChecked = () => {
        this.setState({isChecked: !this.state.isChecked})
      console.log('fire')
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


  render() {
    const {label} = this.props
    if (this.state.isChecked) {
      console.log('checked')
    } else {
      console.log('unchecked')
    }
    return (
      <label>
        <input
          name={label}
          type="checkbox"
          value={label}
          checked={this.state.isChecked}
          onChange={this.handleChecked}
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