import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Spinner, } from 'react-bootstrap'
import logo from '../logo.png'
import { useAuth } from '../contexts/AuthContext'

const Register = () => {
    const email = useRef()
    const password = useRef()
    const passwordConfirm = useRef()
    const { signup } = useAuth()
    const error = useRef()

    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        if (password.current.value !== passwordConfirm.current.value) 
            console.log(error.current)

        try {
            error.current = ''
            setLoading(true)
            signup(email.current.value, password.current.value)
        } catch {
            error.current = 'Failed to create an account'
        }
        setLoading(false)
    }

    return (
        <div className="register-component container">
            <div className="row mt-3">
                <div className="card card-login">
                    <div className="card-body text-center">
                        <div className="logo-wrapper">
                            <img src={logo} alt="logo" width="100" className="text-center"  />
                        </div>
                        <p>Enter your credential</p>
                        <form onSubmit={ handleSubmit }>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Email"ref={email} required></input>
                            </div>
                            <div className="mb-3">
                                <input type="password" autoComplete="off" className="form-control" id="password" placeholder="Password" ref={password} required></input>
                            </div>
                            <div className="mb-3">
                                <input type="password" autoComplete="off" className="form-control" id="password-confirm" placeholder="Confirm Password" ref={passwordConfirm} required></input>
                            </div>
                            {
                                loading ?
                                <button className="btn btn-primary w-100" disabled>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <Spinner animation="border" variant="light" size="sm" className="mr-10px" />
                                        <span>Sign Up</span>
                                    </div>
                                </button> :
                                <button className="btn btn-primary w-100">
                                    Sign Up
                                </button>
                            }
                        </form>
                        <hr />
                        Back to <Link to="/login" className="text-decoration-none">login page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register