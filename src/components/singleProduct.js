import React, { Component } from 'react'
import Modal from 'react-responsive-modal'
import { addToCart, removeFromCart, removeAllFromCart } from '../actions/shoppingCartActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false
  }
  return true
}

class ProductModal extends Component {
  state = {
    open: false,
    cartItemNum: ''
  }

  onOpenModal = () => {
    this.setState({open: true})
  }

  onCloseModal = () => {
    this.setState({open: false})
  }

  render () {
    const {item, filters} = this.props
    const {open} = this.state

    return (
      <div
        style={{
          display: isEmpty(filters.manufacturer) && isEmpty(filters.storage) && isEmpty(filters.os) && isEmpty(filters.camera) ? '' :
            !isEmpty(filters.manufacturer) && filters.manufacturer.indexOf(item.specs.manufacturer) === -1 ? 'none' :
              !isEmpty(filters.storage) && filters.storage.indexOf(item.specs.storage.toString()) === -1 ? 'none' :
                !isEmpty(filters.os) && filters.os.indexOf(item.specs.os) === -1 ? 'none' :
                  !isEmpty(filters.camera) && filters.camera.indexOf(item.specs.camera.toString()) === -1 ? 'none' : ''
        }}>
        <div className='changeLitoDiv'>
          <div className="product-photo" onClick={this.onOpenModal}>
            <img src={item.image.small} height="130" alt={item.name}/>
          </div>
          <h2> {item.name} </h2>
          <ul className="product-description">
            <li><span>Manufacturer: </span>{item.specs.manufacturer}</li>
            <li><span>Storage: </span>{item.specs.storage} GB</li>
            <li><span>OS: </span>{item.specs.os}</li>
            <li><span>Camera: </span>{item.specs.camera} Mpx</li>
          </ul>
          <button onClick={() => {
            this.props.actions.addToCart(item)
          }}>Buy Now!
          </button>
          <p className="product-price">{item.price}$</p>
        </div>
        <Modal open={open} onClose={this.onCloseModal} little >
          <h3>{item.name}</h3>
          <img src={item.image.large} className='largeImage' alt={item.name}/>
          <div>{item.description}</div>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart_stuff,
    filters: state.filter_stuff
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({addToCart, removeFromCart, removeAllFromCart}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductModal)