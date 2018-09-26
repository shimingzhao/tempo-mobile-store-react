import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addToCart, removeFromCart, removeAllFromCart } from '../actions/shoppingCartActions'


class ProductsList extends Component{

  render () {
    return (
      <ul className="products-list">
{/*        <script id="products-template" type="x-handlebars-template">
          {{#each this}}
          <li data-index="{{id}}">
            <a href="#" className="product-photo"><img src="{{image.small}}" height="130" alt="{{name}}"/></a>
            <h2><a href="#"> {{name}} </a></h2>
            <ul className="product-description">
              <li><span>Manufacturer: </span>{{specs.manufacturer}}</li>
              <li><span>Storage: </span>{{specs.storage}} GB</li>
              <li><span>OS: </span>{{specs.os}}</li>
              <li><span>Camera: </span>{{specs.camera}} Mpx</li>
            </ul>
            <button>Buy Now!</button>
            <p className="product-price">{{price}}$</p>
            <div className="highlight"></div>
          </li>
          {{/each}}
            </script>*/}
      </ul>
    )
  }
}
export default ProductsList