import React, { Fragment } from 'react';
import { Route, Link } from "react-router-dom";

// Containers.
import Home from './containers/Home';
// const HomePage = React.lazy(() => import Home from './containers/Home');
import Upload from './containers/Upload';

// Components.
import Header from './components/Header/';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/upload/" component={Upload} />
    </Fragment>
  );
}

export default App;