import React, { useState, useEffect } from "react";
import "./App.css";

interface ISearchResults {
  topic: string,
  stargazerCount: number,
  relatedTopics: string[]
}

function App() {
  const [ search, setSearch ] = useState("react");
  const [ searchResults, setSearchResults ] = useState<ISearchResults>({topic: "", stargazerCount: 0, relatedTopics: [""]});
  const [ error, setError ] = useState<Error>();

  const searchTopic = (topic: string) => {
    setError(undefined);

    fetch("https://api.github.com/graphql", {
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
        topic,
        stargazerCount: topicResults.stargazerCount,
        relatedTopics
      }
      setSearchResults(newResults);
    }).catch(err => {
      setError(err);
    })
  }

  useEffect(() => {
    searchTopic(search);
  }, []);

  const onChangeSearch = (newVal: string) => {
    setSearch(newVal.trim().toLowerCase());
  }

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    searchTopic(search);
  }

  const onClickRelatedTopic = (ev: React.MouseEvent<HTMLButtonElement>, topic: string) => {
    ev.preventDefault();
    setSearch(topic);
    searchTopic(topic);
  }

  const renderResults = (): React.ReactNode => {
    if (error) {
      return (
        <>
          <p className="error-message">Oh no! Something broke!</p>
          <p>{error.name}</p>
          <p>{error.message}</p>
        </>
      )
    }

    return (
      <>
        <h2>Search results</h2>
        <p className="search-results-subtitle">Topic:</p>
        <p>{searchResults.topic}</p>
        <p className="search-results-subtitle">Stargazers:</p>
        <p>{searchResults.stargazerCount > 0 ? searchResults.stargazerCount : "No one cares :("}</p>
        <p className="search-results-subtitle">Related topics:</p>
        {
          searchResults.relatedTopics.length > 0 ?
            (
              searchResults.relatedTopics.map((rt, i) => 
                <button
                  key={i}
                  className="related-topics-btn"
                  aria-label={`Click button to search for ${rt}`}
                  onClick={ev => onClickRelatedTopic(ev, rt)}
                >
                  {rt}
                </button>
              )
            ) :
            (
              <p>No related topics because it's so unique!</p>
            )
        }
      </>
    )
  }

  return (
    <main className="App">
      <header>
        <h1>Github topic explorer</h1>
      </header>
      <hr />
      <div className="search-bar">
        <form
          onSubmit={onSubmit}
          role="search"
        >
          <label
            htmlFor="search-bar-input"
            className="search-bar-label"
          >
            Search Github for any topic!
          </label>
          <input
            id="search-bar-input"
            type="search"
            placeholder="React"
            onChange={ev => onChangeSearch(ev.target.value)}
            value={search}
          />
          <button
            type="submit"
            disabled={!!!search.length}
          >
            Search
          </button>
        </form>
      </div>
      <hr />
      <div className="search-results">
        {renderResults()}
      </div>
    </main>
  );
}

export default App;
