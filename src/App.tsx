import React, { useState } from "react";
import "./App.css";

function App() {
  const [ search, setSearch ] = useState<string>("react");
  const url = "https://api.github.com/graphql";

  const onChangeSearch = (newVal: string) => {
    if (newVal) {
      setSearch(newVal.trim().toLowerCase());
    };
  }

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        query: `query ($name:String!) {
          topic(name: $name) {
            relatedTopics(first: 10) {
                name
            },
            stargazerCount
          }
        }`,
        variables: {
          name: search
        }
      }),
      headers: {
        Authorization: `bearer ${
          process.env.REACT_APP_GITHUB_API_TOKEN
        }`,
      }
    }).then(res => {
      console.log("res", res.json());
      // do something with res
    }).catch(err => {
      console.log("err", err);
      // do something with err
    })
  }

  return (
    <main className="App">
      <header>
        <h1>Github topic explorer</h1>
      </header>
      <div className="search">
        <form
          id="search-form"
          onSubmit={onSubmit}
        >
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
          >
            Search
          </button>
        </form>
      </div>
      <div className="topics">
        <h2>Search results</h2>
      </div>
    </main>
  );
}

export default App;
