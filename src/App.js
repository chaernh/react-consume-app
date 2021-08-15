import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react'
import { AuthProvider } from './contexts/AuthContext'

import Header from './components/Header'
import Footer from './components/Footer'

import Categories from './pages/Categories'
import CategoryDetails from './pages/CategoryDetails'
import Login from './pages/Login';
import Register from './pages/Register';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <AuthProvider>
                <Router>
                    <div className="App">
                        <div id="header" className="section-mb">
                            <Header />
                        </div>
                        <div id="body-content" className="section-mb">
                            <Switch>
                                <Route path="/login" component={Login}></Route>
                                <Route path="/register" component={Register}></Route>
                                <Route exact path="/" component={Categories}></Route>
                                <Route path="/:id" component={CategoryDetails}></Route>
                            </Switch>
                        </div>
                        <div id="footer">
                            <Footer />
                        </div>
                    </div>
                </Router>
            </AuthProvider>
        )
    }
}

export default App;
