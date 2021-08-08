import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import CategoryLists from './CategoryLists';

class Header extends React.Component {
    render() {
        return (
            <Router>
                <div className="header-component">
                    <nav class="navbar navbar-light bg-light">
                        <div class="container-fluid">
                        <Link class="navbar-brand" to={'/category'}>Navbar</Link>
                        </div>
                    </nav>
                </div>
                <Switch>
                    <Route exact path='/category' component={ CategoryLists } />
                </Switch>
            </Router>
        )
    }
}

export default Header