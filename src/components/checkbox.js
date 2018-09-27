import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ManufacturerFilter, ScreenSizeFilter, osFilter, cameraFilter } from '../actions/filterActions'

class Checkbox extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isChecked: false,
      value: ''
    }
    // this.handleChecked = this.handleChecked.bind(this);
  }

  handleChecked (e) {
    switch (this.props.flag) {
      case 'manufacturerItems':
        this.props.actions.ManufacturerFilter(e.target.value, e.target.checked)
        break
      case 'storageItems':
        this.props.actions.ScreenSizeFilter(e.target.value, e.target.checked)
        break
      case 'osItems':
        this.props.actions.osFilter(e.target.value, e.target.checked)
        break
      case 'cameraItems':
        this.props.actions.cameraFilter(e.target.value, e.target.checked)
        break
    }
  }

  render () {
    const {value} = this.props
    return (
      <label>
        <input
          type="checkbox"
          value={value}
          // checked={this.state.isChecked}
          onChange={e => this.handleChecked(e)}
        />
        {value}
      </label>
    )
  }
}

const mapStateToProps = state => {
  return {
    manufacturer: state.filter_stuff.manufacturer,
    storage: state.filter_stuff.storage,
    os: state.filter_stuff.os,
    camera: state.filter_stuff.camera,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ManufacturerFilter, ScreenSizeFilter, osFilter, cameraFilter}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkbox)