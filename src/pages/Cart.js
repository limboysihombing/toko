import { useEffect, useState } from 'react'
import CartItem from '../components/cart/CartItem'

export const Cart = (props) => {
  // const authContext = useContext(AuthContext)
  const [cart, setCart] = useState(null);


  useEffect(() => {
    document.title = 'Keranjang';
    let checkCart = () => {

      if (!props.cart) {
        props.loadCart()

      }
    }
    checkCart()
    setCart(props.cart)

  }, [props.cart, props])

  const renderMessage = () => {
    if (props.location.state && props.location.state.msg) {
      return (

        <div className="alert alert-warning alert-dismissible fade show" role="alert">
          <strong>Warning!</strong>  {props.location.state.msg}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>

      )
    }
  }
  const renderCart = () => {
    if (cart === null) {
      return <div className="col-12">Loding...</div>
    }
    if (cart.length > 0) {

      return cart.map((p) => (
        <CartItem key={p.id} products={p} />

      ))

    } else {
      return (
        <div className="col-12">Belum ada Data</div>
      )
    }
  }


  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          {renderMessage()}
        </div>
      </div>
      <div className="row">
        <div className="col-12 mb-4"><h4>Keranjang</h4></div>
        <div className="col-12">

          {renderCart()}
        </div>
      </div>
    </div>

  )

}

export default Cart