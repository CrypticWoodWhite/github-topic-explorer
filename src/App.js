import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main className="App">
      <header className="App-header">
        Github topic explorer
      </header>
      <div className="search-bar">
        <label for="search-bar-input">Search</label>
        <input id="search-bar-input" type="text" placeholder="React"></input>
      </div>
    </main>
  );
}

export default App;
