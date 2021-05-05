import React, { Component } from 'react'

export class Register extends Component {

  state = {
    name: '',
    email: '',
    phone: '',
    password: ''
  }

  onNameChange = (e) => {
    this.setState({ 'name': e.target.value })
  }
  onEmailChange = (e) => {
    this.setState({ 'email': e.target.value })
  }
  onPhoneChange = (e) => {
    this.setState({ 'phone': e.target.value })
  }
  onPasswordChange = (e) => {
    this.setState({ 'password': e.target.value })
  }
  onSubmit = (e) => {
    this.props.register(this.state)
    e.preventDefault();
  }

  render() {
    return (
      <div id="register">
        <div className="container mt-3 bg-white pt-2">
          <div className="row">
            <div className="col-sm-0 col-md-2"></div>
            <div className="col-sm-12 col-md-8">
              <div className="card">
                <div className="card-body">

                  <h3 className="text-center">Mendaftar Akun Baru</h3>
                  <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                      <label htmlFor="validationDefault01">Nama Lengkap*</label>
                      <input onChange={this.onNameChange} type="text" className="form-control" id="textName" autocomplete="off" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="validationDefault01">Alamat Email*</label>
                      <input onChange={this.onEmailChange} type="text" className="form-control" id="textEmail" autocomplete="off" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="validationDefault01">Nomor Hp. (Whatsapp)*</label>
                      <input onChange={this.onPhoneChange} type="text" className="form-control" id="textPhone" autocomplete="off" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="validationDefault01">Password*</label>
                      <input onChange={this.onPasswordChange} type="password" className="form-control" id="textPassword" required />
                    </div>
                    <button className="btn btn-primary" type="submit">Kirim Data</button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-sm-0 col-md-2"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Register
