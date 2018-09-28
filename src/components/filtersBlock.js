import React, { Component } from 'react'
import Checkbox from './checkbox'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearFilter } from '../actions/filterActions'

const manufacturerItems = ['Apple', 'Samsung', 'HTC', 'Nokia', 'ZTE', 'Sony']
const storageItems = [16, 32]
const osItems = ['Android', 'iOS', 'Windows']
const cameraItems = [5, 8, 12, 15]

let flag = ''

class FiltersBolck extends Component {
  createCheckboxes = (items, flag) => (
    items.map((item) => {
      // console.log(flag)
        return (
          <Checkbox
            value={item}
            key={item}
            flag={flag}
          />)
      }
    )
  )

  render () {
    return (
      <div className='filters'>
        <form>
          <div className='filter-criteria'>
            <span>Manufacturer</span>
            {this.createCheckboxes(manufacturerItems, flag='manufacturerItems')}
          </div>
          <div className='filter-criteria'>
            <span>Screen Size</span>
            {this.createCheckboxes(storageItems, flag='storageItems')}
          </div>
          <div className='filter-criteria'>
            <span>OS</span>
            {this.createCheckboxes(osItems, flag='osItems')}
          </div>
          <div className='filter-criteria'>
            <span>Camera</span>
            {this.createCheckboxes(cameraItems, flag='cameraItems')}
          </div>
          <button onClick={this.props.actions.clearFilter}>Clear filters</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filter_stuff,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({clearFilter}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(FiltersBolck)

// const FiltersBlock = () => {
//   return (
//     <div className="filters">
//       <form>
//         <div className="filter-criteria">
//           <span>Manufacturer</span>
//           <label><input type="checkbox" name="manufacturer" value="apple" content="Apple"/></label>
//           <label><input type="checkbox" name="manufacturer" value="samsung" content="Samsung"/></label>
//           <label><input type="checkbox" name="manufacturer" value="htc" content="HTC"/></label>
//           <label><input type="checkbox" name="manufacturer" value="nokia" content="Nokia"/></label>
//           <label><input type="checkbox" name="manufacturer" value="zte" content="ZTE"/></label>
//           <label><input type="checkbox" name="manufacturer" value="sony" content="Sony"/></label>
//         </div>
//
//         <div className="filter-criteria">
//           <span>Screen Size</span>
//           <label><input type="checkbox" value="16" name="storage" content="16 GB"/></label>
//           <label><input type="checkbox" value="32" name="storage" content="32 GB"/></label>
//         </div>
//
//         <div className="filter-criteria">
//           <span>OS</span>
//           <label><input type="checkbox" value="android" name="os" content="Android"/></label>
//           <label><input type="checkbox" value="ios" name="os" content="iOS"/></label>
//           <label><input type="checkbox" value="windows" name="os" content="Windows"/></label>
//         </div>
//
//         <div className="filter-criteria">
//           <span>Camera</span>
//           <label><input type="checkbox" value="5" name="camera" content="5 Mpx"/></label>
//           <label><input type="checkbox" value="8" name="camera" content="8 Mpx"/></label>
//           <label><input type="checkbox" value="12" name="camera" content="12 Mpx"/></label>
//           <label><input type="checkbox" value="15" name="camera" content="15 Mpx"/></label>
//         </div>
//         <button>Clear filters</button>
//       </form>
//     </div>
//   )
// }
//
// export default FiltersBlock

