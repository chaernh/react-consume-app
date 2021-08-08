import Header from './components/Header'
import MovieLists from './components/MovieLists'

function App() {
    return (
        <div className="App">
            <div className="Header">
                <Header />
            </div>
            <div className="body-content">
                <MovieLists />
            </div>
        </div>
    );
}

export default App;
