import React, { useState, useEffect } from "react";
import TopicCard from "./components/TopicCard";
import "./App.css";

interface ISearchResults {
  topic: string,
  stargazerCount: number,
  relatedTopics: string[]
}

function App() {
  const [ search, setSearch ] = useState<string>("react");
  const [ searchResults, setSearchResults ] = useState<ISearchResults>();
  const url = "https://api.github.com/graphql";

  const searchTopic = (topic: string) => {
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
          name: topic
        }
      }),
      headers: {
        Authorization: `bearer ${
          process.env.REACT_APP_GITHUB_API_TOKEN
        }`,
      }
    }).then(res => res.json()
    ).then(res => {
      const topicResults = res.data.topic;
      const relatedTopics = topicResults.relatedTopics.map((rt: any) => rt.name);
      const newResults = {
        topic: search,
        stargazerCount: topicResults.stargazerCount,
        relatedTopics
      }
      setSearchResults(newResults);
    }).catch(err => {
      console.log("err", err);
      // do something with err
    })
  }

  useEffect(() => {
    searchTopic(search);
  }, []);

  const onChangeSearch = (newVal: string) => {
    if (newVal) {
      setSearch(newVal.trim().toLowerCase());
    };
  }

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    searchTopic(search);
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
        <TopicCard topic={search} />
      </div>
    </main>
  );
}

export default App;
