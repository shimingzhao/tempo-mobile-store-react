import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions/fetchProductsActions'
import FiltersBlock from './filtersBlock'
import ProductList from './productsList'

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false
  }
  return true
}

class Container extends Component {

  state = {
    _products: this.props.products
  }



  filterProducts = () => {
    const products = this.props.products
    const filters = this.props.filters
    if (!isEmpty(filters.manufacturer)) {
      products.map(item => {
        if (filters.manufacturer.indexOf(item.specs.manufacturer) !== -1) {
          this.setState({_products: products.filter(tempItem => tempItem.specs.manufacturer === item.specs.manufacturer)})
        }
      })
    }
    if (!isEmpty(filters.storage)) {
      products.map(item => {
        if (filters.storage.indexOf(item.specs.storage) !== -1) {
          this.setState({_products: products.filter(tempItem => tempItem.specs.storage === item.specs.storage)})
        }
      })
    }
    if (!isEmpty(filters.os)) {
      products.map(item => {
        if (filters.os.indexOf(item.specs.os) !== -1) {
          this.setState({_products: products.filter(tempItem => tempItem.specs.os === item.specs.os)})
        }
      })
    }
    if (!isEmpty(filters.camera)) {
      products.map(item => {
        if (filters.camera.indexOf(item.specs.camera) !== -1) {
          this.setState({_products: products.filter(tempItem => tempItem.specs.camera === item.specs.camera)})
        }
      })
    }
  }

  render () {
    const {_products} = this.state
    // console.log(_products)
    // console.log(products)
    return (
      <div className="main-content">
        <FiltersBlock/>
        <ProductList products={_products}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products_stuff.products,
    filters: state.filter_stuff
    // order: state.order_stuff.order,
  }
}

export default connect(mapStateToProps)(Container)