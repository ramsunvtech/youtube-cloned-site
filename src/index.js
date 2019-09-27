import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from 'react-apollo';

import App from './App';
import store from './store';

// Pass your GraphQL endpoint to uri
// const client = new ApolloClient({ uri: 'https://nx9zvp49q7.lp.gql.zone/graphql' });

// const ApolloApp = AppComponent => (
//   <ApolloProvider client={client}>
//     <App />
//   </ApolloProvider>
// );

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('ytube-app')
);