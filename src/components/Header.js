import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import Categories from './pages/Categories';

class Header extends React.Component {
    render() {
        return (
            <Router>
                <div className="header-component">
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                        <Link className="navbar-brand" to={'/categories'}>MealDB</Link>
                        </div>
                    </nav>
                </div>
                <Switch>
                    <Route exact path='/categories' component={ Categories } />
                </Switch>
            </Router>
        )
    }
}

export default Header