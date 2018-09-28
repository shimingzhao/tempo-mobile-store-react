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

class MainPage extends Component {

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

  componentDidMount () {
    this.props.actions.fetchProducts()
    // this.filterProducts()
  }

  render () {

    const {error, loading, products} = this.props
    const {_products} = this.state

    if (error) {
      return <div>Error! {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return (
      <div className="main-content">
        <FiltersBlock/>
        <ProductList products={products}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products_stuff.products,
    loading: state.products_stuff.loading,
    error: state.products_stuff.error,
    filters: state.filter_stuff
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchProducts}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

