import React, { useState, useEffect } from 'react'
import BoxItem from './BoxItem'

export default function Box(props) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [title] = useState("Kotak Anda")
  const [boxMessage, setBoxMessage] = useState(null)
  const [box, setBox] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setBox(props.box)
  }, [props.box])

  const addToCart = () => {
    setLoading(true)
    props.addToCart(cb => {
      if (cb.result) {
        //Reset Box
        props.resetBox()
        setBoxMessage(cb.msg)
        setLoading(false)
      }
    })
  }

  const renderBoxItem = () => {
    if (loading) {
      return <span>Loading ...</span>
    }

    if (props.box.length === 0) {

      if (boxMessage) {
        return (
          <>
            <div className="alert alert-success p-1 mb-1">{boxMessage}</div>
            <div className="alert alert-primary p-1 mb-1">Anda sudah bisa Check Out di halaman Keranjang</div>
            <div className="alert alert-primary p-1">Atau anda dapat masukkan item ke kotak baru</div>
          </>
        )
      }
      return <span> Kotak anda masih kosong</span>
    }
    else {
      let totalPrice = 0
      box.forEach(product => {
        totalPrice += product.data().price
      });
      if (isCollapsed) {
        return (
          <>
            <span className="bg-dark rounded text-white" id="box_icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z" />
              </svg>
            </span>
            <span className="ml-2">{props.box.length} item (Rp.{totalPrice})</span>
          </>
        )
      }
      else {
        return (
          <>
            <ul className="list-group list-group-flush">
              {box.map((product) => {
                return <BoxItem key={product.id} product={product} deleteItemFromBox={props.deleteItemFromBox} />
              })}
              <li className="list-group-item d-flex justify-content-between align-items-center px-0 pt-1 pb-1">
                <span>Total harga :</span>
                <span className="py-0 px-1 rounded text-success">Rp.{totalPrice}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-2">
                <button onClick={addToCart} className="btn btn-sm btn-outline-primary">Masukkan Ke Keranjang</button>
              </li>
            </ul>
          </>
        )
      }
    }
  }

  return (
    <div id="box">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="card border-success shadow">

              <div className="card-header p-2 bg-success text-white">
                <span id="box_title"><strong>{title}</strong></span>
                <button type="button" id="box_magnifier" onClick={(e) => {
                  if (isCollapsed) {
                    setIsCollapsed(false)
                  } else {
                    setIsCollapsed(true)
                  }
                }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-in-up-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5z" />
                    <path fillRule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0v-5z" />
                  </svg>
                </button>
              </div>
              <div className="card-body p-2">
                {renderBoxItem()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}