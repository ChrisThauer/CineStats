import React from 'react';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import Header from './header/header';
import MoviesPage from '../pages/movies-page/movies-page';

import './App.css';

const API_KEY = '9fbba37b812f1f41707d680aa5b7a390';

class App extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=us`)
    .then(res => {
      this.setState({ movies: res.data.results});
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact />
          <Route path="/movies">
            <MoviesPage movies={this.state.movies} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
