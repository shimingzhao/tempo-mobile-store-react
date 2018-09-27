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

class HeaderBar extends Component {
  state = {
    open: false,
    itemNumber: 0
  }

  onOpenModal = () => {
    this.setState({open: true})
  }

  onCloseModal = () => {
    this.setState({open: false})
  }

  componentWillUpdate (nextProps) {
    if (nextProps.cart !== this.props.cart) {
      let number = 0
      nextProps.cart.map(item => {
        number += item.quantity
      })
      this.setState({itemNumber: number})
    }
  }

  render () {
    const {cart} = this.props
    const {open, itemNumber} = this.state
    console.log(itemNumber)
    let total = 0
    return (
      <header className="compact">
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
          <div><h1><a href="#">Tempo Mobile Store</a></h1></div>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center', paddingRight: '20px'}}>
              <a onClick={this.onOpenModal}>
                Shopping Cart: {itemNumber} items</a></div>
            <h2 className="tempo"><a href="http://tempo.io/">Back to Tempo's website</a></h2>
          </div>
        </div>
        <Modal open={open} onClose={this.onCloseModal} little>
          <h3>Shopping Cart</h3>
          <div style={{paddingTop: '20px'}}>
            {
              !isEmpty(cart) ?
                cart.map(item => {
                  total += (item.price * item.quantity)
                  return (
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '600px',
                        paddingTop: '10px'
                      }}
                      key={item.id}>
                      <div><img src={item.image.small} height='35px'/></div>
                      <div>{item.name}</div>
                      <div>{item.quantity}</div>
                      <div>$ {item.price.toFixed(2)}</div>
                    </div>
                  )
                })
                :
                ''}
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>Total Price:{total} </div>
          </div>

        </Modal>
      </header>
    )
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart_stuff.cart
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({addToCart, removeFromCart, removeAllFromCart}, dispatch),
  dispatch: dispatch
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar)