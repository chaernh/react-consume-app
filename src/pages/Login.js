import React from 'react';

import logo from '../logo.png'

class Login extends React.Component {
    render() {
        return (
            <div className="login-component container">
                <div className="row mt-3">
                    <div className="card card-login">
                        <div className="card-body text-center">
                            <div className="logo-wrapper">
                                <img src={logo} alt="logo" width="100" className="text-center"  />
                            </div>
                            <p>Log in for see details.</p>
                            <form>
                                <div className="mb-3">
                                    <input type="email" className="form-control" id="email" placeholder="Email"></input>
                                </div>
                                <div className="mb-3">
                                    <input type="password" autoComplete="off" className="form-control" id="password" placeholder="Password"></input>
                                </div>
                                <button className="btn btn-primary w-100">Login</button>
                                <hr />
                                <p>Or</p>
                                <button className="btn btn-outline-primary">Login with Google</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login