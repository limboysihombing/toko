import React, { Component } from 'react'

export default class PromoBuilder extends Component {
  render() {
    return (
      <div id="promo_builder" className="pb-4 mb-4">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="p-0 font-weight-bold">Dipilih Untuk Anda</h4>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card-list">
                <img src="/img/gift_box.png" className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <a href="/" className="btn btn-sm btn-outline-dark">Lihat Isi Kotak</a>
                </div>
              </div>
            </div>




          </div>
          <hr className="my-4" />
        </div>
      </div>

    )
  }
}