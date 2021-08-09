import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'

import Header from './components/Header'
import Categories from './pages/Categories'
import CategoryDetails from './pages/CategoryDetails'
import Login from './pages/Login';
import Footer from './components/Footer'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            auth: {
                isError: false,
                isAuth: false,
                account: null
            }
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div id="header" className="section-mb">
                        <Header auth={this.state.auth} />
                    </div>
                    <div id="body-content" className="section-mb">
                        <Switch>
                            <Route path="/login" component={Login}></Route>
                            <Route exact path="/">
                                <Categories auth={this.state.auth} />
                            </Route>
                            <Route path="/:id" component={CategoryDetails}></Route>
                        </Switch>
                    </div>
                    <div id="footer">
                        <Footer />
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
