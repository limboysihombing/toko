import { React } from 'react'

export default function CartItem(props) {

  return (
    <div>
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-1 h-100 justify-content-center">
            <input type="checkbox" name="" id="" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.products.data().products.length}</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
