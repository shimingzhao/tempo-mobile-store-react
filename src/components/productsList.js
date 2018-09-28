import React, {Component} from 'react'
import {connect} from 'react-redux'
import ProductModal from './singleProduct'

const isEmpty = (obj) => {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false
  }
  return true
}

class ProductsList extends Component {
  state = {
    _products: []
  }

  filterProducts = () => {
    let temp = []
    const filters = this.props.filters
    if (!isEmpty(filters)) {
      this.props.products.map(item => {
        if (!isEmpty(filters.manufacturer) && !isEmpty(filters.storage) && !isEmpty())
          filters.manufacturer.indexOf(item.specs.manufacturer) !== -1 ? temp.push(item)

        if (this.props.filters.manufacturer.indexOf(item.specs.manufacturer) !== -1) {
          temp.push(item)
        }
        else if (filters.storage.indexOf(item.specs.storage.toString()) !== -1) {
          temp.push(item)
        }
        else if (filters.os.indexOf(item.specs.os) !== -1) {
          temp.push(item)
        }
        else if (filters.camera.indexOf(item.specs.camera.toString()) !== -1) {
          temp.push(item)
        }
        return temp


      })
    }
    else temp = this.props.products
    return temp
  }

  render() {
    const {products} = this.props

    return (
      <div className="products-list">
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
    filters: state.filter_stuff
  }
}

export default connect(mapStateToProps)(ProductsList)