import React, { useState } from 'react';
import './App.css';

function App() {
  const [ search, setSearch ] = useState<string>("");

  const onChangeSearch = (newVal: string) => {
    if (newVal) {
      setSearch(newVal.trim().toLowerCase());
    };
  }

  const onClickSearch = () => {
    console.log("click!")
  }

  return (
    <main className="App">
      <header>
        Github topic explorer
      </header>
      <div className="search">
        <form id="search-form">
          <label htmlFor="search-bar-input">Search</label>
          <input
            id="search-bar-input"
            type="search"
            placeholder="React"
            onChange={ev => onChangeSearch(ev.target.value)}
          >
            {search}
          </input>
          <button
            type="submit"
            onClick={onClickSearch}
          >
            Search
          </button>
        </form>
      </div>
      <div className="topics">

      </div>
    </main>
  );
}

export default App;
