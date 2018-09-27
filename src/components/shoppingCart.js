import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import {addToCart, removeFromCart, removeAllFromCart} from '../actions/shoppingCartActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class ProductModal extends Component {
  state = {
    open: false,
  }

  onOpenModal = () => {
    this.setState({open: true})
  }

  onCloseModal = () => {
    this.setState({open: false})
  }

  render () {
    const {cart} = this.props
    const {open} = this.state
    return (
      <div>
        {/*<div className='changeLitoDiv'>*/}
          {/*<div className="product-photo" onClick={this.onOpenModal}>*/}
            {/*<img src={item.image.small} height="130" alt={item.name}/>*/}
          {/*</div>*/}
          {/*<h2> {item.name} </h2>*/}
          {/*<ul className="product-description">*/}
            {/*<li><span>Manufacturer: </span>{item.specs.manufacturer}</li>*/}
            {/*<li><span>Storage: </span>{item.specs.storage} GB</li>*/}
            {/*<li><span>OS: </span>{item.specs.os}</li>*/}
            {/*<li><span>Camera: </span>{item.specs.camera} Mpx</li>*/}
          {/*</ul>*/}
          {/*<button onClick={() => this.props.actions.addToCart(item)}>Buy Now!</button>*/}
          {/*<p className="product-price">{item.price}$</p>*/}
        {/*</div>*/}
        {/*<Modal open={open} onClose={this.onCloseModal} little>*/}
          {/*<h3>{item.name}</h3>*/}
          {/*<img src={item.image.large} className='largeImage' alt={item.name}/>*/}
          {/*<div>{item.description}</div>*/}
        {/*</Modal>*/}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart_stuff
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({addToCart, removeFromCart, removeAllFromCart}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal)