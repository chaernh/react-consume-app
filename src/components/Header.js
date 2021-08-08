import React from 'react';
import { Link } from 'react-router-dom'
class Header extends React.Component {
    render() {
        return (
            <div className="header-component">
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                    <Link className="navbar-brand" to={'/'}>MealDB</Link>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header