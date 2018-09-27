import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductModal from './singleProduct'

class ProductsList extends Component {

  render () {
    const {products} = this.props
    return (
      <div className="products-list" >
        {products.map(item => {
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

const mapStateToProps = state => {
  return {
    products: state.products_stuff.products,
    cart: state.cart_stuff
  }
}

export default connect(mapStateToProps)(ProductsList)