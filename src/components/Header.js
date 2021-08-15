import React from 'react';
import logo from '../logo.png'
import { Link } from 'react-router-dom'
class Header extends React.Component {
    render() {
        return (
            <div className="header-component container">
                <nav className="navbar navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={'/'}>
                            <div className="d-flex align-items-center flex-row desktop">
                                <img src={logo} alt="logo" width="40" />
                                <span className="m-2 my-0 desktop">MealDB</span>
                            </div>
                        </Link>
                        <Link to={'/login'}>
                            <button className="btn btn-primary">Log In</button>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header