# React Demo Project

This project is a demo project that demonstrates how to use a set of common tools to build testable and maintainable projects. You will find a small GraphQl server that provides data to the client. The client is bootstarted with creat react app.

## Contents

- [Getting Started](https://github.com/weseldridge/React_Demo_App#user-content-getting-started)
- [React Client](https://github.com/weseldridge/React_Demo_App#user-content-react-client)
- [GraphQL Server](https://github.com/weseldridge/React_Demo_App#user-content-graphql-server)

## Getting Started

To get started clone the repo.

```
git clone https://github.com/weseldridge/React_Demo_App.git
```

Frist, we need to start the server. To do this open a new terminal window, and cd into the server directory and run `npm install` to install the dependencies. After npm is finished install the server's dependencies, run `npm run dev` to start the server.

```
cd server
npm install
npm run dev
```

Once the server is done booting we can run the client. Open another terminal window and cd into the client directory. Run `npm install` to install the client's dependencies. Once the deps are installed you can run `npm run start`. This will open a browser to the applications.
 
```
cd client
npm install
npm run start
```


## React Client

The client organizes its folders around feature areas instead of pages. It shows how to build your own set of components instead of using off the shelf libraries like Bootstrap, Material, Foundation, etc. Using Storybook the client has a style guide that is shared and used to communicate available components between developers. I tried to use HOCs as much as possible. This makes each component easier to test. 

Some of the libraries used to help build and test components are listed below.

- Styled Components
- Recompose
- Storybook
- 

## GraphQL Server

The server is configured with GraphiQL. It is available at [localhost:3001/graphiql](http://localhost:3001/graphiql).