import { React } from 'react'

export default function ProducItem(props) {

  const onClick = () => {
    props.addToBox(props.data)
  }
  return (
    <div className="col-md-3 col-sm-4 col-lg-2 col-6 mb-4">
      <div className="card border-0">
        <img src="/img/gift_box.png" className="card-img-top" alt="..." />
        <div className="card-img-overlay p-0">
          <div className="d-flex h-100 align-items-end">
            <div className="px-2 py-1 w-100" style={{ background: 'rgba(52, 52, 52, 0.3)' }} >
              <h6 className="card-title mb-0 text-white"><strong>{props.data.data().name}</strong></h6>
              <p className="small m-0 text-white">Rp.{props.data.data().price}</p>
            </div>
            <button className="btn btn-primary position-relative" onClick={onClick}>+</button>
          </div>
        </div>
      </div>
    </div>
  )
}
