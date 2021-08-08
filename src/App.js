import Header from './components/Header'
import Categories from './components/pages/Categories'

function App() {
    return (
        <div className="App">
            <div className="Header">
                <Header />
            </div>
            <div className="body-content">
                <Categories />
            </div>
        </div>
    );
}

export default App;
