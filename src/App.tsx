import React, { useState } from 'react';
import './App.css';

function App() {
  const [ search, setSearch ] = useState<string>("");

  const onChangeSearch = (newVal: string) => {
    if (newVal) {
      setSearch(newVal.trim().toLowerCase());
    };
  }

  const onClickSearch = (ev: React.MouseEvent<HTMLButtonElement>) => {
    ev.preventDefault();
    console.log("click!", search)
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
            value={search}
          />
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
