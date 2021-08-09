import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Categories from './pages/Categories'
import CategoryDetails from './pages/CategoryDetails'
import Login from './pages/Login';
import Footer from './components/Footer'

function App() {
    return (
        <Router>
            <div className="App">
                <div id="header" className="section-mb">
                    <Header />
                </div>
                <div id="body-content" className="section-mb">
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route exact path="/" component={Categories}></Route>
                        <Route path="/:id" component={CategoryDetails}></Route>
                    </Switch>
                </div>
                <div id="footer">
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
