import React, { useRef, useState} from 'react';
import { Link } from 'react-router-dom'
// import { auth, provider } from '../config/firebase'
import logo from '../logo.png'
import { Spinner } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'

const Login = () => {
    const email = useRef()
    const password = useRef()
    const { signin } = useAuth()
    const error = useRef()
    const [loading, setLoading] = useState(false)


    function handleSubmit(e) {
        e.preventDefault()

        try {
            error.current = ''
            setLoading(true)
            signin(email.current.value, password.current.value)
        } catch {
            error.current = 'Failed to logged you in, please try again later'
        }
        setLoading(false)
    }

    return (
        <div className="login-component container">
            <div className="row mt-3">
                <div className="card card-login">
                    <div className="card-body text-center">
                        <div className="logo-wrapper">
                            <img src={logo} alt="logo" width="100" className="text-center"  />
                        </div>
                        <p>Log in for see details</p>
                        <form onClick={ handleSubmit }>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Email" ref={email} required></input>
                            </div>
                            <div className="mb-3">
                                <input type="password" autoComplete="off" className="form-control" id="password" placeholder="Password" ref={password} required></input>
                            </div>
                            {
                                loading ?
                                <button className="btn btn-primary w-100" disabled>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Spinner animation="border" variant="light" size="sm" className="mr-10px" />
                                        <span>Log in</span>
                                    </div>
                                </button> :
                                <button className="btn btn-primary w-100" type="submit">Log In</button>
                            }
                            <hr />
                            <p>Or</p>
                            <button className="btn btn-outline-primary">Login with Google</button>
                        </form>
                        <hr />
                        <p>Doesn't have an account? <Link to="/register" className="text-decoration-none">Sign up</Link> here.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login