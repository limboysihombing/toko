import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../services/Context'
import { auth } from "../../firebase";

export const Header = (props) => {

  const context = useContext(Context)
  const [user, setUser] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        return (
          setUser(user)
        )
      } else {
        setUser(null)
      }
    });
  }, [])

  const logOut = (e) => {
    context.logOut()
    e.preventDefault();
  }

  const renderMenu = () => {

    if (user) {
      return (
        <li className="nav-item dropdown">
          <div className="nav-link dropdown-toggle p-0" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="/logo192.png" alt="..." width="35" className="rounded-circle" />
          </div>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <div className="dropdown-item"><strong>{user.displayName}</strong></div>
            <div className="dropdown-divider"></div>
            <Link className="dropdown-item" to="/profile">Profil</Link>
            <div className="dropdown-divider"></div>
            <button onClick={e => { logOut(e) }} className="dropdown-item btn">Log Out</button>
          </div>
        </li>
      )
    } else {
      return (
        <>
          <li className="nav-item py-2 mx-2">
            <Link className="nav-link btn btn-info my-1 text-white py-0 my-sm-0" to="/login">Login</Link>
          </li>
          <li className="nav-item py-2">
            <Link className="nav-link btn btn-outline-info my-1 py-0 my-sm-0" to="/register">Register</Link>
          </li>
        </>
      )
    }
  }


  return (
    <div className="navbar sticky-top shadow navbar-expand-sm bg-white navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Activity</Link>
        <button className="navbar-toggler border-0 p-0" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/store">Toko <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Keranjang <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Notifikasi <span className="sr-only">(current)</span></Link>
            </li>
            {renderMenu()}
          </ul>
        </div>
      </div>
    </div>

  )

}

