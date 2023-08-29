import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchForm from './components/Search/SearchForm';
import SearchResult from './components/Search/SearchResult';
import './assets/main.css'

function App() {
  return (
    <Router>
      <div className="App">
        <h1>GitHub Search API</h1>
        <SearchForm />
        <Switch>
          <Route path="/" component={SearchResult} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
