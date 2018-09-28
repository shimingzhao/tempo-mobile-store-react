import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductModal from './singleProduct'

export default class ProductsList extends Component {
  render () {
    return (
      <div className="products-list">
        {this.props.products.map(item => {
          return (
            <div key={item.id}>
              <ProductModal item={item}/>
            </div>
          )
        })}
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     // products: state.products_stuff.products,
//     filters: state.filter_stuff
//   }
// }
//
// export default connect(mapStateToProps)(ProductsList)