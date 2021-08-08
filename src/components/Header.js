import React from 'react';
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
class Header extends React.Component {
    render() {
        return (
            <div className="header-component">
                <nav className="navbar navbar-light bg-light fixed-top">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to={'/'}>
                            <div className="d-flex align-items-center flex-row desktop">
                                <img src={logo} alt="logo" />
                                <span>MealDB</span>
                            </div>
                        </Link>
                        <button className="btn btn-primary">Login</button>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header