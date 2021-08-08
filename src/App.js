import Header from './components/Header'
import CategoryLists from './components/CategoryLists'

function App() {
    return (
        <div className="App">
            <div className="Header">
                <Header />
            </div>
            <div className="body-content">
                <CategoryLists />
            </div>
        </div>
    );
}

export default App;
