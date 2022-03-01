import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloProvider,
} from '@apollo/client';

import Home from './pages/Home';
import Gallery from '.pages/Gallery';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';

function App() {
  return (
    <ApolloProvider>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/gallery" component={Gallery} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/products/:id" component={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
