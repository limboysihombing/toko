import { useState, useEffect } from 'react'
// import { useParams } from 'react-router-dom';
// import { Context } from '../services/AuthContext'
import ProductItem from '../components/store/ProductItem'
import Box from '../components/store/Box'

export const Store = (props) => {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    document.title = 'Toko';
    let checkProduct = () => {
      if (props.product == null) {
        props.loadProduct()
      }
    }
    checkProduct()
    setProduct(props.product)

  }, [props.product, props])

  const renderMessage = () => {
    if (props.msg) {
      return (
        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Warning!</strong>
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      )
    }
  }

  const renderProduct = () => {
    if (product === null) {
      return <div className="col-12">Loding...</div>
    }
    if (product.length > 0) {
      return props.product.map((doc) => (
        <ProductItem key={doc.id} data={doc} addToBox={props.addToBox} />
      ))
    } else {
      return (
        <div className="col-12">Data tidak tersedia</div>
      )
    }
  }

  return (
    <div id="store" style={{ width: '100%', height: '100%' }}>
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            {renderMessage()}
          </div>
        </div>
        <div className="row">
          <div className="col-12 mb-2"><h4>Toko</h4></div>
          <div className="col-12 mb-2">
            <ul className="nav border-bottom border-top overflow-auto">
              <li className="nav-item">
                <span className="nav-link active pl-0 border-right" href="#">Kategory</span>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#fds">Active</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#afsd">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#sdf">Link</a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#afds" tabIndex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
          {renderProduct()}
        </div>
      </div>
      <Box box={props.box} deleteItemFromBox={props.deleteItemFromBox} resetBox={props.resetBox} addToCart={props.addToCart} />
    </div>
  )

}

export default Store