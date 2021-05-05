import React, { useContext, useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Context } from '../services/Context'
import { auth } from "../firebase";

export const Login = (props) => {

  const context = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");


  const signIn = (email, password) => {
    console.log("budi")
    auth.signInWithEmailAndPassword(email, password).then(userCredential => {
      context.logIn()
    }).catch(error => {
      console.log(error.message)
      setMessage("Email atau password anda salah.")
    })
  }

  useEffect(() => {

    document.title = "Login"

  }, [props.from])

  const onSubmit = (e) => {

    signIn(email, password)
    e.preventDefault();
  }

  const renderMessage = () => {
    if (message) {
      return (
        <div className="alert alert-danger">{message}</div>
      )
    }
  }

  if (context.isLoggedIn) {
    if (props.location.state) {
      return <Redirect to={{ pathname: `${props.location.state.from.pathname}` }} />;
    }
    return <Redirect to={{ pathname: "/", state: { msg: "Anda harus Logout terlebih dahulu untuk beralih akun." } }} />;
  }

  return (
    <div id="login">
      <div className="container bg-white mt-4 pt-2">
        <div className="row">
          <div className="col-sm-0 col-md-3"></div>
          <div className="col-sm-12 col-md-6">
            <div className="card">
              <div className="card-body">
                <h4 className="text-center">Login</h4>

                <form onSubmit={e => { onSubmit(e) }}>
                  <div className="form-group">
                    <label htmlFor="txtEmail">Email Address</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} value={email} autoComplete="no" className="form-control" id="txtEmail" aria-describedby="emailHelp" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="txtPass">Password</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control" id="txtPass" required />
                  </div>
                  {renderMessage()}
                  <input type="submit" className="btn btn-primary" value="Masuk" />
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-0 col-md-3"></div>
        </div>
      </div>
    </div>
  )

}

export default Login
