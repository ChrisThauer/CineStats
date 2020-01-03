import React from 'react';
import axios from 'axios';

import Header from './header/header';
import MovieList from './movie-list/movie-list';

import './App.css';

const API_KEY = '9fbba37b812f1f41707d680aa5b7a390';

class App extends React.Component {
  state = {
    movies: []
  }

  componentDidMount() {
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&region=us`)
    .then(res => {
      console.log(res.data.results);
      this.setState({ movies: res.data.results});
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <MovieList movies={this.state.movies} listType="Now Playing" />
      </div>
    );
  }
}

export default App;
