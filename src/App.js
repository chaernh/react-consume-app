import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Categories from './components/pages/Categories'
import CategoryDetails from './components/pages/CategoryDetails'

function App() {
    return (
        <Router>
            <div className="App">
                <div className="Header">
                    <Header />
                </div>
                <div className="body-content">
                    <Switch>
                        <Route exact path="/">
                            <Categories />
                        </Route>
                        <Route path="/:id" children={ <CategoryDetails /> }></Route>

                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
