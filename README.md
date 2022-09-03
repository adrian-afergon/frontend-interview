# Frontend Kata / Interview

👋 Hello developer! The proposal of this repository is having a scaffold with some scenarios where you can challenge your
front-end knowledge.

At the application you will find different folders with different elements:

- `__builders`: Here you can find some helpers for building your models
- `api`: You can place your api calls here. Don't worry about the use of fetch or axios, we have a http abstraction for it.
- `components`: The atoms and particles of the application are here. All elements here should be representational components.
- `context`: The application use two contexts. `AuthProvider` will handle the auth at the application, and `DataProvider` is a wrapper to libraries like `SWR` or `react-query`.
- `hooks`: The current existing hooks work as access layer to our operations. `useAuth` will help us with the auth process hiding the implementation. `useData` and `useDataMutation` will hide the implementation of our data querying system (cache).
- `models`: At this folder are place the data structures that our **core** application use.
- `pages`: The pages are the main routes of the application. All of them are working as containers of our representational components.

In order to simplify the component implementations we are using [MUI](https://mui.com/)

To have some backend for consume by `api`, we are using `json-server`.

Testing is so important for us, so every component has a test at the same folder. Of course some of them doesn't have it yet, because we expect to do it together.

## 💡 About the example

This example represent an application for handling a bus system. You can reach some endpoints for retrieving buses, brands and the status of those services.

For accessing to the dashboard you must be logged in, you can find the credentials at `/config.ts`.

## 👀 Some activities that you can do

It's up to you to implement whatever you want at the application, however here we will have some proposals for practicing:
- Add error state to the `AuthState` and to the `Login`.
- Create some Profile page and extend the current `AuthState`.
- Implement the `Logout` at header.
- Extract the conditions for authentication to a domain.
- Implement the view where you will see all the buses.
- Connect the `Create Bus` page with api, validating the form.
- Keep the `AuthState` also when you close and open the browser.

> 🚧 Some smells have been introduced at the application, so is up to you to remark it in some way or refactor if you consider it.

Remember, this is a Kata and the most important thing is to learn and have fun! 🎉

## 🚀 Turn up `Json-server`

For starting up the API, you must use `docker-compose up`. It will deploy the API at `http://localhost:3001`. If you decide to change the port at docker,
remember to  change the `./config.ts` in order to point to the correct API instead.

## ⚠️ Relevant Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
To learn React, check out the [React documentation](https://reactjs.org/).