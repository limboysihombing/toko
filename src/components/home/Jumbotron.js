import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div className="jumbotron text-gray-900" id="jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Hello, world!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-4" />
                <p>Ayo pilih kombinasi yang kau suka</p>
                <Link className="btn btn-icon-split rounded-sm btn-dark" to="/store">
                  <span className="text">Pergi Ke Toko  &nbsp; ❭</span>
                </Link>

              </div>
              <div className="col-md-6">

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
