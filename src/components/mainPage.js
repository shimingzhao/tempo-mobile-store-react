import React, { Component } from 'react'
import ProductListing from './productsList'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions/fetchProductsActions'
// import { addToCart, removeFromCart, removeAllFromCart } from '../actions/shoppingCartActions'
import Cart from './shoppingCart'
import FiltersBlock from './filtersBlock'
import ProductList from './productsList'

// import { Grid, Segment } from 'semantic-ui-react'

class MainPage extends Component {

  componentDidMount () {
    // this.props.dispatch.loadAllProduces
    this.props.actions.fetchProducts()
    // this.props.fetchProducts
  }

  render () {

    const {error, loading, products} = this.props

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
        {/*<Order order={order} actions={this.props.actions} clicker={clicker} />*/}
        {/*{products.map(res => {*/}
            {/*return (*/}
              {/*<Segment basic key={res.id}>*/}
                {/*<h3>{res.id}: {res.name}</h3>*/}
                {/*<ProductListing items={res.menu} store_name={res.name} clicker={clicker}/>*/}
              {/*</Segment>)*/}
          {/*}*/}
        {/*)}*/}
        {/*<Order order={order} actions={this.props.actions} clicker={clicker}/>*/}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products_stuff.products,
    loading: state.products_stuff.loading,
    error: state.products_stuff.error,
    // order: state.order_stuff.order,
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({fetchProducts}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(MainPage)

