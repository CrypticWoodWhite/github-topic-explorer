# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth. There should also be Search capability to search/query on any term or topic. You should implement best practices with the UI. 

To interact with the Github GraphQL API you'll need to have
  * a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
  * You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.


## Evaluation:

* We will pay particular attention to the way the code is organized, and to the overall readability
* Unit tests will be greatly appreciated
* Design will be ignored, however usability and accessibility will be taken into consideration
* Remember to update this README with instructions on how to install, run and test your application
* Your first goal is to have a working app, but feel free to improve the application however you see fit
* We hope that you can complete the assignment within 2 hours but don't set any time constraints
* Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

* This project was bootstrapped using [Create React App](https://create-react-app.dev/) in order to minimize time spent on configuration.
* Typescript was chosen over Javascript to eliminate type-related errors and minimize compile-time errors.

### How to run app

1. [Create a Github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) if you do not have one yet. Make sure you have the following scopes:
```
repo
repo:status
repo_deployment
public_repo
read:org
read:public_key
read:repo_hook
user
read:gpg_key
```
  1. Create a `.env.local` file in the root of your repository, and place your token there:
```
REACT_APP_GITHUB_API_TOKEN=yourtoken
```

2. Install dependencies

```
npm i
```

3. Run the app! It should open in your browser at `localhost:3000`. The page will reload when you make changes. You may also see any lint errors in the console.
```
npm run start
```

### How to test app
```npm run test```

### Future Improvements

Feel free to elaborate on how you would improve any of the following topics 

* Code Structuring:

* Refactoring:

* Additional Features:

