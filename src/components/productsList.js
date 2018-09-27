import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { Image } from 'semantic-ui-react'
import {addToCart, removeFromCart, removeAllFromCart} from '../actions/shoppingCartActions'
import {clearFilter} from "../actions/filterActions";


class ProductsList extends Component {

  render() {
    const {products} = this.props
    return (
      <ul className="products-list">
        {products.map(item => {
          return (
            <li key={item.id}>
              <a href="#" className="product-photo"><img src={item.image.small} height="130" alt={item.name}/></a>
              <h2><a href="#"> {item.name} </a></h2>
              <ul className="product-description">
                <li><span>Manufacturer: </span>{item.specs.manufacturer}</li>
                <li><span>Storage: </span>{item.specs.storage} GB</li>
                <li><span>OS: </span>{item.specs.os}</li>
                <li><span>Camera: </span>{item.specs.camera} Mpx</li>
              </ul>
              <button>Buy Now!</button>
              <p className="product-price">{item.price}$</p>
              <div className="highlight"></div>
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products_stuff.products,
    cart: state.cart_stuff
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({addToCart, removeFromCart, removeAllFromCart}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList)